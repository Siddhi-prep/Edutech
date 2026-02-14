import React, { useState } from 'react';
import { 
  Search, Filter, Grid, List, Star, Clock, Users, 
  TrendingUp, Zap, BookOpen, ChevronLeft, ChevronRight
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [filterTab, setFilterTab] = useState('Popular');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Most Relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Dummy courses data
  const allCourses = [
    {
      id: 1,
      title: 'Modern Frontend Engineering',
      description: 'From components to performance—ship quality UIs.',
      category: 'Development',
      level: 'Beginner',
      duration: '12 weeks',
      rating: 4.8,
      students: 2340,
      price: 299,
      icon: '💻',
      trending: true
    },
    {
      id: 2,
      title: 'Data Analysis with Python',
      description: 'Clean, analyze, and visualize data effectively.',
      category: 'Data',
      level: 'Beginner',
      duration: '10 weeks',
      rating: 4.7,
      students: 1890,
      price: 249,
      icon: '📊',
      popular: true
    },
    {
      id: 3,
      title: 'Product Design Foundations',
      description: 'Design systems, prototyping, and usability.',
      category: 'Design',
      level: 'Intermediate',
      duration: '8 weeks',
      rating: 4.6,
      students: 1560,
      price: 279,
      icon: '🎨',
      new: true
    },
    {
      id: 4,
      title: 'Cloud & DevOps Essentials',
      description: 'Automate, deploy, and monitor at scale.',
      category: 'Cloud & DevOps',
      level: 'Intermediate',
      duration: '9 weeks',
      rating: 4.7,
      students: 1234,
      price: 329,
      icon: '☁️',
      trending: true
    },
    {
      id: 5,
      title: 'Cybersecurity Basics',
      description: 'Understand threats, defenses, and best practices.',
      category: 'Security',
      level: 'Beginner',
      duration: '6 weeks',
      rating: 4.5,
      students: 987,
      price: 199,
      icon: '🔒',
      popular: true
    },
    {
      id: 6,
      title: 'Intro to AI & ML',
      description: 'Core concepts, models, and applications.',
      category: 'AI & ML',
      level: 'Beginner',
      duration: '11 weeks',
      rating: 4.6,
      students: 2100,
      price: 349,
      icon: '🤖',
      new: true
    },
    {
      id: 7,
      title: 'Full Stack Web Development',
      description: 'Build complete web applications from scratch.',
      category: 'Development',
      level: 'Advanced',
      duration: '16 weeks',
      rating: 4.9,
      students: 3200,
      price: 399,
      icon: '🚀',
      trending: true
    },
    {
      id: 8,
      title: 'Mobile App Development',
      description: 'Create native iOS and Android applications.',
      category: 'Development',
      level: 'Intermediate',
      duration: '14 weeks',
      rating: 4.7,
      students: 1800,
      price: 359,
      icon: '📱',
      popular: true
    },
    {
      id: 9,
      title: 'Digital Marketing Mastery',
      description: 'SEO, social media, and content marketing.',
      category: 'Marketing',
      level: 'Beginner',
      duration: '8 weeks',
      rating: 4.5,
      students: 1450,
      price: 229,
      icon: '📈',
      new: true
    }
  ];

  const categories = ['All', 'Development', 'Data', 'Design', 'Cloud & DevOps', 'Security', 'AI & ML', 'Marketing'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = ['All', '0-8 weeks', '9-12 weeks', '13+ weeks'];
  const filterTabs = ['Popular', 'New', 'Trending'];

  // Filter courses
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesDuration = selectedDuration === 'All' || 
      (selectedDuration === '0-8 weeks' && parseInt(course.duration) <= 8) ||
      (selectedDuration === '9-12 weeks' && parseInt(course.duration) >= 9 && parseInt(course.duration) <= 12) ||
      (selectedDuration === '13+ weeks' && parseInt(course.duration) >= 13);
    const matchesTab = filterTab === 'Popular' ? course.popular :
                      filterTab === 'New' ? course.new :
                      filterTab === 'Trending' ? course.trending : true;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesDuration && matchesTab;
  });

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Browse Courses</h1>
            <p className="text-base text-gray-600">Find your next skill. Filter by category, level, and duration.</p>
          </div>

          {/* Search and Filter Tabs */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {filterTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilterTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                    filterTab === tab
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab === 'Popular' && <TrendingUp size={16} />}
                  {tab === 'New' && <Zap size={16} />}
                  {tab === 'Trending' && <Star size={16} />}
                  <span>{tab}</span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
              >
                <option>Most Relevant</option>
                <option>Highest Rated</option>
                <option>Most Students</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filters
                </h3>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Level */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Level</h4>
                  <div className="space-y-2">
                    {levels.map(level => (
                      <label key={level} className="flex items-center space-x-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="level"
                          checked={selectedLevel === level}
                          onChange={() => setSelectedLevel(level)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Duration</h4>
                  <div className="space-y-2">
                    {durations.map(duration => (
                      <label key={duration} className="flex items-center space-x-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="duration"
                          checked={selectedDuration === duration}
                          onChange={() => setSelectedDuration(duration)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{duration}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{filteredCourses.length}</span> results
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              {/* Courses */}
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
                {currentCourses.map(course => (
                  <div
                    key={course.id}
                    className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center ${
                      viewMode === 'list' ? 'w-48' : 'h-48'
                    }`}>
                      <span className="text-6xl">{course.icon}</span>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {course.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-amber-500">
                          <Star size={16} fill="currentColor" />
                          <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={14} />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen size={14} />
                          <span>{course.level}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors text-sm font-medium">
                            Details
                          </button>
                          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            Enroll
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-8">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        currentPage === i + 1
                          ? 'bg-primary text-white'
                          : 'border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
