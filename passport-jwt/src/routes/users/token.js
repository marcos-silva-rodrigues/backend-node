const jwt = require('jsonwebtoken');
const JwtConfig = require("../../auth/config");
const User = require('../../schema/User');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(!user) return res.status(404).json({ msg: "Username Not Found" });

    const valid = user.validatePassword(password);

    if(!valid) return res.status(404).json();

    const token  = jwt.sign({ id: user._id }, JwtConfig.secretOrKey);
    return res.status(200).json({
      token
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    });
  }
}