const Product = require('../../model/product');


const addProduct = async (productData) => {
    try {
        const product = new Product(productData);
        await product.save();
        return { success: true, data: product };
    } catch (error) {
        throw new Error('Error adding product: ' + error.message);
    }
};

const getProductsByUserId = async (userId) => {
    try {
      const products = await Product.find({ userId });
      return { success: true, data: products };
    } catch (error) {
      throw new Error('Error retrieving products by userId: ' + error.message);
    }
  };

const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return { success: true, data: products };
    } catch (error) {
        throw new Error('Error retrieving all products: ' + error.message);
    }
};


module.exports = {
    addProduct,
    getProductsByUserId,
    getAllProducts
};
