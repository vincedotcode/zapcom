const createShop = require('../service/shop/createShop');
const getAllShops = require('../service/shop/getAllShops');



const createShopController = async (req, res) => {
  try {
    const shopData = req.body;
    const newShop = await createShop(shopData);
    res.status(201).json({
      success: true,
      data: newShop,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Could not create the shop.',
      error: error.message,
    });
  }
};

const getAllShopsController = async (req, res) => {
  try {
    const shops = await getAllShops();
    res.status(200).json({
      success: true,
      data: shops,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Could not retrieve the shops.',
      error: error.message,
    });
  }
};

module.exports = {
  createShopController,
  getAllShopsController,
};


