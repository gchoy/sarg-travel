var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  post: String,
  postBy: {
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
