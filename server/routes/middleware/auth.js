const UserService = require('../../services/user.js');
const jwt = require('jsonwebtoken');
const logger = require('../../utils/log')('middleware.auth');

const requireUser = (req, res, next) => {
  logger.info('Checking user authentication', {
    path: req.path,
    method: req.method,
    hasAuthHeader: !!req.headers.authorization
  });

  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    logger.warn('Missing authentication token', {
      path: req.path,
      method: req.method
    });
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    logger.info('Token verification successful', {
      userId: decoded.id,
      path: req.path
    });

    req.user = decoded;
    next();
  } catch (err) {
    logger.error('Token verification failed', {
      error: err.message,
      stack: err.stack,
      name: err.name,
      code: err.code,
      path: req.path,
      method: req.method
    });
    return res.status(403).json({ error: 'Authentication required' });
  }
};

module.exports = {
  requireUser,
};