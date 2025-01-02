const { hash } = require('bcrypt');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res, next) => {
    // Validate the request body for any errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If there are validation errors, return a 400 status with the errors
        return res.status(400).json({ error: errors.array() });
    }

    // Destructure the required fields from the request body
    const { fullname, email, password, vehicle } = req.body;

    // Check if a captain with the provided email already exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        // If captain already exists, return a 400 status with an error message
        return res.status(400).json({ message: 'Captain already exist.' });
    }

    // Hash the provided password
    const hashedPassword = await captainModel.hashPassword(password);

    // Create a new captain with the provided details
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    // Generate an authentication token for the new captain
    const token = captain.generateAuthToken();

    // Return a 201 status with the token and captain details
    res.status(201).json({ token, captain });
}

// Log in captain function
module.exports.logincaptain = async (req, res, next) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors) {
        // Return error if validation fails
        return res.status(401).json({ errors: errors.array() });
    }
    // Destructure email and password from request body
    const { email, password } = req.body;

    // Find captain by email and include password in the result
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        // Return error if captain not found
        return res.status(401).json({ message: 'Invalid email or password ' });
    }
    // Compare provided password with stored password
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        // Return error if password does not match
        return res.status(401).json({ message: 'Invalid email or password ' });
    }
    // Generate authentication token
    const token = captain.generateAuthToken();
    // Set token in cookies
    res.cookie('token', token);
    // Return token and captain details in response
    res.status(200).json({ token, captain });
}

// Get captain profile function
module.exports.getCaptainProfile = async (req, res, next) => {
    try {
        // Return captain details in response
        res.status(200).json({ captain: req.captain });
    } catch (error) {
        // Log error if any
        console.log("error in getCaptainProfile", error);
    }
}

// Export the logOutCaptain function
module.exports.logOutCaptain = async (req, res, next) => {
    // Retrieve the token from cookies or authorization header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    // Add the token to the blacklist to invalidate it
    await blacklistTokenModel.create({ token });
    
    // Clear the token cookie
    res.clearCookie('token');
    
    // Send a success response
    res.status(200).json({ message: 'Loggout Successfully' });
}