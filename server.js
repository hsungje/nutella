var models = require('./models');
var logger = require('./logger');
var Repeat = require('repeat');

models.sequelize.sync({ force: true, logging: console.log }).then(function () {
	console.log('---sync completed---');

}).then(function () {
	// add error handling
	// is "require" optimized?
	
	logger();
	// Repeat(logger).every('60', 's').start.now();
})