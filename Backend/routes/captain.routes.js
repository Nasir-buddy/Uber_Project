const express = require('express');
const router = express();
const { body } = require('express-validator');
const captainController = require('../controller/captain.controller');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email.'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 length.'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 digit long.'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 length long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 lenth long.'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid Vehicle.')
], captainController.registerCaptain);



module.exports = router;