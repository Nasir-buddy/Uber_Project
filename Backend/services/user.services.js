const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    // checking if anything is missing then throw on error
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }
    // if error is not thrown then creating a user with the provided data.
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname,
        }, 
        email,
        password,
    })

    return user;
}