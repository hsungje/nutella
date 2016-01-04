var express = require('express');
var router = express.Router();
var Task = require('../controller/api-task.js');

router.get('/', Task.get);
router.post('/', Task.post);

module.exports = router;