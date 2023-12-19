const express = require('express');
const { swaggerUi, swaggerSpec } = require('./swaggerConfig');
const quotesRoute = require('./routes/quotesRoute');

const app = express();
const port = 3000;
console.log("ENV Vars:",process.env)

// Middleware, etc
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/quote', quotesRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});