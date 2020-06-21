var express = require("express");
var secured = require("./secured.js");
var router = express.Router();

router.get("/get/user", secured(), (req, res, next) => {
  /*   const { _raw, _json, ...userProfile } = req.user;
  res.render("user", {
    title: "Profile",
    userProfile: userProfile
  }); */

  res.status(200).send("Woot!");
});

module.exports = router;
