var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sargetravel');

var Post = require('./post');
var User =require('./user');

module.exports = {
  Post : Post,
  User : User
}
