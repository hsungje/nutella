var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	console.log('routing');
	res.send('wahaha');
});


module.exports = router;