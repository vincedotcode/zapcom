const mongoose = require('mongoose');

const templateImageSchema = new mongoose.Schema({
  url: String,
  altText: String,
});

const templateSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  bannerImage: templateImageSchema,
  contentImages: [templateImageSchema],
  layout: {
    type: String,
    enum: ['Layout1', 'Layout2', 'Layout3'], 
    default: 'Layout1',
  },
  colorScheme: {
    type: String,
    enum: ['Scheme1', 'Scheme2', 'Scheme3'], 
    default: 'Scheme1',
  },
  fonts: {
    type: String,
    default: 'Default Font',
  },
}, { timestamps: true });

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
