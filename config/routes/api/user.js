var express = require('express');
var router = express.Router();
var User = require('../../../controller/api-user');

router.get('/:id', User.getById);
router.get('/', User.get);
router.post('/', User.post);

module.exports = router;
