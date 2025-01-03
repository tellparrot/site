const mongoose = require('mongoose');
const logger = require('../utils/log')('models.newsletter');

logger.info('Defining Newsletter schema...');

try {
  const newsletterSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function(v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    name: {
      type: String,
      trim: true,
      default: ''
    },
    status: {
      type: String,
      enum: ['subscribed', 'unsubscribed', 'bounced'],
      default: 'subscribed'
    },
    subscribeDate: {
      type: Date,
      default: Date.now
    },
    unsubscribeDate: {
      type: Date
    },
    lastEmailSent: {
      type: Date
    }
  });

  logger.info('Newsletter schema paths:', {
    paths: Object.keys(newsletterSchema.paths)
  });

  logger.info('Newsletter indexes before creation:', {
    indexes: newsletterSchema.indexes()
  });

  logger.info('Creating email index...');
  newsletterSchema.index({ email: 1 });

  logger.info('Creating status index...');
  newsletterSchema.index({ status: 1 });

  logger.info('Newsletter indexes after creation:', {
    indexes: newsletterSchema.indexes()
  });

  try {
    const Newsletter = mongoose.model('Newsletter', newsletterSchema);
    logger.info('Newsletter model compiled successfully');
    module.exports = Newsletter;
  } catch (compileError) {
    logger.fatal('Newsletter model compilation error:', {
      error: compileError.message,
      stack: compileError.stack,
      name: compileError.name,
      code: compileError.code,
      modelName: 'Newsletter'
    });
    throw compileError;
  }
} catch (error) {
  logger.fatal('Newsletter schema error:', {
    message: error.message,
    stack: error.stack,
    name: error.name,
    code: error.code,
    fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
  });
  throw error;
}