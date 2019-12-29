var express = require("express");
var router = express.Router();
var pool = require("./db");

router.get("/get/transaction", (req, res, next) => {

  pool.query(`SELECT * FROM transaction ORDER BY merchant ASC`, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.json(data.rows);
    }
  });
});

router.get("/get/transaction/:id", (req, res, next) => {
  const id = parseInt(req.params.id)
  pool.query(`SELECT * FROM transaction  WHERE uid = $1`, [id] , (err, data) => {
    if (err) {
      next(err);
    } else {
      res.json(data.rows);
    }
  });
});


router.post("/post/transaction", (req, res, next) => {
  const { merchant, payment_type, amount } = req.query;
  console.log(req.query);
  pool.query(
    `INSERT INTO transaction (merchant, payment_type, amount) VALUES ($1, $2, $3)`,
    [merchant, payment_type, amount],
    (err, results) => {
      if (err) {
        next(err);
      } else {
        res.status(201).send(`Added the following:
      Merchant: ${req.query.merchant}
      Payment: ${req.query.payment_type}
      Amount: ${req.query.amount}`);
        console.log("1 record inserted");
        
      }
    }
  );
});


router.delete("/delete/transaction:id", (req, res, next) => {
  console.log("Is the issue here")
  const id = parseInt(req.params.uid)
  console.log("Is the issue here")
  console.log(id);
  pool.query(
    `DELETE FROM transaction WHERE uid = $1`, [id],
     (error, response) =>{
      if (error) {
        throw error;
      }
      response.status(200).send("Sucesss!");
    });
});

router.get("*", (req, res) =>
  res.status(200).send({
    message: "This is not a valid route"
  })
);

module.exports = router;
