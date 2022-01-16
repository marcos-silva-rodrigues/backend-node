const { check } = require('express-validator');

module.exports = [
  check('username', 'Please check username field')
    .isAlphanumeric()
    .isLength({ min: 3 }),
  check('password', 'Please check password field')
    .isAlphanumeric()
    .isLength({ min: 5 }),
]

