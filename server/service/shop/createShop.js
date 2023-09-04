const uploadFileToFirebase = require('../../config/firebase');
const Shop = require('../../model/shop'); 
const { v4: uuidv4 } = require('uuid'); 

const createShop = async (shopData) => {
  const {
    categories,
    userId,
    callToAction,
    BannerText,
    aboutMe,
    name,
    address,
    description,
    settings,
    balance
  } = shopData;

  if (!categories || !userId || !name || !settings) {
    throw new Error('Missing required fields');
  }

  const newShop = new Shop({
    categories,
    shopId: uuidv4(),
    userId,
    callToAction,
    BannerText,
    aboutMe,
    name,
    address: {
      street_address: address.street_address,
      country: address.country,
      city: address.city,
      state: address.state,
      zip: address.zip
    },
    description,
    settings: {
      socials: settings.socials,
      contact: settings.contact,
      location: {
        lat: settings.location.lat,
        lng: settings.location.lng,
        city: settings.location.city,
        state: settings.location.state,
        country: settings.location.country,
        zip: settings.location.zip,
        formattedAddress: settings.location.formattedAddress
      },
      website: settings.website
    },
    balance: {
      walletId: balance.walletId,
      total_earnings: balance.total_earnings,
      withdrawn_amount: balance.withdrawn_amount,
      current_balance: balance.current_balance,
      payment_info: balance.payment_info
    }
  });
  await newShop.save();
  return newShop;
};



module.exports = createShop;
