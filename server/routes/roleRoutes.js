const express = require('express');
const router = express.Router();
const RoleService = require('../services/role');
const { requireUser } = require('./middleware/auth');
const { requireRole } = require('./middleware/roleAuth');
const logger = require('../utils/log')('routes.role');

// Create role
router.post('/', requireUser, requireRole('admin'), async (req, res) => {
  try {
    logger.info('Creating new role');
    const role = await RoleService.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    logger.error('Error creating role:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all roles
router.get('/', requireUser, async (req, res) => {
  try {
    logger.info('Fetching all roles');
    const roles = await RoleService.list();
    res.json(roles);
  } catch (error) {
    logger.error('Error fetching roles:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get role by ID
router.get('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Fetching role with id: ${req.params.id}`);
    const role = await RoleService.get(req.params.id);
    res.json(role);
  } catch (error) {
    logger.error('Error fetching role:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update role
router.put('/:id', requireUser, requireRole('admin'), async (req, res) => {
  try {
    logger.info(`Updating role with id: ${req.params.id}`);
    const role = await RoleService.update(req.params.id, req.body);
    res.json(role);
  } catch (error) {
    logger.error('Error updating role:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete role
router.delete('/:id', requireUser, requireRole('admin'), async (req, res) => {
  try {
    logger.info(`Deleting role with id: ${req.params.id}`);
    await RoleService.delete(req.params.id);
    res.json({ message: 'Role deleted successfully' });
  } catch (error) {
    logger.error('Error deleting role:', error);
    res.status(500).json({ error: error.message });
  }
});

// Assign role to user
router.post('/:id/assign', requireUser, requireRole('admin'), async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const role = await RoleService.assignUserToRole(req.params.id, userId);
    res.json(role);
  } catch (error) {
    logger.error('Error assigning user to role:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;