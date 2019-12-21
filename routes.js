var express = require("express");
var router = express.Router();
var pool = require("./db");

router.get("/get/transaction", (req, res, next) => {
  pool.query(`SELECT * FROM transaction`, (err, data) => {
    if (err) {
      next(err)
    } else {
      res.json(data.rows);
    }
  });
});

router.get("*", (req, res) =>
  res.status(200).send({
    message: "This is not a valid route"
  })
);

module.exports = router;
