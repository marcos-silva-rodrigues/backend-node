const Task = require('../schemas/Task');

module.exports = async (req, res) => {
  try {
    const { id } =  req.params;

    if(!id)
      return res.status(400).json({ msg: "invalidate parameters" });

    await Task.findByIdAndUpdate(id, req.body);
    return res.status(204).end();
  } catch (err) {
    return res.status(500).json({ err });
  }
}