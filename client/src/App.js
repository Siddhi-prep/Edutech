import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import PromotionalPopup from './components/PromotionalPopup';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import BlogsPage from './pages/BlogsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import QuizzesPage from './pages/QuizzesPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but we encountered an error. Please try refreshing the page or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = false; // Always show navbar
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="App min-h-screen flex flex-col">
      {!hideNavbar && <ModernNavbar />}
      <main className="flex-grow">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/quizzes" element={<QuizzesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </main>
      {!hideNavbar && <Footer />}
      <AIAssistant onOpenChange={setIsChatbotOpen} />
      <PromotionalPopup isChatbotOpen={isChatbotOpen} />
    </div>
  );
};

function App() {
  return (
    <React.StrictMode>
      <Router>
        <AppContent />
      </Router>
    </React.StrictMode>
  );
}

export default App;
