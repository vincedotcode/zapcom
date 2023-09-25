const express = require('express');
const { getAllTables } = require('../controller/ai/index');
const router = express.Router();



/**
 * @swagger
 * tags:
 *   name: AI
 *   description: AI management
 */


/**
 * @swagger
 * /ai/get:
 *   get:
 *     summary: Get all AI
 *     tags: [AI]
 *     responses:
 *       200:
 *         description: List of all AI tables retrieved successfully
 *       500:
 *         description: Server error
 */
router.get('/get', getAllTables);

module.exports = router;
