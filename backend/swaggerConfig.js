const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quotes API',
      version: '1.0.0',
      description: 'API for daily quotes',
    },
  },
  apis: ['./routes/*.js'], //files containing your route definitions
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpec };