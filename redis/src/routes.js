module.exports = (app) => {
  app.use('/task', require('./tasks'));
}