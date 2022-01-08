const Person = require('../../schema/Person');

module.exports = async (req, res) => {
  const { firstname, lastname, age, city } = req.body;
  try {
    const data = {
      name: {
        firstname,
        lastname
      },
      age,
      city
    }
    const personCreated = await Person.create(data);

    return res.json({ body: personCreated });  
  } catch(e) {
    return res.json({ error: e.message });
  }
}