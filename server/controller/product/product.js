const productService = require('../../service/product/product');
const ProductRecommendationService = require('../../service/product/productRecommendationService');

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

const deleteProductController = async (req, res) => {
    try {
        const { productId } = req.params;

        const response = await productService.deleteProduct(productId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const recommendProductsController = async (req, res) => {
    try {
        const userMessage = req.body.message;
        const recommendedProducts = await ProductRecommendationService.getRecommendations(userMessage);
        res.status(200).json({
            success: true,
            data: recommendedProducts,
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
    getAllProducts,
    deleteProductController,
    recommendProductsController
};