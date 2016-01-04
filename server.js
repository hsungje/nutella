var fs = require('fs');
var models = require('./models');
var join = require('path').join;
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var userRoutes = require('./routes/user');
var taskRoutes = require('./routes/task');

var errorHandler = require('./config/error');

fs.readdirSync(join(__dirname, 'models')).forEach(function (file) {
	if (~file.indexOf('.js')) require(join(__dirname, 'models', file));
});

models.sequelize.sync().then(function() {
	console.log('--sequelize init--'); 
	app.listen(3000);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
})); 

app.use('/user', userRoutes);
app.use('/task', taskRoutes);

app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
})

app.use(errorHandler.generalError);