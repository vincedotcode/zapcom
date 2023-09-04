const Shop = require('../../model/shop'); 

const getAllShops = async () => {
  try {
    const shops = await Shop.find();
    return shops;
  } catch (error) {
    throw new Error('Could not retrieve the shops: ' + error.message);
  }
};

module.exports = getAllShops;
