import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, BookOpen } from 'react-feather';

const courses = [
  {
    id: 1,
    title: 'Project CGL 2026',
    description: 'A free workshop offering detailed insights into the road map for SSC CGL 2026.',
    duration: 'Free Workshop',
    students: 7855,
    price: 0,
    thumbnail: '/courses/project-cgl-2026.jpeg',
    link: 'https://zbckzy.courses.store/782520',
    tag: 'Free',
    comingSoon: false
  },
  {
    id: 2,
    title: 'BrahMos Batch 2',
    description: "Siddhi's Flagship course — Maths, GS, English teaching with Notes & Topic-wise Tests.",
    duration: '24 Weeks',
    students: 500,
    price: 3999,
    thumbnail: '/courses/brahmos-batch-2.png',
    link: 'https://zbckzy.courses.store/781683',
    tag: 'Flagship',
    comingSoon: false
  },
  {
    id: 3,
    title: 'GS 1.0 – Mastery with NCERTs',
    description: 'History, Geography, Polity, Economy, Science & SSC trending topics with current affairs.',
    duration: '18 Weeks',
    students: 500,
    price: 1699,
    thumbnail: '/courses/gs-1.0.png',
    link: 'https://zbckzy.courses.store/717257',
    tag: 'Subject Wise',
    comingSoon: false
  },
  {
    id: 4,
    title: 'English – VOD 1.0',
    description: 'Comprehensive Vocabulary & Grammar. Special focus on RC, Cloze Test & Para Jumbles.',
    duration: 'Recorded',
    students: 300,
    price: 799,
    thumbnail: '/courses/english-1.0.png',
    link: 'https://zbckzy.courses.store/717259',
    tag: 'Subject Wise',
    comingSoon: false
  },
  {
    id: 5,
    title: 'WPME – Visual Learning',
    description: 'Master Vocabulary with Word Power Made Easy — 100+ tests & visual slides from SSC 2025.',
    duration: '3 Weeks',
    students: 400,
    price: 99,
    thumbnail: '/courses/wpme.webp',
    link: 'https://zbckzy.courses.store/797733',
    tag: 'Module',
    comingSoon: false
  },
  {
    id: 6,
    title: 'Test Series',
    description: 'Coming soon',
    duration: 'TBA',
    students: 0,
    price: 0,
    thumbnail: '',
    link: '#',
    tag: 'Coming Soon',
    comingSoon: true
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Explore Our Courses</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Designed for SSC aspirants — learn from credible faculty
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div key={course.id} className={`bg-white border border-gray-100 rounded-xl overflow-hidden group hover:shadow-md hover:border-gray-200 transition-all duration-300 ${course.comingSoon ? 'opacity-75' : ''}`}>
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-36 sm:h-40 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                {course.comingSoon ? (
                  <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-2xl font-bold text-gray-400 tracking-wide">COMING SOON</span>
                  </div>
                ) : (
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-semibold text-primary">
                  {course.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 group-hover:text-primary transition-colors leading-tight">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta Info */}
                {!course.comingSoon && (
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock size={13} />
                      <span>{course.duration}</span>
                    </div>
                    {course.students > 0 && (
                      <div className="flex items-center space-x-1">
                        <Users size={13} />
                        <span>{course.students.toLocaleString()}+</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <BookOpen size={13} />
                      <span>Beginner</span>
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                  <span className="text-lg font-bold text-gray-900">
                    {course.comingSoon ? 'TBA' : course.price === 0 ? <span className="text-green-600">Free</span> : `₹${course.price.toLocaleString()}`}
                  </span>
                  {course.comingSoon ? (
                    <span className="text-xs text-gray-400 font-medium">Coming Soon</span>
                  ) : (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-primary text-sm font-semibold hover:gap-2 transition-all"
                    >
                      <span>{course.price === 0 ? 'Register Free' : 'Enroll Now'}</span>
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/courses" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
