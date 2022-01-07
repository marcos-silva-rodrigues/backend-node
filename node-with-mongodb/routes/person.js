const express = require('express');
const Person = require('../models/Person');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allPeoples = await Person.find({});

    return res.json(allPeoples);
  } catch {
    return res.status(500).send("Error");
  };
});

router.get('/:id', async (req, res) => {
  try {
    const people = await Person.findById(req.params.id);

    return res.json(people);
  } catch {
    return res.status(500).send("Error");
  };
});

router.post('/', async (req, res) => {
  try {
    const people = await Person.create({
      name: {
        firstname: 'Marcos',
        lastname: 'Fulano'
      },
      age: 23
    });

    return res.json(people);
  } catch {
    return res.status(500).send("Error");
  };
});

router.put('/:id', async (req, res) => {
  try {
    const people = await Person.findByIdAndUpdate({ 
      _id: req.params.id
    }, {
      name: {
        firstname: 'Fulano',
        lastname: 'Silva'
      }
    });

    return res.json(people);
  } catch {
    return res.status(500).send("Error");
  };
});

module.exports = router;