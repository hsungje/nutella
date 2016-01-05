var fs = require('fs');
var models = require('./models');
var join = require('path').join;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var apiRoutes = require('./routes/api');
var mainRoutes = require('./client/app');

var errorHandler = require('./config/error');

fs.readdirSync(join(__dirname, 'models')).forEach(function (file) {
	if (~file.indexOf('.js')) require(join(__dirname, 'models', file));
});

models.sequelize.sync().then(function() {
	console.log('--sequelize init--'); 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true 
})); 
		
// routing
app.use('/api', apiRoutes);
app.use(express.static(__dirname + '/client'));

app.listen(3000);
