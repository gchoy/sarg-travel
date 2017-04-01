var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sargetravel');

var Post = require('./post');


module.exports.Post = Post;
module.exports.User = require('./user');
