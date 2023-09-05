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

const deleteProduct = async (productId, userId) => {
    try {
        const product = await Product.findOneAndDelete({ _id: productId });
        if (!product) {
            throw new Error('Product not found or you do not have permission to delete this product');
        }
        return { message: 'Product deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting product: ' + error.message);
    }
};



module.exports = {
    addProduct,
    getProductsByUserId,
    getAllProducts,
    deleteProduct,
};
