const express = require("express");
const router  = express.Router();
const getTodos   = require("../controllers/getTodo.js");
const createTodo = require("../controllers/createTodo.js");
const updateTodo = require("../controllers/updateTodo.js");
const deleteTodo = require("../controllers/deleteTodo.js");

router.get("/getQuotes", getTodos);
router.post("/createQuote", createTodo);
router.patch("/updateQuote/:id", updateTodo);
router.delete("/deleteQuote/:id", deleteTodo);

module.exports = router;