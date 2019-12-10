const express = require('express');
var createError = require('http-errors');
const path = require('path')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const client = require('prom-client');

//get extra metrc from the server itself
const collectDefaultMetrcs = client.collectDefaultMetrics;

//How often it is probing
collectDefaultMetrcs({ timeout: 5000 });

//define the counter metrc (number of operations)
const counter = new client.Counter({
    name: 'node_request_operations_total',
    help: 'The total number of processed requests'
});

//define the histogram (duration)
const histogram = new client.Histogram({
    name: 'node_request_duration_seconds',
    help: 'Histogram for the duration in seconds.',
    buckets: [1, 2, 5, 6, 10]
});

// Metrics endpoin
app.get('/metrcs', (req, res) => {
    res.set('Content-Type', client.register.contentType)
    res.end(client.register.metrics())
})

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