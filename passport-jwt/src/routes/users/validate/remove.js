const { check } = require('express-validator');

module.exports = [
  check('id', 'Please check id param')
    .isMongoId()
]

