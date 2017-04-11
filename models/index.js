var mongoose = require('mongoose');
//change if you deploy to heroku to be your env
mongoose.connect('mongodb://localhost/sargetravel');

module.exports = {
  Post : require('./post'),
  User : require('./user'),
  City : require('./city')
}
