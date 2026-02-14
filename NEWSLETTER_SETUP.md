# 📧 Newsletter Subscription Setup Guide

## Overview
This guide will help you set up the newsletter subscription feature with Brevo SMTP for sending professional welcome emails to subscribers.

## Prerequisites
- Brevo (formerly Sendinblue) account
- SMTP API key from Brevo

## Setup Instructions

### 1. Get Your Brevo SMTP API Key

1. Log in to your **Brevo account** at [https://www.brevo.com](https://www.brevo.com)
2. Navigate to **Settings** → **SMTP & API**
3. Under **SMTP** section, click **Generate SMTP Key** or use an existing one
4. Copy the generated SMTP key

### 2. Update Environment Variables

Open `server/.env` and replace `YOUR_BREVO_SMTP_KEY` with your actual SMTP key:

```env
# Brevo SMTP Configuration
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=99f3ec001@smtp-brevo.com
SMTP_PASS=YOUR_ACTUAL_BREVO_SMTP_KEY_HERE  # Replace this!
SMTP_FROM_NAME=EduTech
SMTP_FROM_EMAIL=iamdonnlee@gmail.com
```

### 3. Install Dependencies

Run the following command in the project root:

```bash
npm install
```

This will install `nodemailer` which is required for email functionality.

### 4. Start the Server

```bash
npm run dev
```

This will start both the backend server and frontend client.

## How It Works

### User Journey

1. **User enters email** in the footer newsletter section
2. **Form validates** the email format
3. **Backend receives** the subscription request
4. **Email is saved** to `server/data/subscribers.json`
5. **Welcome email is sent** using Brevo SMTP
6. **User receives** a beautiful Apple-inspired welcome email

### Email Template Features

The welcome email includes:

✅ **Apple-inspired design** with black gradient and white text
- Professional SF Pro-style typography
- Smooth gradients and modern UI
- Fully responsive design

✅ **Welcome message** with personalized greeting

✅ **Feature cards** showcasing EduTech benefits:
- Expert-Led Courses
- Hands-On Projects
- Personalized Learning Path
- Certificates & Achievements

✅ **Popular courses** section with trending courses

✅ **CTA button** to explore courses

✅ **Footer** with social links and unsubscribe option

## API Endpoints

### Subscribe to Newsletter
```
POST /api/newsletter/subscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for subscribing! Check your email for a welcome message.",
  "emailSent": true
}
```

**Response (Already Subscribed):**
```json
{
  "success": true,
  "message": "You are already subscribed to our newsletter!",
  "alreadySubscribed": true
}
```

### Get All Subscribers (Admin)
```
GET /api/newsletter/subscribers
```

**Response:**
```json
{
  "success": true,
  "count": 150,
  "subscribers": [
    {
      "email": "user@example.com",
      "subscribedAt": "2024-10-24T12:00:00.000Z",
      "status": "active"
    }
  ]
}
```

### Unsubscribe
```
POST /api/newsletter/unsubscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

## File Structure

```
server/
├── routes/
│   └── newsletter.js          # Newsletter subscription routes
├── utils/
│   ├── emailService.js        # Email sending service with Brevo
│   └── emailTemplates.js      # Apple-inspired email templates
├── data/
│   └── subscribers.json       # Subscriber storage (auto-created)
└── .env                       # Environment variables with SMTP config

client/
└── src/
    └── components/
        └── Footer.jsx         # Newsletter subscription form
```

## Testing

### Test the Subscription Flow

1. **Start the server** with `npm run dev`
2. **Open the app** at `http://localhost:3000`
3. **Scroll to the footer**
4. **Enter an email** in the newsletter input
5. **Click "Subscribe"**
6. **Check the email inbox** for the welcome email

### Verify SMTP Connection

The server will log SMTP connection status on startup:
- ✅ Success: `SMTP connection verified successfully`
- ❌ Error: `SMTP connection error: [error message]`

## Troubleshooting

### Email Not Sending

1. **Verify SMTP credentials** in `.env`
2. **Check Brevo account** is active
3. **Verify sender email** is verified in Brevo
4. **Check server logs** for detailed error messages

### Common Errors

**Authentication failed:**
- Incorrect SMTP_PASS key
- Solution: Generate a new SMTP key in Brevo

**Connection timeout:**
- Firewall blocking port 587
- Solution: Check firewall settings

**Invalid sender email:**
- Sender email not verified in Brevo
- Solution: Verify `iamdonnlee@gmail.com` in Brevo

## Customization

### Modify Email Template

Edit `server/utils/emailTemplates.js` to customize:
- Email design and colors
- Content and messaging
- Course recommendations
- CTA buttons and links

### Change Email Subject

Edit `server/utils/emailService.js`:

```javascript
subject: '🎉 Welcome to EduTech - Start Your Learning Journey!'
```

### Add More Email Types

Create new template functions in `emailTemplates.js`:
- Course launch announcements
- Weekly newsletters
- Special offers
- Achievement notifications

## Production Deployment

### Environment Variables

Set these in your production environment:

```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=99f3ec001@smtp-brevo.com
SMTP_PASS=your-production-smtp-key
SMTP_FROM_NAME=EduTech
SMTP_FROM_EMAIL=iamdonnlee@gmail.com
```

### Database

For production, consider replacing the JSON file storage with a real database:
- MongoDB
- PostgreSQL
- MySQL

## Security Notes

⚠️ **Important:**
- Never commit `.env` file to version control
- Keep SMTP credentials secure
- Use environment variables in production
- Implement rate limiting for API endpoints
- Add CAPTCHA for production forms

## Support

For issues or questions:
- Check server logs for detailed error messages
- Verify Brevo account status
- Review SMTP settings in Brevo dashboard

---

**Built with ❤️ using:**
- Node.js + Express
- Nodemailer
- Brevo SMTP
- React
