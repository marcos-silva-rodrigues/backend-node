const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');

const User = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

User.methods.hashPassword = (password) => {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(7), null);
}

module.exports = mongoose.model('User', User);