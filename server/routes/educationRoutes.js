const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

/**
 * @swagger
 * components:
 *   schemas:
 *     Education:
 *       type: object
 *       required:
 *         - institution
 *         - degree
 *         - department
 *         - startDate
 *       properties:
 *         institution:
 *           type: string
 *         degree:
 *           type: string
 *         department:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date
 *         endDate:
 *           type: string
 *           format: date
 */

/**
 * @swagger
 * /api/education:
 *   get:
 *     summary: Get all education entries
 *     tags: [Education]
 *     responses:
 *       200:
 *         description: List of education entries
 */
router.get('/', async (req, res) => {
  try {
    const education = await Education.find({});
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
