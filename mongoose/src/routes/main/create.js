const Person = require('../../schemas/Person');

module.exports = async (req, res) => {
  const { firstName, lastName, age, city } = req.body;
  try {
    const data = {
      name: {
        firstName,
        lastName
      },
      age,
      city
    }
    const personCreated = await Person.create(data);

    return res.json({ body: personCreated });  
  } catch(err) {
    return res.json({ error: err.message });
  }
}