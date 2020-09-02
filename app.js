var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, function() {
    debug(`listening on port 3000. ${chalk.green('Check http://localhost:3000')}`);
});
