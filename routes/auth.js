var express = require("express");
var router = express.Router();
var pool = require("../db");

router.get('/', function (req, res) {
    res.send('Hello Auth!');
  });

module.exports = router;
