var _ = require('lodash');
var models = require('../models');
var Task = models['Task'];
var User = models['User'];

var apiMe = {
    checkUser: function (req, res, next) {
        if (req.user) {
            next();
        } else {
            res.status(401).json({ error: 'Login Required' });
        }
    },

    getTasks: function (req, res) {
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
    },

    postTask: function (req, res) {
        User.findById(req.user.id).then(function (user) {
            return user.createTask(req.body);
        }).then(function (result) {
            res.json(result);
        });
    },

    deleteTask: function (req, res) {
        Task.findById(req.params.id).then(function (task) {
            return task.destroy();
        }).then(function (destroyResult) {
            res.json({
                id: req.params.id
            });
        });
    },

    startTimer: function (req, res) {
        Task.findById(req.params.id).then(function (task) {
            return task.startTimer();
        }).then(function (updatedTask) {
            res.json(updatedTask);
        });
    },

    stopTimer: function (req, res) {
        Task.findById(req.params.id).then(function (task) {
            return task.stopTimer();
        }).then(function (updatedTask) {
            res.json(updatedTask);
        });

    }
};

module.exports = apiMe;
