const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

// Middleware to authenticate the user
module.exports.authUser = async (req, res, next) => {
    // getting the token from cookies if not then from header 
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // checking the token if not available then return with 401 status
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlackListed = await userModel.findOne({ token: token });
    if (isBlackListed) {
        res.status(401).json({ message: "unauthorized from blacklist token" });
    }
    // if token is available then we decoding the token 
    try {
        // verifing the token with jwt token 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // then finding the user with that decoded token in db
        const user = await userModel.findById(decoded._id);
        // setting the found user into the req.user
        req.user = user;
        // returning the found user to to route 
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized from decoded data' });
    }
}

// Middleware to authenticate captains
module.exports.authCaptain = async (req, res, next) => {
    // getting the token from cookies if not then from header 
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    // checking the token if not available then return with 401 status
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // checking the token is blacklisted or not
    const isBlackListed = await blacklistTokenModel.findOne({ token: token });
    if (isBlackListed) {
        res.status(401).json({ message: "unauthorized from blacklist token" });
    }
    // if token is available then we decoding the token 
    try {
        // verifing the token with jwt token 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // then finding the user with that decoded token in db
        const captain = await captainModel.findById(decoded._id);
        // setting the found user into the req.user
        req.captain = captain;
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized from decoded data' });
    }
}