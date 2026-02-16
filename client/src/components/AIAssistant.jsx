import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Maximize2, Minimize2 } from 'react-feather';

const AIAssistant = ({ onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! 👋 I\'m your SiddhiPrep AI Assistant. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Notify parent when chatbot opens/closes
  useEffect(() => {
    if (onOpenChange) {
      onOpenChange(isOpen);
    }
  }, [isOpen, onOpenChange]);

  const quickReplies = [
    'What courses do you offer?',
    'Free quizzes available?',
    'How to enroll?',
    'Contact support'
  ];

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good morning') || msg.includes('good evening')) {
      return 'Hey there! Welcome to SiddhiPrep. How can I help you with your preparation today?';
    }

    if (msg.includes('brahmos')) {
      return 'BrahMos is our flagship program covering Maths, English, and GS. It includes structured notes, Weekly Grand Tests, Live Maths Practice, and Weekly Live Mentorship Sessions. Built for serious SSC aspirants who mean business.\n\nEnroll here: zbckzy.courses.store/781683';
    }

    if (msg.includes('gs') || msg.includes('general studies') || msg.includes('gk') || msg.includes('science')) {
      return 'GS 1.0 covers Science, Static GK, and SSC-relevant theory. Strategically designed to help you hit 75%+ accuracy in the GK section. No more guessing.\n\nEnroll here: zbckzy.courses.store/717257';
    }

    if (msg.includes('english') || msg.includes('vocabulary') || msg.includes('rc') || msg.includes('cloze')) {
      return 'English VOD 1.0 covers Vocabulary, Reading Comprehension, Cloze Test, and Para Jumbles. Strengthens both fundamentals and exam-level execution.\n\nEnroll here: zbckzy.courses.store/717259';
    }

    if (msg.includes('wpme') || msg.includes('word power') || msg.includes('visual learning')) {
      return 'WPME Visual Learning is a structured vocabulary course based on Word Power Made Easy, delivered through a simplified visual approach. Great for building a strong word bank.\n\nEnroll here: zbckzy.courses.store/797733';
    }

    if (msg.includes('course') || msg.includes('program') || msg.includes('learn') || msg.includes('study') || msg.includes('offer')) {
      return 'We currently offer 4 structured programs:\n\n1. BrahMos Batch 2 - Flagship (Maths + English + GS)\n2. GS 1.0 - Complete General Studies\n3. English VOD 1.0 - Full English Syllabus\n4. WPME - Visual Vocabulary Learning\n\nAll lectures are recorded for flexible learning. Visit our Courses page to explore and enroll.';
    }

    if (msg.includes('price') || msg.includes('cost') || msg.includes('fee') || msg.includes('pay') || msg.includes('installment') || msg.includes('emi')) {
      return 'Course pricing is listed on each course card on our Courses page. We also offer installment payment options on all courses, because quality preparation should be accessible, not restricted.\n\nVisit /courses to see current pricing.';
    }

    if (msg.includes('login') || msg.includes('log in') || msg.includes('sign in') || msg.includes('account')) {
      return 'You can login to your SiddhiPrep account directly here:\nhttps://web.classplusapp.com/login?orgCode=zbckzy\n\nUse the same mobile number you registered with during enrollment.';
    }

    if (msg.includes('enroll') || msg.includes('register') || msg.includes('sign up') || msg.includes('join')) {
      return 'Enrolling is simple. Head to our Courses page, pick your course, and click "Enroll Now". You will be redirected to our Classplus platform to complete the enrollment.\n\nAlready enrolled? Login here: https://web.classplusapp.com/login?orgCode=zbckzy';
    }

    if (msg.includes('free') || msg.includes('quiz') || msg.includes('test') || msg.includes('pyq') || msg.includes('previous paper')) {
      return 'We believe in accessible preparation. Here is what is free:\n\n- All BrahMos Notes are openly accessible\n- Daily Current Affairs Quiz\n- All SSC 2025 PYQs as full-length tests\n- 2025 Vocabulary questions as structured tests\n\nHead to our Quizzes page to start practicing.';
    }

    if (msg.includes('mentor') || msg.includes('doubt') || msg.includes('guidance') || msg.includes('live session')) {
      return 'We conduct Weekly Live Mentorship Sessions where you can interact directly with the tutor, discuss strategy, ask doubts, and get personalized guidance. Mentorship is a core part of SiddhiPrep.';
    }

    if (msg.includes('telegram') || msg.includes('group') || msg.includes('community')) {
      return 'Each course includes access to a private Telegram group for academic updates, doubt resolution, and structured communication. Our public Telegram channel is t.me/Siddhi_SSC.';
    }

    if (msg.includes('refund') || msg.includes('money back') || msg.includes('cancel')) {
      return 'SiddhiPrep maintains a strict no-refund policy. We recommend reviewing all course details carefully before enrolling. That said, we are always available to help you make the right choice before you commit.';
    }

    if (msg.includes('contact') || msg.includes('support') || msg.includes('reach') || msg.includes('whatsapp') || msg.includes('call') || msg.includes('email')) {
      return 'You can reach us through:\n\nEmail: Edsiddhi03@gmail.com\nCall: +91 9030898917\nTelegram: t.me/Siddhi_SSC\nWhatsApp: Quick Support on 9030898917\n\nWe are fastest on WhatsApp between 10 AM - 7 PM. Save the call for emergencies, we read every text.';
    }

    if (msg.includes('live') || msg.includes('recorded') || msg.includes('lecture')) {
      return 'All academic lectures are recorded and uploaded for structured, flexible learning. You can learn at your own pace, rewatch for revision, and stay consistent. No FOMO here.';
    }

    if (msg.includes('medium') || msg.includes('language') || msg.includes('hindi')) {
      return 'All courses at SiddhiPrep are taught strictly in English. This is an important consideration before enrollment.';
    }

    if (msg.includes('basic') || msg.includes('beginner') || msg.includes('foundation') || msg.includes('scratch') || msg.includes('zero')) {
      return 'Yes, every subject is taught from the foundational level. Whether you are a beginner or a repeat aspirant, we focus on concept building, logical understanding, and exam-oriented application. No prior knowledge assumed.';
    }

    if (msg.includes('schedule') || msg.includes('timetable') || msg.includes('weekly')) {
      return 'The academic schedule is posted one week in advance so you can plan your preparation effectively. No last-minute surprises.';
    }

    if (msg.includes('leaderboard') || msg.includes('rank') || msg.includes('top')) {
      return 'Our Leaderboards track top performers across BrahMos Batch 1, BrahMos Batch 2, and Weekly Live Tests. Compete, improve, and get featured. Visit the Leaderboard page to see where you stand.';
    }

    if (msg.includes('blog')) {
      return 'Our Blogs section is coming soon. We are building expert-written notes, team stories, student success stories, and valuable lessons. Stay tuned.';
    }

    if (msg.includes('ssc') || msg.includes('cgl') || msg.includes('chsl') || msg.includes('mts') || msg.includes('exam')) {
      return 'SiddhiPrep is built for SSC aspirants. Our courses cover CGL, CHSL, MTS, and other SSC-level examinations. BrahMos is our flagship program for comprehensive preparation across all subjects.';
    }

    if (msg.includes('thank') || msg.includes('thanks') || msg.includes('great') || msg.includes('awesome')) {
      return 'Glad I could help. If you need anything else, just ask. We are here to make your preparation journey smoother. All the best!';
    }

    return 'Good question. I might not have the exact answer right now, but our team definitely does. Drop a WhatsApp message to 9030898917 or email Edsiddhi03@gmail.com. We respond between 10 AM - 7 PM, and yes, we actually read every message.';
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot typing
    setTimeout(() => {
      const botMessage = {
        type: 'bot',
        text: getBotResponse(inputValue),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply.replace(/[📚💰🎓📞]/g, '').trim());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Ask AI Assistant
          </div>
        </button>
      )}
      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed z-[9999] transition-all duration-300 ${
          isMinimized 
            ? 'bottom-6 right-6 w-80' 
            : 'bottom-6 right-6 w-96 h-[600px] md:w-[420px] md:h-[650px]'
        } max-w-[calc(100vw-3rem)]`}>
          <div className="bg-white rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs opacity-90">Online • Typically replies instantly</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`rounded-2xl px-4 py-2 ${
                            message.type === 'user'
                              ? 'bg-primary text-white rounded-br-none'
                              : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                        <p className={`text-xs text-gray-500 mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length <= 1 && (
                  <div className="px-4 py-2 bg-white border-t">
                    <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 bg-white border-t">
                  <div className="flex items-end space-x-2">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      rows="1"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={inputValue.trim() === ''}
                      className="bg-primary text-white p-2.5 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Powered by SiddhiPrep AI
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
