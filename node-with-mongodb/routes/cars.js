const express = require('express');
const carService = require('../services/cars');

const router = express.Router();

router.get('/', carService.find);
router.get('/new', carService.new);
router.get('/edit/:id', carService.edit);

module.exports = router;