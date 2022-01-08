const mongoose = require('mongoose');
const createdPlugin = require('./plugins/created');

const Car = mongoose.Schema({
  name: String,
})

Car.plugin(createdPlugin, {});

module.exports = mongoose.model('Car', Car)

