const request = require('supertest');
const app = require('../../server');
const { connect, closeDatabase, clearDatabase } = require('../setup');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

beforeAll(async () => await connect());
afterEach(async () => await clearDatabase());
afterAll(async () => await closeDatabase());

describe('Auth Routes', () => {
  describe('POST /api/auth/register', () => {
    it('should create a new user', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@test.com',
          password: 'password123',
          name: 'Test User'
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.email).toBe('test@test.com');
      expect(res.body.name).toBe('Test User');
    });

    it('should fail with duplicate email', async () => {
      // First create a user
      await request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@test.com',
          password: 'password123',
          name: 'Test User'
        });

      // Try to create another user with same email
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@test.com',
          password: 'password456',
          name: 'Another User'
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBeDefined();
    });
  });

  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      const hashedPassword = await bcrypt.hash('password123', 10);
      await User.create({
        email: 'test@test.com',
        password: hashedPassword,
        name: 'Test User'
      });
    });

    it('should login successfully with correct credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@test.com',
          password: 'password123'
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.accessToken).toBeDefined();
    });

    it('should fail with incorrect password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@test.com',
          password: 'wrongpassword'
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe('Email or password is incorrect');
    });
  });

  describe('POST /api/auth/logout', () => {
    let token;

    beforeEach(async () => {
      const hashedPassword = await bcrypt.hash('password123', 10);
      const user = await User.create({
        email: 'test@test.com',
        password: hashedPassword,
        name: 'Test User'
      });

      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@test.com',
          password: 'password123'
        });

      token = loginRes.body.accessToken;
    });

    it('should successfully logout', async () => {
      const res = await request(app)
        .post('/api/auth/logout')
        .set('Authorization', `Bearer ${token}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('User logged out successfully.');
    });

    it('should fail logout without token', async () => {
      const res = await request(app)
        .post('/api/auth/logout');

      expect(res.statusCode).toBe(403);
    });
  });

  describe('GET /api/auth/me', () => {
    let token;

    beforeEach(async () => {
      const hashedPassword = await bcrypt.hash('password123', 10);
      const user = await User.create({
        email: 'test@test.com',
        password: hashedPassword,
        name: 'Test User'
      });

      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@test.com',
          password: 'password123'
        });

      token = loginRes.body.accessToken;
    });

    it('should return user profile when authenticated', async () => {
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${token}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.email).toBe('test@test.com');
      expect(res.body.name).toBe('Test User');
    });

    it('should fail without authentication', async () => {
      const res = await request(app)
        .get('/api/auth/me');

      expect(res.statusCode).toBe(403);
    });
  });
});