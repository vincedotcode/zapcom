const { addProductImage } = require('../../service/product/productImage');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');


const addProductImageController = async (req, res) => {

    try {
        const productId = req.params.productId;
        const file = req.file;
    
        await addProductImage(productId, file);
    
        res.status(200).json({
          success: true,
          message: 'Product image added successfully',
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Could not add the Product image.',
          error: error.message,
        });
      }
};

module.exports = {
    addProductImageController,
    upload: upload,
};