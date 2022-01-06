module.exports = (req, res, next) => {
  console.log('Custom middleware');
  next();
};