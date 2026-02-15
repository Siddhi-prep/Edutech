import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, Clock, Award, Play, CheckCircle, BarChart3, 
  Calendar, Filter, Search, Star, Download, Share2, 
  LogOut, User, Settings, Shield, ArrowRight, Pause
} from 'react-feather';
import { useAuth } from '../contexts/AuthContext';

const MyCoursesPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('courses');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Dummy course data
  const courses = [
    {
      id: 1,
      title: 'React Advanced Patterns',
      instructor: 'Sarah Johnson',
      progress: 85,
      status: 'in-progress',
      duration: '12 hours',
      lessons: 24,
      completedLessons: 20,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
      category: 'Frontend Development',
      rating: 4.8,
      lastAccessed: '2 hours ago',
      certificate: false
    },
    {
      id: 2,
      title: 'Node.js Fundamentals',
      instructor: 'Mike Chen',
      progress: 100,
      status: 'completed',
      duration: '8 hours',
      lessons: 16,
      completedLessons: 16,
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop',
      category: 'Backend Development',
      rating: 4.9,
      lastAccessed: '1 day ago',
      certificate: true
    },
    {
      id: 3,
      title: 'JavaScript ES6+ Mastery',
      instructor: 'Alex Rivera',
      progress: 60,
      status: 'in-progress',
      duration: '10 hours',
      lessons: 20,
      completedLessons: 12,
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop',
      category: 'Programming',
      rating: 4.7,
      lastAccessed: '3 days ago',
      certificate: false
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      instructor: 'Emma Wilson',
      progress: 30,
      status: 'in-progress',
      duration: '15 hours',
      lessons: 30,
      completedLessons: 9,
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
      category: 'Design',
      rating: 4.6,
      lastAccessed: '1 week ago',
      certificate: false
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Node.js Fundamentals Certificate',
      course: 'Node.js Fundamentals',
      issuedDate: '2024-01-15',
      instructor: 'Mike Chen',
      credentialId: 'NJS-2024-001',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs']
    },
    {
      id: 2,
      title: 'JavaScript Expert Certificate',
      course: 'Advanced JavaScript',
      issuedDate: '2023-12-10',
      instructor: 'David Park',
      credentialId: 'JS-2023-045',
      skills: ['JavaScript', 'ES6+', 'Async/Await', 'Promises']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { label: 'Courses Enrolled', value: courses.length, icon: BookOpen, color: 'text-blue-600' },
    { label: 'Completed', value: courses.filter(c => c.status === 'completed').length, icon: CheckCircle, color: 'text-green-600' },
    { label: 'Certificates', value: certificates.length, icon: Award, color: 'text-purple-600' },
    { label: 'Study Hours', value: '156', icon: Clock, color: 'text-orange-600' }
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
                      tab.id === 'courses'
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

              {/* Tabs */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="border-b border-gray-200">
                  <div className="flex space-x-8 px-6">
                    <button
                      onClick={() => setActiveTab('courses')}
                      className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'courses'
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      My Courses ({courses.length})
                    </button>
                    <button
                      onClick={() => setActiveTab('certificates')}
                      className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === 'certificates'
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Certificates ({certificates.length})
                    </button>
                  </div>
                </div>

                {activeTab === 'courses' && (
                  <div className="p-6">
                    {/* Search and Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          placeholder="Search courses..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="all">All Courses</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {filteredCourses.map((course) => (
                        <div key={course.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                          <div className="relative">
                            <img 
                              src={course.thumbnail} 
                              alt={course.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                course.status === 'completed' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {course.status === 'completed' ? 'Completed' : 'In Progress'}
                              </span>
                            </div>
                            {course.certificate && (
                              <div className="absolute top-4 left-4">
                                <div className="bg-yellow-100 text-yellow-800 p-2 rounded-full">
                                  <Award size={16} />
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                                <p className="text-sm text-gray-600">by {course.instructor}</p>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Star className="text-yellow-400 fill-current" size={16} />
                                <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <span>{course.completedLessons}/{course.lessons} lessons</span>
                                <span>{course.duration}</span>
                              </div>

                              {/* Progress Bar */}
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-medium text-gray-700">Progress</span>
                                  <span className="text-sm text-gray-600">{course.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between pt-4">
                                <span className="text-xs text-gray-500">Last accessed {course.lastAccessed}</span>
                                <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                                  {course.status === 'completed' ? (
                                    <>
                                      <CheckCircle size={16} />
                                      <span>Review</span>
                                    </>
                                  ) : (
                                    <>
                                      <Play size={16} />
                                      <span>Continue</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'certificates' && (
                  <div className="p-6">
                    <div className="space-y-4">
                      {certificates.map((cert) => (
                        <div key={cert.id} className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <Award className="text-primary" size={20} />
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                                  <p className="text-sm text-gray-600">Course: {cert.course}</p>
                                </div>
                              </div>
                              
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-gray-600">Issued Date</p>
                                  <p className="font-medium text-gray-900">{new Date(cert.issuedDate).toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Instructor</p>
                                  <p className="font-medium text-gray-900">{cert.instructor}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600">Credential ID</p>
                                  <p className="font-medium text-gray-900">{cert.credentialId}</p>
                                </div>
                              </div>

                              <div className="mb-4">
                                <p className="text-sm text-gray-600 mb-2">Skills Demonstrated</p>
                                <div className="flex flex-wrap gap-2">
                                  {cert.skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="flex space-x-2 ml-4">
                              <button className="p-2 text-gray-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                <Download size={18} />
                              </button>
                              <button className="p-2 text-gray-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                <Share2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
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

export default MyCoursesPage;
