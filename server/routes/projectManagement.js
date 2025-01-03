const express = require('express');
const router = express.Router();
const { requireUser } = require('./middleware/auth');

// Placeholder for epic and task data (replace with database integration later)
let epicsAndTasks = [];

// Get all epics and tasks
router.get('/', requireUser, (req, res) => {
  res.json(epicsAndTasks);
});

// Create a new epic or task
router.post('/', requireUser, (req, res) => {
  const { type, title, description } = req.body;
  const newItem = { id: Date.now(), type, title, description };
  epicsAndTasks.push(newItem);
  res.status(201).json(newItem);
});

// Delete an epic or task
router.delete('/:id', requireUser, (req, res) => {
  const id = parseInt(req.params.id);
  epicsAndTasks = epicsAndTasks.filter(item => item.id !== id);
  res.status(204).send();
});

// Clear all epics and tasks 
router.delete('/', requireUser, (req, res) => {
  epicsAndTasks = [];
  res.status(204).send();
});

module.exports = router;