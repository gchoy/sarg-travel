var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user')

var PostSchema = new Schema({
  title: String,
  post: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  cityName: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  }
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
