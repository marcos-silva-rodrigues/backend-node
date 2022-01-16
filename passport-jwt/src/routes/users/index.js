const express = require('express');
const criteriaCreate = require('./validate/create');
const criteriaRemove = require('./validate/remove');
const validate = require('./validate');
const router = express.Router();

router.post('/', criteriaCreate, validate, require('./create'));
router.delete('/:id', criteriaRemove, validate, require('./remove'));

module.exports = router;