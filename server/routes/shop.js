const express = require('express');
const { createShopController, getAllShopsController, getShopsByUserIdController, getShopByIdController } = require('../controller/shop');
const { addShopLogoController, upload: uploadLogo } = require('../controller/logo');
const { addCoverImageController, upload: uploadCoverImage } = require('../controller/cover');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Shop
 *     description: Shop management
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       properties:
 *         street_address:
 *           type: string
 *         country:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         zip:
 *           type: string
 * 
 *     Image:
 *       type: object
 *       properties:
 *         original:
 *           type: string
 *         thumbnail:
 *           type: string
 *         id:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 * 
 *     Location:
 *       type: object
 *       properties:
 *         lat:
 *           type: string
 *         lng:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         country:
 *           type: string
 *         zip:
 *           type: string
 *         formattedAddress:
 *           type: string
 * 
 *     Settings:
 *       type: object
 *       properties:
 *         socials:
 *           type: object
 *         contact:
 *           type: object
 *         location:
 *           $ref: '#/components/schemas/Location'
 *         website:
 *           type: string
 * 
 *     Balance:
 *       type: object
 *       properties:
 *         walletId:
 *           type: string
 *         total_earnings:
 *           type: number
 *         withdrawn_amount:
 *           type: number
 *         current_balance:
 *           type: number
 *         payment_info:
 *           type: object
 * 
 *     Shop:
 *       type: object
 *       required:
 *         - categories
 *         - userId
 *         - name
 *         - settings
 *       properties:
 *         categories:
 *           type: array
 *           items:
 *             type: string
 *         userId:
 *           type: string
 *         callToAction:
 *           type: string
 *         BannerText:
 *           type: string
 *         aboutMe:
 *           type: string
 *         name:
 *           type: string
 *         address:
 *           $ref: '#/components/schemas/Address'
 *         description:
 *           type: string
 *         aboutMeImage:
 *           $ref: '#/components/schemas/Image'
 *         cover_image:
 *           $ref: '#/components/schemas/Image'
 *         logo:
 *           $ref: '#/components/schemas/Image'
 *         settings:
 *           $ref: '#/components/schemas/Settings'
 *         balance:
 *           $ref: '#/components/schemas/Balance'
 *
 *     File:
 *       type: object
 *       properties:
 *         file:
 *           type: string
 *           format: binary
 */

/**
 * @swagger
 * /shop/all:
 *   get:
 *     summary: Retrieve a list of all shops
 *     tags: [Shop]
 *     responses:
 *       200:
 *         description: A list of shops
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Shop'
 *       500:
 *         description: Server error
 */
router.get('/all', getAllShopsController);

/**
 * @swagger
 * /shop/create:
 *   post:
 *     summary: Create a new shop
 *     tags: [Shop]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Shop'
 *     responses:
 *       200:
 *         description: Shop created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Shop'
 *       400:
 *         description: Bad request
 */
router.post('/create', createShopController);

/**
 * @swagger
 * /shop/:shopId/logo:
 *   post:
 *     summary: Add logo to a shop
 *     tags: [Shop]
 *     parameters:
 *       - name: shopId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/File'
 *     responses:
 *       200:
 *         description: Shop logo added successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Shop not found
 */
router.post('/:shopId/logo', uploadLogo, addShopLogoController);



/**
 * @swagger
 * /shop/cover/{shopId}:
 *   post:
 *     summary: Add cover image to a shop
 *     tags: [Shop]
 *     parameters:
 *       - name: shopId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/File'
 *     responses:
 *       200:
 *         description: Cover image added successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Shop not found
 */
router.post('/cover/:shopId', uploadCoverImage, addCoverImageController);

/**
 * @swagger
 * /shop/user/{userId}:
 *   get:
 *     summary: Get all shops by user ID
 *     tags: [Shop]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of shops retrieved successfully
 *       404:
 *         description: No shops found for the given user ID
 *       500:
 *         description: Server error
 */
router.get('/user/:userId', getShopsByUserIdController);

/**
 * @swagger
 * /shop/{shopId}:
 *   get:
 *     summary: Get a shop by its ID
 *     tags: [Shop]
 *     parameters:
 *       - name: shopId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shop retrieved successfully
 *       404:
 *         description: Shop not found
 *       500:
 *         description: Server error
 */
router.get('/:shopId', getShopByIdController);

module.exports = router;
