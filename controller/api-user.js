var models = require('../models');
var User = models['User'];
var _ = require('lodash');

var apiUser = {
    post: function (req, res){
        User.create(_.assign({}, req.body)).then(function (newUser) {
            res.json(newUser);
        });
    },

    get: function (req, res) {
        User.findAll().then(function (foundUsers) {
            res.json(foundUsers);
        });
    },

    getById: function (req, res) {
        User.findById(req.params.id).then(function (user) {
            res.json(user);
        });
    }
}

module.exports = apiUser;
