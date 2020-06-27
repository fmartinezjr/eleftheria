var express = require("express");
var secured = require("./secured.js");
var router = express.Router();

router.get("/get/user", secured(), (req, res, next) => {
  const { _raw, _json, ...userProfile } = req.user;

  res.json(_raw);
});

module.exports = router;
