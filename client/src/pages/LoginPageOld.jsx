import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, Phone, Eye, EyeOff, ArrowLeft, GitHub, 
  Linkedin, User, Lock, AlertCircle, CheckCircle, BookOpen
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';
import GradientBackground from '../components/GradientBackground';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
  const [loginMethod, setLoginMethod] = useState('email');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    setError(''); // Clear error when user types
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create user session
      const userData = {
        id: Date.now(),
        name: 'John Doe',
        email: formData.email || `${formData.phone}@phone.com`,
        phone: formData.phone || '+1234567890',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        plan: 'Premium Plan',
        coursesCompleted: 8,
        points: 2450,
        loginMethod: loginMethod,
        loginTime: new Date().toISOString()
      };

      // Use AuthContext login
      const result = login(userData, `token_${Date.now()}`);
      
      if (result.success) {
        setSuccess('Login successful! Redirecting...');
        
        // Redirect after success
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setError(result.error || 'Login failed');
      }

    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate social login
      await new Promise(resolve => setTimeout(resolve, 1000));

      const socialUserData = {
        id: Date.now(),
        name: provider === 'github' ? 'GitHub User' : 'LinkedIn User',
        email: `user@${provider}.com`,
        phone: '+1234567890',
        avatar: provider === 'github' 
          ? 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=150&h=150&fit=crop&crop=face'
          : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        plan: 'Premium Plan',
        coursesCompleted: 12,
        points: 3200,
        loginMethod: provider,
        loginTime: new Date().toISOString()
      };

      const result = login(socialUserData, `${provider}_token_${Date.now()}`);
      
      if (result.success) {
        setSuccess(`${provider} login successful! Redirecting...`);
        
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setError(result.error || `${provider} login failed`);
      }

    } catch (error) {
      setError(`${provider} login failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Media Placeholder */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Placeholder for Photo/Video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
            </div>
            <p className="text-gray-400 text-sm font-medium">Media Content Placeholder</p>
            <p className="text-gray-300 text-xs mt-1">Photo or Video will be added here</p>
          </div>
        </div>
        
        {/* Brand Logo - Top Left */}
        <div className="absolute top-8 left-8">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl shadow-lg">
              <BookOpen className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SiddhiPrep
            </span>
          </Link>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-sm">
          {/* Mobile Brand Logo */}
          <div className="lg:hidden text-center mb-12">
            <Link to="/" className="inline-flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl shadow-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SiddhiPrep
              </span>
            </Link>
          </div>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {authMode === 'signin' ? 'Welcome back' : 'Create account'}
            </h1>
            <p className="text-gray-500">
              {authMode === 'signin' 
                ? 'Please sign in to your account' 
                : 'Get started with your free account'
              }
            </p>
          </div>

              {/* Auth Mode Tabs */}
          <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setAuthMode('signin')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                authMode === 'signin'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                authMode === 'signup'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>

            {/* Status Messages */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-green-800 text-sm">{success}</p>
              </div>
            )}


            {/* Auth Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Name Fields - Only for Sign Up */}
              {authMode === 'signup' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white/70 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-white/70 transition-all duration-300"
                    />
                  </div>
                </div>
              )}

              {/* Email/Phone Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
                </label>
                <div className="relative">
                  {loginMethod === 'email' ? (
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  ) : (
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  )}
                  <input
                    type={loginMethod === 'email' ? 'email' : 'tel'}
                    name={loginMethod}
                    value={formData[loginMethod]}
                    onChange={handleInputChange}
                    placeholder={loginMethod === 'email' ? 'john@example.com' : '+1 (555) 123-4567'}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password - Only for Sign Up */}
              {authMode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
              )}

              {/* Remember Me & Forgot Password / Terms */}
              {authMode === 'signin' ? (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary focus:ring-primary rounded"
                    />
                    <span className="text-sm text-gray-700">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-primary focus:ring-primary rounded mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>{authMode === 'signin' ? 'Signing in...' : 'Creating account...'}</span>
                  </div>
                ) : (
                  authMode === 'signin' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">
                Or {authMode === 'signin' ? 'sign in' : 'sign up'} with
              </span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => handleSocialLogin('github')}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <GitHub size={20} />
                <span className="font-medium">GitHub</span>
              </button>
              <button
                onClick={() => handleSocialLogin('linkedin')}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </button>
            </div>

            {/* Features Preview */}
            <div className="mt-6 p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
              <h3 className="font-semibold text-gray-900 mb-3 text-center">✨ Premium Features</h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center space-x-1">
                  <CheckCircle size={12} className="text-green-500" />
                  <span>AI Assistant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={12} className="text-green-500" />
                  <span>Smart Analytics</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={12} className="text-green-500" />
                  <span>Priority Support</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={12} className="text-green-500" />
                  <span>Advanced Quizzes</span>
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

export default LoginPage;
