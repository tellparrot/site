const User = require('../models/User.js');
const { generatePasswordHash, validatePassword } = require('../utils/password.js');
const logger = require('../utils/log')('userService');

class UserService {
  static async list() {
    try {
      return User.find();
    } catch (err) {
      throw new Error(`Database error while listing users: ${err}`);
    }
  }

  static async get(id) {
    try {
      return User.findById(id).exec();
    } catch (err) {
      throw new Error(`Database error while getting the user by their ID: ${err}`);
    }
  }

  static async getByEmail(email) {
    try {
      return User.findOne({ email }).exec();
    } catch (err) {
      throw new Error(`Database error while getting the user by their email: ${err}`);
    }
  }

  static async update(id, data) {
    try {
      return User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    } catch (err) {
      throw new Error(`Database error while updating user ${id}: ${err}`);
    }
  }

  static async delete(id) {
    try {
      const result = await User.deleteOne({ _id: id }).exec();
      return (result.deletedCount === 1);
    } catch (err) {
      throw new Error(`Database error while deleting user ${id}: ${err}`);
    }
  }

  static async authenticateWithPassword(email, password) {
    if (!email) throw new Error('Email is required');
    if (!password) throw new Error('Password is required');

    try {
      const user = await User.findOne({ email }).exec();
      if (!user) return null;

      const passwordValid = await validatePassword(password, user.password);
      if (!passwordValid) return null;

      user.lastLoginAt = Date.now();
      const updatedUser = await user.save();
      return updatedUser;
    } catch (err) {
      throw new Error(`Database error while authenticating user ${email} with password: ${err}`);
    }
  }

  static async authenticateWithToken(token) {
    try {
      return User.findOne({ token }).exec();
    } catch (err) {
      throw new Error(`Database error while authenticating user ${email} with token: ${err}`);
    }
  }

  static async createUser({ email, password, name = '' }) {
    logger.info("Creating user with data:", {
      email,
      hasPassword: !!password,
      name
    });

    if (!email) throw new Error('Email is required');
    if (!password) throw new Error('Password is required');

    try {
      const existingUser = await UserService.getByEmail(email);
      if (existingUser) {
        logger.warn("Attempted to create duplicate user:", { email });
        throw new Error('User with this email already exists');
      }

      const hash = await generatePasswordHash(password);
      
      const user = new User({
        email,
        password: hash,
        name,
      });

      logger.info("User model created:", {
        email,
        name,
        modelFields: Object.keys(user.toObject())
      });

      const savedUser = await user.save();
      logger.info("User saved successfully:", {
        id: savedUser._id,
        email: savedUser.email
      });

      return savedUser;
    } catch (error) {
      logger.error("Error creating user:", {
        error: error.message,
        code: error.code,
        stack: error.stack
      });
      throw error;
    }
  }

  static async setPassword(user, password) {
    if (!password) throw new Error('Password is required');
    user.password = await generatePasswordHash(password); // eslint-disable-line

    try {
      if (!user.isNew) {
        await user.save();
      }

      return user;
    } catch (err) {
      throw new Error(`Database error while setting user password: ${err}`);
    }
  }
}

module.exports = UserService;