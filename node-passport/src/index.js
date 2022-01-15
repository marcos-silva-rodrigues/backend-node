module.exports = (app, passport) => {
  app.use('/', require('./controller/main'))
  app.use('/users', require('./controller/users')(passport))
}