const nodemailer = require('nodemailer');
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

// Debug: Log environment variables
console.log('Environment Variables:', {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER ? '***' : 'Not set',
  SMTP_PASS: process.env.SMTP_PASS ? '***' : 'Not set',
  SMTP_FROM_NAME: process.env.SMTP_FROM_NAME,
  NODE_ENV: process.env.NODE_ENV,
  CWD: process.cwd()
});

/**
 * Email Service using Brevo SMTP
 */
class EmailService {
  constructor() {
    console.log('Initializing email service with user:', process.env.SMTP_USER);
    
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('❌ SMTP credentials are not properly configured in environment variables');
      console.log('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Not set');
      console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Not set');
      throw new Error('SMTP credentials are not properly configured');
    }

    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false
      },
      debug: true // Enable debug output
    });

    // Log transport configuration (without password)
    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASS
    });
  }

  /**
   * Verify SMTP connection
   */
  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log('✅ SMTP connection verified successfully');
      return true;
    } catch (error) {
      console.error('❌ SMTP connection error:', error.message);
      return false;
    }
  }

  /**
   * Send email
   * @param {Object} options - Email options
   * @param {string} options.to - Recipient email
   * @param {string} options.subject - Email subject
   * @param {string} options.html - Email HTML content
   * @param {string} options.text - Plain text fallback
   */
  async sendEmail({ to, subject, html, text }) {
    try {
      const mailOptions = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to,
        subject,
        html,
        text: text || 'Please enable HTML to view this email'
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully:', info.messageId);
      return {
        success: true,
        messageId: info.messageId
      };
    } catch (error) {
      console.error('❌ Email sending error:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Send welcome email to new subscriber
   * @param {string} email - Subscriber email
   */
  async sendWelcomeEmail(email) {
    const { getWelcomeEmailTemplate } = require('./emailTemplates');
    
    return await this.sendEmail({
      to: email,
      subject: '🎉 Welcome to EduTech - Start Your Learning Journey!',
      html: getWelcomeEmailTemplate(email),
      text: `Welcome to EduTech! Thank you for subscribing to our newsletter. We're excited to have you join our community of learners.`
    });
  }
}

// Create singleton instance
const emailService = new EmailService();

module.exports = emailService;
