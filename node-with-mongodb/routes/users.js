const express = require('express');
const userService = require('../services/users');

const router = express.Router();

router.get('/login', userService.login);
router.get('/register', userService.register);
router.post('/signin', userService.signin);
router.post('/create', userService.create);

module.exports = router;