const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Debug: Log environment variables
console.log('Server Environment Variables:', {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SMTP_HOST: process.env.SMTP_HOST ? '***' : 'Not set',
  SMTP_USER: process.env.SMTP_USER ? '***' : 'Not set',
  SMTP_PASS: process.env.SMTP_PASS ? '***' : 'Not set',
  CWD: process.cwd(),
  __dirname: __dirname
});
const coursesRoutes = require('./routes/courses');
const blogsRoutes = require('./routes/blogs');
const leaderboardRoutes = require('./routes/leaderboard');
const quizzesRoutes = require('./routes/quizzes');
const testimonialsRoutes = require('./routes/testimonials');
const teamRoutes = require('./routes/team');
const contactRoutes = require('./routes/contact');
const newsletterRoutes = require('./routes/newsletter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/courses', coursesRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/quizzes', quizzesRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'EduTech API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
