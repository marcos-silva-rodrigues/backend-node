const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Instancia do app
const app = express();

// Setando utilidades
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/mon-mongoose', {
  authSource: 'admin',
  auth: {
    username: 'root',
    password: 'example'
  },
});

require('./src/index')(app);

// Startando o app
app.listen(9000, () => {
  console.log('Express Started');
})