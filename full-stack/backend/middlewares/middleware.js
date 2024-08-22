const express   = require("express");
const app = express();
const cors      = require("cors");
const Todo      = require("../models/Todo.js");
const todoRoute = require("../routes/todoRoute.js");
// const userRoute = require("../routes/userRoute.js");

const middlewareConnect = () => {
    try {
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        app.use(cors());
        app.use(async (req, res, next) => {
            const method = req.method;
            if(method == 'POST' || method == 'PATCH') {
                const body = req.body;
                if(!body || !body.question || !body.answer) {
                    console.log("all fields are required");
                    return res.status(400).send("all fields are required");
                }
            }
            if(method == 'GET' || method == 'DELETE') {
                const len = await Todo.countDocuments();
                if(len == 0) {
                    console.log("empty collection");
                    return res.status(400).send("empty collection");
                }
            }
            next();
        });
        app.use("/api/v1/todo", todoRoute);
        // app.use("/api/v1/user", userRoute);

    } catch(err) {
        console.log("middleware err\n", err.message);
        process.exit(1);
    }
}

module.exports = middlewareConnect;