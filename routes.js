var express = require("express");
var router = express.Router();

router.get("/hello", (req, res) => {
  res.json("on route 1 -> /api/hello");
});

router.get('/api/get/allposts', (req, res, next ) => {
  pool.query(`SELECT * FROM posts 
              ORDER BY date_created DESC`, 
            (q_err, q_res) => {
                  res.json(q_res.rows)
  })
})

module.exports = router;
