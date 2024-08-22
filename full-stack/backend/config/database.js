require("dotenv").config();
const express  = require("express");
const app      = express();
const mongoose = require('mongoose');
const DB_URL   = process.env.DB_URL;
const PORT     = process.env.PORT;


const dbConnect = () => {
    mongoose.connect(`${DB_URL}/Field`)
    .then(() => {
        console.log("db connected");
        app.get("/", (req, res) => {
            return res.send("YOU ARE UP");
        });
        app.get("/ok", (req, res) => {
            return res.send("OKAY");
        });
        app.listen(PORT, () => {
            console.log(`Server running at port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('db not connected\n', err.message);
        process.exit(1);
    });
}

module.exports = dbConnect;