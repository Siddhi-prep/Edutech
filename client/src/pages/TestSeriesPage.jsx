import React, { useState } from 'react';
import { 
  Search, Filter, Grid, List, Play
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const TestSeriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const allTestSeries = [
    {
      id: 1,
      title: 'Complete Test Series',
      description: 'Complete Test Series for SSC CGL 2025 with 100+ tests. Includes full-length mock tests, subject-wise tests, and detailed performance analysis. Perfect for comprehensive exam preparation.',
      category: 'All',
      price: '₹60',
      thumbnail: '/test-series/complete-test-series.jpeg',
      link: 'https://zbckzy.courses.store/courses/806340'
    }
  ];

  const categories = ['All', 'Subject wise', 'Sectional Tests'];

  // Filter test series
  const filteredTestSeries = allTestSeries.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Tests</h1>
            <p className="text-base text-gray-600">Premium test series for SSC aspirants — comprehensive practice with detailed analysis.</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search tests..."
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
                  Categories
                </h3>

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

            {/* Test Series Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{filteredTestSeries.length}</span> test series available
                </p>
              </div>

              {/* Test Series Cards */}
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
                {filteredTestSeries.map(test => (
                  <div
                    key={test.id}
                    className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center overflow-hidden ${
                      viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-auto'
                    }`}>
                      <img
                        src={test.thumbnail}
                        alt={test.title}
                        loading="lazy"
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="text-lg font-bold text-gray-400 text-center px-4">${test.title}</span></div>`;
                        }}
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {test.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {test.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{test.description}</p>

                      <div className="flex items-center justify-between mt-auto pt-2">
                        <span className="text-sm font-bold text-gray-900">{test.price}</span>
                        <a
                          href={test.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-5 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <Play size={14} />
                          <span>Attempt Now</span>
                        </a>
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

export default TestSeriesPage;
