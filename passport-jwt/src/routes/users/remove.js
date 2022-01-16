const User = require('../../schema/User');

module.exports = async (req, res) => {
  try {
    const result = await User.findByIdAndRemove(req.params.id);
    if(!result) return res.status(404).json({ msg: "User Not Found" });
    return res.status(204).end();
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    });
  }
}