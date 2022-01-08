const mongoose = require('mongoose');

const Person = mongoose.Schema({
  name: {
    firstName: String,
    lastName: String,
  },
  age: {
    // type: mongoose.SchemaTypes.Mixed, 
    type: Number, 
  }
}, {
  strict: false,
});

Person.virtual('name.fullname').get(function() {
  return this.name.firstName + ' ' + this.name.lastName
});

Person.virtual('name.fullname').set(function(name) {
  this.name.firstName = name.firstName
  this.name.lastName  = name.lastName
});

module.exports = mongoose.model('Person', Person);