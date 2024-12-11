/**
 * cacheService.js
 * 
 * Purpose:
 * - This file handles caching functionality for the application.
 * - Uses Redis to cache frequently accessed data (e.g., news articles, verification results).
 * - Improves application performance by reducing database queries.
 */

const redis = require('redis');

// Create a Redis client
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
});

// Connect to Redis
redisClient.on('connect', () => console.log('Connected to Redis.'));
redisClient.on('error', (err) => console.error('Redis error:', err));

/**
 * Function to set cache data
 * @param {string} key - The key for the cache entry
 * @param {any} value - The data to cache
 * @param {number} duration - Time-to-live in seconds
 */
const setCache = (key, value, duration = 3600) => {
  redisClient.setex(key, duration, JSON.stringify(value));
};

/**
 * Function to get cache data
 * @param {string} key - The key for the cache entry
 * @returns {Promise<any>} - The cached data or null if not found
 */
const getCache = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, data) => {
      if (err) reject(err);
      resolve(data ? JSON.parse(data) : null);
    });
  });
};

module.exports = { setCache, getCache };