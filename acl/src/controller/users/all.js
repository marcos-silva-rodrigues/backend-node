const User = require('../../model/user');

module.exports = async (req, res) => {
  try {
    const users = await User.find({});
    return res.render('users', { users });
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
};