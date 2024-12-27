const mongoose = require('mongoose');

function connectToDb() {
    // connecting to the database.
    mongoose.connect(process.env.DB_CONNECTION)
    .then(()=>{console.log("connected to db");
    })
    .catch((err)=>{console.log("error in connecting to db", err);
    })
}

module.exports = connectToDb;