const { Pool } = require('pg')

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  post: DB_PORT
})

module.exports = pool