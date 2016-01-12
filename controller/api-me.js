var _ = require('lodash');
var models = require('../models');
var Task = models['Task'];
var User = models['User'];

var apiMe = {
    getTasks: function (req, res) {
        if (req.user) {
            User.findById(req.user.id).then(function (user) {
                return user.getTasks();
            }).then(function (tasks) {
                res.json(tasks);
            });
            /* alternately...
            Task.findAll({
                where: {UserId: req.user.id}
            }).then(function (tasks) {
                res.json(tasks);
            });
            */
        } else {
            res.status(401).json({ error: 'Login Required' });
        }
    },

    postTask: function (req, res) {
        if (req.user) {
            User.findById(req.user.id).then(function (user) {
                return user.createTask(req.body);
            }).then(function (result) {
                res.json(result);
            });
        } else {
            res.status(401).json({ error: 'Login Required' });
        }
    }
};

module.exports = apiMe;
