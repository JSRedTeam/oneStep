var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user.js');
var Dish = require('../models/dishes.js');

var OrderSchema = new Schema({
  dishes:[{dishId : Dish.ObjectId, comments : String}],
  userId: User.ObjectId,
  deliverInfo:{address:String, name: User.username, phone: String, time:String}
});

module.exports = mongoose.model('Order',OrderSchema);