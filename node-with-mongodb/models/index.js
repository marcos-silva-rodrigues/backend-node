const mongoose = require('mongoose');

// mongoose connect
const db = mongoose.connect('mongodb://localhost:27017/libray', {
  authSource: "admin",
  user: 'root',
  pass: 'example',
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Everything is okay, mongoDB is connected');
});

mongoose.connection.on('error', () => {
  console.log('Ops! Something went wrong, mongoDB is broken');
});

module.exports = db;
