const express = require('express');
const indexService = require('../services');

const router = express.Router();

/* GET home page. */
router.get('/', indexService.index);

module.exports = router;
