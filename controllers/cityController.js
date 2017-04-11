//looks very good/clean
var auth = require('../middleware/auth'),
    db = require('../models'),
    User = db.User,
    City = db.City;

//GET /api/city
function index(req, res) {
  City.find({}, function(err, allCities) {
    console.log('this is all the cities: ', allCities);
    res.json(allCities);
  });
}

//GET /api/city/cityId
function show(req, res) {
  City.findById(req.params.cityId, function(err, foundCity) {
    if (err) {
      console.log('cityController.show error', err);
    }
    console.log('cityController.show responding with', foundCity);
    res.json(foundCity);
  });
}

//POST /api/city/
function create(req, res) {
  var new_city = new City(req.body);
  console.log(req.body);
  new_city.save(function(err, new_city) {
    res.send(new_city);
  })
}

//DELETE  /api/city/:cityId
function destroy(req, res) {
  City.findOneAndRemove({
    _id: req.params.cityId
  }, function(err, foundCity) {

    res.json(foundCity);
  });
}

//PUT /api/city/:cityId
function update(req, res) {
  console.log('updating data', req.body);
  var id = req.params.cityId;
  City.findOneAndUpdate({
    _id: id
  }, req.body, function(err, foundCity) {

    if (err) {
      console.log('saving altered city failed');
    }
    res.json(foundCity);
  });
}

module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
};
