import React, { useState, useEffect } from 'react';
import { 
  Flag, ChevronLeft, ChevronRight, HelpCircle, 
  CheckCircle, XCircle, Zap, ArrowLeft, Settings
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';
import ProtectedFeature from '../components/ProtectedFeature';
import GradientBackground from '../components/GradientBackground';

const QuizTakingPage = ({ quiz, onBack }) => {
  useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60); // Convert minutes to seconds
  const [streak, setStreak] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState([]);
  const [showCustomize, setShowCustomize] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    questionCount: quiz.questions,
    timeLimit: quiz.duration,
    showHints: true,
    randomOrder: false
  });

  // Sample questions for HTML & CSS quiz
  const quizQuestions = [
    {
      id: 1,
      question: 'Which CSS property defines the space between an element\'s content and its border?',
      options: [
        { id: 'A', text: 'margin' },
        { id: 'B', text: 'padding' },
        { id: 'C', text: 'gap' },
        { id: 'D', text: 'outline-offset' }
      ],
      correctAnswer: 'B',
      explanation: 'Padding is inside the border; margin is outside.',
      aiHint: 'Think about what\'s inside vs outside the border. Padding adds space inside the element, between the content and the border.',
      difficulty: 'Easy'
    },
    {
      id: 2,
      question: 'What is the correct way to select all elements with class "container"?',
      options: [
        { id: 'A', text: '#container' },
        { id: 'B', text: '.container' },
        { id: 'C', text: 'container' },
        { id: 'D', text: '*container' }
      ],
      correctAnswer: 'B',
      explanation: 'The dot (.) is used for class selectors in CSS.',
      aiHint: 'Remember: # is for IDs, . is for classes, and no prefix is for element selectors.',
      difficulty: 'Easy'
    },
    {
      id: 3,
      question: 'Which property is used to create a flexbox layout?',
      options: [
        { id: 'A', text: 'display: flex' },
        { id: 'B', text: 'layout: flex' },
        { id: 'C', text: 'flex: true' },
        { id: 'D', text: 'position: flex' }
        ],
      correctAnswer: 'A',
      explanation: 'display: flex enables flexbox layout on an element.',
      aiHint: 'Flexbox is a display mode. Think about how you change the display property of elements.',
      difficulty: 'Easy'
    },
    {
      id: 4,
      question: 'What does the "z-index" property control?',
      options: [
        { id: 'A', text: 'Element size' },
        { id: 'B', text: 'Stacking order' },
        { id: 'C', text: 'Animation speed' },
        { id: 'D', text: 'Border width' }
      ],
      correctAnswer: 'B',
      explanation: 'z-index controls the stacking order of positioned elements.',
      aiHint: 'Think about layers in design software. Which element appears on top of others?',
      difficulty: 'Medium'
    },
    {
      id: 5,
      question: 'Which HTML5 element is used for navigation links?',
      options: [
        { id: 'A', text: '<navigation>' },
        { id: 'B', text: '<nav>' },
        { id: 'C', text: '<menu>' },
        { id: 'D', text: '<links>' }
      ],
      correctAnswer: 'B',
      explanation: 'The <nav> element is the semantic HTML5 tag for navigation.',
      aiHint: 'HTML5 introduced semantic elements with shorter, meaningful names. Think of a 3-letter abbreviation.',
      difficulty: 'Easy'
    }
  ];

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const accuracy = currentQuestion > 0 ? Math.round((score / currentQuestion) * 100) : 0;

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionId) => {
    if (!isAnswered) {
      setSelectedAnswer(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      setIsAnswered(true);
      if (selectedAnswer === currentQ.correctAnswer) {
        setScore(score + 1);
        setStreak(streak + 1);
      } else {
        setStreak(0);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowHint(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowHint(false);
    }
  };

  const toggleFlag = () => {
    if (flaggedQuestions.includes(currentQuestion)) {
      setFlaggedQuestions(flaggedQuestions.filter(q => q !== currentQuestion));
    } else {
      setFlaggedQuestions([...flaggedQuestions, currentQuestion]);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-amber-100 text-amber-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom max-w-6xl">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Quiz Catalog</span>
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{quiz.title}</h1>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {quiz.category}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(quiz.difficulty)}`}>
                    {quiz.difficulty}
                  </span>
                  <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {quizQuestions.length}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowCustomize(!showCustomize)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Settings size={18} />
                  <span className="hidden md:inline">Customize</span>
                </button>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{formatTime(timeLeft)}</div>
                  <div className="text-xs text-gray-500">Time Left</div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>{currentQuestion + 1}/{quizQuestions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
          </div>

          {/* Customize Panel */}
          {showCustomize && (
            <div className="mb-6 bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quiz Settings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Questions: {quizSettings.questionCount}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    value={quizSettings.questionCount}
                    onChange={(e) => setQuizSettings({...quizSettings, questionCount: parseInt(e.target.value)})}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Limit: {quizSettings.timeLimit} min
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    value={quizSettings.timeLimit}
                    onChange={(e) => setQuizSettings({...quizSettings, timeLimit: parseInt(e.target.value)})}
                    className="w-full"
                  />
                </div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={quizSettings.showHints}
                    onChange={(e) => setQuizSettings({...quizSettings, showHints: e.target.checked})}
                    className="w-4 h-4 text-primary focus:ring-primary rounded"
                  />
                  <span className="text-sm text-gray-700">Show AI Tutor Hints</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={quizSettings.randomOrder}
                    onChange={(e) => setQuizSettings({...quizSettings, randomOrder: e.target.checked})}
                    className="w-4 h-4 text-primary focus:ring-primary rounded"
                  />
                  <span className="text-sm text-gray-700">Randomize Question Order</span>
                </label>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* Quiz Outline */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Questions</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {quizQuestions.map((q, index) => (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentQuestion(index);
                        setSelectedAnswer(null);
                        setIsAnswered(false);
                        setShowHint(false);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all ${
                        currentQuestion === index
                          ? 'bg-primary text-white'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-sm font-medium">{index + 1}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        currentQuestion === index
                          ? 'bg-white/20'
                          : getDifficultyColor(q.difficulty)
                      }`}>
                        {q.difficulty}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Your Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                    <span className="text-sm text-gray-700">Score</span>
                    <span className="text-lg font-bold text-primary">{score}/{quizQuestions.length}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                    <span className="text-sm text-gray-700">Accuracy</span>
                    <span className="text-lg font-bold text-purple-600">{accuracy}%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                    <span className="text-sm text-gray-700">Streak</span>
                    <span className="text-lg font-bold text-amber-600 flex items-center">
                      <Zap size={16} className="mr-1" />
                      {streak}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                {/* Question */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 flex-1">
                      {currentQ.question}
                    </h2>
                    <button
                      onClick={toggleFlag}
                      className={`ml-4 p-2 rounded-lg transition-colors ${
                        flaggedQuestions.includes(currentQuestion)
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Flag size={20} />
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {currentQ.options.map((option) => {
                    const isSelected = selectedAnswer === option.id;
                    const isCorrect = option.id === currentQ.correctAnswer;
                    const showResult = isAnswered;

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswerSelect(option.id)}
                        disabled={isAnswered}
                        className={`w-full flex items-center p-4 rounded-xl border-2 transition-all text-left ${
                          showResult
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : isSelected
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200 bg-gray-50'
                            : isSelected
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0 ${
                          showResult
                            ? isCorrect
                              ? 'bg-green-500 text-white'
                              : isSelected
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-200 text-gray-600'
                            : isSelected
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {option.id}
                        </div>
                        <span className="flex-1 font-medium text-gray-900">{option.text}</span>
                        {showResult && isCorrect && (
                          <CheckCircle className="text-green-500 ml-2" size={24} />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="text-red-500 ml-2" size={24} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {isAnswered && (
                  <div className={`p-4 rounded-xl mb-6 ${
                    selectedAnswer === currentQ.correctAnswer
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-start space-x-3">
                      {selectedAnswer === currentQ.correctAnswer ? (
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      ) : (
                        <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {selectedAnswer === currentQ.correctAnswer ? 'Correct!' : 'Incorrect'}
                        </h4>
                        <p className="text-sm text-gray-700">
                          <strong>Explanation:</strong> {currentQ.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Tutor Hint */}
                {!isAnswered && quizSettings.showHints && (
                  <div className="mb-6">
                    <ProtectedFeature 
                      feature="ai_assistant"
                      fallbackTitle="AI Tutor Help - Premium Feature"
                      fallbackDescription="Get personalized hints and explanations with AI assistance. Sign in to unlock this feature."
                    >
                      <button
                        onClick={() => setShowHint(!showHint)}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        <HelpCircle size={18} />
                        <span className="font-medium">AI Tutor Help</span>
                      </button>
                      {showHint && (
                        <div className="mt-3 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                          <div className="flex items-start space-x-3">
                            <HelpCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                            <div>
                              <h4 className="font-semibold text-purple-900 mb-1">AI Tutor Hint</h4>
                              <p className="text-sm text-purple-800">{currentQ.aiHint}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </ProtectedFeature>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <button
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={20} />
                    <span>Previous</span>
                  </button>

                  <div className="flex items-center space-x-3">
                    {!isAnswered ? (
                      <button
                        onClick={handleSubmitAnswer}
                        disabled={!selectedAnswer}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                      >
                        Submit Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        disabled={currentQuestion === quizQuestions.length - 1}
                        className="flex items-center space-x-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                      >
                        <span>Next</span>
                        <ChevronRight size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTakingPage;
