var models = require('./models');
var logger = require('./logger');
var Repeat = require('repeat');

models.sequelize.sync({ force: true, logging: console.log }).then(function () {
	console.log('---sync completed---');
    // logger();
})
