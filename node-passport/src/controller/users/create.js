const User = require('../../model/user');

module.exports = async (req, res) => {
  try {
    const user = new User(req.body);
    user.password = user.genHash(user.password);

    const userCreated = await user.save();
    console.log(userCreated);
    return res.redirect('/');
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
};