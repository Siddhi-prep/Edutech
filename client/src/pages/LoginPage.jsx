import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, EyeOff, GitHub, Linkedin, User, AlertCircle, CheckCircle, BookOpen, ArrowLeft
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validation
      if (authMode === 'signup') {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        if (!formData.agreeTerms) {
          setError('Please agree to the Terms of Service and Privacy Policy');
          return;
        }
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userData = {
        name: authMode === 'signup' 
          ? `${formData.firstName} ${formData.lastName}` 
          : 'John Doe',
        email: formData.email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        plan: authMode === 'signup' ? 'Free Plan' : 'Premium Plan',
        coursesCompleted: authMode === 'signup' ? 0 : 8,
        points: authMode === 'signup' ? 100 : 2450,
        loginTime: new Date().toISOString()
      };

      const result = login(userData, `token_${Date.now()}`);
      
      if (result.success) {
        setSuccess(authMode === 'signin' ? 'Login successful! Redirecting...' : 'Account created successfully! Welcome to SiddhiPrep!');
        
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setError(result.error || 'Authentication failed');
      }

    } catch (error) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const socialUserData = {
        name: provider === 'github' ? 'GitHub User' : 'LinkedIn User',
        email: `user@${provider}.com`,
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
    <div className="min-h-screen bg-white flex relative">
      {/* Back to Home Button - Top Left */}
      <div className="absolute top-8 left-8 z-50">
        <Link
          to="/"
          className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl text-black hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Left Side - Media Placeholder */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Placeholder for Photo/Video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-3xl mx-auto mb-8 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-300 rounded-2xl"></div>
            </div>
            <p className="text-gray-400 text-lg font-medium">Media Content</p>
            <p className="text-gray-300 text-sm mt-2">Your promotional content will appear here</p>
          </div>
        </div>
        
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-sm">

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
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
              <p className="text-green-700 text-sm">{success}</p>
            </div>
          )}

          {/* Auth Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Name Fields - Only for Sign Up */}
            {authMode === 'signup' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password - Only for Sign Up */}
            {authMode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
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
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            ) : (
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 text-primary focus:ring-primary rounded mt-1"
                />
                <span className="text-sm text-gray-600">
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
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-400">
              Or continue with
            </span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleSocialLogin('github')}
              disabled={isLoading}
              className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <GitHub size={18} />
              <span className="font-medium text-gray-700">GitHub</span>
            </button>
            <button
              onClick={() => handleSocialLogin('linkedin')}
              disabled={isLoading}
              className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Linkedin size={18} />
              <span className="font-medium text-gray-700">LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
