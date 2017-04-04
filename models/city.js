var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
  cityName: String
});

var City = mongoose.model("City", CitySchema);
module.exports = City;
