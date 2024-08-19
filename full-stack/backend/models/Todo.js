import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required'],
        unique: true,
    }, 
    answer: {
        type: String,
        required: [true, 'Answer is required'],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}, {timeseries: true});

export const Todo = mongoose.model('todos', userSchema);