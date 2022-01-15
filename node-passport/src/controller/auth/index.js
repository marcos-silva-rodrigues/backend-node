const { Router } = require('express');

const router = Router();

module.exports = (passport) => {
  router.get('/', require('./login'));
  router.post('/login', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/users'
  }));

  return router;
}