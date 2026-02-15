import React from 'react';
import { Mail, Phone, Send, MessageCircle, Clock, CheckCircle, HelpCircle } from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />

      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact & Support</h1>
            <p className="text-base text-gray-600">We're here to help. Reach out through any channel below.</p>
          </div>

          {/* Let's Connect */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Let's Connect</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Whether you have a question about courses, pricing, or anything else,
              our team is ready to answer all your questions.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {/* Email */}
            <a
              href="mailto:support@siddhiprep.com"
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="bg-blue-50 p-3 rounded-xl text-primary flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-sm text-gray-500">support@siddhiprep.com</p>
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+15551234567"
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="bg-green-50 p-3 rounded-xl text-secondary flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
              </div>
            </a>

            {/* Telegram */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-md hover:border-gray-300 transition-all duration-300">
              <div className="bg-sky-50 p-3 rounded-xl text-sky-500 flex-shrink-0">
                <Send size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Telegram</h3>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917013706173?text=Hello%20SiddhiPrep%20Team%2C%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="bg-green-50 p-3 rounded-xl text-green-600 flex-shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Quick Support</h3>
                <p className="text-sm text-gray-500">Chat with us on WhatsApp</p>
              </div>
            </a>
          </div>

          {/* Friendly Note */}
          <p className="text-center text-xs text-gray-400 mb-10">
            Quick doubt? WhatsApp is best for messages 😄
          </p>

          {/* Bottom Row: Office Hours + FAQ */}
          <div className="grid sm:grid-cols-2 gap-4">
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

            {/* FAQ */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white flex flex-col justify-between">
              <div>
                <HelpCircle size={28} className="mb-3" />
                <h3 className="font-semibold mb-2">Need Quick Answers?</h3>
                <p className="text-sm text-white/90 mb-4">Check our FAQ section for instant solutions to common questions.</p>
              </div>
              <a
                href="/faq"
                className="block w-full bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
              >
                View FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
