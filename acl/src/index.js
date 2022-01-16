module.exports = (app, passport) => {
  app.use('/', require('./controller/main'));
  app.use('/users', require('./controller/users')(passport));
  app.use('/auth', require('./controller/auth')(passport))
}