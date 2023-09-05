const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

module.exports = ProductCategory;
