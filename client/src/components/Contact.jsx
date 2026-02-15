import React from 'react';
import { Mail, Phone, Send, MessageCircle } from 'react-feather';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Get In Touch</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Let's Connect Header */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Let's Connect</h3>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Whether you have a question about courses, pricing, or anything else,
              our team is ready to answer all your questions.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {/* Email */}
            <a
              href="mailto:support@siddhiprep.com"
              className="bg-white border border-gray-100 rounded-xl p-5 flex items-start space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="bg-blue-50 p-2.5 rounded-lg text-primary flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Email Us</h4>
                <p className="text-sm text-gray-500">support@siddhiprep.com</p>
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+15551234567"
              className="bg-white border border-gray-100 rounded-xl p-5 flex items-start space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="bg-green-50 p-2.5 rounded-lg text-secondary flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Call Us</h4>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
              </div>
            </a>

            {/* Telegram */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 flex items-start space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300">
              <div className="bg-sky-50 p-2.5 rounded-lg text-sky-500 flex-shrink-0">
                <Send size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Telegram</h4>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917013706173?text=Hello%20SiddhiPrep%20Team%2C%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-100 rounded-xl p-5 flex items-start space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="bg-green-50 p-2.5 rounded-lg text-green-600 flex-shrink-0">
                <MessageCircle size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Quick Support</h4>
                <p className="text-sm text-gray-500">Chat with us on WhatsApp</p>
              </div>
            </a>
          </div>

          {/* Friendly Note */}
          <p className="text-center text-xs text-gray-400">
            Quick doubt? WhatsApp is best for messages 😄
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
