var join = require('path').join;
var express = require('express');
var router = express.Router();
var Task = require('../../../controller/api-task');

router.get('/', Task.get);
router.post('/', Task.post);

module.exports = router;
