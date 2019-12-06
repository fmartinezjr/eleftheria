const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 5001;


app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname,'/build')));
app.get('/', function (req, res, next) {
    res.sendFile(path.resolve('build/index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(8080)