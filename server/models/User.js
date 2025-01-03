const mongoose = require('mongoose');
const { validatePassword, isPasswordHash } = require('../utils/password.js');
const { randomUUID } = require("crypto");
const logger = require('../utils/log')('models.user');

logger.info('Defining User schema...');

try {
  const schema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      validate: { validator: isPasswordHash, message: 'Invalid password hash' },
    },
    name: {
      type: String,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    lastLoginAt: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    token: {
      type: String,
      unique: true,
      sparse: true,
      default: () => randomUUID(),
    },
    refreshToken: {
      type: String,
      sparse: true
    }
  }, {
    versionKey: false,
  });

  logger.info('User schema details:', {
    fields: Object.keys(schema.paths),
    indexes: schema.indexes()
  });

  logger.info('User indexes before creation:', {
    indexes: schema.indexes()
  });

  logger.info('User indexes after creation:', {
    indexes: schema.indexes()
  });

  schema.set('toJSON', {
    transform: (doc, ret, options) => {
      delete ret._id;
      delete ret.password;
      return ret;
    },
  });

  logger.info('Starting User model compilation...');
  try {
    const User = mongoose.model('User', schema);
    logger.info('User model compiled successfully');
    module.exports = User;
  } catch (compileError) {
    logger.fatal('Error compiling User model:', {
      error: compileError.message,
      stack: compileError.stack,
      name: compileError.name,
      code: compileError.code,
      modelName: 'User',
      fullError: JSON.stringify(compileError, Object.getOwnPropertyNames(compileError))
    });
    throw compileError;
  }
} catch (error) {
  logger.fatal('User schema error:', {
    message: error.message,
    stack: error.stack,
    name: error.name,
    code: error.code,
    fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
  });
  throw error;
}