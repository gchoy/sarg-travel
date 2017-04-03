var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs')

var UserSchema = new Schema({
    name: String,
    CurrentCity: String,
    DateJoined: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        select: false
    },
    image: String
});

// bump date updated
UserSchema.pre('save', function(next) {
    this.updated = Date.now();

    // encrypt password
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(password, done) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        done(err, isMatch);
    });
}; // this.password refers to UserSchema password

var User = mongoose.model('User', UserSchema);
module.exports = User;
