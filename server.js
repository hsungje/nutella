var fs = require('fs');
var path = require('path');
var join = path.join;
var favicon = require('serve-favicon');
var passport = require('passport');
var express = require('express');
var app = express();

var models = require('./models');

fs.readdirSync(join(__dirname, 'models')).forEach(function (file) {
	if (~file.indexOf('.js')) require(join(__dirname, 'models', file));
});

models.sequelize.sync().then(function() {
	console.log('--sequelize init--');
});

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
require('./config/passport')(passport);
require('./config/express')(app, passport);

app.listen(3000);
