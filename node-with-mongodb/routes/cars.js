const express = require('express');
const carService = require('../services/cars');

const router = express.Router();

router.get('/', carService.find);
router.post('/', carService.create);
router.put('/:id', carService.update);
router.delete('/:id', carService.remove);

router.get('/new', carService.new);
router.get('/edit/:id', carService.edit);


module.exports = router;