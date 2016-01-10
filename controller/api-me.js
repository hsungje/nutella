var _ = require('lodash');
var models = require('../models');
var Task = models['Task'];
var User = models['User'];

var apiMe = {
    getTasks: function (req, res) {
        if (req.user) {
            Task.findAll({
                where: {UserId: req.user.id}
            }).then(function (tasks) {
                res.json(tasks);
            });
        } else {
            res.status(401).json({ error: 'Login Required' })
        }
    }
};

module.exports = apiMe;
