import React from "react";
import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight, BookOpen } from "react-feather";

const courses = [
  {
    id: 1,
    title: "BrahMos (All SSC Exams - 2027)",
    description:
      "Siddhi BrahMos 2027 - is our flagship SSC preparation program for 2027 Cycle, designed to help you stay consistent and exam-ready. The course covers Maths, General Studies, and English through high-quality recorded classes, supported by regular mentorship sessions, structured study schedules, and frequent tests. We continuously track your preparation, monitor your progress, identify areas for improvement, and guide you at every step. More than just a course, BrahMos is a complete mentorship program that keeps you disciplined, accountable, and focused until you achieve your SSC goal.",
    category: "SSC",
    level: "Beginner",
    duration: "24 Weeks",
    students: 500,
    price: 3999,
    // salePrice: 2896,
    thumbnail: "/courses/brahmos-27.png",
    link: "https://learn.siddhiprep.com/products/ssc_2027_course/",
    comingSoon: false,
  },
  {
    id: 2,
    title: "GS: From NCERT to Mastery",
    description:
      "Siddhi's GS Module includes Standard Subjects like History, Geography, Polity, Economy, Environment, Science alongside SSC Specific trending topics like Space Technology, Architecture, Culture, Books & Authors, Sports Etc. Includes current affairs at each module. Live classes with recordings available.",
    category: "SSC",
    level: "Beginner",
    duration: "18 Weeks",
    students: 500,
    price: 1699,
    // salePrice: 849,
    thumbnail: "/courses/gs-new.png",
    link: "https://learn.siddhiprep.com/products/siddhi-gs-from-ncerts-to-mastery/",
    comingSoon: false,
  },
  {
    id: 3,
    title: "Advance Maths (VOD)",
    description:
      "Siddhi's Advance Maths course provides comprehensive coverage of the subject with recorded classes and practice materials.",
    category: "Advanced Maths",
    level: "Beginner",
    duration: "24 Weeks",
    students: 500,
    price: 499,
    // salePrice: 2896,
    thumbnail: "/courses/adv-math.jpeg",
    link: "https://learn.siddhiprep.com/products/advance-maths-vod/",
    comingSoon: false,
  },
  {
    id: 4,
    title: "English Full Boot Camp - Complete SSC preparation",
    description:
      "English is a recorded course that comprehensively covers Vocabulary and Grammar. Special emphasis is given to Reading Comprehension, Cloze Test & Para Jumbles. Syllabus is covered based on the latest pattern.",
    category: "SSC",
    level: "Beginner",
    duration: "Recorded",
    students: 300,
    price: 499,
    // salePrice: 595,
    thumbnail: "/courses/english.jpeg",
    link: "https://learn.siddhiprep.com/products/english-basics-to-advanced-vod/",
    comingSoon: false,
  },
  {
    id: 5,
    title: "Arithmetic Maths (VOD)",
    description:
      "Siddhi's Arithmetic Maths course provides comprehensive coverage of the subject with recorded classes and practice materials.",
    category: "SSC",
    level: "Beginner",
    duration: "Recorded",
    students: 300,
    price: 499,
    // salePrice: 595,
    thumbnail: "/courses/arithmetic.jpeg",
    link: "https://learn.siddhiprep.com/products/arithmetic-vod/",
    comingSoon: false,
  },
  {
    id: 6,
    title: "Word Power Made Easy",
    description:
      "This WPME course is built specifically for competitive exams. It includes detailed video lectures for every session and specially prepared slides with many more words per root than the original book. The course is designed to give you a high hit ratio in exams—typically covering 3–4 out of 6 vocabulary questions in SSC CGL and 5–6 out of 6–7 vocabulary questions in SSC MTS, based on recent trends. Learn roots, expand your vocabulary systematically, and improve your confidence in English with an exam-focused approach.",
    category: "SSC",
    level: "Beginner",
    duration: "Recorded",
    students: 300,
    price: 99,
    // salePrice: 595,
    thumbnail: "/courses/word-power.png",
    link: "https://learn.siddhiprep.com/products/word-power-made-easy/",
    comingSoon: false,
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Explore Our Courses
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Designed for SSC aspirants — learn from credible faculty
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-white border border-gray-100 rounded-xl overflow-hidden group hover:shadow-md hover:border-gray-200 transition-all duration-300 ${course.comingSoon ? "opacity-75" : ""}`}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                {course.comingSoon ? (
                  <div className="flex flex-col items-center justify-center w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                    <span className="text-2xl font-bold text-gray-400 tracking-wide">
                      COMING SOON
                    </span>
                  </div>
                ) : (
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    loading="lazy"
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
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
                    {course.comingSoon ? (
                      "TBA"
                    ) : course.price === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₹${course.price}`
                    )}
                  </span>
                  {course.comingSoon ? (
                    <span className="text-xs text-gray-400 font-medium">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-primary text-sm font-semibold hover:gap-2 transition-all"
                    >
                      <span>
                        {course.price === 0 ? "Register Free" : "Enroll Now"}
                      </span>
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
          <Link
            to="/courses"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Courses);
