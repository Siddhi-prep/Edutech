import React, { useState, useEffect } from 'react';
import { Clock, Users, Star, ArrowRight, BookOpen } from 'react-feather';
import { getCourses } from '../services/api';

// Fallback course card component
const CourseCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="h-48 bg-gray-200 animate-pulse"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="flex items-center mt-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="ml-4 h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const filters = ['All', 'Popular', 'Trending', 'New'];

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      // Extract data from response object
      const coursesData = response?.data || response || [];
      // Ensure we have an array
      const coursesArray = Array.isArray(coursesData) ? coursesData : [];
      console.log('Fetched courses:', coursesArray);
      setCourses(coursesArray);
      setFilteredCourses(coursesArray);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setCourses([]);
      setFilteredCourses([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((course) => course.category === filter));
    }
  };

  if (loading) {
    return (
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Explore Our Courses</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12">
            Master in-demand skills with expert-led courses
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">No courses available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden group hover:shadow-md hover:border-gray-200 transition-all duration-300">
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-36 sm:h-40">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-semibold text-primary">
                  {course.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 group-hover:text-primary transition-colors leading-tight">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock size={13} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={13} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={13} className="text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-lg font-bold text-gray-900">
                    {course.price}
                  </span>
                  <button className="flex items-center space-x-1.5 text-primary text-sm font-semibold hover:gap-2 transition-all">
                    <span>Enroll Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* View All Button */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-primary">View All Courses</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
