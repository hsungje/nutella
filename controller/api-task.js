var models = require('../models');
var Task = models['Task'];
var _ = require('lodash');

var apiTask = {
	post: function (req, res){
		Task.create(_.assign({}, req.body)).then(function (newTask) {
			res.json(newTask);
		});
	},

	get: function (req, res) {
		Task.findAll().then(function (foundTasks) {
			res.json(foundTasks);
		});
	}
}


module.exports = apiTask;