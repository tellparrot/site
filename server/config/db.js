const mongoose = require('mongoose');
const logger = require('../utils/log')('database');

const connectDB = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not defined');
    }

    const conn = await mongoose.connect(process.env.DATABASE_URL);

    logger.info(`MongoDB Connected: ${conn.connection.host}`);

    // Add detailed DB configuration logging
    logger.info('Database configuration:', {
      name: conn.connection.name,
      models: Object.keys(conn.models),
      collections: await conn.connection.db.listCollections().toArray()
    });

    // Handle connection events
    mongoose.connection.on('error', (err) => {
      logger.error('MongoDB connection error:', {
        message: err.message,
        stack: err.stack,
        code: err.code
      });
    });

    mongoose.connection.on('disconnected', () => {
      logger.warn('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      logger.info('MongoDB reconnected');
    });

    mongoose.connection.on('connected', () => {
      console.log('MongoDB connection state:', mongoose.connection.readyState);
      console.log('Connected to database:', mongoose.connection.name);
    });

    // Handle process termination
    process.on('SIGINT', async () => {
      try {
        await mongoose.connection.close();
        logger.info('MongoDB connection closed through app termination');
        process.exit(0);
      } catch (err) {
        logger.error('Error closing MongoDB connection:', err);
        process.exit(1);
      }
    });

    return conn;
  } catch (error) {
    logger.error('MongoDB connection error:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    throw error;
  }
};

module.exports = connectDB;