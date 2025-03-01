const express = require('express');
const router = express.Router();
const { getAddressCordinate } = require('../services/maps.service');
const authMiddleware = require('../middleware/auth.middleware');
const mapController = require('../controller/map.controller');
const { query } = require('express-validator');
const { getCoordinates } = require('../controller/map.controller');

router.get('/getCoordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser, getCoordinates, async (req, res) => {
    });
module.exports = router;