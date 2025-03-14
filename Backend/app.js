const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/user.routes');
const captainRoute = require('./routes/captain.routes');
const mapsRoutes = require('./routes/serpMap.routes');
connectToDb();

/**
 * Middleware to enable Cross-Origin Resource Sharing (CORS).
 * This allows the server to accept requests from different origins.
 */
app.use(cors());
app.use(express.json());

// Middleware to parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

app.get('/',(req, res)=>{
    res.send('Hello World');
});
// register user route to create user
app.use('/user', userRoute);

// captains routes
app.use('/captains', captainRoute);

// maps routes
app.use('/maps', mapsRoutes);

module.exports = app;