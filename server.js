var fs = require('fs');
var models = require('./models');
var join = require('path').join;
var logger = require('./logger');
var Repeat = require('repeat');
var express = require('express');
var app = express();

fs.readdirSync(join(__dirname, 'models')).forEach(function (file) {
	if (~file.indexOf('.js')) require(join(__dirname, 'models', file));
});

require('./routes')(app, function () {
	console.log('--routes init--');

	models.sequelize.sync().then(function() {
		console.log('--sequelize init--');
		app.listen(3000);
	});
});