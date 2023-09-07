const categoryService = require('../../service/product/category'); 

const createProductCategoryController = async (req, res) => {
  try {
    const categoryData = { ...req.body, userId: req.body.userId }; 
    const category = await categoryService.createProductCategory(categoryData);
    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProductCategoriesController = async (req, res) => {
  try {
    const categories = await categoryService.getAllProductCategories();
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductCategoriesByUserIdController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const categories = await categoryService.getProductCategoriesByUserId(userId);
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProductCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const userId = req.body.userId; 
    const category = await categoryService.updateProductCategory(categoryId, userId, req.body);
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProductCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const userId = req.user._id; 
    const response = await categoryService.deleteProductCategory(categoryId, userId);
    res.status(200).json({
      success: true,
      message: response.message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProductCategoryController,
  getAllProductCategoriesController,
  getProductCategoriesByUserIdController,
  updateProductCategoryController,
  deleteProductCategoryController,
};
