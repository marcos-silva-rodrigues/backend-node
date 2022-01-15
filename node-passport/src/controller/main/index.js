const { Router } = require('express');

const router = Router();

router.get('/', require('./main'));


module.exports = router;