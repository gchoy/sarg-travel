var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Post = require('./post');


var CitySchema = new Schema({
  cityName: String,
  country : String,
  posts : {type: Schema.Types.ObjectId, ref: 'Post'} //one city has many posts
});

var City = mongoose.model("City", CitySchema);
module.exports = City;

// // TODO: get all posts for san francisco
// Post.find({cityName: "San Francisco"._id}{
// //built in function probably .propers
// })
//
// // TODO: get all posts for Justin
// Posts.find({_user: "Justin"._id}{
//
// })
