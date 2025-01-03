const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const logger = require('../utils/log')('leadRoutes');

// Define Lead schema
const leadSchema = new mongoose.Schema({
  name: {
    type: String,  
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  company: String,
  phone: String,
  source: {
    type: String,
    enum: ['contact_form', 'get_started', 'start_trial', 'watch_demo'],
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'unqualified'],
    default: 'new'
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Lead = mongoose.model('Lead', leadSchema);

// Create new lead
router.post('/', async (req, res) => {
  try {
    logger.info('Creating new lead');
    const lead = new Lead(req.body);
    await lead.save();
    logger.info(`Lead created successfully with id: ${lead._id}`);
    res.status(201).json(lead);
  } catch (error) {
    logger.error('Error creating lead: %o', error);
    if (error.code === 11000) { // Duplicate email
      return res.status(409).json({ 
        error: 'A lead with this email already exists' 
      });
    }
    res.status(500).json({ 
      error: 'Error creating lead'
    });
  }
});

// Get all leads
router.get('/', async (req, res) => {
  try {
    logger.info('Fetching all leads');
    const leads = await Lead.find().sort('-createdAt');
    logger.info(`Found ${leads.length} leads`);
    res.json(leads);
  } catch (error) {
    logger.error('Error fetching leads: %o', error);
    res.status(500).json({
      error: 'Error fetching leads'
    });
  }
});

// Get lead by ID 
router.get('/:id', async (req, res) => {
  try {
    logger.info(`Fetching lead with id: ${req.params.id}`);
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      logger.info('Lead not found');
      return res.status(404).json({
        error: 'Lead not found'
      });
    }
    logger.info('Lead found successfully');
    res.json(lead);
  } catch (error) {
    logger.error('Error fetching lead: %o', error);
    res.status(500).json({
      error: 'Error fetching lead'
    });
  }
});

// Update lead
router.put('/:id', async (req, res) => {
  try {
    logger.info(`Updating lead with id: ${req.params.id}`);
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!lead) {
      logger.info('Lead not found');
      return res.status(404).json({
        error: 'Lead not found'
      });
    }
    logger.info('Lead updated successfully');
    res.json(lead);
  } catch (error) {
    logger.error('Error updating lead: %o', error);
    res.status(500).json({
      error: 'Error updating lead'
    });
  }
});

// Delete lead
router.delete('/:id', async (req, res) => {
  try {
    logger.info(`Deleting lead with id: ${req.params.id}`);
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) {
      logger.info('Lead not found');
      return res.status(404).json({
        error: 'Lead not found'
      });
    }
    logger.info('Lead deleted successfully');
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    logger.error('Error deleting lead: %o', error);
    res.status(500).json({
      error: 'Error deleting lead' 
    });
  }
});

module.exports = router;