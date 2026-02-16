import React from 'react';
import { Instagram, Youtube, BookOpen, Send } from 'react-feather';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@SiddhiPrep', name: 'YouTube' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/siddhi_prep', name: 'Instagram' },
    { icon: <Send size={20} />, url: 'https://t.me/siddhiPrep', name: 'Telegram' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/', type: 'internal' },
    { label: 'Careers', href: 'mailto:edsiddhi03@gmail.com?subject=Career%20Inquiry%20-%20SiddhiPrep&body=Hi%20SiddhiPrep%20Team%2C%0A%0AI%20am%20interested%20in%20career%20opportunities%20at%20SiddhiPrep.%0A%0ARegards', type: 'external' },
    { label: 'Blog', href: '/blogs', type: 'internal' },
    { label: 'Contact', href: 'https://wa.me/919030898917?text=Hey%20SiddhiPrep%2C%20I%20am%20interested%20in%20your%20courses%20and%20would%20like%20some%20assistance.%20Please%20help%20me%20out.', type: 'external' },
  ];

  const courseLinks = [
    { label: 'BrahMos', href: 'https://zbckzy.courses.store/781683' },
    { label: 'GS Mastery', href: 'https://zbckzy.courses.store/717257' },
    { label: 'English Mastery', href: 'https://zbckzy.courses.store/717259' },
    { label: 'WPME Visual Learning', href: 'https://zbckzy.courses.store/797733' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white">SIDDHI PREP</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Transforming aspirants into achievers through strategic mentorship, exam-focused content, and high-quality digital learning.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.type === 'internal' ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-white font-medium">Refund Policy</span><br />
                No refunds are issued under any circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} SiddhiPrep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
