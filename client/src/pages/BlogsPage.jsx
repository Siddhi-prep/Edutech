import React, { useState } from 'react';
import { 
  Search, Filter, Grid, List, Calendar, Clock, 
  TrendingUp, Zap, BookOpen, Layers, Archive
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory] = useState('All');
  const [filterTab, setFilterTab] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Most Recent');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Dummy blog data
  const allBlogs = [
    {
      id: 1,
      title: 'Designing with Systems',
      description: 'A practical guide to building scalable design systems that grow with your product.',
      category: 'UI/UX',
      date: 'Mar 14',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Modern Web Performance',
      description: 'Keep apps fast and delightful by focusing on the highest-impact wins.',
      category: 'Frontend',
      date: 'Mar 10',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Data Storytelling',
      description: 'Turn analysis into decisions your team understands and acts on.',
      category: 'Data',
      date: 'Mar 8',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      new: true
    },
    {
      id: 4,
      title: 'Cloud Cost Optimization',
      description: 'Practical tactics to cut cloud spend without sacrificing reliability.',
      category: 'Cloud',
      date: 'Feb 22',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
      caseStudy: true
    },
    {
      id: 5,
      title: 'Security Basics for Teams',
      description: 'Five habits that dramatically reduce common security risks.',
      category: 'Security',
      date: 'Feb 18',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      caseStudy: true
    },
    {
      id: 6,
      title: 'Foundations of ML',
      description: 'Key concepts to build intuition for modern ML workflows.',
      category: 'AI/ML',
      date: 'Feb 1',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      new: true
    },
    {
      id: 7,
      title: 'React Best Practices 2025',
      description: 'Modern patterns and techniques for building React applications.',
      category: 'Frontend',
      date: 'Jan 28',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      tutorial: true
    },
    {
      id: 8,
      title: 'API Design Principles',
      description: 'Building developer-friendly APIs that scale.',
      category: 'Backend',
      date: 'Jan 20',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tutorial: true
    },
    {
      id: 9,
      title: 'Mobile-First Design',
      description: 'Creating responsive experiences that work everywhere.',
      category: 'UI/UX',
      date: 'Jan 15',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      featured: true
    }
  ];

  const filterTabs = ['All', 'Featured', 'New', 'Case Studies', 'Tutorials'];

  // Filter blogs
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    // Fix the filter tab logic
    let matchesTab = true;
    if (filterTab === 'All') {
      matchesTab = true;
    } else if (filterTab === 'Featured') {
      matchesTab = blog.featured === true;
    } else if (filterTab === 'New') {
      matchesTab = blog.new === true;
    } else if (filterTab === 'Case Studies') {
      matchesTab = blog.caseStudy === true;
    } else if (filterTab === 'Tutorials') {
      matchesTab = blog.tutorial === true;
    }
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Latest Blogs</h1>
            <p className="text-base text-gray-600">Insights, tutorials, and stories from our mentors</p>
          </div>

          {/* Search and Filter Tabs */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
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
                  {tab === 'All' && <Archive size={16} />}
                  {tab === 'Featured' && <TrendingUp size={16} />}
                  {tab === 'New' && <Zap size={16} />}
                  {tab === 'Case Studies' && <Layers size={16} />}
                  {tab === 'Tutorials' && <BookOpen size={16} />}
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
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">{filteredBlogs.length}</span> articles
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

          {/* Blogs Grid */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {currentBlogs.map(blog => (
              <article
                key={blog.id}
                className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64' : 'h-56'}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.description}</p>
                  <button className="text-primary font-semibold hover:underline flex items-center space-x-1 group/btn">
                    <span>Read</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-12">
              <p className="text-sm text-gray-600">Page {currentPage} of {totalPages}</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
                >
                  Prev
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
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium text-sm"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
