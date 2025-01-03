const Newsletter = require('../models/Newsletter');
const logger = require('../utils/log')('newsletterService');

class NewsletterService {
  static async subscribe(email) {
    try {
      const existing = await Newsletter.findOne({ email });
      if (existing) {
        if (existing.status === 'unsubscribed') {
          existing.status = 'subscribed';
          existing.subscribeDate = new Date();
          await existing.save();
          logger.info('User resubscribed successfully', { email });
          return existing;
        }
        throw new Error('Email already subscribed');
      }

      const subscription = new Newsletter({ email });
      await subscription.save();
      logger.info('New subscription created successfully', { email });
      return subscription;
    } catch (error) {
      logger.error('Error creating subscription', { error: error.message });
      throw new Error(`Failed to subscribe: ${error.message}`);
    }
  }

  static async unsubscribe(email) {
    try {
      const subscription = await Newsletter.findOne({ email });
      if (!subscription) {
        throw new Error('Subscription not found');
      }

      subscription.status = 'unsubscribed';
      await subscription.save();
      
      logger.info('User unsubscribed successfully', { email });
      return { message: 'Unsubscribed successfully' };
    } catch (error) {
      logger.error('Error unsubscribing', { email, error: error.message });
      throw new Error(`Failed to unsubscribe: ${error.message}`);
    }
  }
}

module.exports = NewsletterService;