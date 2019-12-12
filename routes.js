var express = require("express");
var router = express.Router();

router.get("/hello", (req, res) => {
  res.json("on route 1 -> /api/hello");
});

router.get("/hello2", (req, res) => {
  res.json("on route two");
});

module.exports = router;
