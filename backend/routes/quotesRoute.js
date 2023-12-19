// routes/quotesRoute.js
const express = require('express');
const quotesController = require('../controllers/quotesController');

const router = express.Router();


/**
 * @swagger
 * /quote/{id}:
 *   get:
 *     summary: Get a quote by ID
 *     parameters: [{ in: path, name: id, schema: { type: string }, description: "ID of the quote" }]
 *     responses: { 200: { description: "Success" }, 404: { description: "Not found" } }
 */
router.get('/:id', quotesController.getById);


module.exports = router;