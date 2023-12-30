// routes/quotesRoute.js
import { Router } from 'express';
import { param } from 'express-validator';
import { validateParams } from '../utils';

const router = Router();

router.get(
    '/:id',

    [
      param('id').isInt().toInt(),
    ],

    validateParams,
  );



export default router;