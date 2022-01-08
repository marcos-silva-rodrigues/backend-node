const mongoose = require('mongoose');

const Person = mongoose.Schema({
  name: {
    firstname: String,
    lastname: String,
  },
  age: {
    type: Number, 
  }
}, {
  strict: false,
});

module.exports = mongoose.model('Person', Person);