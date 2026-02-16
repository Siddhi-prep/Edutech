import React, { useState } from 'react';
import { 
  Search, Filter, Grid, List, Clock, Users, 
  BookOpen
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const allCourses = [
    {
      id: 1,
      title: 'Project CGL 2026',
      description: 'This is a free workshop that offers you detailed Insights into the road map for SSC CGL 2026. You can register using your mobile Number and enjoy the session.',
      category: 'All',
      level: 'Beginner',
      duration: 'Free Workshop',
      students: 7855,
      price: 0,
      thumbnail: '/courses/project-cgl-2026.jpg',
      link: 'https://zbckzy.courses.store/782520',
      comingSoon: false
    },
    {
      id: 2,
      title: 'BrahMos Batch 2',
      description: "Siddhi's Flagship course that provides teaching, Notes & Topic wise practise Tests for Maths, GS and English. For Reasoning we provide Theory Notes & Practise Sheets for the entire Syllabus.",
      category: 'BrahMos Batch 2',
      level: 'Beginner',
      duration: '24 Weeks',
      students: 500,
      price: 3999,
      thumbnail: '/courses/brahmos-batch-2.jpg',
      link: 'https://zbckzy.courses.store/781683',
      comingSoon: false
    },
    {
      id: 3,
      title: 'GS 1.0 – Mastery with NCERTs',
      description: "Siddhi's GS Module includes Standard Subjects like History, Geography, Polity, Economy, Environment, Science alongside SSC Specific trending topics like Space Technology, Architecture, Culture, Books & Authors, Sports Etc. Includes current affairs at each module. Live classes with recordings available.",
      category: 'Subject Wise',
      level: 'Beginner',
      duration: '18 Weeks',
      students: 500,
      price: 1699,
      thumbnail: '/courses/gs-1.0.jpg',
      link: 'https://zbckzy.courses.store/717257',
      comingSoon: false
    },
    {
      id: 4,
      title: 'English – VOD 1.0',
      description: 'English is a recorded course that comprehensively covers Vocabulary and Grammar. Special emphasis is given to Reading Comprehension, Cloze Test & Para Jumbles. Syllabus is covered based on the latest pattern.',
      category: 'Subject Wise',
      level: 'Beginner',
      duration: 'Recorded',
      students: 300,
      price: 799,
      thumbnail: '/courses/english-1.0.jpg',
      link: 'https://zbckzy.courses.store/717259',
      comingSoon: false
    },
    {
      id: 5,
      title: 'WPME – Visual Learning Program',
      description: 'Word Power Made Easy is a standard Book for Learning & Mastering Vocabulary. This course covers WPME extensively and offers 100+ Practise tests. Includes new words, Idioms & Phrases from SSC 2025 converted to visual slides — a one stop solution for vocabulary needs.',
      category: 'Modules',
      level: 'Beginner',
      duration: '3 Weeks',
      students: 400,
      price: 99,
      thumbnail: '/courses/wpme.jpg',
      link: 'https://zbckzy.courses.store/797733',
      comingSoon: false
    },
    {
      id: 6,
      title: 'Test Series',
      description: 'Coming soon',
      category: 'All',
      level: 'Beginner',
      duration: 'TBA',
      students: 0,
      price: 0,
      thumbnail: '/courses/test-series.jpg',
      link: '#',
      comingSoon: true
    }
  ];

  const categories = ['All', 'BrahMos Batch 2', 'Subject Wise', 'Modules'];

  // Filter courses
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory || (selectedCategory === 'All' && true);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Browse Courses</h1>
            <p className="text-base text-gray-600">Explore SiddhiPrep's courses designed for SSC aspirants.</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
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

            {/* View Toggle */}
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

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filters
                </h3>

                {/* Categories */}
                <div>
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
              </div>
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{filteredCourses.length}</span> results
                </p>
              </div>

              {/* Courses */}
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
                {filteredCourses.map(course => (
                  <div
                    key={course.id}
                    className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                      viewMode === 'list' ? 'flex' : ''
                    } ${course.comingSoon ? 'opacity-80' : ''}`}
                  >
                    {/* Thumbnail */}
                    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden ${
                      viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'
                    }`}>
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="text-lg font-bold text-gray-400 text-center px-4">${course.title}</span></div>`;
                        }}
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {course.category === 'All' ? (course.comingSoon ? 'Coming Soon' : 'Free') : course.category}
                        </span>
                        {course.price === 0 && !course.comingSoon && (
                          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">FREE</span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{course.description}</p>

                      {!course.comingSoon && (
                        <div className="flex items-center flex-wrap gap-3 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>{course.duration}</span>
                          </div>
                          {course.students > 0 && (
                            <div className="flex items-center space-x-1">
                              <Users size={14} />
                              <span>{course.students.toLocaleString()}+ enrolled</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <BookOpen size={14} />
                            <span>{course.level}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-auto pt-2">
                        <div>
                          {course.comingSoon ? (
                            <span className="text-lg font-bold text-gray-400">TBA</span>
                          ) : course.price === 0 ? (
                            <span className="text-2xl font-bold text-green-600">Free</span>
                          ) : (
                            <span className="text-2xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                          )}
                        </div>
                        <div>
                          {course.comingSoon ? (
                            <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium cursor-default">
                              Coming Soon
                            </span>
                          ) : (
                            <a
                              href={course.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium inline-block"
                            >
                              {course.price === 0 ? 'Register Free' : 'Enroll Now'}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
