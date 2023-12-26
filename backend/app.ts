import express from 'express';
import { swaggerUi, swaggerSpec } from './swaggerConfig';
import logging from './middlewares/logging';
import quotesRoute from './routes/quotesRoute';
import requestSchemaValidationMiddleware from './middlewares/requestSchemaValidation/index'

const NAMESPACE: string = 'App';
const app = express();
const port = 3000;
console.log("ENV Vars:", process.env);


// Logging
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
	logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
	res.on('finish', () => {
		logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
	});
	next();
});

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Request Schema Validation
app.use(requestSchemaValidationMiddleware)

// Routes
app.use('/quote', quotesRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});