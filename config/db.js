const mongoose = require('mongoose');
const colors = require('colors');




const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`.bgGreen.white);
} catch (err) {
    console.error(`Error: ${err.message}`.bgRed.white);
    }
}

module.exports = connectDB;