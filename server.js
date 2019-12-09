const express = require('express');
var createError = require('http-errors');
const app = express();
const path = require('path')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname,'/build')));
app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('build/index.html'));
});


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/testing', (req, res) => {
  res.send({ express: 'Tes' });
});


app.listen(8080)