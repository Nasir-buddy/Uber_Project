const userModel = require('../models/user.model');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    // validating the request body
    const errors = validationResult(req);
    // if found any error then return the error.
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // extracting the data from the request body.
    const { fullname, email, password } = req.body;

    // finding the user if already exist.
    const isUserAlreadyExist = await userModel.findOne({ email });
    // checking the user if it is exist or not.
    if(isUserAlreadyExist){
        return res.status(400).json({ message: 'User already exist. '});
    }
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

// Get user profile function
module.exports.getUserProfile = async (req, res, next) => {
    // Return user details in response
    res.status(200).json(req.user);
}

// Logout user function
module.exports.logoutUser = async (req, res, next) => {
    // Clear token cookie
    res.clearCookie('token');
    // Get token from cookies or authorization header
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    // Add token to blacklist
    await blacklistTokenModel.create({ token });
    
    // Return logout success message
    res.status(200).json({ message: 'Logged out' });
}