import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, BookOpen } from 'react-feather';

const courses = [
    {
      id: 1,
      title: "BrahMos",
      description:
        "Siddhi's Flagship course that provides teaching, Notes & Topic wise practise Tests for Maths, GS and English. For Reasoning we provide Theory Notes & Practise Sheets for the entire Syllabus.",
      category: "BrahMos",
      level: "Beginner",
      duration: "24 Weeks",
      students: 500,
      price: 3999,
      salePrice: 2896,
      thumbnail: "/courses/brahmos.png",
      link: "https://zbckzy.courses.store/courses/821913",
      comingSoon: false,
    },
    {
      id: 2,
      title: "SSC SELECTION BATCH -CGL 2026(TIER 1)",
      description:
        "Stop studying randomly. Start following a system. This batch gives you daily structure, tests, and complete coverage for SSC CGL 2026. No confusion. No excuses. Only execution → Only selection.",
      category: "All",
      level: "Beginner",
      duration: "Free Workshop",
      students: 0,
      price: 1199,
      salePrice: 882,
      thumbnail: "/courses/selection-batch.png",
      link: "https://zbckzy.courses.store/courses/821926",
      comingSoon: false,
    },

    {
      id: 3,
      title: "GS 1.0 – Mastery with NCERTs",
      description:
        "Siddhi's GS Module includes Standard Subjects like History, Geography, Polity, Economy, Environment, Science alongside SSC Specific trending topics like Space Technology, Architecture, Culture, Books & Authors, Sports Etc. Includes current affairs at each module. Live classes with recordings available.",
      category: "Subject Wise",
      level: "Beginner",
      duration: "18 Weeks",
      students: 500,
      price: 1699,
      salePrice: 1242,
      thumbnail: "/courses/gs-1.0.png",
      link: "https://zbckzy.courses.store/717257",
      comingSoon: false,
    },

    {
      id: 4,
      title: "WPME – Visual Learning Program",
      description:
        "Word Power Made Easy is a standard Book for Learning & Mastering Vocabulary. This course covers WPME extensively and offers 100+ Practise tests. Includes new words, Idioms & Phrases from SSC 2025 converted to visual slides — a one stop solution for vocabulary needs.",
      category: "Modules",
      level: "Beginner",
      duration: "3 Weeks",
      students: 400,
      price: 99,
      thumbnail: "/courses/wpme.webp",
      link: "https://zbckzy.courses.store/797733",
      comingSoon: false,
    },
    {
      id: 5,
      title: "English – VOD 1.0",
      description:
        "English is a recorded course that comprehensively covers Vocabulary and Grammar. Special emphasis is given to Reading Comprehension, Cloze Test & Para Jumbles. Syllabus is covered based on the latest pattern.",
      category: "Subject Wise",
      level: "Beginner",
      duration: "Recorded",
      students: 300,
      price: 799,
      salePrice: 595,
      thumbnail: "/courses/english-1.0.png",
      link: "https://zbckzy.courses.store/717259",
      comingSoon: false,
    },
    {
      id: 6,
      title: "Project CGL 2026",
      description:
        "This is a free workshop that offers you detailed Insights into the road map for SSC CGL 2026. You can register using your mobile Number and enjoy the session.",
      category: "All",
      level: "Beginner",
      duration: "Free Workshop",
      students: 7855,
      price: 0,
      thumbnail: "/courses/project-cgl-2026.jpeg",
      link: "https://zbckzy.courses.store/782520",
      comingSoon: false,
    },
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
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                {course.comingSoon ? (
                  <div className="flex flex-col items-center justify-center w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-2xl font-bold text-gray-400 tracking-wide">COMING SOON</span>
                  </div>
                ) : (
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
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
                  <span className="text-lg font-bold text-gray-900 ">
                    {course.comingSoon ? 'TBA' : course.price === 0 ? <span className="text-green-600">Free</span> : `₹${course.salePrice}`}
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

export default React.memo(Courses);
