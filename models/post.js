var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./user'),
    City = require('./city');

var PostSchema = new Schema({
  title: String,
  post: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  nameOfCity: {type: Schema.Types.ObjectId, ref: 'City'}//post has one city and one user 
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
