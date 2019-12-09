const { Pool } = require('pg')

const pool = new Pool({
  user: 'fmartinez',
  host: 'localhost',
  database: 'eleftheria',
  password: '',
  post: 5432
})

module.exports = pool