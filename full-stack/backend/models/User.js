const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ // table structure
    name: {
        type: String,
        required: true,
        min: 1,
        max: [20, 'must be bellow 20 length, got {value}']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        // thats why monggose. It gives you so much power to customize things which is beyond the capabilities of mongoDB alone
        unique: true,
        lowercase: [true, 'must be lowercase, got {value}']
    },
    password: {
        type: String,
        required: [true, "password is required"],
    }
}, {timestamps: true});

export const User = mongoose.model("users", userSchema); // takes tableName and tableStructue and makes the table