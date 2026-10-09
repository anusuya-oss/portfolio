const express = require('express');
const router = express.Router();
const Certification = require('../models/Certification');

/**
 * @swagger
 * /api/certifications:
 *   get:
 *     summary: Get all certifications
 *     tags: [Certifications]
 *     responses:
 *       200:
 *         description: List of certifications
 */
router.get('/', async (req, res) => {
  try {
    const certs = await Certification.find({});
    res.json(certs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
