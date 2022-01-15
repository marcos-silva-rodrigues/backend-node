const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const passport = require('passport');

/* PASSPORT BASIC */
passport.use(require('./src/auth/basic'));
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize())

app.get('*', passport.authenticate('basic', { session: false }));
require('./src/index')(app);

app.listen(3000, () => {
  console.log('Express has been started')
});