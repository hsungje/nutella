var join = require('path').join;
var express = require('express');
var router = express.Router();
var User = require('../../../controller/api-user');

router.get('/', User.get);
router.post('/', User.post);

module.exports = router;
