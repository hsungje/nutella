var express = require('express');
var router = express.Router();
var apiUser = require('../../controller/api-user.js');

router.get('/', apiUser.get);
router.post('/', apiUser.post);

module.exports = router;