const Person = require('../../schemas/Person');

module.exports = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    console.log(person.name.fullname);
    console.log(person.age, person.ageGreaterThan20());
    return res.json({ person });
  } catch (err) {
    return res.json({error: err.message});
  };
};
