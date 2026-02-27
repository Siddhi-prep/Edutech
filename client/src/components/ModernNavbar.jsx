import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Home, Book, FileText, Award, 
  MessageCircle, HelpCircle, Search, User, TrendingUp, Target
} from 'react-feather';

const ModernNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  // Site content for search
  const siteContent = [
    { title: 'BrahMos Batch 2 - Flagship Program', category: 'Course', path: '/courses', icon: <Book size={18} className="text-primary" />, keywords: 'brahmos batch ssc cgl chsl mts maths english gs flagship' },
    { title: 'GS 1.0 - General Studies', category: 'Course', path: '/courses', icon: <Book size={18} className="text-primary" />, keywords: 'gs general studies science gk static' },
    { title: 'English VOD 1.0', category: 'Course', path: '/courses', icon: <Book size={18} className="text-primary" />, keywords: 'english vocabulary rc cloze test para jumbles' },
    { title: 'WPME - Visual Learning', category: 'Course', path: '/courses', icon: <Book size={18} className="text-primary" />, keywords: 'wpme word power made easy vocabulary visual' },
    { title: 'SSC 2025 Previous Papers', category: 'Quiz', path: '/quizzes', icon: <HelpCircle size={18} className="text-purple-600" />, keywords: 'ssc previous papers pyq 2025 practice' },
    { title: 'Current Affairs Quiz', category: 'Quiz', path: '/quizzes', icon: <HelpCircle size={18} className="text-purple-600" />, keywords: 'current affairs daily ca quiz gk' },
    { title: 'Vocabulary - Word Drop', category: 'Quiz', path: '/quizzes', icon: <HelpCircle size={18} className="text-purple-600" />, keywords: 'vocabulary word drop synonyms antonyms' },
    { title: 'Leaderboards', category: 'Feature', path: '/leaderboard', icon: <Award size={18} className="text-green-600" />, keywords: 'leaderboard rankings top performers brahmos batch' },
    { title: 'Blogs - Coming Soon', category: 'Page', path: '/blogs', icon: <FileText size={18} className="text-secondary" />, keywords: 'blog articles notes stories coming soon' },
    { title: 'Contact & Support', category: 'Page', path: '/contact', icon: <MessageCircle size={18} className="text-orange-600" />, keywords: 'contact support whatsapp telegram email call' },
    { title: 'FAQs', category: 'Page', path: '/faq', icon: <HelpCircle size={18} className="text-blue-600" />, keywords: 'faq questions help refund mentorship installment' },
    { title: 'Browse All Courses', category: 'Page', path: '/courses', icon: <TrendingUp size={18} className="text-green-600" />, keywords: 'courses catalog browse all enroll' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && !event.target.closest('.search-dropdown')) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  const handleSearchSelect = (item) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    navigate(item.path);
  };

  const filteredContent = searchQuery.trim()
    ? siteContent.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : siteContent.slice(0, 6); // Show first 6 as suggestions when search is empty



  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} />, isRoute: true },
    { name: 'Courses', path: '/courses', icon: <Book size={18} />, isRoute: true },
    { name: 'Blogs', path: '/blogs', icon: <FileText size={18} />, isRoute: true },
    { name: 'Leaderboard', path: '/leaderboard', icon: <Award size={18} />, isRoute: true },
    { name: 'Quizzes', path: '/quizzes', icon: <HelpCircle size={18} />, isRoute: true },
    { name: 'Tests', path: '/test-series', icon: <Target size={18} />, isRoute: true },
    { name: 'Contact', path: '/contact', icon: <MessageCircle size={18} />, isRoute: true },
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
        isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'
      }`}
    >
      <div className="container-custom">
        {/* Liquid Glass Pill Container */}
        <div className={`relative bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl transition-all duration-500 ${
          isScrolled ? 'shadow-3xl bg-white/80 border-white/40' : 'shadow-2xl'
        } before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-white/20 before:to-transparent before:pointer-events-none`}>
          <div className="flex items-center justify-between px-4 md:px-6 h-14 md:h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="/logo.jpeg"
                alt="SiddhiPrep Logo"
                className="w-8 h-8 md:w-9 md:h-9 rounded-xl group-hover:scale-110 transition-transform shadow-md object-cover"
              />
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block">
                SiddhiPrep
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-primary font-medium transition-all duration-200 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => scrollToSection(e, link.path)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 hover:text-primary font-medium transition-all duration-200 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                )
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Search Icon (Desktop) */}
              <div className="relative search-dropdown">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Search size={20} className="text-gray-600" />
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in z-50">
                    {/* Search Input */}
                    <div className="p-4 border-b">
                      <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search courses, blogs, pages..."
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* Search Results */}
                    <div className="p-2 max-h-96 overflow-y-auto">
                      <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                        {searchQuery.trim() ? 'Search Results' : 'Quick Access'}
                      </p>
                      {filteredContent.length > 0 ? (
                        filteredContent.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearchSelect(item)}
                            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-primary/10 transition-colors">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-primary">
                                {item.title}
                              </p>
                              <p className="text-xs text-gray-500">{item.category}</p>
                            </div>
                            <Search size={16} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))
                      ) : (
                        <div className="px-3 py-8 text-center">
                          <p className="text-sm text-gray-500">No results found</p>
                          <p className="text-xs text-gray-400 mt-1">Try different keywords</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Login Button */}
              <a
                href="https://web.classplusapp.com/login?orgCode=zbckzy"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/20 rounded-full text-gray-700 font-medium transition-all duration-300 group"
              >
                <User size={16} className="group-hover:scale-110 transition-transform" />
                <span>Login</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col h-full pt-20">
            {/* Close Button */}
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 py-6 space-y-3">
                {/* Search Bar Mobile */}
                <div className="mb-6">
                  <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search courses, blogs, pages..."
                      className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-primary/20 border border-gray-200 shadow-sm"
                    />
                  </div>
                  {/* Mobile Search Results */}
                  {searchQuery.trim() && (
                    <div className="mt-3 bg-white rounded-xl border border-gray-200 overflow-hidden">
                      {filteredContent.length > 0 ? (
                        filteredContent.slice(0, 5).map((item, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              handleSearchSelect(item);
                              setIsOpen(false);
                            }}
                            className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left border-b last:border-b-0"
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{item.title}</p>
                              <p className="text-xs text-gray-500">{item.category}</p>
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-6 text-center text-sm text-gray-500">
                          No results found
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-4 px-6 py-4 rounded-2xl text-gray-700 hover:bg-gray-100 hover:text-primary font-medium transition-all text-lg border border-transparent hover:border-gray-200"
                    >
                      <div className="p-2 bg-gray-100 rounded-xl">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={(e) => {
                        scrollToSection(e, link.path);
                        setIsOpen(false);
                      }}
                      className="flex items-center space-x-4 px-6 py-4 rounded-2xl text-gray-700 hover:bg-gray-100 hover:text-primary font-medium transition-all text-lg border border-transparent hover:border-gray-200"
                    >
                      <div className="p-2 bg-gray-100 rounded-xl">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </a>
                  )
                ))}

                {/* Mobile Login Button */}
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <a
                    href="https://web.classplusapp.com/login?orgCode=zbckzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/20 rounded-2xl font-medium transition-all duration-300 text-gray-700"
                  >
                    <User size={18} />
                    <span>Login</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ModernNavbar;
