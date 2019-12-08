const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname,'/build')));
app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('build/index.html'));
});


// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(8080)