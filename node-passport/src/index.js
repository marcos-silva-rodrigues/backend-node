module.exports = (app) => {
  app.use('/', require('./controller/main'))
  app.use('/users', require('./controller/users'))
}