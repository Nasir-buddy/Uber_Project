const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const captaiScheema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 character long.'],
        },
        lastname: {
            type: String,
            minlength: [3, 'last name must be at least 3 character long.'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\S+$/, 'Please enter a valid email. ']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketID: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 character long.']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be atleast 3 character long.']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motercycle', 'auto'],
        },
    },
    location: {
        lat: {
            type: Number,
        },
        lon: {
            type: Number,
        }
    }
})

captaiScheema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captaiScheema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captaiScheema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captaiScheema);

module.exports = captainModel;