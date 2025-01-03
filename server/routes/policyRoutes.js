const express = require('express');
const router = express.Router();
const PolicyService = require('../services/policy');
const { requireUser } = require('./middleware/auth');
const logger = require('../utils/log')('routes.policy');

// Create policy
router.post('/', requireUser, async (req, res) => {
  try {
    logger.info('Creating new policy');
    const policy = await PolicyService.create(req.body);
    res.status(201).json(policy);
  } catch (error) {
    logger.error('Error creating policy:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all policies
router.get('/', requireUser, async (req, res) => {
  try {
    logger.info('Fetching all policies');
    const policies = await PolicyService.list(req.query);
    res.json(policies);
  } catch (error) {
    logger.error('Error fetching policies:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get policy by ID
router.get('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Fetching policy with id: ${req.params.id}`);
    const policy = await PolicyService.get(req.params.id);
    res.json(policy);
  } catch (error) {
    logger.error('Error fetching policy:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update policy
router.put('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Updating policy with id: ${req.params.id}`);
    const policy = await PolicyService.update(req.params.id, req.body);
    res.json(policy);
  } catch (error) {
    logger.error('Error updating policy:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete policy
router.delete('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Deleting policy with id: ${req.params.id}`);
    await PolicyService.delete(req.params.id);
    res.json({ message: 'Policy deleted successfully' });
  } catch (error) {
    logger.error('Error deleting policy:', error);
    res.status(500).json({ error: error.message });
  }
});

// Activate policy
router.post('/:id/activate', requireUser, async (req, res) => {
  try {
    logger.info(`Activating policy with id: ${req.params.id}`);
    const policy = await PolicyService.activatePolicy(req.params.id);
    res.json(policy);
  } catch (error) {
    logger.error('Error activating policy:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;