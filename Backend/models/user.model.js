const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be atleast 3 character long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    }, 

})

// Define a method to generate authentication token for the user
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

// Define a method to compare the password entered by the user with the password stored in the database
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

// Define a method to hash the password before saving it to the database
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}


const userModel = mongoose.model('User', userSchema);
module.exports = userModel;