const express = require("express");
const router = express.Router();
const passport = require("passport");
const util = require("util");
const querystring = require("querystring");
var pool = require("../db");


exports.secured = (req, res, next) => {
    if (req.isAuthenticated()) {
  
      console.log("has access")
      return next();
    }
    console.log("no access")
    //res.redirect("/notauthorized");:Wq
    res.status(401).send(`Unauthorized - User not authenticated`)
  };

  