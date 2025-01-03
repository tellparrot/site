const Domain = require('../models/Domain');
const logger = require('../utils/log')('domainService');

class DomainService {
  static async create(data) {
    try {
      const domain = new Domain(data);
      await domain.save();
      logger.info('Domain created successfully', { id: domain._id });
      return domain;
    } catch (error) {
      logger.error('Error creating domain', { error: error.message });
      throw new Error(`Failed to create domain: ${error.message}`);
    }
  }

  static async list() {
    try {
      const domains = await Domain.find().populate('owner stewards');
      return domains;
    } catch (error) {
      logger.error('Error listing domains', { error: error.message });
      throw new Error(`Failed to list domains: ${error.message}`);
    }
  }

  static async get(id) {
    try {
      const domain = await Domain.findById(id).populate('owner stewards');
      if (!domain) {
        throw new Error('Domain not found');
      }
      return domain;
    } catch (error) {
      logger.error('Error getting domain', { id, error: error.message });
      throw new Error(`Failed to get domain: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const domain = await Domain.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
      ).populate('owner stewards');

      if (!domain) {
        throw new Error('Domain not found');
      }

      logger.info('Domain updated successfully', { id });
      return domain;
    } catch (error) {
      logger.error('Error updating domain', { id, error: error.message });
      throw new Error(`Failed to update domain: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const domain = await Domain.findByIdAndDelete(id);
      if (!domain) {
        throw new Error('Domain not found');
      }
      logger.info('Domain deleted successfully', { id });
      return domain;
    } catch (error) {
      logger.error('Error deleting domain', { id, error: error.message });
      throw new Error(`Failed to delete domain: ${error.message}`);
    }
  }
}

module.exports = DomainService;