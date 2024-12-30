const { hash } = require('bcrypt');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    // Validate the request body for any errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // If there are validation errors, return a 400 status with the errors
        return res.status(400).json({ error: errors.array() });
    }  
    
    // Destructure the required fields from the request body
    const { fullname, email, password, vehicle } = req.body;
    
    // Check if a captain with the provided email already exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if(isCaptainAlreadyExist){
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