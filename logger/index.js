var _ = require('lodash');
var request = require('request');
var models = require('../models');

var logger = function () {
	request
	.get('http://myttc.ca/vehicles/near/finch_station.json')
	.on('response', function (a,b,c,d,e) {
		debugger;
 	});

};



module.exports = logger;