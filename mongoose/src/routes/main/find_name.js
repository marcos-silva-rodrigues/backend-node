const Person = require('../../schemas/Person');

module.exports = async (req, res) => {
  try {
    const results = await Person.findByName(req.params.name);
    return res.json({ results });
  } catch (err) {
    return res.json({error: err.message});
  };
}