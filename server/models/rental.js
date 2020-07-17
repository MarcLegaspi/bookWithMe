
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalSchema = new Schema({
  title: { type: String, required: true, maxlength: [128,'Invalid length! Maximum is 128 characters'] },
  city: { type: String, required: true, lowercase:true },
  street: { type: String, required: true, minlength: [4, 'Invalid length! Minimum is 4 characters']},
  category: { type: String, required: true, lowercase: true},
  image: { type: String, required: true },
  numOfRooms: Number,
  description: { type: String, required: true},
  dailyPrice: Number,
  shared: Boolean,
  createdAt: { type: Date, default: Date.now }
});


rentalSchema.statics.sendError = function (res, config) {
  const { statusCode, errorMessage} = config;
  return res
    .status(statusCode)
    .send({errors: [{title: 'Rental Error', message: errorMessage}]})
}


module.exports = mongoose.model('Rental', rentalSchema)                                         