const express = require('express');

const router = express.Router();

router.get('/', require('./main'));
router.post('/', require('./create'));

module.exports = router;