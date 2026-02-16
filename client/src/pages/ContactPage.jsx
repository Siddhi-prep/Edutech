import React from 'react';
import { Mail, Phone, Instagram, Clock, CheckCircle, HelpCircle } from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />

      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact & Support</h1>
            <p className="text-base text-gray-600">We're here to help. Reach out through any channel below.</p>
          </div>

          <div className="max-w-4xl mx-auto">

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
              href="mailto:Edsiddhi03@gmail.com"
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="bg-blue-50 p-3 rounded-xl text-primary flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-sm text-gray-500">Edsiddhi03@gmail.com</p>
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+919030898917"
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="bg-green-50 p-3 rounded-xl text-secondary flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-sm text-gray-500">+91 9030898917</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/siddhi_prep"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-xl text-pink-500 flex-shrink-0">
                <Instagram size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Instagram</h3>
                <p className="text-sm text-gray-500">@Siddhi_Prep</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919030898917?text=Hey%20SiddhiPrep%2C%20I%20am%20interested%20in%20your%20courses%20and%20would%20like%20some%20assistance.%20Please%20help%20me%20out."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50/60 border border-green-200 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-md hover:bg-green-50 transition-all duration-300"
            >
              <div className="bg-green-500 p-3 rounded-xl text-white flex-shrink-0">
                <WhatsAppIcon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-green-900 mb-1">Quick Support</h3>
                <p className="text-sm text-green-700/70">Chat with us on WhatsApp</p>
              </div>
            </a>
          </div>

          {/* Humorous Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10 text-center">
            <p className="text-sm text-amber-800">
              We are quick between <span className="font-semibold">10 AM - 7 PM</span>. Text us on WhatsApp, we prefer messages over calls — unless the world is ending.
            </p>
          </div>

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
    </div>
  );
};

export default ContactPage;
