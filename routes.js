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

router.post("/post/transaction", (req, res, next) => {
  pool.query(`INSERT INTO transaction`, (err, data) => {
    if (err) {
      next(err)
      res.json({ message: 'Inserted!' });
    } else {
      res.json(data.rows);
      res.json({ message: 'Not inserted!' });
    }
  });
});

router.get("*", (req, res) =>
  res.status(200).send({
    message: "This is not a valid route"
  })
);

module.exports = router;

INSERT INTO transaction (merchant, payment_type, amount)
VALUES ('Starbucks', 'Debit', 4),('Wendys', 'Cash', 3), ('McDonalds', 'Check', 4);