const express = require('express');
const {
  createProductCategoryController,
  getAllProductCategoriesController,
  getProductCategoriesByUserIdController,
  updateProductCategoryController,
  deleteProductCategoryController
} = require('../controller/productCategory/productCategory');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Product Category
 *   description: Product Category management
 */


/**
 * @swagger
 * /product-category/add:
 *   post:
 *     summary: Create a new product category
 *     tags: [Product Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Electronics
 *               description:
 *                 type: string
 *                 example: A category for all electronic products
 *             required:
 *               - name
 *               - description
 *     responses:
 *       201:
 *         description: Product category created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

router.post('/add', createProductCategoryController);

/**
 * @swagger
 * /product-category/get:
 *   get:
 *     summary: Get all product categories
 *     tags: [Product Category]
 *     responses:
 *       200:
 *         description: List of all product categories retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/get', getAllProductCategoriesController);



/**
 * @swagger
 * /product-category/user/{userId}:
 *   get:
 *     summary: Get all product categories by user ID
 *     tags: [Product Category]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of product categories retrieved successfully
 *       404:
 *         description: No categories found for the given user ID
 *       500:
 *         description: Server error
 */
router.get('/user/:userId', getProductCategoriesByUserIdController);

/**
 * @swagger
 * /product-category/{categoryId}:
 *   put:
 *     summary: Update a product category
 *     tags: [Product Category]
 *     parameters:
 *       - name: categoryId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductCategory'
 *     responses:
 *       200:
 *         description: Product category updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Product category not found
 *       500:
 *         description: Server error
 */
router.put('/:categoryId', updateProductCategoryController);

/**
 * @swagger
 * /product-category/{categoryId}:
 *   delete:
 *     summary: Delete a product category
 *     tags: [Product Category]
 *     parameters:
 *       - name: categoryId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product category deleted successfully
 *       404:
 *         description: Product category not found
 *       500:
 *         description: Server error
 */
router.delete('/:categoryId', deleteProductCategoryController);


module.exports = router;