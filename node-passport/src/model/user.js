const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('mongoose-type-email');

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

User.methods.genHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null);
}

User.methods.validPassord = function (password, cb) {
    return bcrypt.compare(password, this.password, cb);
}

module.exports = mongoose.model('user', User);