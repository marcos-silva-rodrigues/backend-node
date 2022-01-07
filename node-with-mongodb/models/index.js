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

const company = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    name: String,
    number: Number,
    city: String,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const Company = mongoose.model('Company', company);

Company.create({
  name: 'Company 1',
  address: {
    name : 'address',
    number: 666,
    city: 'São Pauo'
  },
  date: new Date()
}, (err, company) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Created -> ", company);
})