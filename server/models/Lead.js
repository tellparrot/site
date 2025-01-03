const mongoose = require('mongoose');
const { logger } = require('../utils/log');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true
  },
  company: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    size: {
      type: String,
      enum: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'],
      required: true
    }
  },
  phone: {
    type: String,
    trim: true
  },
  source: {
    type: String,
    enum: ['contact_form', 'get_started', 'start_trial', 'watch_demo'],
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'not_qualified', 'customer'],
    default: 'new'
  },
  notes: [{
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
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

// Index for common queries
leadSchema.index({ company: 1, status: 1 });
leadSchema.index({ createdAt: -1 });

// Logging changes to leads
leadSchema.post('save', function(doc) {
  logger('lead').info({ msg: 'New lead created', id: doc._id, email: doc.email });
});

leadSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Prevent duplicate leads based on email
leadSchema.pre('validate', async function(next) {
  try {
    const existingLead = await this.constructor.findOne({ email: this.email });
    if (existingLead && !this._id) {
      throw new Error('A lead with this email already exists');
    }
    next();
  } catch (error) {
    logger('lead').error({
      msg: 'Error validating lead',
      error: error.message,
      stack: error.stack
    });
    next(error);
  }
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;