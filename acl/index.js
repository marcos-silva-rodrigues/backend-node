const path = require('path')
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');

/* PASSPORT BASIC */
// passport.use(require('./src/auth/basic'));
// app.get('*', passport.authenticate('basic', { session: false }));

/* PASSPORT LOCAL */
require('./src/auth/local')(passport);

const app = express();

// LOGGER
app.use(morgan('dev'));

// JSON BODY
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MEHTODS
app.use(methodOverride('_method'));

// AUTH
app.use(session({ 
  secret: '7987a2df95a8c45858b39c39a5a8d885',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// TEMPLATE ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'view'));

require('./src/index')(app, passport);

mongoose.connect('mongodb://localhost:27017/acl');

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


