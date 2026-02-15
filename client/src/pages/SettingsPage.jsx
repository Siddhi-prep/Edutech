import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, Bell, Globe, Moon, Sun, Monitor, Volume2, VolumeX,
  Mail, MessageSquare, Shield, Eye, EyeOff, Download, Trash2,
  LogOut, User, Settings, Save, X, Camera, Smartphone, 
  CreditCard, Gift, HelpCircle, FileText, Lock
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('general');
  const [hasChanges, setHasChanges] = useState(false);

  // Settings state
  const [settings, setSettings] = useState({
    // General Settings
    language: 'en',
    timezone: 'UTC-5',
    theme: 'system',
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    courseUpdates: true,
    marketingEmails: false,
    weeklyDigest: true,
    
    // Privacy Settings
    profileVisibility: 'public',
    showProgress: true,
    showCertificates: true,
    allowMessages: true,
    
    // Learning Preferences
    autoplay: true,
    playbackSpeed: '1x',
    subtitles: true,
    darkModeVideo: false,
    
    // Account Settings
    twoFactorAuth: false,
    loginAlerts: true,
    dataDownload: false
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSaveSettings = () => {
    // Save settings logic here
    console.log('Saving settings:', settings);
    setHasChanges(false);
    // Show success message
  };

  const handleResetSettings = () => {
    // Reset to defaults
    setHasChanges(false);
  };

  const settingSections = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'account', label: 'Account', icon: User },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'support', label: 'Support', icon: HelpCircle }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' }
  ];

  const timezones = [
    { value: 'UTC-8', label: 'Pacific Time (UTC-8)' },
    { value: 'UTC-5', label: 'Eastern Time (UTC-5)' },
    { value: 'UTC+0', label: 'GMT (UTC+0)' },
    { value: 'UTC+1', label: 'Central European Time (UTC+1)' },
    { value: 'UTC+5:30', label: 'India Standard Time (UTC+5:30)' }
  ];

  const SettingCard = ({ title, description, children }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
        </div>
        <div className="ml-4">
          {children}
        </div>
      </div>
    </div>
  );

  const ToggleSwitch = ({ enabled, onChange }) => (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-primary' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

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
            <div className="flex items-center space-x-4">
              {hasChanges && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSaveSettings}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Save size={16} />
                    <span>Save Changes</span>
                  </button>
                  <button
                    onClick={handleResetSettings}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <X size={16} />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
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
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{user?.name || 'John Doe'}</h2>
                  <p className="text-white/80 text-sm">{user?.email || 'john@example.com'}</p>
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
                  { id: 'security', label: 'Security', icon: Shield, path: '/profile' }
                ].map((tab) => (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      tab.id === 'settings'
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

            {/* Settings Navigation */}
            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Settings</h3>
              </div>
              <div className="p-2">
                {settingSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <section.icon size={16} />
                    <span className="text-sm font-medium">{section.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Page Header */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600">Manage your account preferences and settings</p>
              </div>

              {/* General Settings */}
              {activeSection === 'general' && (
                <div className="space-y-6">
                  <SettingCard
                    title="Language"
                    description="Choose your preferred language for the interface"
                  >
                    <select
                      value={settings.language}
                      onChange={(e) => handleSettingChange('language', e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                      ))}
                    </select>
                  </SettingCard>

                  <SettingCard
                    title="Timezone"
                    description="Set your local timezone for accurate scheduling"
                  >
                    <select
                      value={settings.timezone}
                      onChange={(e) => handleSettingChange('timezone', e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {timezones.map((tz) => (
                        <option key={tz.value} value={tz.value}>{tz.label}</option>
                      ))}
                    </select>
                  </SettingCard>

                  <SettingCard
                    title="Theme"
                    description="Choose your preferred color scheme"
                  >
                    <div className="flex space-x-2">
                      {[
                        { value: 'light', icon: Sun, label: 'Light' },
                        { value: 'dark', icon: Moon, label: 'Dark' },
                        { value: 'system', icon: Monitor, label: 'System' }
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => handleSettingChange('theme', theme.value)}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors ${
                            settings.theme === theme.value
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <theme.icon size={16} />
                          <span className="text-sm">{theme.label}</span>
                        </button>
                      ))}
                    </div>
                  </SettingCard>
                </div>
              )}

              {/* Notification Settings */}
              {activeSection === 'notifications' && (
                <div className="space-y-6">
                  <SettingCard
                    title="Email Notifications"
                    description="Receive notifications via email"
                  >
                    <ToggleSwitch
                      enabled={settings.emailNotifications}
                      onChange={(value) => handleSettingChange('emailNotifications', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Push Notifications"
                    description="Receive push notifications on your devices"
                  >
                    <ToggleSwitch
                      enabled={settings.pushNotifications}
                      onChange={(value) => handleSettingChange('pushNotifications', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Course Updates"
                    description="Get notified about new lessons and course updates"
                  >
                    <ToggleSwitch
                      enabled={settings.courseUpdates}
                      onChange={(value) => handleSettingChange('courseUpdates', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Marketing Emails"
                    description="Receive promotional emails and special offers"
                  >
                    <ToggleSwitch
                      enabled={settings.marketingEmails}
                      onChange={(value) => handleSettingChange('marketingEmails', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Weekly Digest"
                    description="Get a weekly summary of your learning progress"
                  >
                    <ToggleSwitch
                      enabled={settings.weeklyDigest}
                      onChange={(value) => handleSettingChange('weeklyDigest', value)}
                    />
                  </SettingCard>
                </div>
              )}

              {/* Privacy Settings */}
              {activeSection === 'privacy' && (
                <div className="space-y-6">
                  <SettingCard
                    title="Profile Visibility"
                    description="Control who can see your profile information"
                  >
                    <select
                      value={settings.profileVisibility}
                      onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends Only</option>
                      <option value="private">Private</option>
                    </select>
                  </SettingCard>

                  <SettingCard
                    title="Show Progress"
                    description="Allow others to see your learning progress"
                  >
                    <ToggleSwitch
                      enabled={settings.showProgress}
                      onChange={(value) => handleSettingChange('showProgress', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Show Certificates"
                    description="Display your certificates on your profile"
                  >
                    <ToggleSwitch
                      enabled={settings.showCertificates}
                      onChange={(value) => handleSettingChange('showCertificates', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Allow Messages"
                    description="Let other users send you direct messages"
                  >
                    <ToggleSwitch
                      enabled={settings.allowMessages}
                      onChange={(value) => handleSettingChange('allowMessages', value)}
                    />
                  </SettingCard>
                </div>
              )}

              {/* Learning Preferences */}
              {activeSection === 'learning' && (
                <div className="space-y-6">
                  <SettingCard
                    title="Autoplay Videos"
                    description="Automatically play the next video in a course"
                  >
                    <ToggleSwitch
                      enabled={settings.autoplay}
                      onChange={(value) => handleSettingChange('autoplay', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Default Playback Speed"
                    description="Set your preferred video playback speed"
                  >
                    <select
                      value={settings.playbackSpeed}
                      onChange={(e) => handleSettingChange('playbackSpeed', e.target.value)}
                      className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="0.5x">0.5x</option>
                      <option value="0.75x">0.75x</option>
                      <option value="1x">1x (Normal)</option>
                      <option value="1.25x">1.25x</option>
                      <option value="1.5x">1.5x</option>
                      <option value="2x">2x</option>
                    </select>
                  </SettingCard>

                  <SettingCard
                    title="Subtitles"
                    description="Show subtitles by default when available"
                  >
                    <ToggleSwitch
                      enabled={settings.subtitles}
                      onChange={(value) => handleSettingChange('subtitles', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Dark Mode for Videos"
                    description="Use dark theme for video player interface"
                  >
                    <ToggleSwitch
                      enabled={settings.darkModeVideo}
                      onChange={(value) => handleSettingChange('darkModeVideo', value)}
                    />
                  </SettingCard>
                </div>
              )}

              {/* Account Settings */}
              {activeSection === 'account' && (
                <div className="space-y-6">
                  <SettingCard
                    title="Two-Factor Authentication"
                    description="Add an extra layer of security to your account"
                  >
                    <div className="flex items-center space-x-3">
                      <ToggleSwitch
                        enabled={settings.twoFactorAuth}
                        onChange={(value) => handleSettingChange('twoFactorAuth', value)}
                      />
                      {settings.twoFactorAuth && (
                        <button className="text-sm text-primary hover:underline">
                          Configure
                        </button>
                      )}
                    </div>
                  </SettingCard>

                  <SettingCard
                    title="Login Alerts"
                    description="Get notified when someone logs into your account"
                  >
                    <ToggleSwitch
                      enabled={settings.loginAlerts}
                      onChange={(value) => handleSettingChange('loginAlerts', value)}
                    />
                  </SettingCard>

                  <SettingCard
                    title="Download Your Data"
                    description="Request a copy of all your data"
                  >
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download size={16} />
                      <span>Request Data</span>
                    </button>
                  </SettingCard>

                  <SettingCard
                    title="Delete Account"
                    description="Permanently delete your account and all data"
                  >
                    <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <Trash2 size={16} />
                      <span>Delete Account</span>
                    </button>
                  </SettingCard>
                </div>
              )}

              {/* Billing Settings */}
              {activeSection === 'billing' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
                        <p className="text-gray-600">Free Plan - 100 points</p>
                      </div>
                      <button className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                        Upgrade to Pro
                      </button>
                    </div>
                  </div>

                  <SettingCard
                    title="Payment Method"
                    description="Manage your payment methods"
                  >
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <CreditCard size={16} />
                      <span>Add Payment Method</span>
                    </button>
                  </SettingCard>

                  <SettingCard
                    title="Billing History"
                    description="View your past transactions and invoices"
                  >
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <FileText size={16} />
                      <span>View History</span>
                    </button>
                  </SettingCard>
                </div>
              )}

              {/* Support Settings */}
              {activeSection === 'support' && (
                <div className="space-y-6">
                  <SettingCard
                    title="Help Center"
                    description="Find answers to common questions"
                  >
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <HelpCircle size={16} />
                      <span>Visit Help Center</span>
                    </button>
                  </SettingCard>

                  <SettingCard
                    title="Contact Support"
                    description="Get help from our support team"
                  >
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <MessageSquare size={16} />
                      <span>Contact Us</span>
                    </button>
                  </SettingCard>

                  <SettingCard
                    title="Feature Requests"
                    description="Suggest new features or improvements"
                  >
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <Gift size={16} />
                      <span>Submit Idea</span>
                    </button>
                  </SettingCard>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
