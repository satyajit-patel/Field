const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const DB_NAME = require('./constants.js');


const app = express();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;
const dbConnect = async () => {
    try {
        await mongoose.connect(`${DB_URL}/${DB_NAME}`);
        console.log('db connected/n');
        app.listen(PORT, () => {
            console.log(`Server running at port ${PORT}`);
        });
    } catch(err) {
        console.log('db not connected\n', err.message);
        process.exit(1); // 0 means success, 1 means failure
    }
}
dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
