module.exports = (req, res) => {
  return res.render('main', {
    user: req.user || null
  });
}