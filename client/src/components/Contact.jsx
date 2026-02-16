import React from 'react';
import { Mail, Phone, Send } from 'react-feather';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
              Whether you have a question about preparation, guidance or courses,
              our team is ready to answer all your questions.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {/* Email */}
            <a
              href="mailto:Edsiddhi03@gmail.com"
              className="bg-white border border-gray-100 rounded-xl p-5 flex items-start space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="bg-blue-50 p-2.5 rounded-lg text-primary flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Email Us</h4>
                <p className="text-sm text-gray-500">Edsiddhi03@gmail.com</p>
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+919030898917"
              className="bg-white border border-gray-100 rounded-xl p-5 flex items-start space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="bg-green-50 p-2.5 rounded-lg text-secondary flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Call Us</h4>
                <p className="text-sm text-gray-500">+91 9030898917</p>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/Siddhi_SSC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-100 rounded-xl p-5 flex items-start space-x-3 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="bg-sky-50 p-2.5 rounded-lg text-sky-500 flex-shrink-0">
                <Send size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-0.5">Telegram</h4>
                <p className="text-sm text-gray-500">Siddhi_SSC</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919030898917?text=Hey%20SiddhiPrep%2C%20I%20am%20interested%20in%20your%20courses%20and%20would%20like%20some%20assistance.%20Please%20help%20me%20out."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50/60 border border-green-200 rounded-xl p-5 flex items-start space-x-3 hover:shadow-md hover:bg-green-50 transition-all duration-300"
            >
              <div className="bg-green-500 p-2.5 rounded-lg text-white flex-shrink-0">
                <WhatsAppIcon size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-green-900 mb-0.5">Quick Support</h4>
                <p className="text-sm text-green-700/70">Chat with us on WhatsApp</p>
              </div>
            </a>
          </div>

          {/* Humorous Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-6 text-center">
            <p className="text-sm text-amber-800">
              We reply fastest on WhatsApp between <span className="font-semibold">10 AM - 7 PM</span>. Save the call for emergencies, we promise we read every text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
