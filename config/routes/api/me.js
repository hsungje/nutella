var express = require('express');
var router = express.Router();

var me = require('../../../controller/api-me.js');

router.get('/tasks', me.getTasks);


module.exports = router;
