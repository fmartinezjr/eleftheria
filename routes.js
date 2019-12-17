var express = require("express");
var router = express.Router();
var pool = require("./db");


router.get('/get/transaction', (req, res, next ) => {
  pool.query(`SELECT * FROM transaction`, 
            (q_err, q_res) => {
                  res.json(q_res.rows)
  })
})


module.exports = router;
