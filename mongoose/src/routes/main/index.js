const express = require('express');

const router = express.Router();

router.get('/', require('./main'));
router.post('/', require('./create'));
router.get('/:id', require('./show'));

module.exports = router;