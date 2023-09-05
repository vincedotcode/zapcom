const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: [
    {
      url: String,
      altText: String,
    },
  ],
  attributes: [{
    name: String,  
    value: String, 
  }],
  customAttributes: mongoose.Schema.Types.Mixed, 
  status: {
    type: String,
    enum: ['In Stock', 'Out of Stock', 'Discontinued'],
    default: 'In Stock',
  },
  analytics: {
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    sales: { type: Number, default: 0 },
  },
  ratings: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      rating: Number,
      review: String,
      date: Date,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
