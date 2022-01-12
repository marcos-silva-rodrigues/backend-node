const mongoose = require('mongoose');

const Task = mongoose.Schema({
  title: String,
  done: Boolean
});

module.exports = mongoose.model('Task', Task);