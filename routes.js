var express = require('express')
var router = express.Router()

router.get('/api/hello', (req, res) => {
	res.json('/api/hello')
})

router.get('/api/hello2', (req, res) => {
	res.json('/api/hello2')
})

module.exports = router