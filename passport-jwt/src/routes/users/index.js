const express = require('express');

const router = express.Router();

router.post('/', require('./create'));
router.delete('/:id', require('./remove'));

module.exports = router;