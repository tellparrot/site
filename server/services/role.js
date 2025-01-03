const Role = require('../models/Role');
const logger = require('../utils/log')('roleService');

class RoleService {
  static async create(data) {
    try {
      logger.info('Creating new role', { data });
      const role = new Role(data);
      
      logger.debug('Role model created', { 
        name: role.name,
        permissions: role.permissions,
        domain: role.domain
      });
      
      await role.save();
      logger.info('Role created successfully', { 
        id: role._id,
        name: role.name 
      });
      return role;
    } catch (error) {
      logger.error('Error creating role', { 
        error: error.message,
        stack: error.stack,
        data 
      });
      throw new Error(`Failed to create role: ${error.message}`);
    }
  }

  static async list() {
    try {
      logger.info('Fetching all roles');
      const roles = await Role.find()
        .populate('domain')
        .populate('assignedUsers.user');
        
      logger.info('Roles fetched successfully', {
        count: roles.length
      });
      
      return roles;
    } catch (error) {
      logger.error('Error listing roles', { 
        error: error.message,
        stack: error.stack 
      });
      throw new Error(`Failed to list roles: ${error.message}`);
    }
  }

  static async get(id) {
    try {
      logger.info('Fetching role by ID', { id });
      const role = await Role.findById(id)
        .populate('domain')
        .populate('assignedUsers.user');
        
      if (!role) {
        logger.warn('Role not found', { id });
        throw new Error('Role not found');
      }
      
      logger.info('Role fetched successfully', { 
        id,
        name: role.name
      });
      
      return role;
    } catch (error) {
      logger.error('Error getting role', { 
        id, 
        error: error.message,
        stack: error.stack
      });
      throw new Error(`Failed to get role: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      logger.info('Updating role', { id, data });
      const role = await Role.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
      )
        .populate('domain')
        .populate('assignedUsers.user');

      if (!role) {
        logger.warn('Role not found during update', { id });
        throw new Error('Role not found');
      }

      logger.info('Role updated successfully', { 
        id,
        name: role.name
      });
      return role;
    } catch (error) {
      logger.error('Error updating role', { 
        id, 
        data,
        error: error.message,
        stack: error.stack 
      });
      throw new Error(`Failed to update role: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      logger.info('Deleting role', { id });
      const role = await Role.findByIdAndDelete(id);
      
      if (!role) {
        logger.warn('Role not found during deletion', { id });
        throw new Error('Role not found');
      }
      
      logger.info('Role deleted successfully', { 
        id,
        name: role.name 
      });
      return role;
    } catch (error) {
      logger.error('Error deleting role', { 
        id, 
        error: error.message,
        stack: error.stack
      });
      throw new Error(`Failed to delete role: ${error.message}`);
    }
  }

  static async assignUserToRole(roleId, userId, expiresAt = null) {
    try {
      logger.info('Assigning user to role', { 
        roleId, 
        userId,
        expiresAt 
      });

      const role = await Role.findById(roleId);
      if (!role) {
        logger.warn('Role not found during user assignment', { roleId });
        throw new Error('Role not found');
      }

      const userAssignment = {
        user: userId,
        assignedAt: new Date(),
        expiresAt: expiresAt
      };

      role.assignedUsers.push(userAssignment);
      await role.save();

      logger.info('User assigned to role successfully', { 
        roleId,
        userId,
        roleName: role.name
      });
      return role;
    } catch (error) {
      logger.error('Error assigning user to role', {
        roleId,
        userId,
        error: error.message,
        stack: error.stack
      });
      throw new Error(`Failed to assign user to role: ${error.message}`);
    }
  }

  static async getUserRoles(userId) {
    try {
      logger.info('Fetching roles for user', { userId });
      
      const roles = await Role.find({
        assignedUsers: userId
      }).populate('domain');

      logger.info('User roles retrieved successfully', {
        userId,
        roleCount: roles.length,
        roles: roles.map(r => r.name)
      });

      return roles;
    } catch (error) {
      logger.error('Error getting user roles', {
        userId,
        error: error.message,
        stack: error.stack
      });
      throw new Error(`Failed to get user roles: ${error.message}`);
    }
  }
}

module.exports = RoleService;