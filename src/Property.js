const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  propertyType: String,
  priceFrom: Number,
  priceTo: Number,
  location: String,
  city: String,
  realtor: String,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
