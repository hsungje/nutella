var express = require('express');
var app = express();
var router = express.Router();

app.get('/', function(req, res) {
	res.sendFile('/index.html');
});

module.exports = router;