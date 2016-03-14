var mongoose = require('mongoose');
var crypto = require('crypto');
// connect to database
var Schema = mongoose.Schema;

// create a Schema for Articles
var DishSchema = new Schema({
  dishName    : String,
  dishImage   : String,
  ingredients : [{name: String, price: Number, count: Number, weight: String}],
  cookingSteps: [String]
});
module.exports = mongoose.model('Dish',DishSchema);