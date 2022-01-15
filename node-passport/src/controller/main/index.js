const { Router } = require('express');
const isAuth = require('../../auth/middleware');

const router = Router();

router.get('/', isAuth,  require('./main'));


module.exports = router;