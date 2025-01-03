const Task = require('../models/Task');
const logger = require('../utils/log')('taskService');

class TaskService {
  static async create(data) {
    try {
      const task = new Task(data);
      await task.save();
      logger.info('Task created successfully', { id: task._id });
      return task;
    } catch (error) {
      logger.error('Error creating task', { error: error.message });
      throw new Error(`Failed to create task: ${error.message}`);
    }
  }

  static async list(filters = {}) {
    try {
      const tasks = await Task.find(filters)
        .populate('assignedTo')
        .populate('domain')
        .populate('createdBy');
      return tasks;
    } catch (error) {
      logger.error('Error listing tasks', { error: error.message });
      throw new Error(`Failed to list tasks: ${error.message}`);
    }
  }

  static async get(id) {
    try {
      const task = await Task.findById(id)
        .populate('assignedTo')
        .populate('domain')
        .populate('createdBy');
      if (!task) {
        throw new Error('Task not found');
      }
      return task;
    } catch (error) {
      logger.error('Error getting task', { id, error: error.message });
      throw new Error(`Failed to get task: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const task = await Task.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
      )
        .populate('assignedTo')
        .populate('domain')
        .populate('createdBy');

      if (!task) {
        throw new Error('Task not found');
      }

      logger.info('Task updated successfully', { id });
      return task;
    } catch (error) {
      logger.error('Error updating task', { id, error: error.message });
      throw new Error(`Failed to update task: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        throw new Error('Task not found');
      }
      logger.info('Task deleted successfully', { id });
      return task;
    } catch (error) {
      logger.error('Error deleting task', { id, error: error.message });
      throw new Error(`Failed to delete task: ${error.message}`);
    }
  }

  static async completeTask(id) {
    try {
      const task = await Task.findById(id);
      if (!task) {
        throw new Error('Task not found');
      }

      task.status = 'completed';
      task.completedAt = new Date();
      await task.save();

      logger.info('Task marked as completed', { id });
      return task;
    } catch (error) {
      logger.error('Error completing task', { id, error: error.message });
      throw new Error(`Failed to complete task: ${error.message}`);
    }
  }
}

module.exports = TaskService;