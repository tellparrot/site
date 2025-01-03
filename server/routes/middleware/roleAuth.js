const logger = require('../../utils/log')('roleAuth');
const RoleService = require('../../services/role');

const requireRole = (requiredRole) => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        logger.warn('Authentication required for role check', {
          requiredRole
        });
        return res.status(401).json({ error: 'Authentication required' });
      }

      logger.info('Checking user roles', {
        userId: req.user.id,
        requiredRole
      });

      const userRoles = await RoleService.getUserRoles(req.user.id);

      if (!userRoles || userRoles.length === 0) {
        logger.warn('User has no roles assigned', {
          userId: req.user.id,
          requiredRole
        });
        return res.status(403).json({ error: 'Access denied - no roles assigned' });
      }

      logger.debug('User roles retrieved', {
        userId: req.user.id,
        roles: userRoles.map(r => r.name),
        requiredRole
      });

      const hasRole = userRoles.some(role =>
        role.name === requiredRole ||
        role.permissions.includes(requiredRole)
      );

      if (!hasRole) {
        logger.warn('User lacks required role/permission', {
          userId: req.user.id,
          requiredRole,
          userRoles: userRoles.map(r => ({
            name: r.name,
            permissions: r.permissions
          }))
        });
        return res.status(403).json({ error: 'Access denied - insufficient permissions' });
      }

      logger.info('Role authorization successful', {
        userId: req.user.id,
        requiredRole
      });

      next();
    } catch (error) {
      logger.error('Error in role authorization', {
        userId: req.user?.id,
        requiredRole,
        error: error.message,
        stack: error.stack,
        name: error.name,
        code: error.code
      });
      return res.status(500).json({ error: 'Error checking role authorization' });
    }
  };
};

module.exports = {
  requireRole
};