  const Person = require('../../schema/Person');

module.exports = async (req, res) => {
  try {
    const results = await Person.findByName(req.params.name);
    return res.json({ results });
  } catch (error) {
    return res.json({error: e.message});
  };
}