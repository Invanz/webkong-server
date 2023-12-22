const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    return connection;
};

module.exports = connectDB;