var express = require('express');
var secured = require('./secured.js');
var router = express.Router();

/* GET user profile. */
router.get('/get/user', secured(), function (req, res, next) {

/* const { _raw, _json, ...userProfile } = req.user;
  res.render('user', {
    userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Profile page'
  }); */

  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

module.exports = router;