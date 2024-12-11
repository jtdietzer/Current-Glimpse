/**
 * validationMiddleware.js
 * 
 * Purpose:
 * - This middleware validates incoming request data against predefined schemas.
 * - Ensures that invalid or malicious data is blocked before reaching the controllers.
 * 
 * Use Libraries:
 * - Joi, express-validator, or any schema validation library.
 */

const Joi = require('joi');

/**
 * Middleware for validating request data using Joi schemas
 * @param {Object} schema - Joi validation schema
 */
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    next();
  };
};

module.exports = validate;