var models = require('./models');
var logger = require('./logger');
var Repeat = require('repeat');
var path = require('path');
var express = require('express');
var app = express();

models.sequelize.sync().then(function () {
	
	app.get('/',function(req,res){
		res.sendFile(path.join(__dirname+'/view/index.html'));
	});
	
	app.get('/api',function(req,res){
		models['Vehicle'].findAll({where: {StationId: 10600}})
		.then(function (vehicle) {
			res.json(vehicle);
		});
	});

	var server = app.listen(3000, function () {
		var host = server.address();
		var port = server.address().port;
	});
});