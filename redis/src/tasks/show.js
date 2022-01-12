const Task = require('../schemas/Task');

module.exports = async (req, res) => {
  try {
    const { id } =  req.params;

    if(!id)
      return res.status(400).json({ msg: "invalidate parameter" });

    const result = await Task.findById(req.params.id);
    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ err })
  }
}