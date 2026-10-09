const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Developer Portfolio API',
    version: '1.0.0',
    description: 'REST API documentation for the Developer Portfolio backend.',
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./server/routes/*.js'], // Path to the API routes files for annotations
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
