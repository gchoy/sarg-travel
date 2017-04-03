var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sargetravel');

var Post = require('./post');
var User = require('./user');
// var City = require('./city');

module.exports = {
  Post : Post,
  User : User
}
