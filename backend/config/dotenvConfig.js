/**
 * dotenvConfig.js
 * 
 * Purpose:
 * - Loads environment variables from a `.env` file into `process.env`.
 * - Ensures sensitive data (e.g., API keys, database credentials) are not hard-coded.
 */

const dotenv = require('dotenv');

// Load the environment variables
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
};