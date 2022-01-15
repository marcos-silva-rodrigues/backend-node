const User = require('../../model/user');

module.exports = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndRemove(userId);

    return res.redirect('/users');
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
};