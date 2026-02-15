import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'react-feather';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '#courses' },
    { name: 'Blogs', path: '#blogs' },
    { name: 'Leaderboard', path: '#leaderboard' },
    { name: 'Contact', path: '#contact' },
  ];

  const scrollToSection = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={() => setIsOpen(false)}>
            <div className="bg-gradient-to-r from-primary to-secondary p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform">
              <BookOpen className="text-white" size={20} />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SiddhiPrep
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="btn-primary">Book Demo</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in bg-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="block py-3.5 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 px-4 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="btn-primary w-full mt-4 text-base">Book Demo</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
