const mongoose = require('mongoose');
const logger = require('../utils/log')('models.role');

logger.info('Defining Role schema...');

try {
  const roleSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    },
    permissions: [{
      type: String,
      required: true,
      trim: true
    }],
    domain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Domain',
      required: true
    },
    assignedUsers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

  logger.info('Role schema details:', {
    fields: Object.keys(roleSchema.paths),
    indexes: roleSchema.indexes()
  });

  logger.info('Role indexes before creation:', {
    indexes: roleSchema.indexes()
  });

  logger.info('Creating domain index...');
  roleSchema.index({ domain: 1 });

  logger.info('Role indexes after creation:', {
    indexes: roleSchema.indexes()
  });

  roleSchema.pre('save', function(next) {
    logger.info({
      msg: 'Saving role',
      name: this.name,
      domain: this.domain
    });
    this.updatedAt = Date.now();
    next();
  });

  roleSchema.post('save', function(doc) {
    logger.info({
      msg: 'Role saved successfully',
      id: doc._id,
      name: doc.name
    });
  });

  logger.info('Starting Role model compilation...');
  try {
    const Role = mongoose.model('Role', roleSchema);
    logger.info('Role model compiled successfully');
    module.exports = Role;
  } catch (compileError) {
    logger.fatal('Role model compilation error:', {
      error: compileError.message,
      stack: compileError.stack,
      name: compileError.name,
      code: compileError.code,
      modelName: 'Role'
    });
    throw compileError;
  }
} catch (error) {
  logger.fatal('Role schema error:', {
    message: error.message,
    stack: error.stack,
    name: error.name,
    code: error.code,
    fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
  });
  throw error;
}