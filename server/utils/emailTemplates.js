/**
 * Apple-inspired Email Templates
 * Professional black gradient with white SF Pro-style text
 */

const getWelcomeEmailTemplate = (email) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to EduTech</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
      line-height: 1.6;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      padding: 20px;
    }
    
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }
    
    .header {
      background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
      padding: 40px 30px;
      text-align: center;
    }
    
    .logo {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 12px 24px;
      border-radius: 16px;
      margin-bottom: 20px;
    }
    
    .logo-text {
      color: #ffffff;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    
    .header h1 {
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
      margin: 0;
      letter-spacing: -1px;
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .greeting {
      color: #ffffff;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
      letter-spacing: -0.5px;
    }
    
    .text {
      color: #e0e0e0;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 24px;
    }
    
    .features {
      margin: 30px 0;
    }
    
    .feature-card {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 16px;
      transition: transform 0.3s ease;
    }
    
    .feature-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-bottom: 12px;
    }
    
    .feature-title {
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
      letter-spacing: -0.3px;
    }
    
    .feature-description {
      color: #b0b0b0;
      font-size: 14px;
      line-height: 1.6;
    }
    
    .cta-section {
      text-align: center;
      margin: 40px 0;
    }
    
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
      color: #ffffff;
      text-decoration: none;
      padding: 16px 40px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.3px;
      box-shadow: 0 10px 30px rgba(0, 102, 255, 0.3);
      transition: all 0.3s ease;
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(0, 102, 255, 0.4);
    }
    
    .courses-section {
      margin: 30px 0;
    }
    
    .section-title {
      color: #ffffff;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
      letter-spacing: -0.5px;
    }
    
    .course-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }
    
    .course-item {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    
    .course-emoji {
      font-size: 32px;
    }
    
    .course-info h4 {
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .course-info p {
      color: #999999;
      font-size: 13px;
    }
    
    .footer {
      background: #000000;
      padding: 30px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .footer-text {
      color: #666666;
      font-size: 13px;
      margin-bottom: 12px;
    }
    
    .social-links {
      margin: 20px 0;
    }
    
    .social-links a {
      display: inline-block;
      margin: 0 8px;
      color: #666666;
      text-decoration: none;
      font-size: 12px;
      transition: color 0.3s ease;
    }
    
    .social-links a:hover {
      color: #0066FF;
    }
    
    .divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      margin: 30px 0;
    }
    
    @media only screen and (max-width: 600px) {
      .email-container {
        border-radius: 0;
      }
      
      .header {
        padding: 30px 20px;
      }
      
      .content {
        padding: 30px 20px;
      }
      
      .header h1 {
        font-size: 24px;
      }
      
      .greeting {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <div class="logo">
        <span class="logo-text">EduTech</span>
      </div>
      <h1>Welcome to the Future of Learning</h1>
    </div>
    
    <!-- Main Content -->
    <div class="content">
      <p class="greeting">Hello, Learner! 👋</p>
      
      <p class="text">
        Thank you for subscribing to EduTech! We're thrilled to have you join our community of passionate learners who are transforming their careers and unlocking their potential.
      </p>
      
      <p class="text">
        At EduTech, we believe that education should be accessible, engaging, and tailored to your goals. Whether you're looking to master new skills, advance your career, or explore your passions, we're here to support you every step of the way.
      </p>
      
      <!-- Features Section -->
      <div class="features">
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <div class="feature-title">Expert-Led Courses</div>
          <div class="feature-description">
            Learn from industry professionals with real-world experience and cutting-edge knowledge.
          </div>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">💡</div>
          <div class="feature-title">Hands-On Projects</div>
          <div class="feature-description">
            Apply what you learn with practical projects that build your portfolio and confidence.
          </div>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🎯</div>
          <div class="feature-title">Personalized Learning Path</div>
          <div class="feature-description">
            Get customized course recommendations based on your goals and learning style.
          </div>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🏆</div>
          <div class="feature-title">Certificates & Achievements</div>
          <div class="feature-description">
            Earn recognized certificates and showcase your accomplishments to employers.
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="cta-section">
        <a href="https://edutech.com/courses" class="cta-button">
          Explore Our Courses →
        </a>
      </div>
      
      <div class="divider"></div>
      
      <!-- Popular Courses -->
      <div class="courses-section">
        <h3 class="section-title">🔥 Most Popular Courses</h3>
        <div class="course-grid">
          <div class="course-item">
            <span class="course-emoji">⚛️</span>
            <div class="course-info">
              <h4>Advanced React Patterns</h4>
              <p>Master modern React development with hooks, context, and performance optimization</p>
            </div>
          </div>
          
          <div class="course-item">
            <span class="course-emoji">📊</span>
            <div class="course-info">
              <h4>Data Science with Python</h4>
              <p>Learn data analysis, visualization, and machine learning fundamentals</p>
            </div>
          </div>
          
          <div class="course-item">
            <span class="course-emoji">🎨</span>
            <div class="course-info">
              <h4>UI/UX Design Mastery</h4>
              <p>Create beautiful, user-friendly interfaces with design thinking principles</p>
            </div>
          </div>
          
          <div class="course-item">
            <span class="course-emoji">🔐</span>
            <div class="course-info">
              <h4>Full Stack Development</h4>
              <p>Build complete web applications from frontend to backend deployment</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="divider"></div>
      
      <p class="text">
        As a subscriber, you'll receive:
      </p>
      <ul style="color: #e0e0e0; margin-left: 20px; margin-bottom: 24px;">
        <li style="margin-bottom: 8px;">✨ Early access to new courses and features</li>
        <li style="margin-bottom: 8px;">📚 Weekly learning tips and resources</li>
        <li style="margin-bottom: 8px;">🎁 Exclusive discounts and special offers</li>
        <li style="margin-bottom: 8px;">🌟 Personalized course recommendations</li>
        <li style="margin-bottom: 8px;">💬 Access to our vibrant learning community</li>
      </ul>
      
      <p class="text">
        Ready to start your learning journey? Browse our course catalog and find the perfect path for you.
      </p>
      
      <p class="text" style="margin-top: 30px;">
        Keep learning,<br>
        <strong style="color: #ffffff;">The EduTech Team</strong>
      </p>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <p class="footer-text">
        You're receiving this email because you subscribed to updates from EduTech.
      </p>
      
      <div class="social-links">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
      </div>
      
      <p class="footer-text">
        EduTech © ${new Date().getFullYear()} All rights reserved.
      </p>
      
      <p class="footer-text">
        <a href="#" style="color: #666666; text-decoration: none;">Unsubscribe</a> | 
        <a href="#" style="color: #666666; text-decoration: none;">Privacy Policy</a> | 
        <a href="#" style="color: #666666; text-decoration: none;">Contact Us</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

module.exports = {
  getWelcomeEmailTemplate
};
