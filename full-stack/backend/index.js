const dbConnect = require("./config/database.js");
const middlewareConnect = require("./middlewares/middleware.js");
dbConnect();
middlewareConnect();
