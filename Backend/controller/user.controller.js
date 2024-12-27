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