const mapsService = require('../services/maps.service');
const { validationResult } = require('express-validator');
module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        console.log("address in controller", req.query);
        
        const { address } = req.query;
        const coordinates = await mapsService.getAddressCordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.error('Error getting coordinates:', error);
        res.status(404).json({ message: 'coordinate not found' });
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        const { origin, destination } = req.query;
        const distanceTime = await mapsService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);
    } catch (error) {
        console.error('Error getting distance and time:', error);
        res.status(404).json({ message: 'distance and time not found' });
    }
}