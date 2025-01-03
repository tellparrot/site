const Policy = require('../models/Policy');
const logger = require('../utils/log')('policyService');

class PolicyService {
  static async create(data) {
    try {
      const policy = new Policy(data);
      await policy.save();
      logger.info('Policy created successfully', { id: policy._id });
      return policy;
    } catch (error) {
      logger.error('Error creating policy', { error: error.message });
      throw new Error(`Failed to create policy: ${error.message}`);
    }
  }

  static async list(filters = {}) {
    try {
      const policies = await Policy.find(filters)
        .populate('domain')
        .populate('createdBy');
      return policies;
    } catch (error) {
      logger.error('Error listing policies', { error: error.message });
      throw new Error(`Failed to list policies: ${error.message}`);
    }
  }

  static async get(id) {
    try {
      const policy = await Policy.findById(id)
        .populate('domain')
        .populate('createdBy');
      if (!policy) {
        throw new Error('Policy not found');
      }
      return policy;
    } catch (error) {
      logger.error('Error getting policy', { id, error: error.message });
      throw new Error(`Failed to get policy: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const policy = await Policy.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
      )
        .populate('domain')
        .populate('createdBy');

      if (!policy) {
        throw new Error('Policy not found');
      }

      logger.info('Policy updated successfully', { id });
      return policy;
    } catch (error) {
      logger.error('Error updating policy', { id, error: error.message });
      throw new Error(`Failed to update policy: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const policy = await Policy.findByIdAndDelete(id);
      if (!policy) {
        throw new Error('Policy not found');
      }
      logger.info('Policy deleted successfully', { id });
      return policy;
    } catch (error) {
      logger.error('Error deleting policy', { id, error: error.message });
      throw new Error(`Failed to delete policy: ${error.message}`);
    }
  }

  static async activatePolicy(id) {
    try {
      const policy = await Policy.findById(id);
      if (!policy) {
        throw new Error('Policy not found');
      }

      policy.status = 'active';
      await policy.save();

      logger.info('Policy activated successfully', { id });
      return policy;
    } catch (error) {
      logger.error('Error activating policy', { id, error: error.message });
      throw new Error(`Failed to activate policy: ${error.message}`);
    }
  }
}

module.exports = PolicyService;