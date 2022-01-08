const e = require('express');
const Person = require('../../schema/Person');

module.exports = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    // console.log(person.name.fullname);
    return res.json({ person });
  } catch (error) {
    return res.json({error: e.message});
  };
};
