module.exports = (app) => {
  app.use('/cars', require('./routes/cars'));
  app.use('/', require('./routes/main'));
};