import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, Mail, Phone, Lock, Settings, Camera, Edit3, 
  Save, X, Eye, EyeOff, Trash2, Users, BookOpen, 
  Award, Calendar, MapPin, Globe, Github, Linkedin,
  Bell, Shield, Download, Upload, LogOut
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';

const MyProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || 'John',
    lastName: user?.name?.split(' ')[1] || 'Doe',
    email: user?.email || 'john@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate learner exploring new technologies and skills.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    github: 'johndoe',
    linkedin: 'johndoe',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    // Save profile logic here
    setIsEditing(false);
    // Show success message
  };

  const handleChangePassword = () => {
    // Change password logic here
    setShowPasswordForm(false);
    setFormData(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));
  };

  const handleDeleteAccount = () => {
    // Delete account logic here
    logout();
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = [
    { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Certificates Earned', value: '8', icon: Award, color: 'text-green-600' },
    { label: 'Study Hours', value: '156', icon: Calendar, color: 'text-purple-600' },
    { label: 'Current Streak', value: '15 days', icon: Users, color: 'text-orange-600' }
  ];

  const recentActivity = [
    { action: 'Completed', item: 'React Advanced Patterns', time: '2 hours ago', type: 'course' },
    { action: 'Earned', item: 'JavaScript Expert Certificate', time: '1 day ago', type: 'certificate' },
    { action: 'Started', item: 'Node.js Fundamentals', time: '3 days ago', type: 'course' },
    { action: 'Joined', item: 'Web Development Community', time: '1 week ago', type: 'community' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl">
                <BookOpen className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-gray-900">SiddhiPrep</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="relative">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-4">
                    <User size={32} className="text-white" />
                  </div>
                  <button className="absolute -bottom-2 right-1/2 transform translate-x-1/2 bg-white/20 backdrop-blur-xl rounded-full p-2 hover:bg-white/30 transition-colors">
                    <Camera size={16} className="text-white" />
                  </button>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{formData.firstName} {formData.lastName}</h2>
                  <p className="text-white/80 text-sm">{formData.email}</p>
                  <div className="mt-3 px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-xs font-medium inline-block">
                    Free Plan • 100 points
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-2">
                {[
                  { id: 'profile', label: 'My Profile', icon: User, path: '/profile' },
                  { id: 'courses', label: 'My Courses', icon: BookOpen, path: '/my-courses' },
                  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
                  { id: 'security', label: 'Security', icon: Shield, path: '/security' }
                ].map((tab) => (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      tab.id === 'profile'
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon size={18} />
                    <span className="font-medium">{tab.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gray-50 ${stat.color}`}>
                          <stat.icon size={20} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Profile Information */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="flex items-center space-x-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        {isEditing ? <X size={18} /> : <Edit3 size={18} />}
                        <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex space-x-4">
                        <button
                          onClick={handleSaveProfile}
                          className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                        >
                          <Save size={18} />
                          <span>Save Changes</span>
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="flex items-center space-x-2 px-6 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <X size={18} />
                          <span>Cancel</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <BookOpen size={18} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              <span className="font-medium">{activity.action}</span> {activity.item}
                            </p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                {/* Change Password */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-medium text-gray-900">Password</h4>
                        <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                      </div>
                      <button
                        onClick={() => setShowPasswordForm(!showPasswordForm)}
                        className="px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        Change Password
                      </button>
                    </div>

                    {showPasswordForm && (
                      <div className="space-y-4 p-4 border border-gray-200 rounded-xl">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                          <div className="relative">
                            <input
                              type={showPasswords.current ? 'text' : 'password'}
                              name="currentPassword"
                              value={formData.currentPassword}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPasswords(prev => ({ ...prev, current: !prev.current }))}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            >
                              {showPasswords.current ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                          <div className="relative">
                            <input
                              type={showPasswords.new ? 'text' : 'password'}
                              name="newPassword"
                              value={formData.newPassword}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPasswords(prev => ({ ...prev, new: !prev.new }))}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            >
                              {showPasswords.new ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                          <div className="relative">
                            <input
                              type={showPasswords.confirm ? 'text' : 'password'}
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPasswords(prev => ({ ...prev, confirm: !prev.confirm }))}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            >
                              {showPasswords.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <button
                            onClick={handleChangePassword}
                            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                          >
                            Update Password
                          </button>
                          <button
                            onClick={() => setShowPasswordForm(false)}
                            className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Delete Account */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                        <div>
                          <h4 className="font-medium text-red-900">Delete Account</h4>
                          <p className="text-sm text-red-700">Permanently delete your account and all data</p>
                        </div>
                        <button
                          onClick={() => setShowDeleteConfirm(true)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Delete Account
                        </button>
                      </div>

                      {showDeleteConfirm && (
                        <div className="mt-4 p-4 border border-red-200 rounded-xl bg-red-50">
                          <p className="text-sm text-red-800 mb-4">
                            Are you sure you want to delete your account? This action cannot be undone.
                          </p>
                          <div className="flex space-x-4">
                            <button
                              onClick={handleDeleteAccount}
                              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Yes, Delete Account
                            </button>
                            <button
                              onClick={() => setShowDeleteConfirm(false)}
                              className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
