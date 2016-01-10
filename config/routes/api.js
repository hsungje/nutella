var express = require('express');
var app = express();
var user = require('./api/user');
var task = require('./api/task');

app.use('/user', user);
app.use('/task', task);

module.exports = app;