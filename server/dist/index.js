"use strict";
require("dotenv").config();
var express = require("express");
var app = express();
var dbConnect = require('./config/db');
var show = require("./routes/show");
var user = require("./routes/user");
var cors = require('cors');
// initialize middleware
app.use(cors());
app.use(express.json({ extended: false }));
app.get("/", function (req, res) { return res.send("Server up and running"); });
app.use("/api/show", show);
app.use("/api/user", user);
// setting up port
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("server is running on http://localhost:".concat(PORT));
    dbConnect();
});
