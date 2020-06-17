var express = require('express');
//var secured = require('../lib/middleware/secured');
var secured = require('./secured.js');
//const { secured } = require("./secured.js")
var router = express.Router();

/* GET user profile. */
router.get('/user', function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  res.render('user', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  });
});

module.exports = router;