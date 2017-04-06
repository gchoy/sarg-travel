var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./user'),
    City = require('./city');

var PostSchema = new Schema({
  _city:  {type: Schema.Types.ObjectId, ref: 'City'},
  content: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
