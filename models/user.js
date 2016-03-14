var mongoose = require('mongoose');
var crypto = require('crypto');
// connect to database
var Schema = mongoose.Schema;

// create a Schema for Articles
var UserSchema = new Schema({
  username    : String,
  email   : String,
  password: {type: String,required: true},
  salt    : { type: String },
  phones   : [{phoneNumber :Number,isDefault : Boolean}],
  addresses : [{address:String, isDefault: Boolean}],
  orders  : [
    {
      type:Schema.ObjectId,
      ref: 'Order'
    }
  ]
});

UserSchema.pre('save', function(next) {
  if (this.password) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }
  next();
});

UserSchema.methods.hashPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.method('validPassword', function(password, callback) {
    return this.password === this.hashPassword(password);
});

module.exports = mongoose.model('User',UserSchema);