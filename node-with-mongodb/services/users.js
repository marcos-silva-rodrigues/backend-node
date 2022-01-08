const User = require('../models/users');

exports.login = (req, res) => {
  res.render('login', {})
}

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
    });

    req.session.user = {
      username: user.username,
    }
    
    res.redirect('/');
  } catch (error) {
    return;
  }
}

exports.register = async(req, res) => {
  res.render('register', {})
}

exports.create = async(req, res) => {
  try {
    await User.create(req.body);

    return res.redirect('/users/login');
  } catch {
    return;
  }
}