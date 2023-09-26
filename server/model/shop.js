const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
  icon: String,
  url: String,
});

const locationSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  city: String,
  state: String,
  country: String,
  zip: String,
  formattedAddress: String,
});

const paymentInfoSchema = new mongoose.Schema({
  account: String,
  name: String,
  email: String,
  bank: String,
});

const balanceSchema = new mongoose.Schema({
  walletId: Number,
  total_earnings: Number,
  withdrawn_amount: Number,
  current_balance: Number,
  payment_info: paymentInfoSchema,
});

const settingsSchema = new mongoose.Schema({
  socials: [socialSchema],
  contact: String,
  location: locationSchema,
  website: String,
});

const imageSchema = new mongoose.Schema({
  thumbnail: String,
  original: String,
  id: String,
  created_at: Date,
  updated_at: Date,
});

const addressSchema = new mongoose.Schema({
  street_address: String,
  country: String,
  city: String,
  state: String,
  zip: String,
});

const shopSchema = new mongoose.Schema({
  categories: [Number],
  shopId: String,
  userId: String,
  callToAction: String,
  BannerText: String,
  aboutMe: String,
  url: String,
  aboutMeImage: imageSchema,
  name: String,
  address: addressSchema,
  deploymentUrl: String,
  description: String,
  cover_image: imageSchema,
  logo: imageSchema,
  settings: settingsSchema,
  balance: balanceSchema,
}, { timestamps: true });

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
