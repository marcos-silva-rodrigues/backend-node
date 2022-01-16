const User = require('../../schema/User');

module.exports = async (req, res) => {
  try {
    const user = new User(req.body);
    user.password = user.hashPassword(user.password);

    const userCreated = await user.save();
  
    return res.json({
      status: true,
      user: userCreated
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    });
  }
}