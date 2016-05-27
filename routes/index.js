var express = require('express');
var router = express.Router();
var dataController = require('../controller/dataController');

/* GET home page. */
router.route('/').get(dataController.index);

module.exports = router;
