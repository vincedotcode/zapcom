const addCoverImage = require('../../service/shop/coverShop');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');


const addCoverImageController = async (req, res) => {
    try {
      const shopId = req.params.shopId;
      const file = req.file;
  
      await addCoverImage(shopId, file);
  
      res.status(200).json({
        success: true,
        message: 'Cover image added successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Could not add the cover image.',
        error: error.message,
      });
    }
  };
  

module.exports = {
  addCoverImageController,
  upload: upload,
};
