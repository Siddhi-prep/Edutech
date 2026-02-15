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
    '📚 Browse Courses',
    '💰 Pricing Info',
    '🎓 How to Enroll',
    '📞 Contact Support'
  ];

  const botResponses = {
    'courses': 'We offer 200+ courses in Web Development, Data Science, UI/UX Design, and more! Click on the "Courses" section to explore.',
    'pricing': 'Our courses range from $99 to $399. We also offer bundle discounts and monthly payment plans. Would you like to know more about a specific course?',
    'enroll': 'Enrolling is easy! Just browse our courses, click "Enroll Now" on any course, and follow the simple registration process. Need help choosing a course?',
    'contact': 'You can reach us at support@siddhiprep.com or call +1 (555) 123-4567. We\'re here Monday-Friday, 9 AM - 6 PM EST.',
    'help': 'I can help you with:\n• Finding the right course\n• Pricing and payment options\n• Enrollment process\n• Technical support\n• General questions\n\nWhat would you like to know?',
    'default': 'That\'s a great question! Our team can provide detailed information. You can contact us at support@siddhiprep.com or explore our courses section for more details.'
  };

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('course') || msg.includes('learn') || msg.includes('study')) {
      return botResponses.courses;
    } else if (msg.includes('price') || msg.includes('cost') || msg.includes('pay')) {
      return botResponses.pricing;
    } else if (msg.includes('enroll') || msg.includes('register') || msg.includes('sign up')) {
      return botResponses.enroll;
    } else if (msg.includes('contact') || msg.includes('support') || msg.includes('help')) {
      return botResponses.contact;
    } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! 👋 How can I assist you today?';
    } else {
      return botResponses.default;
    }
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
