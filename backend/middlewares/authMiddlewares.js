/**
 * authMiddleware.js
 * 
 * Purpose:
 * - This middleware ensures that only authenticated users can access certain routes.
 * - It verifies JSON Web Tokens (JWT) sent in the request headers.
 * - Protects sensitive or restricted API endpoints from unauthorized access.
 */

const jwt = require('jsonwebtoken');

/**
 * Middleware function to verify JWT tokens
 */
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach decoded token to the request object
    next(); // Proceed to the next middleware or route
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;