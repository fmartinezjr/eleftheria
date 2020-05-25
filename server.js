require("dotenv").config();
var express = require("express");
var path = require("path");
var indexRouter = require("./routes/routes");
var authRouter = require("./routes/auth");
var app = express();
var PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/build")));

app.use("/api", indexRouter);
app.use("/auth", authRouter);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

module.exports = app;
