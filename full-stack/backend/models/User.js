const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: [20, "name max length is 20"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: [true, "email all letters should be in lowercase"]
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;