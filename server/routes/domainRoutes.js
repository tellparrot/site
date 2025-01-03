const express = require('express');
const router = express.Router();
const DomainService = require('../services/domain');
const { requireUser } = require('./middleware/auth');
const logger = require('../utils/log')('routes.domain');

// Create domain
router.post('/', requireUser, async (req, res) => {
  try {
    logger.info('Creating new domain');
    const domain = await DomainService.create(req.body);
    res.status(201).json(domain);
  } catch (error) {
    logger.error('Error creating domain:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all domains
router.get('/', requireUser, async (req, res) => {
  try {
    logger.info('Fetching all domains');
    const domains = await DomainService.list();
    res.json(domains);
  } catch (error) {
    logger.error('Error fetching domains:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get domain by ID
router.get('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Fetching domain with id: ${req.params.id}`);
    const domain = await DomainService.get(req.params.id);
    res.json(domain);
  } catch (error) {
    logger.error('Error fetching domain:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update domain
router.put('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Updating domain with id: ${req.params.id}`);
    const domain = await DomainService.update(req.params.id, req.body);
    res.json(domain);
  } catch (error) {
    logger.error('Error updating domain:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete domain
router.delete('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Deleting domain with id: ${req.params.id}`);
    await DomainService.delete(req.params.id);
    res.json({ message: 'Domain deleted successfully' });
  } catch (error) {
    logger.error('Error deleting domain:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;