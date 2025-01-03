const express = require('express');
const router = express.Router();
const TaskService = require('../services/task');
const { requireUser } = require('./middleware/auth');
const logger = require('../utils/log')('routes.task');

// Create task
router.post('/', requireUser, async (req, res) => {
  try {
    logger.info('Creating new task');
    const task = await TaskService.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(task);
  } catch (error) {
    logger.error('Error creating task:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all tasks
router.get('/', requireUser, async (req, res) => {
  try {
    logger.info('Fetching all tasks');
    const tasks = await TaskService.list(req.query);
    res.json(tasks);
  } catch (error) {
    logger.error('Error fetching tasks:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get task by ID
router.get('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Fetching task with id: ${req.params.id}`);
    const task = await TaskService.get(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    logger.error('Error fetching task:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update task
router.put('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Updating task with id: ${req.params.id}`);
    const task = await TaskService.update(req.params.id, req.body);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    logger.error('Error updating task:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete task
router.delete('/:id', requireUser, async (req, res) => {
  try {
    logger.info(`Deleting task with id: ${req.params.id}`);
    const success = await TaskService.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    logger.error('Error deleting task:', error);
    res.status(500).json({ error: error.message });
  }
});

// Complete task
router.put('/:id/complete', requireUser, async (req, res) => {
  try {
    logger.info(`Marking task ${req.params.id} as completed`);
    const task = await TaskService.complete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    logger.error('Error completing task:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;