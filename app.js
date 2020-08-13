var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'));
app.get('/', function(req, res) {
    res.send('Hello from my library');
});

app.listen(3000, function() {
    debug(`listening on port 3000. ${chalk.green('Check http://localhost:3000')}`);
});