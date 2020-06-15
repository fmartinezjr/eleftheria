var router = require("./auth.js");
var pool = require("../db");
const { secured } = require("./secured.js")

router.get("/get/transaction",(req, res, next) => {
  console.log(res.locals.isAuthenticated);

  pool.query(`SELECT * FROM transaction ORDER BY merchant ASC`, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.json(data.rows);
    }
  });
});

router.get("/get/transaction/:id", (req, res, next) => {
  console.log(res.locals.isAuthenticated);
  const id = parseInt(req.params.id)
  pool.query(
    `SELECT * FROM transaction  WHERE uid = $1`, [id], (err, data) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json(data.rows);
    }
  });
});


router.post("/post/transaction", (req, res, next) => {
  console.log(res.locals.isAuthenticated);
  const { merchant, payment_type, amount } = req.query;
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

router.put("/put/transaction/:id", (req, res, next) => {
  console.log(res.locals.isAuthenticated);
  const id = parseInt(req.params.id)
  const { merchant, payment_type, amount } = req.query;

  pool.query(
    'UPDATE transaction SET merchant = $1, payment_type = $2, amount = $3 ',
    [merchant, payment_type, amount],
    (err, results) => {
      if (err) {
        next(err);
      } else {
        res.status(201).send(`Updated to the following:
      Merchant: ${req.query.merchant}
      Payment: ${req.query.payment_type}
      Amount: ${req.query.amount}`);
      console.log("1 record inserted");
        
      }
    }
  );
});

router.delete("/delete/transaction/:id", (req, res, next) => {
  const id = parseInt(req.params.id)
  pool.query(
    `DELETE FROM transaction WHERE uid = $1`, [id], (err, data) =>{
      if (err) {
        next(err);
      } else {
        res.status(200).send(`Transaction with the following UID was removed: ${id}`)
      }
    });
});

router.delete("/delete/transaction/", (req, res, next) => {

  pool.query(
    `DELETE FROM transaction`, (err, data) =>{
      if (err) {
        next(err);
      } else {
        res.status(200).send(`All transactions removed`)
      }
    });
});

router.get("/get/userinformation/", secured, (req, res, next) => {
  console.log(res.locals.isAuthenticated);
  res.locals.isAuthenticated = req.isAuthenticated();
  //const { ...userProfile } = req.user;
  const array = [
    {firstname : "secured", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ]
  res.json(array)
});

router.get("*", (req, res) =>
  res.status(200).send({
    message: "This is not a valid route"
  })
);



module.exports = router;
