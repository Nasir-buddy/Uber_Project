const userModel = require('../models/user.model');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator');
module.exports.registerUser = async (req, res, next) => {
    // validating the request body
    const errors = validationResult(req);
    // if found any error then return the error.
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // extracting the data from the request body 
    const { fullname, email, password } = req.body;
    //  hashing the password 
    const hashedPassword = await userModel.hashPassword(password);
    // creating a user with the given data
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })
    // creating the token for the user
    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
}

module.exports.loginUser = async (req, res, next) => {
    // validating the request body
    const errors = validationResult(req);
    // if found any error then return the error.
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // extracting the data from the request body 
    const { email, password } = req.body;
    // finding the user from db (.select password is telling that we have to select the use pasword object.)
    const user = await userModel.findOne({ email }).select('+password');
    // checking the user is valid or not 
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
    }
    // checking the user is valid or not for password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password ' });
    }
    // creating the token for the useru
    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, user });
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}