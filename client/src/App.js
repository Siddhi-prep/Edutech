import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import PromotionalPopup from './components/PromotionalPopup';
import './index.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const LeaderboardPage = lazy(() => import('./pages/LeaderboardPage'));
const QuizzesPage = lazy(() => import('./pages/QuizzesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  </div>
);

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
  const hideNavbar = false; // Always show navbar
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="App min-h-screen flex flex-col">
      {!hideNavbar && <ModernNavbar />}
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
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
