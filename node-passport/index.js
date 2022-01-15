const path = require('path')
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const passport = require('passport');
const mongoose = require('mongoose');

/* PASSPORT BASIC */
// passport.use(require('./src/auth/basic'));
// app.get('*', passport.authenticate('basic', { session: false }));


const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'src', 'view'));

require('./src/index')(app);

mongoose.connect('mongodb://localhost:27017/auth');

mongoose.connection.on('error', (err) => {
  console.log("Error Mongoose Connection");
  console.log(err.message);
  process.exit(1);
});

mongoose.connection.on('connected', () => {
  console.log("Mongoose Connection Sucess");
  
  app.listen(3000, () => {
    console.log('Express has been started')
  });
});


