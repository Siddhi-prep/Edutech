import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, 
  Send, Clock, CheckCircle, HelpCircle, Zap, User, 
  Briefcase, 
  AlertCircle
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    mobile: '',
    topic: '',
    urgency: 'Normal',
    message: '',
    preferredMethod: 'email',
    preferredTime: '',
    meetingPlatform: 'zoom'
  });
  const [showAIRecommendation, setShowAIRecommendation] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const topics = [
    'Course Inquiry',
    'Technical Support',
    'Billing & Payments',
    'Partnership Opportunity',
    'Demo Request',
    'General Question',
    'Other'
  ];

  const urgencyLevels = ['Low', 'Normal', 'High', 'Urgent'];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAskAI = () => {
    setShowAIRecommendation(true);
    // Simulate AI recommendation based on topic
    const recommendations = {
      'Course Inquiry': 'Based on your inquiry, I recommend scheduling a 15-minute video call to discuss course options. Our education consultant can provide personalized recommendations.',
      'Technical Support': 'For technical issues, I suggest using live chat for immediate assistance. Our support team is available 24/7.',
      'Billing & Payments': 'For billing inquiries, email is the best option. Our finance team will respond within 4 hours with detailed information.',
      'Partnership Opportunity': 'Partnership discussions work best via video meeting. I recommend scheduling a 30-minute call with our partnerships team.',
      'Demo Request': 'Great! I recommend booking a live demo via Zoom. Our product specialist can show you all features in 20 minutes.',
      'General Question': 'For general questions, email or live chat works best. Expected response time is under 2 hours.',
      'Other': 'Based on your needs, I recommend starting with email. Our team will route your inquiry to the right department.'
    };
    
    const suggestion = recommendations[formData.topic] || 'Please select a topic to get personalized recommendations.';
    setAiSuggestion(suggestion);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Build WhatsApp message (structured, professional)
    let msg = 'Contact & Support Request\n\n';
    msg += `Name: ${formData.name || '-'}\n`;
    msg += `Email: ${formData.email || '-'}\n`;
    msg += `Company: ${formData.company || '-'}\n`;
    msg += `Mobile: ${formData.mobile || '-'}\n`;
    msg += `Topic: ${formData.topic || '-'}\n`;
    msg += `Urgency: ${formData.urgency || '-'}\n`;
    msg += `Message:\n${formData.message || '-'}\n`;

    // WhatsApp number (country code included, no +)
    const phone = '917013706173';
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    // Small wait for UX
    setTimeout(() => {
      window.location.href = waUrl;
      setIsSubmitting(false);
    }, 800);
  };


  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact & Support</h1>
            <p className="text-base text-gray-600">Tell us how we can help you. We typically respond within 24 hours.</p>
          </div>

          {/* Status Messages */}
          {submitStatus && (
            <div className={`mb-8 p-4 rounded-lg border ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}>
              <div className="flex items-start space-x-3">
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                ) : (
                  <AlertCircle className="flex-shrink-0 mt-1" size={20} />
                )}
                <div>
                  <p className="font-medium">{submitStatus.message}</p>
                  {submitStatus.ticketId && (
                    <p className="text-sm mt-1">Reference: {submitStatus.ticketId}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="mailto:support@edutech.com" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-600">support@edutech.com</p>
                    </div>
                  </a>
                  <a href="tel:+1234567890" className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-600">+1 (234) 567-890</p>
                    </div>
                  </a>
                  <div className="flex items-start space-x-3 p-3 rounded-lg">
                    <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Visit Us</p>
                      <p className="text-sm text-gray-600">123 Education St, Learning City, LC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock size={18} className="mr-2" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    <span className="inline-flex items-center space-x-1">
                      <CheckCircle size={14} className="text-green-500" />
                      <span>24/7 Live Chat Support Available</span>
                    </span>
                  </p>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
                <HelpCircle size={32} className="mb-3" />
                <h3 className="font-semibold mb-2">Need Quick Answers?</h3>
                <p className="text-sm text-white/90 mb-4">Check our FAQ section for instant solutions to common questions.</p>
                <a 
                  href="/faq"
                  className="block w-full bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  View FAQs
                </a>
              </div>
            </div>

            {/* Main Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {/* Single Contact Form - Details Only */}
                <form onSubmit={handleSubmit} className="p-8">
                  {/* Details Tab */}
                  <div className="space-y-6">
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Full name"
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="name@company.com"
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="e.g. 9876543210"
                            required
                            pattern="[0-9]{10,15}"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company (Optional)
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Topic *
                          </label>
                          <select
                            name="topic"
                            value={formData.topic}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            <option value="">Select a topic</option>
                            {topics.map(topic => (
                              <option key={topic} value={topic}>{topic}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Urgency
                          </label>
                          <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          >
                            {urgencyLevels.map(level => (
                              <option key={level} value={level}>{level}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Describe your issue *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Include course, date selection, quiz/leaderboard context, or billing details to help us resolve faster."
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                        />
                      </div>


                      {/* AI Recommendation */}
                      <div className="border-t border-gray-200 pt-6">
                        <button
                          type="button"
                          onClick={handleAskAI}
                          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all"
                        >
                          <Zap size={18} />
                          <span>Try Ask AI first</span>
                        </button>
                        {showAIRecommendation && (
                          <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <Zap className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                              <div>
                                <h4 className="font-semibold text-purple-900 mb-1">AI Recommendation</h4>
                                <p className="text-sm text-purple-800">{aiSuggestion}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
                    <a
                      href="/faq"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      ← Back to FAQs
                    </a>
                    <div className="flex space-x-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center space-x-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Submit Ticket</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Response Time Info */}
              <div className="mt-6 text-center text-sm text-gray-600">
                We typically respond within 24 hours. For instant answers, try Ask AI.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
