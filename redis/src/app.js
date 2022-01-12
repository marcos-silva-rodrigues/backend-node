const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cache', {
  authSource: 'admin',
  auth: {
    password: 'example',
    username: 'root'
  }
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./routes')(app);

app.listen(3000, () => {
  console.log('Espress started ...');
});