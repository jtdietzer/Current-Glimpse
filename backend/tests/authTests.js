/**
 * authTests.js
 * 
 * Purpose:
 * - Tests the authentication-related API endpoints to ensure user registration, login, 
 *   and token generation work correctly.
 * - Uses Jest and Supertest for integration testing.
 */

const request = require('supertest');
const app = require('../server'); // Import your Express app

describe('Authentication API Endpoints', () => {
  /**
   * Test: User Registration
   * - Verifies that a user can register successfully.
   * - Checks for valid responses and required fields.
   */
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toHaveProperty('id');
  });

  /**
   * Test: User Login
   * - Verifies that a user can log in successfully.
   * - Checks if a valid token is returned upon login.
   */
  it('should log in a user and return a token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Login successful');
    expect(res.body).toHaveProperty('token');
  });

  /**
   * Test: Invalid Credentials
   * - Verifies that invalid login credentials return an error.
   */
  it('should return 400 for invalid login credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'wronguser',
        password: 'wrongpassword',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message', 'Invalid credentials');
  });

  /**
   * Test: Missing Fields
   * - Verifies that registration or login requests with missing fields return an error.
   */
  it('should return 400 for missing fields in registration', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: '',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('message');
  });
});