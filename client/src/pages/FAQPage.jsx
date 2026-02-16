import React, { useState } from 'react';
import { 
  Search, ChevronRight, HelpCircle, BookOpen, 
  CreditCard, Award, Users, Zap, TrendingUp
} from 'react-feather';
import { Link } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqCategories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle size={20} />, count: 12 },
    { id: 'courses', name: 'Courses & Content', icon: <BookOpen size={20} />, count: 4 },
    { id: 'learning', name: 'Learning & Mentorship', icon: <Users size={20} />, count: 4 },
    { id: 'tests', name: 'Tests & Free Content', icon: <Award size={20} />, count: 2 },
    { id: 'billing', name: 'Billing & Access', icon: <CreditCard size={20} />, count: 2 },
  ];

  const faqData = [
    {
      id: 1,
      category: 'courses',
      question: 'What courses are currently offered at Siddhi?',
      answer: [
        'Siddhi currently offers four structured programs:',
        '',
        'BrahMos - Flagship Program',
        'Our most comprehensive preparation program covering Quantitative Aptitude (Maths), English, and General Studies (GS). Includes concept clarity from basics, structured notes, Weekly Grand Tests, Live Maths Practice Sessions, and Weekly Live Mentorship Sessions. Designed for serious aspirants preparing for SSC-level examinations.',
        '',
        'GS 1.0',
        'Complete General Studies coverage including Science, Static GK, and SSC-relevant theory. Strategically structured to help aspirants target 75%+ accuracy in the GK section.',
        '',
        'English 1.0',
        'Complete English syllabus coverage with special focus on Vocabulary development, Reading Comprehension (RC), Cloze Test, and Para Jumbles. Built to strengthen both fundamentals and exam-level execution.',
        '',
        'WPME Visual Learning Program',
        'A structured vocabulary foundation course based on Word Power Made Easy, delivered through a simplified and visual learning approach.',
      ],
      popular: true,
      tags: ['courses', 'brahmos', 'gs', 'english', 'wpme'],
    },
    {
      id: 2,
      category: 'courses',
      question: 'Are classes live or recorded?',
      answer: [
        'All academic lectures are recorded and uploaded to ensure structured and flexible learning.',
        '',
        'Students can learn at their own pace, rewatch for revision, and maintain preparation consistency.',
      ],
      popular: true,
      tags: ['classes', 'recorded', 'live', 'lectures'],
    },
    {
      id: 3,
      category: 'courses',
      question: 'What is the medium of instruction?',
      answer: [
        'All courses are taught strictly in English.',
        '',
        'This is an important consideration before enrollment.',
      ],
      popular: false,
      tags: ['language', 'english', 'medium'],
    },
    {
      id: 4,
      category: 'courses',
      question: 'Are concepts taught from basics?',
      answer: [
        'Yes. Every subject is taught from the foundational level, ensuring clarity for both beginners and repeat aspirants.',
        '',
        'Our focus remains on concept building, logical understanding, and exam-oriented application.',
      ],
      popular: true,
      tags: ['basics', 'beginners', 'foundation'],
    },
    {
      id: 5,
      category: 'learning',
      question: 'Is mentorship provided?',
      answer: [
        'Yes. We conduct Weekly Live Mentorship Sessions where students can directly interact with the tutor, discuss preparation strategy, ask doubts, and seek personalized guidance.',
        '',
        'Mentorship is a core pillar of Siddhi\'s learning ecosystem.',
      ],
      popular: true,
      tags: ['mentorship', 'live sessions', 'guidance'],
    },
    {
      id: 6,
      category: 'learning',
      question: 'Is there a student support system?',
      answer: [
        'Yes. Each course includes access to a private Telegram group dedicated to academic updates, doubt resolution, and structured communication.',
      ],
      popular: false,
      tags: ['support', 'telegram', 'doubts'],
    },
    {
      id: 7,
      category: 'learning',
      question: 'How are tests conducted?',
      answer: [
        'We follow a strong practice-driven model:',
        '',
        'Weekly Grand Tests are conducted regularly. All 2025 SSC Previous Year Questions (PYQs) are converted into structured tests and uploaded within course material for systematic practice.',
        '',
        'Consistent testing ensures exam readiness.',
      ],
      popular: true,
      tags: ['tests', 'grand test', 'pyq', 'practice'],
    },
    {
      id: 8,
      category: 'tests',
      question: 'What free content does Siddhi provide?',
      answer: [
        'Siddhi believes in accessible and transparent preparation support. We provide:',
        '',
        'All BrahMos Notes are unlocked and openly accessible to aid aspirants.',
        'Daily Current Affairs (CA) Quiz is available free via the Quizzes Page.',
        'All SSC Exams of 2025 are converted into full-length tests and provided free in the Quizzes section of the website.',
        'All Vocabulary Questions of 2025 are converted into structured tests and provided free in the Quizzes section.',
        '',
        'Our objective is to strengthen the preparation ecosystem for every serious aspirant, enrolled or not.',
      ],
      popular: true,
      tags: ['free', 'notes', 'current affairs', 'quizzes', 'pyq'],
    },
    {
      id: 9,
      category: 'billing',
      question: 'Are installment options available?',
      answer: [
        'Yes. To ensure affordability, installment payment options are available on all courses.',
        '',
        'Quality preparation should be accessible, not restricted.',
      ],
      popular: false,
      tags: ['installment', 'payment', 'emi', 'affordability'],
    },
    {
      id: 10,
      category: 'learning',
      question: 'How can students access the course content?',
      answer: [
        'All course materials are accessible via our Web Platform, including lecture recordings, notes, tests, and weekly schedules.',
        '',
        'Everything is systematically organized for seamless learning.',
      ],
      popular: false,
      tags: ['access', 'platform', 'content', 'materials'],
    },
    {
      id: 11,
      category: 'tests',
      question: 'Is the weekly schedule shared in advance?',
      answer: [
        'Yes. The academic schedule is posted one week in advance, enabling students to plan their preparation effectively.',
      ],
      popular: false,
      tags: ['schedule', 'weekly', 'planning'],
    },
    {
      id: 12,
      category: 'billing',
      question: 'Do you offer refunds?',
      answer: [
        'No. Siddhi maintains a strict no-refund policy.',
        '',
        'Students are advised to review all course details carefully before enrolling.',
      ],
      popular: true,
      tags: ['refund', 'policy', 'no refund'],
    },
  ];

  const quickLinks = [
    { name: 'Browse Courses', path: '/courses', icon: <BookOpen size={16} /> },
    { name: 'Free Quizzes', path: '/quizzes', icon: <Award size={16} /> },
    { name: 'Leaderboards', path: '/leaderboard', icon: <TrendingUp size={16} /> },
    { name: 'Contact Support', path: '/contact', icon: <Zap size={16} /> },
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">FAQs</h1>
            <p className="text-base text-gray-600">Everything you need to know about SiddhiPrep</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {faqCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={selectedCategory === category.id ? 'text-white' : 'text-gray-600'}>
                          {category.icon}
                        </div>
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Quick Links</h3>
                  <div className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.path}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-primary"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">
                    {selectedCategory === 'all' ? 'All Questions' : faqCategories.find(c => c.id === selectedCategory)?.name}
                  </h3>
                  <span className="text-sm text-gray-600">{filteredFAQs.length} questions</span>
                </div>

                <div className="space-y-3">
                  {filteredFAQs.map(faq => (
                    <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                            <HelpCircle size={16} className="text-primary" />
                          </div>
                          <p className="font-medium text-gray-900 text-sm sm:text-base">{faq.question}</p>
                        </div>
                        <ChevronRight 
                          size={20} 
                          className={`text-gray-400 transition-transform flex-shrink-0 ml-2 ${
                            expandedFAQ === faq.id ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedFAQ === faq.id && (
                        <div className="px-4 pb-4 border-t border-gray-100">
                          <div className="pl-11 pt-3">
                            <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                              {faq.answer.map((line, i) => (
                                line === '' ? <div key={i} className="h-2" /> : (
                                  <p key={i} className={
                                    line.endsWith('Program') || line.endsWith('Flagship Program') || line === 'GS 1.0' || line === 'English 1.0' || line === 'WPME Visual Learning Program'
                                      ? 'font-semibold text-gray-900'
                                      : ''
                                  }>{line}</p>
                                )
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {filteredFAQs.length === 0 && (
                  <div className="text-center py-12">
                    <HelpCircle size={48} className="text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">No FAQs found matching your search</p>
                    <p className="text-sm text-gray-500">Try different keywords or browse categories</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
