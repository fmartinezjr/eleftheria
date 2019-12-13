var express = require("express");
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes");
var app = express();
var PORT = process.env.PORT || '8080';
require('dotenv').config();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/build")));

app.use("/api", indexRouter);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT);

module.exports = app;
