
var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto'); //no npm install necessary because part of node js


var userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 13,
    max: 120,
    required: true
  },
  hash: {
    type: String
  },
  salt: {
    type: String
  }
});

userSchema.methods.setPassword = function(password){
  this.salt  = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64)
                    .toString('hex');
};
userSchema.methods.validPassword = function(password){
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64)
                    .toString('hex');
  return this.hash === hash; //if equal then you provided the correct password, otherwise NO!
};
userSchema.methods.generateJwt = function(){};

var User = mongoose.model('User', userSchema);
module.exports = User;
