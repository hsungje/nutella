var models = require('../models');
var User = models['User'];
var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    /*
    passport.serializeUser(function(user, done) {
          done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({
            where: {id: id}
        }).then(function (user) {
            debugger;
            done(null, user);
            return null;
        });
    });
    */

    passport.serializeUser(function(user, done) {
         done(null, user);
    });

    passport.deserializeUser(function(user, done) {
         done(null, user);
    });

    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.findOne({
                where: {username: username}
            }).then(function (user) {
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            }).catch(function (err) {
                return done(err);
            });
        }
    ));
};
