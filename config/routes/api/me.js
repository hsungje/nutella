var express = require('express');
var router = express.Router();

var me = require('../../../controller/api-me.js');

router.post('/tasks/:id/startTimer', [me.checkUser, me.startTimer]);
router.post('/tasks/:id/stopTimer', [me.checkUser, me.stopTimer]);
router.delete('/tasks/:id', [me.checkUser, me.deleteTask]);
router.get('/tasks', [me.checkUser, me.getTasks]);
router.post('/tasks', [me.checkUser, me.postTask]);


module.exports = router;
