const Product = require('../../model/product');
const { uploadToFirebase } = require('../../config/firebase');

const addProductImage = async (productId, fileBuffer) => {
  try {
    const fileName = `products/${productId}/${Date.now()}.png`; 
    const uploadResponse = await uploadToFirebase(fileBuffer.buffer, fileName);

    if (!uploadResponse.success) {
      throw new Error(uploadResponse.message);
    }

    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    product.images.push({
      url: uploadResponse.url,
      altText: product.name
    });

    await product.save();

    return { success: true, message: 'Image added successfully', product };
  } catch (error) {
    console.error('Error in addProductImage service:', error);
    return { success: false, message: error.message };
  }
};

module.exports = { addProductImage };
