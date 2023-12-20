// routes/quotesRoute.js
import { Router } from 'express';
import quotesController from '@controllers/quotesController';

const router = Router();

/**
 * @swagger
 * /quote/{id}:
 *   get:
 *     summary: Get a quote by ID
 *     parameters: [{ in: path, name: id, schema: { type: string }, description: "ID of the quote" }]
 *     responses: { 200: { description: "Success" }, 404: { description: "Not found" } }
 */
router.get('/:id', quotesController.getById);



export default router;