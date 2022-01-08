const express = require('express');

const router = express.Router();

router.get('/', require('./find_all'));
router.post('/', require('./create'));

module.exports = router;