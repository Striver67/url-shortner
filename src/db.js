const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/short-url");
        console.log("Connected to MONGODB ...")
    } catch (err) {
        console.error('Error connecting to database : ', err);
    }
}

module.exports = connectDB;