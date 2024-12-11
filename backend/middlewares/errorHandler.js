/**
 * errorHandler.js
 * 
 * Purpose:
 * - Centralizes error handling for the application.
 * - Provides consistent error responses for better debugging and user experience.
 */

const errorHandler = (err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    
    res.status(err.status || 500).json({
      message: err.message || 'Internal Server Error',
    });
  };
  
  module.exports = errorHandler;