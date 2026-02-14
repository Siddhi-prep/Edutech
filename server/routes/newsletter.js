const express = require('express');
const router = express.Router();
const emailService = require('../utils/emailService');
const fs = require('fs');
const path = require('path');

// Simple in-memory storage (in production, use a database)
const subscribersFile = path.join(__dirname, '../data/subscribers.json');

// Initialize subscribers file if it doesn't exist
if (!fs.existsSync(path.dirname(subscribersFile))) {
  fs.mkdirSync(path.dirname(subscribersFile), { recursive: true });
}

if (!fs.existsSync(subscribersFile)) {
  fs.writeFileSync(subscribersFile, JSON.stringify({ subscribers: [] }, null, 2));
}

/**
 * Get all subscribers (for admin use)
 */
const getSubscribers = () => {
  try {
    const data = fs.readFileSync(subscribersFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { subscribers: [] };
  }
};

/**
 * Save subscriber
 */
const saveSubscriber = (email) => {
  try {
    const data = getSubscribers();
    
    // Check if email already exists
    const existingIndex = data.subscribers.findIndex(sub => sub.email === email);
    
    if (existingIndex !== -1) {
      // Update existing subscriber
      data.subscribers[existingIndex].subscribedAt = new Date().toISOString();
      data.subscribers[existingIndex].status = 'active';
    } else {
      // Add new subscriber
      data.subscribers.push({
        email,
        subscribedAt: new Date().toISOString(),
        status: 'active'
      });
    }
    
    fs.writeFileSync(subscribersFile, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving subscriber:', error);
    return false;
  }
};

/**
 * POST /api/newsletter/subscribe
 * Subscribe to newsletter
 */
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Check if already subscribed
    const data = getSubscribers();
    const existingSubscriber = data.subscribers.find(sub => sub.email === email && sub.status === 'active');
    
    if (existingSubscriber) {
      return res.status(200).json({
        success: true,
        message: 'You are already subscribed to our newsletter!',
        alreadySubscribed: true
      });
    }

    // Save subscriber
    const saved = saveSubscriber(email);
    
    if (!saved) {
      throw new Error('Failed to save subscriber');
    }

    // Send welcome email
    const emailResult = await emailService.sendWelcomeEmail(email);

    if (emailResult.success) {
      res.status(200).json({
        success: true,
        message: 'Thank you for subscribing! Check your email for a welcome message.',
        emailSent: true
      });
    } else {
      // Subscriber saved but email failed
      res.status(200).json({
        success: true,
        message: 'Subscription successful! However, there was an issue sending the welcome email.',
        emailSent: false,
        emailError: emailResult.error
      });
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your subscription. Please try again later.',
      error: error.message
    });
  }
});

/**
 * GET /api/newsletter/subscribers
 * Get all subscribers (for admin use)
 */
router.get('/subscribers', (req, res) => {
  try {
    const data = getSubscribers();
    res.json({
      success: true,
      count: data.subscribers.length,
      subscribers: data.subscribers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve subscribers',
      error: error.message
    });
  }
});

/**
 * POST /api/newsletter/unsubscribe
 * Unsubscribe from newsletter
 */
router.post('/unsubscribe', (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const data = getSubscribers();
    const subscriberIndex = data.subscribers.findIndex(sub => sub.email === email);

    if (subscriberIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our subscriber list'
      });
    }

    // Mark as unsubscribed instead of deleting
    data.subscribers[subscriberIndex].status = 'unsubscribed';
    data.subscribers[subscriberIndex].unsubscribedAt = new Date().toISOString();

    fs.writeFileSync(subscribersFile, JSON.stringify(data, null, 2));

    res.json({
      success: true,
      message: 'You have been unsubscribed successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe',
      error: error.message
    });
  }
});

module.exports = router;
