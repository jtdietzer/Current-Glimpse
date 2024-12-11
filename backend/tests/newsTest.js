/**
 * newsTest.js
 * 
 * Purpose:
 * - Tests the news-related API endpoints for correctness and reliability.
 * - Uses Jest and Supertest for integration testing.
 */

const request = require('supertest');
const app = require('../server'); // Import your Express app

describe('News API Endpoints', () => {
  it('should fetch all articles', async () => {
    const res = await request(app).get('/api/news');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should fetch a single article by ID', async () => {
    const res = await request(app).get('/api/news/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should return 404 if article is not found', async () => {
    const res = await request(app).get('/api/news/999');
    expect(res.statusCode).toEqual(404);
  });
});