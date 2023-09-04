const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  title: String,
  type: String,
  default: Boolean,
  address: {
    street_address: String,
    country: String,
    city: String,
    state: String,
    zip: String
  }
});

const AvatarSchema = new Schema({
  thumbnail: String,
  original: String,
  id: Number,
  created_at: Date,
  updated_at: Date
});

const SocialSchema = new Schema({
  type: String,
  link: String
});

const ProfileSchema = new Schema({
  customer: {
    connect: Number
  },
  avatar: AvatarSchema,
  bio: String,
  socials: [SocialSchema],
  contact: String
});

const UserSchema = new Schema({
  address: [AddressSchema],
  profile: ProfileSchema,
  permission: String,
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
