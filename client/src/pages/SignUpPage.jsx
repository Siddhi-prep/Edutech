import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, Phone, Eye, EyeOff, ArrowLeft, GitHub, 
  Linkedin, User, Lock, AlertCircle, CheckCircle, UserPlus
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';
import GradientBackground from '../components/GradientBackground';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [signupMethod, setSignupMethod] = useState('email');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    subscribeNewsletter: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (signupMethod === 'email' && !formData.email) {
      setError('Email is required');
      return false;
    }
    if (signupMethod === 'phone' && !formData.phone) {
      setError('Phone number is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (!formData.agreeTerms) {
      setError('Please agree to the Terms of Service');
      return false;
    }
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create user account
      const userData = {
        id: Date.now(),
        name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email || `${formData.phone}@phone.com`,
        phone: formData.phone || '+1234567890',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        plan: 'Free Plan',
        coursesCompleted: 0,
        points: 100, // Welcome bonus
        signupMethod: signupMethod,
        signupTime: new Date().toISOString(),
        subscribeNewsletter: formData.subscribeNewsletter
      };

      // Use AuthContext login
      const result = login(userData, `signup_token_${Date.now()}`);
      
      if (result.success) {
        setSuccess('Account created successfully! Welcome to SiddhiPrep!');
        
        // Redirect after success
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError(result.error || 'Account creation failed');
      }

    } catch (error) {
      setError('Account creation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = async (provider) => {
    setIsLoading(true);
    setError('');

    try {
      // Simulate social signup
      await new Promise(resolve => setTimeout(resolve, 1000));

      const socialUserData = {
        id: Date.now(),
        name: provider === 'github' ? 'GitHub User' : 'LinkedIn User',
        email: `newuser@${provider}.com`,
        phone: '+1234567890',
        avatar: provider === 'github' 
          ? 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=150&h=150&fit=crop&crop=face'
          : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        plan: 'Free Plan',
        coursesCompleted: 0,
        points: 150, // Social signup bonus
        signupMethod: provider,
        signupTime: new Date().toISOString()
      };

      const result = login(socialUserData, `${provider}_signup_token_${Date.now()}`);
      
      if (result.success) {
        setSuccess(`Account created with ${provider}! Welcome to SiddhiPrep!`);
        
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError(result.error || `${provider} signup failed`);
      }

    } catch (error) {
      setError(`${provider} signup failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom max-w-md mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          {/* SignUp Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-2xl w-16 h-16 mx-auto mb-4">
                <UserPlus className="text-white w-full h-full" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-600">Join thousands of learners worldwide</p>
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

            {/* SignUp Method Tabs */}
            <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setSignupMethod('email')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-all ${
                  signupMethod === 'email'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Mail size={18} />
                <span>Email</span>
              </button>
              <button
                onClick={() => setSignupMethod('phone')}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-all ${
                  signupMethod === 'phone'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Phone size={18} />
                <span>Phone</span>
              </button>
            </div>

            {/* SignUp Form */}
            <form onSubmit={handleSignUp} className="space-y-6">
              {/* Name Fields */}
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              {/* Email/Phone Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {signupMethod === 'email' ? 'Email Address' : 'Phone Number'}
                </label>
                <div className="relative">
                  {signupMethod === 'email' ? (
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  ) : (
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  )}
                  <input
                    type={signupMethod === 'email' ? 'email' : 'tel'}
                    name={signupMethod}
                    value={formData[signupMethod]}
                    onChange={handleInputChange}
                    placeholder={signupMethod === 'email' ? 'john@example.com' : '+1 (555) 123-4567'}
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
                    placeholder="Create a strong password"
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

              {/* Confirm Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Terms and Newsletter */}
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
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary focus:ring-primary rounded mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    Subscribe to our newsletter for course updates and learning tips
                  </span>
                </label>
              </div>

              {/* SignUp Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-secondary to-primary text-white py-3 rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">Or sign up with</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Social SignUp */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => handleSocialSignUp('github')}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <GitHub size={20} />
                <span className="font-medium">GitHub</span>
              </button>
              <button
                onClick={() => handleSocialSignUp('linkedin')}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Welcome Bonus */}
          <div className="mt-8 p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl border border-secondary/10">
            <h3 className="font-semibold text-gray-900 mb-3">🎉 Welcome Bonus</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>100 bonus points on signup</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Free access to 3 premium courses</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>7-day free trial of AI features</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Personalized learning path</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
