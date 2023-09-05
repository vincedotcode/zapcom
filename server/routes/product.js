const express = require('express');
const {
    addProductController,
    getProductsByUserIdController,
    getAllProducts
} = require('../controller/product');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products management
 */


/**
 * @swagger
 * /product/add:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *                 description: The ID of the user who is adding the product.
 *                 example: 613b3c7b8c4f4b0048d1e4d3
 *               name:
 *                 type: string
 *                 description: The name of the product.
 *                 example: Apple iPhone 13
 *               description:
 *                 type: string
 *                 description: A detailed description of the product.
 *                 example: A brand-new Apple iPhone 13 with 128GB storage.
 *               categoryId:
 *                 type: string
 *                 description: The category of the product.
 *                 example: 64f5a0ed6e8dfed342982af5
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the product.
 *                 example: 999.99
 *               stock:
 *                 type: integer
 *                 description: The number of items in stock.
 *                 example: 50
 *               sku:
 *                 type: string
 *                 description: The stock-keeping unit identifier.
 *                 example: APPL-IP13-128GB
 *               quantity:
 *                 type: integer
 *                 description: The number of items in stock.
 *                 example: 50
 *             required:
 *               - userId
 *               - name
 *               - description
 *               - category
 *               - price
 *               - stock
 *               - sku
 *     responses:
 *       201:
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */


router.post('/add', addProductController);



/**
 * @swagger
 * /product/user/{userId}:
 *   get:
 *     summary: Get products by user ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         example: 613b3c7b8c4f4b0048d1e4d3
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */

router.get('/user/:userId', getProductsByUserIdController);


/**
 * @swagger
 * /product/get:
 *   get:
 *     summary: Get all product
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all product categories retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/get', getAllProducts);

module.exports = router;