const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');

require('./src/auth')(passport);
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

require('./src')(app, passport);

mongoose.connect('mongodb://localhost:27017/jwt');

mongoose.connection.on('error', () => console.log('Mongoose Connection Failure'));

mongoose.connection.on('connected', () => {
  console.log('Mongoose Connection Success');
  app.listen(3000, () => console.log("Express has been started"));
});