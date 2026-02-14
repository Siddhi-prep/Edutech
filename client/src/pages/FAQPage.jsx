import React, { useState } from 'react';
import { 
  Search, X, ChevronRight, HelpCircle, BookOpen, 
  CreditCard, Settings, Zap, Calendar, 
  TrendingUp, Award, Star
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showAskAI, setShowAskAI] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAILoading, setIsAILoading] = useState(false);

  const faqCategories = [
    { id: 'all', name: 'All Categories', icon: <HelpCircle size={20} />, count: 24 },
    { id: 'enrollment', name: 'Course Enrollment & Access', icon: <BookOpen size={20} />, count: 8 },
    { id: 'quizzes', name: 'Quizzes & Leaderboards', icon: <Award size={20} />, count: 6 },
    { id: 'billing', name: 'Billing & Refunds', icon: <CreditCard size={20} />, count: 5 },
    { id: 'account', name: 'Account & Settings', icon: <Settings size={20} />, count: 5 }
  ];

  const faqData = [
    // Course Enrollment & Access
    {
      id: 1,
      category: 'enrollment',
      question: 'How do I enroll in a course?',
      answer: 'To enroll, go to Courses, choose a course, select an available start date on the calendar, and click Enroll. You\'ll receive a confirmation email with your access details.',
      popular: true,
      tags: ['enrollment', 'courses', 'getting started']
    },
    {
      id: 2,
      category: 'enrollment',
      question: 'Can I select a start date?',
      answer: 'Yes! Most courses offer flexible start dates. When enrolling, you can choose from available dates on the course calendar. Some intensive courses have fixed start dates.',
      popular: false,
      tags: ['start date', 'calendar', 'scheduling']
    },
    {
      id: 3,
      category: 'enrollment',
      question: 'Is my payment secure?',
      answer: 'Absolutely! We use industry-standard SSL encryption and partner with trusted payment processors like Stripe and PayPal to ensure your payment information is completely secure.',
      popular: true,
      tags: ['payment', 'security', 'ssl']
    },
    {
      id: 4,
      category: 'enrollment',
      question: 'How do I access my enrolled courses?',
      answer: 'After enrollment, go to your Dashboard or My Courses section. All your active courses will be listed there with progress tracking and direct access links.',
      popular: false,
      tags: ['access', 'dashboard', 'my courses']
    },
    {
      id: 5,
      category: 'enrollment',
      question: 'Can I switch between courses?',
      answer: 'Yes, you can access all your enrolled courses anytime. Use the course switcher in your dashboard or navigate through the main Courses page.',
      popular: false,
      tags: ['switching', 'multiple courses', 'navigation']
    },
    {
      id: 6,
      category: 'enrollment',
      question: 'What if I miss the start date?',
      answer: 'Don\'t worry! You can join most courses within the first week. For self-paced courses, you can start anytime. Contact support if you need help.',
      popular: false,
      tags: ['late start', 'missed date', 'flexibility']
    },

    // Quizzes & Leaderboards
    {
      id: 7,
      category: 'quizzes',
      question: 'How are points calculated?',
      answer: 'Points are awarded based on quiz performance: 10 points per correct answer, bonus points for streaks, and time bonuses for quick completion. Difficulty multipliers apply.',
      popular: true,
      tags: ['points', 'scoring', 'calculation']
    },
    {
      id: 8,
      category: 'quizzes',
      question: 'How does the leaderboard update?',
      answer: 'Leaderboards update in real-time after each quiz completion. Rankings are based on total points, accuracy, and recent activity. Weekly and monthly boards reset automatically.',
      popular: true,
      tags: ['leaderboard', 'ranking', 'updates']
    },
    {
      id: 9,
      category: 'quizzes',
      question: 'What happens if I miss a quiz?',
      answer: 'Missed quizzes can be retaken within 48 hours with a small point penalty. Some quizzes have unlimited attempts, while others are limited to 3 tries.',
      popular: false,
      tags: ['missed quiz', 'retake', 'attempts']
    },
    {
      id: 10,
      category: 'quizzes',
      question: 'Can I customize quiz difficulty?',
      answer: 'Yes! In the Quiz Catalog, you can filter by difficulty and customize settings like question count, time limits, and hint availability before starting.',
      popular: false,
      tags: ['difficulty', 'customization', 'settings']
    },
    {
      id: 11,
      category: 'quizzes',
      question: 'How do I use AI Tutor hints?',
      answer: 'During quizzes, click the "AI Tutor Help" button for personalized hints. The AI analyzes your question and provides contextual guidance without giving away the answer.',
      popular: true,
      tags: ['ai tutor', 'hints', 'help']
    },
    {
      id: 12,
      category: 'quizzes',
      question: 'Are quiz results saved?',
      answer: 'Yes, all quiz results are automatically saved to your profile. You can view detailed analytics, progress over time, and areas for improvement in your dashboard.',
      popular: false,
      tags: ['results', 'analytics', 'progress']
    },

    // Billing & Refunds
    {
      id: 13,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for enterprise accounts.',
      popular: true,
      tags: ['payment methods', 'credit cards', 'paypal']
    },
    {
      id: 14,
      category: 'billing',
      question: 'Can I get a refund?',
      answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied within 30 days of purchase, contact support for a full refund. Some restrictions apply to completed courses.',
      popular: true,
      tags: ['refund', 'money back', 'guarantee']
    },
    {
      id: 15,
      category: 'billing',
      question: 'Do you provide invoices?',
      answer: 'Yes, invoices are automatically generated and sent to your email after each payment. You can also download them from your Billing section in account settings.',
      popular: false,
      tags: ['invoices', 'receipts', 'billing']
    },
    {
      id: 16,
      category: 'billing',
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! The price you see is what you pay. This includes all course materials, quizzes, certificates, and ongoing support. Some premium features may have separate pricing.',
      popular: false,
      tags: ['fees', 'pricing', 'transparency']
    },
    {
      id: 17,
      category: 'billing',
      question: 'Can I upgrade my plan?',
      answer: 'Absolutely! You can upgrade anytime from your account settings. You\'ll only pay the difference, prorated for the remaining period. Upgrades take effect immediately.',
      popular: false,
      tags: ['upgrade', 'plan change', 'pricing']
    },

    // Account & Settings
    {
      id: 18,
      category: 'account',
      question: 'I forgot my password',
      answer: 'Click "Forgot Password" on the login page, enter your email, and we\'ll send a reset link. The link expires in 24 hours for security. You can also use social login options.',
      popular: true,
      tags: ['password', 'reset', 'login']
    },
    {
      id: 19,
      category: 'account',
      question: 'How to manage notifications?',
      answer: 'Go to Settings > Notifications to customize your preferences. You can control email notifications, push notifications, quiz reminders, and course updates individually.',
      popular: false,
      tags: ['notifications', 'settings', 'preferences']
    },
    {
      id: 20,
      category: 'account',
      question: 'Delete my account',
      answer: 'To delete your account, go to Settings > Account > Delete Account. This action is permanent and will remove all your data, progress, and certificates. Consider downloading your certificates first.',
      popular: false,
      tags: ['delete account', 'data removal', 'permanent']
    },
    {
      id: 21,
      category: 'account',
      question: 'How to change my email?',
      answer: 'In Settings > Profile, click "Change Email", enter your new email, and verify it through the confirmation link we send. Your login credentials will update automatically.',
      popular: false,
      tags: ['email change', 'profile', 'verification']
    },
    {
      id: 22,
      category: 'account',
      question: 'Can I have multiple accounts?',
      answer: 'Each person should have only one account per our terms of service. However, you can link multiple email addresses and social accounts to the same profile for easier login.',
      popular: false,
      tags: ['multiple accounts', 'policy', 'social login']
    }
  ];

  const quickLinks = [
    { name: 'Enroll in a Course', path: '/courses', icon: <BookOpen size={16} /> },
    { name: 'Select Start Date', path: '/courses', icon: <Calendar size={16} /> },
    { name: 'Quiz Dashboard', path: '/quizzes', icon: <Award size={16} /> },
    { name: 'View Leaderboards', path: '/leaderboard', icon: <TrendingUp size={16} /> },
    { name: 'Billing Help', path: '/contact', icon: <CreditCard size={16} /> }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqData.filter(faq => faq.popular);

  const handleAskAI = async () => {
    if (!aiQuery.trim()) return;
    
    setIsAILoading(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate contextual AI response
    const aiResponses = {
      'enroll': 'To enroll in a course, visit our Courses page, select your desired course, choose a start date from the calendar, and complete the enrollment process. You\'ll receive immediate access to course materials.',
      'payment': 'We accept all major payment methods including credit cards, PayPal, and digital wallets. All transactions are secured with SSL encryption and processed through trusted payment gateways.',
      'quiz': 'Quizzes are available in the Quiz Catalog. You can customize difficulty, time limits, and use AI Tutor hints. Points are awarded based on accuracy and speed, contributing to leaderboard rankings.',
      'refund': 'We offer a 30-day money-back guarantee. If you\'re not satisfied, contact our support team for a full refund. Refunds are processed within 5-7 business days.',
      'certificate': 'Certificates are automatically generated upon course completion with a passing grade. You can download them from your Dashboard and share them on LinkedIn or other platforms.',
      'default': `Based on your question "${aiQuery}", I recommend checking our FAQ sections or contacting our support team. For course-related queries, visit the Courses page. For technical issues, try our live chat support.`
    };
    
    const responseKey = Object.keys(aiResponses).find(key => 
      aiQuery.toLowerCase().includes(key)
    ) || 'default';
    
    setAiResponse(aiResponses[responseKey]);
    setIsAILoading(false);
  };

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Help Center • FAQs</h1>
            <p className="text-base text-gray-600">Find answers to common questions or ask our AI assistant</p>
          </div>

          {/* Search & Ask AI */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <button
              onClick={() => setShowAskAI(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
            >
              <Zap size={20} />
              <span>Ask AI</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
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
              </div>

              {/* Quick Links */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap size={18} className="mr-2" />
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 hover:text-primary"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Popular Answers */}
              {selectedCategory === 'all' && !searchQuery && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Star size={18} className="mr-2 text-amber-500" />
                    Popular Answers
                  </h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-800">
                      <strong>Most Asked:</strong> To enroll, go to Courses, choose a course, select an available start date on the calendar, and click Enroll. You'll receive a confirmation email with your access details.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {popularFAQs.slice(0, 4).map(faq => (
                      <button
                        key={faq.id}
                        onClick={() => toggleFAQ(faq.id)}
                        className="text-left p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
                      >
                        <p className="font-medium text-gray-900 text-sm">{faq.question}</p>
                        <p className="text-xs text-gray-600 mt-1">Click to expand</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ List */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">
                    {selectedCategory === 'all' ? 'All Questions' : faqCategories.find(c => c.id === selectedCategory)?.name}
                  </h3>
                  <span className="text-sm text-gray-600">{filteredFAQs.length} questions</span>
                </div>

                <div className="space-y-4">
                  {filteredFAQs.map(faq => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <HelpCircle size={16} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{faq.question}</p>
                            {faq.popular && (
                              <span className="inline-flex items-center space-x-1 text-xs text-amber-600 mt-1">
                                <Star size={12} fill="currentColor" />
                                <span>Popular</span>
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronRight 
                          size={20} 
                          className={`text-gray-400 transition-transform ${
                            expandedFAQ === faq.id ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedFAQ === faq.id && (
                        <div className="px-4 pb-4 border-t border-gray-100">
                          <div className="pl-11">
                            <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {faq.tags.map(tag => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {tag}
                                </span>
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

      {/* Ask AI Modal */}
      {showAskAI && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Zap size={24} className="mr-2 text-blue-500" />
                Ask AI Assistant
              </h3>
              <button
                onClick={() => {
                  setShowAskAI(false);
                  setAiQuery('');
                  setAiResponse('');
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What can I help you with?
                </label>
                <textarea
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder="Ask about courses, quizzes, billing, account settings..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <button
                onClick={handleAskAI}
                disabled={!aiQuery.trim() || isAILoading}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
              >
                {isAILoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>AI is thinking...</span>
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    <span>Get AI Answer</span>
                  </>
                )}
              </button>
              
              {aiResponse && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Zap className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">AI Assistant Response</h4>
                      <p className="text-blue-800 text-sm leading-relaxed">{aiResponse}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQPage;
