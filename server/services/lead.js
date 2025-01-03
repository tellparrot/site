const Lead = require('../models/Lead');
const logger = require('../utils/log')('leadService');

class LeadService {
  static async create(data) {
    try {
      const lead = new Lead(data);
      await lead.save();
      logger.info('Lead created successfully', { id: lead._id });
      return lead;
    } catch (error) {
      logger.error('Error creating lead', { error: error.message });
      throw new Error(`Failed to create lead: ${error.message}`);  
    }
  }

  static async list(filters = {}) {
    try {
      const leads = await Lead.find(filters).sort({ createdAt: -1 });
      return leads;
    } catch (error) {
      logger.error('Error listing leads', { error: error.message });
      throw new Error(`Failed to list leads: ${error.message}`);
    }
  }

  static async get(id) {
    try {
      const lead = await Lead.findById(id);
      if (!lead) {
        throw new Error('Lead not found');
      }
      return lead;
    } catch (error) {
      logger.error('Error getting lead', { id, error: error.message });
      throw new Error(`Failed to get lead: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const lead = await Lead.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
      );

      if (!lead) {
        throw new Error('Lead not found');
      }

      logger.info('Lead updated successfully', { id });
      return lead;
    } catch (error) {
      logger.error('Error updating lead', { id, error: error.message });
      throw new Error(`Failed to update lead: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const lead = await Lead.findByIdAndDelete(id);
      if (!lead) {
        throw new Error('Lead not found'); 
      }
      logger.info('Lead deleted successfully', { id });
      return lead;
    } catch (error) {
      logger.error('Error deleting lead', { id, error: error.message });
      throw new Error(`Failed to delete lead: ${error.message}`);
    }
  }

  static async addNote(id, note) {
    try {
      const lead = await Lead.findById(id);
      if (!lead) {
        throw new Error('Lead not found');
      }

      lead.notes.push({
        content: note,
        createdAt: new Date()
      });
      await lead.save();

      logger.info('Note added to lead successfully', { id });
      return lead;
    } catch (error) {
      logger.error('Error adding note to lead', { id, error: error.message });
      throw new Error(`Failed to add note to lead: ${error.message}`);
    }
  }

  static async updateStatus(id, status) {
    try {
      const lead = await Lead.findById(id);
      if (!lead) {
        throw new Error('Lead not found');
      }

      lead.status = status;
      await lead.save();

      logger.info('Lead status updated successfully', { id, status });
      return lead;
    } catch (error) {
      logger.error('Error updating lead status', {
        id,
        status,
        error: error.message
      });
      throw new Error(`Failed to update lead status: ${error.message}`);
    }
  }
}

module.exports = LeadService;