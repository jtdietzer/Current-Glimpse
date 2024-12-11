/**
 * rateLimiter.js
 * 
 * Purpose:
 * - Implements rate-limiting to protect the application from abuse.
 * - Limits the number of requests a client can make in a specific timeframe.
 */

const rateLimit = require('express-rate-limit');

/**
 * Create a rate limiter instance
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    message: 'Too many requests from this IP, please try again later.',
  },
});

module.exports = limiter;