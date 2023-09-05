const productService = require('../service/product/product');


const addProductController = async (req, res) => {
    try {
        const productData = req.body;

        const newProduct = await productService.addProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getProductsByUserIdController = async (req, res) => {
    try {
        const { userId } = req.params;
        const productsByUserId = await productService.getProductsByUserId(userId);
        res.status(200).json(productsByUserId);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addProductController,
    getProductsByUserIdController,
    getAllProducts
};