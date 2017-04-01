var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dogSchema = new Schema({
  name: String,
  age: Number,
  type: String
});

// the schema is useless so far
// we need to create a model using it
var Dog = mongoose.model('Dog', dogSchema);

// make this available to our users in our Node applications
module.exports = Dog;