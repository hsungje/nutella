var bodyParser = require('body-parser');
var session = require('express-session');

var apiRoutes = require('./routes/api');
var appRoutes = require('./routes/app');
var errorHandler = require('./error');

module.exports = function (app, passport) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());


    // routing
    app.use('/api', apiRoutes);
    app.use('/', appRoutes);


    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    })
    app.use(errorHandler.generalError);


};
