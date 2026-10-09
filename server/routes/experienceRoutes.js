const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

/**
 * @swagger
 * components:
 *   schemas:
 *     Experience:
 *       type: object
 *       required:
 *         - company
 *         - role
 *         - startDate
 *         - description
 *       properties:
 *         company:
 *           type: string
 *         role:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date
 *         endDate:
 *           type: string
 *           format: date
 *         description:
 *           type: string
 *         technologies:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /api/experience:
 *   get:
 *     summary: Get all experiences
 *     tags: [Experience]
 *     responses:
 *       200:
 *         description: List of experiences
 */
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
