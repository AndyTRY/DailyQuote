import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quotes API',
      version: '1.0.0',
      description: 'API for daily quotes',
    },
  },
  apis: ['server/routes/*.ts'], // Need server/* since we are running server from parent directory
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export { swaggerUi, swaggerSpec };