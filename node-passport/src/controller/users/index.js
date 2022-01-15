const { Router } = require('express');

const router = Router();

router.get('/new', require('./new'));
router.post('/', require('./create'));


module.exports = router;