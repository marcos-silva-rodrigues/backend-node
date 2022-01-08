const Car = require('../../schemas/cars');

module.exports = async (req, res) => {
  try {
    const list = await Car.find({});
    return res.json(list);
    
  } catch (err) {
    return res.json({ error: err.message });
  }
}