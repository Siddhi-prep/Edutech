import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'react-feather';
import { submitContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await submitContact(formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Get In Touch</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Whether you have a question about courses, pricing, or anything else,
                our team is ready to answer all your questions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-start space-x-3 hover:shadow-sm hover:border-gray-200 transition-all duration-300">
                <div className="bg-blue-50 p-2.5 rounded-lg text-primary flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Email Us</h4>
                  <p className="text-sm text-gray-500">support@siddhiprep.com</p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-start space-x-3 hover:shadow-sm hover:border-gray-200 transition-all duration-300">
                <div className="bg-green-50 p-2.5 rounded-lg text-secondary flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Call Us</h4>
                  <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-start space-x-3 hover:shadow-sm hover:border-gray-200 transition-all duration-300">
                <div className="bg-purple-50 p-2.5 rounded-lg text-purple-600 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Visit Us</h4>
                  <p className="text-sm text-gray-500">
                    123 Learning Street, Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-xl p-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold mb-0.5">Quick Support</h4>
                  <p className="text-xs opacity-90">Chat with us on WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/917013706173?text=Hello%20SiddhiPrep%20Team%2C%20I%20need%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 p-2.5 rounded-full hover:scale-110 transition-transform flex items-center justify-center"
                  aria-label="Chat with us on WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
