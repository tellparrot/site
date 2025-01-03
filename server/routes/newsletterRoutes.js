const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { requireUser } = require('./middleware/auth');
const logger = require('../utils/log')('routes.newsletter');

// Newsletter subscription schema
const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  unsubscribedAt: {
    type: Date
  },
  isSubscribed: {
    type: Boolean,
    default: true
  }
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      logger.error('Missing email in newsletter subscription request');
      return res.status(400).json({ error: 'Email is required' });
    }

    logger.info(`Attempting to subscribe email: ${email}`);

    const existingSubscription = await Newsletter.findOne({ email });

    if (existingSubscription) {
      if (existingSubscription.isSubscribed) {
        logger.info(`Email ${email} is already subscribed`);
        return res.status(200).json({ message: 'Already subscribed' });
      } else {
        // Reactivate subscription
        existingSubscription.isSubscribed = true;
        existingSubscription.unsubscribedAt = null;
        await existingSubscription.save();
        logger.info(`Reactivated subscription for email: ${email}`);
        return res.status(200).json({ message: 'Subscription reactivated' });
      }
    }

    const subscription = new Newsletter({ email });
    await subscription.save();

    logger.info(`Successfully subscribed email: ${email}`);
    res.status(201).json({ message: 'Successfully subscribed to newsletter' });

  } catch (error) {
    logger.error('Error in newsletter subscription:', error);
    res.status(500).json({ error: 'Error processing newsletter subscription' });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      logger.error('Missing email in newsletter unsubscribe request');
      return res.status(400).json({ error: 'Email is required' });
    }

    logger.info(`Attempting to unsubscribe email: ${email}`);

    const subscription = await Newsletter.findOne({ email });

    if (!subscription) {
      logger.info(`No subscription found for email: ${email}`);
      return res.status(404).json({ error: 'No subscription found for this email' });
    }

    if (!subscription.isSubscribed) {
      logger.info(`Email ${email} is already unsubscribed`);
      return res.status(200).json({ message: 'Already unsubscribed' });
    }

    subscription.isSubscribed = false;
    subscription.unsubscribedAt = new Date();
    await subscription.save();

    logger.info(`Successfully unsubscribed email: ${email}`);
    res.status(200).json({ message: 'Successfully unsubscribed from newsletter' });

  } catch (error) {
    logger.error('Error in newsletter unsubscription:', error);
    res.status(500).json({ error: 'Error processing newsletter unsubscription' });
  }
});

// Get subscription status - protected route
router.get('/status/:email', requireUser, async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      logger.error('Missing email in subscription status request');
      return res.status(400).json({ error: 'Email is required' });
    }

    logger.info(`Checking subscription status for email: ${email}`);

    const subscription = await Newsletter.findOne({ email });

    if (!subscription) {
      logger.info(`No subscription found for email: ${email}`);
      return res.status(404).json({ error: 'No subscription found for this email' });
    }

    logger.info(`Successfully retrieved subscription status for email: ${email}`);
    res.status(200).json({
      email: subscription.email,
      isSubscribed: subscription.isSubscribed,
      subscribedAt: subscription.subscribedAt,
      unsubscribedAt: subscription.unsubscribedAt
    });

  } catch (error) {
    logger.error('Error checking subscription status:', error);
    res.status(500).json({ error: 'Error checking subscription status' });
  }
});

module.exports = router;