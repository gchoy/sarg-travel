var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs')

var UserSchema = new Schema({
  name: String,
  CurrentCity: String,
  DateJoined: {type: Date, default: Date.now()},
  image: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
