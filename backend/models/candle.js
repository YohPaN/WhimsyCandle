const mongoose = require('mongoose');

const candleSchema = mongoose.Schema({
  collectionName: {type: String, required: true},
  itemName: {type: String, required: true},
  price: {type: Number, required: true},
  photo: {type: String, required: true}
});

module.exports = mongoose.model('Candle', candleSchema);
