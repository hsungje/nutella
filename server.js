var express = require('express');
var router = require('./routes/index');
var models = require('./models');
debugger;
models.sequelize.sync({ force: true, logging: console.log }).then(function () {
	console.log('---sync completed---');
})