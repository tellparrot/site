const express = require('express');
const UserService = require('../services/user.js');
const { requireUser } = require('./middleware/auth.js');
const { generateAccessToken, generateRefreshToken } = require('../utils/auth.js');
const jwt = require('jsonwebtoken');
const logger = require('../utils/log')('authRoutes');
const mongoose = require('mongoose');
const RoleService = require('../services/role');

const router = express.Router();

router.post('/login', async (req, res) => {
  logger.info('Login request details:', {
    rawBody: req.rawBody,
    parsedBody: req.body,
    contentLength: req.headers['content-length'],
    contentType: req.headers['content-type']
  });

  try {
    const { email, password } = req.body;
    logger.info('Parsed credentials:', { email, hasPassword: !!password });

    if (!email || !password) {
      logger.warn("Missing email or password in login request");
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await UserService.authenticateWithPassword(email, password);
    logger.info('Authentication result:', {
      userFound: !!user,
      userId: user?._id,
      userEmail: user?.email
    });

    if (user) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      user.refreshToken = refreshToken;
      await user.save();

      logger.info("Login successful", {
        userId: user._id,
        email: user.email
      });

      return res.json({ ...user.toObject(), accessToken });
    } else {
      logger.warn("Invalid login credentials", { email });
      return res.status(400).json({ message: 'Email or password is incorrect' });
    }
  } catch (error) {
    logger.error("Login error:", {
      error: error.message,
      stack: error.stack,
      body: req.body
    });
    return res.status(400).json({ message: error.message });
  }
});

router.post('/register', async (req, res, next) => {
  logger.info("Registration request received with data:", req.body);

  if (req.user) {
    logger.info("User already exists:", req.user);
    return res.json({ user: req.user });
  }

  try {
    logger.info("Attempting to create user with:", req.body);
    const user = await UserService.createUser(req.body);
    logger.info("User creation result:", user);

    // Log the MongoDB operation
    logger.info("MongoDB save operation:", {
      isNew: user.isNew,
      _id: user._id,
      modelName: user.constructor.modelName,
      collection: user.collection.name
    });

    return res.status(200).json(user);
  } catch (error) {
    logger.error("Registration error:", {
      error: error.message,
      stack: error.stack,
      code: error.code,
      body: req.body
    });
    return res.status(400).json({ error: error.message });
  }
});

router.post('/logout', requireUser, async (req, res) => {
  try {
    logger.info("Logout request received", {
      userId: req.user._id
    });

    req.user.refreshToken = null;
    await req.user.save();

    logger.info("User logged out successfully", {
      userId: req.user._id
    });

    res.status(200).json({ message: 'User logged out successfully.' });
  } catch (error) {
    logger.error("Logout error:", {
      error: error.message,
      stack: error.stack,
      userId: req.user?._id
    });
    res.status(500).json({ error: 'An error occurred while logging out' });
  }
});

router.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    logger.warn("Refresh token missing in request");
    return res.status(401).json({
      success: false,
      message: 'Refresh token is required'
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    logger.info("Refresh token verified", { userId: decoded.id });

    const user = await UserService.get(decoded.id);

    if (!user) {
      logger.warn("User not found for refresh token", { userId: decoded.id });
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (user.refreshToken !== refreshToken) {
      logger.warn("Invalid refresh token", { userId: user._id });
      return res.status(403).json({
        success: false,
        message: 'Invalid refresh token'
      });
    }

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    user.refreshToken = newRefreshToken;
    await user.save();

    logger.info("New tokens generated successfully", { userId: user._id });

    return res.status(200).json({
      success: true,
      data: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken
      }
    });

  } catch (error) {
    logger.error("Token refresh error:", {
      error: error.message,
      stack: error.stack
    });

    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({
        success: false,
        message: 'Refresh token has expired'
      });
    }

    return res.status(403).json({
      success: false,
      message: 'Invalid refresh token'
    });
  }
});

router.get('/me', requireUser, async (req, res) => {
  logger.info("User profile request", { userId: req.user._id });
  return res.status(200).json(req.user);
});

router.put('/me', requireUser, async (req, res) => {
  try {
    logger.info("Update profile request received", {
      userId: req.user._id,
      updates: req.body
    });

    const { name } = req.body;

    if (!name || typeof name !== 'string' || name.length < 1) {
      logger.warn("Invalid name in profile update", {
        userId: req.user._id,
        name: req.body.name
      });
      return res.status(400).json({ message: 'Name is required and must be at least 1 character long' });
    }

    const user = await UserService.update(req.user.id, { name });

    logger.info("Profile updated successfully", {
      userId: user._id,
      newName: name
    });

    return res.status(200).json(user);
  } catch (error) {
    logger.error("Update profile error:", {
      error: error.message,
      stack: error.stack,
      userId: req.user._id
    });
    return res.status(400).json({ message: error.message });
  }
});

router.get('/me/roles', requireUser, async (req, res) => {
  try {
    logger.info("Fetching user roles", { userId: req.user._id });

    const roles = await RoleService.getUserRoles(req.user.id);

    logger.info("User roles retrieved successfully", {
      userId: req.user._id,
      roleCount: roles.length
    });

    return res.json(roles);
  } catch (error) {
    logger.error('Error fetching user roles:', {
      error: error.message,
      stack: error.stack,
      userId: req.user._id
    });
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;