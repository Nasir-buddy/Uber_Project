const express = require('express'); // Import the express module
const router = express(); // Create a new router object
const { body } = require('express-validator'); // Import the body function from express-validator
const captainController = require('../controller/captain.controller'); // Import the captain controller
const authMiddleware = require('../middleware/auth.middleware'); // Import the auth middleware
// Define the route for registering a new captain
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email.'), // Validate that the email is in the correct format
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 length.'), // Validate that the first name is at least 3 characters long
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 digit long.'), // Validate that the password is at least 6 characters long
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 length long'), // Validate that the vehicle color is at least 3 characters long
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 lenth long.'), // Validate that the vehicle plate is at least 3 characters long
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Vehicle.') // Validate that the vehicle type is one of the allowed values
], captainController.registerCaptain); // Call the registerCaptain function from the captain controller

// Define the route for logging in a captain
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'), // Validate that the email is in the correct format
    body('password').isLength({ min: 6 }).withMessage('Password is must be greater then 6 digit') // Validate that the password is at least 6 characters long
], captainController.logincaptain); // Call the logincaptain function from the captain controller


// profile route for captain page
router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

// // logout route for captain
router.get('/logout', authMiddleware.authCaptain, captainController.logOutCaptain);
module.exports = router; // Export the router object