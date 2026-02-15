import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, Shield, Lock, Key, Smartphone, Monitor, MapPin,
  Eye, EyeOff, AlertTriangle, CheckCircle, X, Save, Trash2,
  LogOut, User, Settings, Clock, Globe, Wifi, Download,
  Bell, Mail, MessageSquare, RefreshCw, Copy, Square
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';

const SecurityPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [show2FASetup, setShow2FASetup] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: '30',
    deviceTracking: true,
    locationTracking: true,
    emailVerification: true
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSettingChange = (key, value) => {
    setSecuritySettings(prev => ({ ...prev, [key]: value }));
  };

  const handleChangePassword = () => {
    // Password change logic
    console.log('Changing password...');
    setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleEnable2FA = () => {
    setSecuritySettings(prev => ({ ...prev, twoFactorAuth: true }));
    setShow2FASetup(false);
  };

  const handleDeleteAccount = () => {
    logout();
    navigate('/');
  };

  // Dummy data
  const loginHistory = [
    { id: 1, device: 'Chrome on Windows', location: 'San Francisco, CA', time: '2 hours ago', status: 'success', ip: '192.168.1.1' },
    { id: 2, device: 'Safari on iPhone', location: 'San Francisco, CA', time: '1 day ago', status: 'success', ip: '192.168.1.2' },
    { id: 3, device: 'Chrome on MacOS', location: 'New York, NY', time: '3 days ago', status: 'failed', ip: '10.0.0.1' },
    { id: 4, device: 'Firefox on Linux', location: 'London, UK', time: '1 week ago', status: 'success', ip: '172.16.0.1' }
  ];

  const activeSessions = [
    { id: 1, device: 'Chrome on Windows', location: 'San Francisco, CA', lastActive: 'Active now', current: true },
    { id: 2, device: 'Safari on iPhone', location: 'San Francisco, CA', lastActive: '2 hours ago', current: false },
    { id: 3, device: 'Chrome on MacOS', location: 'New York, NY', lastActive: '1 day ago', current: false }
  ];

  const securityAlerts = [
    { id: 1, type: 'login', message: 'New login from Chrome on Windows', time: '2 hours ago', severity: 'info' },
    { id: 2, type: 'password', message: 'Password changed successfully', time: '1 week ago', severity: 'success' },
    { id: 3, type: 'failed_login', message: 'Failed login attempt from unknown device', time: '2 weeks ago', severity: 'warning' }
  ];

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

  const SecurityCard = ({ title, description, children, status }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {status && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                status === 'enabled' ? 'bg-green-100 text-green-800' :
                status === 'disabled' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {status}
              </span>
            )}
          </div>
          {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
        </div>
        <div className="ml-4">
          {children}
        </div>
      </div>
    </div>
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
                  { id: 'security', label: 'Security', icon: Shield, path: '/security' }
                ].map((tab) => (
                  <Link
                    key={tab.id}
                    to={tab.path}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      tab.id === 'security'
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

            {/* Security Navigation */}
            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Security</h3>
              </div>
              <div className="p-2">
                {[
                  { id: 'overview', label: 'Overview', icon: Shield },
                  { id: 'password', label: 'Password', icon: Lock },
                  { id: 'two-factor', label: 'Two-Factor Auth', icon: Smartphone },
                  { id: 'sessions', label: 'Active Sessions', icon: Monitor },
                  { id: 'history', label: 'Login History', icon: Clock },
                  { id: 'alerts', label: 'Security Alerts', icon: Bell }
                ].map((section) => (
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
                <h1 className="text-2xl font-bold text-gray-900">Security</h1>
                <p className="text-gray-600">Manage your account security and privacy settings</p>
              </div>

              {/* Security Overview */}
              {activeSection === 'overview' && (
                <div className="space-y-6">
                  {/* Security Score */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Score</h3>
                        <p className="text-gray-600">Your account security is good</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600">85/100</div>
                        <p className="text-sm text-gray-600">Good</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Security Actions */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <SecurityCard
                      title="Two-Factor Authentication"
                      description="Add an extra layer of security"
                      status={securitySettings.twoFactorAuth ? 'enabled' : 'disabled'}
                    >
                      <button
                        onClick={() => setShow2FASetup(true)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          securitySettings.twoFactorAuth
                            ? 'bg-green-100 text-green-800'
                            : 'bg-primary text-white hover:bg-primary/90'
                        }`}
                      >
                        {securitySettings.twoFactorAuth ? 'Enabled' : 'Enable'}
                      </button>
                    </SecurityCard>

                    <SecurityCard
                      title="Password Strength"
                      description="Last changed 30 days ago"
                      status="strong"
                    >
                      <button
                        onClick={() => setActiveSection('password')}
                        className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Change
                      </button>
                    </SecurityCard>

                    <SecurityCard
                      title="Login Alerts"
                      description="Get notified of new logins"
                      status={securitySettings.loginAlerts ? 'enabled' : 'disabled'}
                    >
                      <ToggleSwitch
                        enabled={securitySettings.loginAlerts}
                        onChange={(value) => handleSettingChange('loginAlerts', value)}
                      />
                    </SecurityCard>

                    <SecurityCard
                      title="Active Sessions"
                      description={`${activeSessions.length} active sessions`}
                    >
                      <button
                        onClick={() => setActiveSection('sessions')}
                        className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Manage
                      </button>
                    </SecurityCard>
                  </div>
                </div>
              )}

              {/* Password Management */}
              {activeSection === 'password' && (
                <div className="space-y-6">
                  <SecurityCard
                    title="Change Password"
                    description="Choose a strong password to keep your account secure"
                  >
                    <div className="w-full space-y-4">
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

                      <button
                        onClick={handleChangePassword}
                        className="w-full px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                      >
                        Update Password
                      </button>
                    </div>
                  </SecurityCard>
                </div>
              )}

              {/* Two-Factor Authentication */}
              {activeSection === 'two-factor' && (
                <div className="space-y-6">
                  <SecurityCard
                    title="Two-Factor Authentication"
                    description="Secure your account with an additional verification step"
                    status={securitySettings.twoFactorAuth ? 'enabled' : 'disabled'}
                  >
                    {!securitySettings.twoFactorAuth ? (
                      <button
                        onClick={() => setShow2FASetup(true)}
                        className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                      >
                        Enable 2FA
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="text-green-600" size={20} />
                          <span className="text-green-800 font-medium">2FA is enabled</span>
                        </div>
                        <button
                          onClick={() => handleSettingChange('twoFactorAuth', false)}
                          className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          Disable 2FA
                        </button>
                      </div>
                    )}
                  </SecurityCard>

                  {show2FASetup && (
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Set up Two-Factor Authentication</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
                          <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                            <Square size={60} className="text-gray-400" />
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 text-center">
                          Scan this QR code with your authenticator app
                        </p>
                        <div className="flex space-x-4">
                          <button
                            onClick={handleEnable2FA}
                            className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            Enable 2FA
                          </button>
                          <button
                            onClick={() => setShow2FASetup(false)}
                            className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Active Sessions */}
              {activeSection === 'sessions' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Active Sessions</h3>
                      <p className="text-sm text-gray-600">Manage devices that are currently signed in to your account</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {activeSessions.map((session) => (
                        <div key={session.id} className="p-6 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-100 rounded-lg">
                              <Monitor size={20} className="text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{session.device}</p>
                              <p className="text-sm text-gray-600">{session.location}</p>
                              <p className="text-xs text-gray-500">{session.lastActive}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            {session.current && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                Current
                              </span>
                            )}
                            {!session.current && (
                              <button className="px-3 py-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm">
                                End Session
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Login History */}
              {activeSection === 'history' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Login History</h3>
                      <p className="text-sm text-gray-600">Recent login attempts to your account</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {loginHistory.map((login) => (
                        <div key={login.id} className="p-6 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg ${
                              login.status === 'success' ? 'bg-green-100' : 'bg-red-100'
                            }`}>
                              {login.status === 'success' ? (
                                <CheckCircle size={20} className="text-green-600" />
                              ) : (
                                <AlertTriangle size={20} className="text-red-600" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{login.device}</p>
                              <p className="text-sm text-gray-600">{login.location}</p>
                              <p className="text-xs text-gray-500">IP: {login.ip}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-900">{login.time}</p>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              login.status === 'success' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {login.status === 'success' ? 'Success' : 'Failed'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Security Alerts */}
              {activeSection === 'alerts' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Security Alerts</h3>
                      <p className="text-sm text-gray-600">Recent security-related activities on your account</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {securityAlerts.map((alert) => (
                        <div key={alert.id} className="p-6 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`p-2 rounded-lg ${
                              alert.severity === 'success' ? 'bg-green-100' :
                              alert.severity === 'warning' ? 'bg-yellow-100' :
                              'bg-blue-100'
                            }`}>
                              {alert.severity === 'success' ? (
                                <CheckCircle size={20} className="text-green-600" />
                              ) : alert.severity === 'warning' ? (
                                <AlertTriangle size={20} className="text-yellow-600" />
                              ) : (
                                <Bell size={20} className="text-blue-600" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{alert.message}</p>
                              <p className="text-sm text-gray-600">{alert.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Delete Account Section */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-red-900">Delete Account</h3>
                    <p className="text-red-700">Permanently delete your account and all data</p>
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
      </div>
    </div>
  );
};

export default SecurityPage;
