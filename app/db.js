const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose = () => {
    mongoose.set("strictQuery", false);
    // Change to local MongoDB URI
    mongoose.connect('mongodb://localhost:27017/habit', { useNewUrlParser: true })
    .then(() => console.log("Connected to local MongoDB"))
    .catch((e) => console.log("Failed to connect to local MongoDB", e));
}
