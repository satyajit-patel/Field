const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: [20, 'name max length is 20']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        lowercase: [true, 'email all letters should be in lowercase']
    },
    password: {
        type: String,
        required: [true, "password is required"],
    }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);