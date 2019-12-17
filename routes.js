var express = require("express");
var router = express.Router();
var pool = require("./db");

router.get('*', (req, res) => res.status(200).send({
  message: 'This is not a valid route',
}));

router.get('/get/transaction', (req, res, next ) => {
  pool.query(`SELECT * FROM transaction`, 
            (q_err, q_res) => {
                  res.json(q_res.rows)
  })
})

const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
}


module.exports = router;
