var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	console.log('routing');
});


module.exports = router;