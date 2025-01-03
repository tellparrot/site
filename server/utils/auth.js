const jwt = require('jsonwebtoken');
const logger = require('./log')('auth');

const generateAccessToken = (user) => {
  logger.info('Generating access token for user:', { userId: user._id, email: user.email });
  try {
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    logger.info('Access token generated successfully');
    return token;
  } catch (error) {
    logger.error('Error generating access token:', {
      error: error.message,
      stack: error.stack,
      userId: user._id
    });
    throw new Error('Failed to generate access token');
  }
};

const generateRefreshToken = (user) => {
  logger.info('Generating refresh token for user:', { userId: user._id, email: user.email });
  try {
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '30d' }
    );
    logger.info('Refresh token generated successfully');
    return token;
  } catch (error) {
    logger.error('Error generating refresh token:', {
      error: error.message,
      stack: error.stack,
      userId: user._id
    });
    throw new Error('Failed to generate refresh token');
  }
};

const verifyAccessToken = (token) => {
  logger.info('Verifying access token');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    logger.info('Access token verified successfully');
    return decoded;
  } catch (error) {
    logger.error('Error verifying access token:', {
      error: error.message,
      stack: error.stack
    });
    if (error.name === 'TokenExpiredError') {
      throw new Error('Access token has expired');
    }
    throw new Error('Invalid access token');
  }
};

const verifyRefreshToken = (token) => {
  logger.info('Verifying refresh token');
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    logger.info('Refresh token verified successfully');
    return decoded;
  } catch (error) {
    logger.error('Error verifying refresh token:', {
      error: error.message,
      stack: error.stack
    });
    if (error.name === 'TokenExpiredError') {
      throw new Error('Refresh token has expired');
    }
    throw new Error('Invalid refresh token');
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
};