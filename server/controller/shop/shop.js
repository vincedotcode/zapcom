const createShop = require('../../service/shop/createShop');
const {  getAllShops, getShopsByUserId, getShopById } = require('../../service/shop/getAllShops');




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

const getShopsByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    const shops = await getShopsByUserId(userId);
    res.status(200).json({
      success: true,
      data: shops,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Could not retrieve the shops by user ID.',
      error: error.message,
    });
  }
};

const getShopByIdController = async (req, res) => {
  try {
    const { shopId } = req.params;
    const shop = await getShopById(shopId);
    res.status(200).json({
      success: true,
      data: shop,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Could not retrieve the shop by ID.',
      error: error.message,
    });
  }
};


module.exports = {
  createShopController,
  getAllShopsController,
  getShopsByUserIdController,
  getShopByIdController,
};


