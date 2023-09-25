const express = require('express');
const { GetAnnualReportController, getProformaController } = require('../controller/ai/index');
const router = express.Router();



/**
 * @swagger
 * tags:
 *   name: AI
 *   description: AI management
 */


/**
 * @swagger
 * /ai/report:
 *   get:
 *     summary: Get Annual Report
 *     tags: [AI]
 *     responses:
 *       200:
 *         description: List of Annual Report
 *       500:
 *         description: Server error
 */
router.get('/report', GetAnnualReportController);






/**
 * @swagger
 * /ai/proforma:
 *   get:
 *     summary: Get all proforma
 *     tags: [AI]
 *     responses:
 *       200:
 *         description: List of proforma
 *       500:
 *         description: Server error
 */
router.get('/proforma', getProformaController);

module.exports = router;
