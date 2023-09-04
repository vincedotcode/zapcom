const addShopLogo = require('../service/shop/logoShop');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const addShopLogoController = async (req, res) => {
    try {
      const shopId = req.params.shopId;
      const file = req.file;
  
      if (!shopId || !file) {
        return res.status(400).json({
          success: false,
          message: 'Shop ID and logo file are required.',
        });
      }
  
      await addShopLogo(shopId, file);
  
      res.status(200).json({
        success: true,
        message: 'Shop logo added successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Could not add the shop logo.',
        error: error.message,
      });
    }
  };
  

module.exports = {
  addShopLogoController,
  upload: upload.single('logo'),
};
