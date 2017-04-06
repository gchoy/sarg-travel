var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sargetravel');

module.exports = {
  Post : require('./post'),
  User : require('./user'),
  City : require('./city')
}
