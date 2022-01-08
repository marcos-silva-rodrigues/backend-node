const Car = require('../../schemas/cars');

module.exports = async (req, res) => {
  try {
    const { name } = req.body;
    const car = await Car.create({ name });

    return res.json(car);
  } catch (err) {
    return res.json({ error: err.message });
  }
}