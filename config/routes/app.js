var path = require('path');
var express = require('express');
var passport = require('passport');

var app = express();
var router = express.Router();

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '../../../client/login.html'));
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);

router.get('/', function (req, res) {
    if (req.user) {
        res.sendFile(path.join(__dirname + '../../../client/index.html'));
    } else {
        res.redirect('/login');
    }
});

module.exports = router;

