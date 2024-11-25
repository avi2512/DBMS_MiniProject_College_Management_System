const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/college', { autoIndex: false });
        return console.log("database connected")
    } catch (error) {
        console.log(`Error: $ { error }`)

    }
}

module.exports = connectDB;