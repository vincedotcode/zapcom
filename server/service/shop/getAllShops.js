const Shop = require('../../model/shop'); 

const getAllShops = async () => {
  try {
    const shops = await Shop.find();
    return shops;
  } catch (error) {
    throw new Error('Could not retrieve the shops: ' + error.message);
  }
};


const getShopsByUserId = async (userId) => {
  try {
    const shops = await Shop.find({ userId });
    return shops;
  } catch (error) {
    throw new Error('Could not retrieve the shops by user ID: ' + error.message);
  }
};

const getShopById = async (_id) => {
  try {
    const shop = await Shop.findOne({ _id });
    return shop;
  } catch (error) {
    throw new Error('Could not retrieve the shop by ID: ' + error.message);
  }
};

module.exports = {
  getAllShops,
  getShopsByUserId,
  getShopById,
};