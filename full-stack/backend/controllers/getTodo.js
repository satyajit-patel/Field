const Todo = require("../models/Todo.js");

const getTodo = async (req, res) => {
    try {
        const result = await Todo.find({});

        console.log("data fetched");
        return res.status(200).send(result);
    } catch(err) {
        console.log("read err\n", err.message);
        return res.status(500).send(err.message);
    }
}

module.exports = getTodo;