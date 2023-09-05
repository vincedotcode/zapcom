const ProductCategory = require('../../model/productCategory');

const createProductCategory = async (categoryData) => {
  try {
    const category = new ProductCategory(categoryData);
    await category.save();
    return category;
  } catch (error) {
    throw new Error('Error creating product category: ' + error.message);
  }
};

const getAllProductCategories = async () => {
  try {
    const categories = await ProductCategory.find();
    return categories;
  } catch (error) {
    throw new Error('Error retrieving all product categories: ' + error.message);
  }
};

const getProductCategoriesByUserId = async (userId) => {
  try {
    const categories = await ProductCategory.find({ userId });
    return categories;
  } catch (error) {
    throw new Error('Error retrieving product categories by userId: ' + error.message);
  }
};

const updateProductCategory = async (categoryId, userId, updateData) => {
  try {
    const category = await ProductCategory.findOneAndUpdate(
      { _id: categoryId, userId: userId }, 
      updateData, 
      { new: true, runValidators: true }
    );
    if (!category) {
      throw new Error('Product category not found or you do not have permission to update this category');
    }
    return category;
  } catch (error) {
    throw new Error('Error updating product category: ' + error.message);
  }
};

const deleteProductCategory = async (categoryId, userId) => {
  try {
    const category = await ProductCategory.findOneAndDelete({ _id: categoryId, userId: userId });
    if (!category) {
      throw new Error('Product category not found or you do not have permission to delete this category');
    }
    return { message: 'Product category deleted successfully' };
  } catch (error) {
    throw new Error('Error deleting product category: ' + error.message);
  }
};

module.exports = {
  createProductCategory,
  getAllProductCategories,
  getProductCategoriesByUserId,
  updateProductCategory,
  deleteProductCategory,
};
