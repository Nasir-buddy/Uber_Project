const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller');   
const authMiddleware = require('../middleware/auth.middleware')
// register user route to create the new user.
router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userController.registerUser);

// login user route to login the existing user
router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 6 }).withMessage('Password is not correct.'),
], userController.loginUser);

// user profile route for user page
router.get('/profile',authMiddleware.authUser, userController.getUserProfile);
module.exports = router;