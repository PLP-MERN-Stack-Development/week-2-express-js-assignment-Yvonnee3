const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true }
});



module.exports =mongoose.model('Products', productsSchema);