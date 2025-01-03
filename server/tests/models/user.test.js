const mongoose = require('mongoose');
const { connect, closeDatabase, clearDatabase } = require('../setup');
const User = require('../../models/User');
const logger = require('../../utils/log')('test.user');

beforeAll(async () => {
  logger.info('Starting User model tests');
  await connect();
});

afterEach(async () => {
  logger.info('Cleaning up after test');
  await clearDatabase();
});

afterAll(async () => {
  logger.info('Completing User model tests');
  await closeDatabase();
});

describe('User Model Test', () => {
  it('should create & save user successfully', async () => {
    logger.info('Testing user creation and save');
    
    const validUser = new User({
      email: 'test@test.com',
      password: '$2b$10$A7ua8YHaJHYX52nt5hF.IO0o0iR6juDYp0UeVlwCNVYg1hZGgqhlG', // hashed 'password123'
      name: 'Test User'
    });
    
    const savedUser = await validUser.save();
    
    logger.info('User saved successfully');

    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(validUser.email);
    expect(savedUser.name).toBe(validUser.name);
    expect(savedUser.createdAt).toBeDefined();
    expect(savedUser.lastLoginAt).toBeDefined();
    expect(savedUser.isActive).toBe(true);
    expect(savedUser.token).toBeDefined();
  });

  it('should fail to save user without required email', async () => {
    logger.info('Testing user creation without email');
    
    const userWithoutEmail = new User({
      password: '$2b$10$A7ua8YHaJHYX52nt5hF.IO0o0iR6juDYp0UeVlwCNVYg1hZGgqhlG',
      name: 'Test User'
    });

    let err;
    try {
      await userWithoutEmail.save();
    } catch (error) {
      err = error;
    }

    logger.info('Validation error caught as expected');
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('should fail to save user without required password', async () => {
    logger.info('Testing user creation without password');
    
    const userWithoutPassword = new User({
      email: 'test@test.com',
      name: 'Test User'
    });

    let err;
    try {
      await userWithoutPassword.save();
    } catch (error) {
      err = error;
    }

    logger.info('Validation error caught as expected');
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.password).toBeDefined();
  });

  it('should fail to save user with invalid password hash', async () => {
    logger.info('Testing user creation with invalid password hash');
    
    const userWithInvalidHash = new User({
      email: 'test@test.com',
      password: 'not-a-hash',
      name: 'Test User'
    });

    let err;
    try {
      await userWithInvalidHash.save();
    } catch (error) {
      err = error;
    }

    logger.info('Validation error caught as expected');
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.password).toBeDefined();
  });

  it('should fail to save duplicate email', async () => {
    logger.info('Testing duplicate email validation');
    
    const firstUser = new User({
      email: 'test@test.com',
      password: '$2b$10$A7ua8YHaJHYX52nt5hF.IO0o0iR6juDYp0UeVlwCNVYg1hZGgqhlG',
      name: 'Test User 1'
    });

    await firstUser.save();

    const duplicateUser = new User({
      email: 'test@test.com',
      password: '$2b$10$A7ua8YHaJHYX52nt5hF.IO0o0iR6juDYp0UeVlwCNVYg1hZGgqhlG',
      name: 'Test User 2'
    });

    let err;
    try {
      await duplicateUser.save();
    } catch (error) {
      err = error;
    }

    logger.info('Duplicate key error caught as expected');
    expect(err).toBeDefined();
    expect(err.code).toBe(11000); // MongoDB duplicate key error code
  });

  it('should save user with optional fields undefined', async () => {
    logger.info('Testing user creation with minimal required fields');
    
    const minimalUser = new User({
      email: 'minimal@test.com',
      password: '$2b$10$A7ua8YHaJHYX52nt5hF.IO0o0iR6juDYp0UeVlwCNVYg1hZGgqhlG'
    });

    const savedUser = await minimalUser.save();
    
    logger.info('Minimal user saved successfully');
    expect(savedUser.email).toBe(minimalUser.email);
    expect(savedUser.name).toBe('');
    expect(savedUser.isActive).toBe(true);
  });

  it('should convert email to lowercase before saving', async () => {
    logger.info('Testing email case conversion');
    
    const upperCaseEmailUser = new User({
      email: 'TEST@TEST.COM',
      password: '$2b$10$A7ua8YHaJHYX52nt5hF.IO0o0iR6juDYp0UeVlwCNVYg1hZGgqhlG',
      name: 'Test User'
    });

    const savedUser = await upperCaseEmailUser.save();
    
    logger.info('User with converted email saved successfully');
    expect(savedUser.email).toBe('test@test.com');
  });
});