const express = require('express');
const userService = require('../services/users');

const router = express.Router();

router.get('/login', userService.login);
router.get('/register', userService.register);

module.exports = router;