import express from 'express';
import quotesValidationRoute from './routes/quotesRoute'

const router = express.Router();

// router.use('/user', express.json(), express.urlencoded({ extended: true }), validateUserParams);
router.use('/quote', quotesValidationRoute);

export default router;