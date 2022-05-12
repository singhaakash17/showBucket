// config/db.js
require('dotenv').config();
const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err:any) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;