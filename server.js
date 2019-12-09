const express = require('express');
var createError = require('http-errors');
const path = require('path')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname,'/build')));

app.listen(8080)

app.use('/', indexRouter)

module.exports = app;