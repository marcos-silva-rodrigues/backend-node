const Car = require('../models/car');

exports.find = async (req, res) => {
  const carsList = await Car.find({});
  res.render('cars_list', {
    cars: carsList,
  });
}

exports.new = (req, res) => {
  res.render('cars_new', {});
}

exports.create = async (req, res) => {
  try {
    const cardCreated = await Car.create(req.body);

    return res.redirect('/cars');
  } catch (error) {
    return;
  };
};

exports.edit = async (req, res) => {
  try {
    const hasCar = await Car.findById(req.params.id);

    return res.render('cars_edit', {
      car: hasCar
    });
  } catch (error) {
    return;
  }

}

exports.update = async (req, res) => {
  try {
    const carUpdated = await Car.findByIdAndUpdate(
      req.params.id,
      req.body
    );
  
    res.redirect('/cars');
  } catch {
    return;
  };
};

exports.remove = async (req, res) => {
  try {
    const carUpdated = await Car.findByIdAndRemove(req.params.id);
  
    res.redirect('/cars');
  } catch {
    return;
  };
};
