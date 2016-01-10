var express = require('express');
var app = express();
var me = require('./api/me');
var user = require('./api/user');
var task = require('./api/task');

app.use('/me', me);
app.use('/user', user);
app.use('/task', task);

module.exports = app;
