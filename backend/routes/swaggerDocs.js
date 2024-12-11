/**
 * swaggerDocs.js
 * 
 * Purpose:
 * - This file sets up API documentation using Swagger.
 * - It provides a UI for testing and exploring the available endpoints.
 */

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/**
 * Swagger configuration options
 */
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Current Glimpse API',
      version: '1.0.0',
      description: 'API documentation for Current Glimpse backend.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log('Swagger Docs available at /api-docs');
};