// Import required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const articleRoutes = require('./routes/articleRoutes');
const verificationRoutes = require('./routes/verificationRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(morgan('dev')); // Logging middleware for development
app.use(cors()); // Enable Cross-Origin Resource Sharing

// API Routes
app.use('/api/articles', articleRoutes); // Routes for articles
app.use('/api/verify', verificationRoutes); // Routes for verification

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Current Glimpse Backend API!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
});

// Export the app for server.js or testing purposes
module.exports = app;