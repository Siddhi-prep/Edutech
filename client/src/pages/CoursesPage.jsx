import React, { useState } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  Clock,
  Users,
  BookOpen,
} from "react-feather";
import GradientBackground from "../components/GradientBackground";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const allCourses = [
        {
      id: 1,
      title: "BrahMos",
      description:
        "Siddhi's Flagship course that provides teaching, Notes & Topic wise practise Tests for Maths, GS and English. For Reasoning we provide Theory Notes & Practise Sheets for the entire Syllabus.",
      category: "SSC",
      level: "Beginner",
      duration: "24 Weeks",
      students: 500,
      price: 3999,
      // salePrice: 2896,
      thumbnail: "/courses/brahmos.png",
      link: "https://learn.siddhiprep.com/products/brahmos-for-all-ssc-exams/",
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
    {
      id: 7,
      title: "Static GK (Kavach) Combo",
      description:
        "Prepare smarter with the Static GK Ultimate Combo, crafted specifically for SSC 2026. Get 700+ exam-oriented Static GK questions with topic-wise tests along with easy-to-read, topic-wise Short Notes (PDFs) for quick revision. This combo is designed to help you learn, practice, revise, and score with confidence.",
      category: "SSC(Tests + Short Notes)",
      level: "Beginner",
      duration: "45 days",
      students: 300,
      price: 99,
      // salePrice: 595,
      thumbnail: "/courses/tests-and-notes/combo.png",
      link: "https://learn.siddhiprep.com/products/static-gk-kavach-short-notes-for-all-ssc-2026/",
      comingSoon: false,
    },
    {
      id: 8,
      title: "Static GK (Kavach) Test Series",
      description:
        "Master Static GK with 700+ carefully curated questions, organized topic-wise to help you practice systematically and improve your exam performance.",
      category: "SSC(Tests + Short Notes)",
      level: "Beginner",
      duration: "45 days",
      students: 300,
      price: 75,
      // salePrice: 595,
      thumbnail: "/courses/tests-and-notes/tests.png",
      link: "https://learn.siddhiprep.com/products/static-gk-kavach-test-series-for-all-ssc-2026/",
      comingSoon: false,
    },
    {
      id: 9,
      title: "Static GK (Kavach) Short Notes",
      description:
        "Revise smarter with Kavach Topic-wise Static GK Short Notes (PDFs), crafted specifically for SSC 2026 to help you revise the most important concepts quickly and effectively.",
      category: "SSC(Tests + Short Notes)",
      level: "Beginner",
      duration: "30 days",
      students: 300,
      price: 39,
      // salePrice: 595,
      thumbnail: "/courses/tests-and-notes/short-notes.png",
      link: "https://learn.siddhiprep.com/products/static-gk-kavach-short-notes-for-all-ssc-2026/",
      comingSoon: false,
    },

    {
      id: 10,
      title: "Math Arena - Play with Maths",
      description:
        "Siddhi's Math Arena course makes learning mathematics fun. It is designed to enhance problem-solving skills and mathematical thinking.",
      category: "SSC Free",
      level: "Beginner",
      duration: "Free Materials",
      students: 300,
      price: 0,
      thumbnail: "/courses/math-arena.png",
      link: "https://learn.siddhiprep.com/products/maths_arena/",
      comingSoon: false,
    },
    {
      id: 11,
      title: "Siddhi Free Materials",
      description:
        "Siddhi's Free Materials include study notes, practice questions, and previous year papers for various subjects.",
      category: "SSC Free",
      level: "Beginner",
      duration: "Free Materials",
      students: 300,
      price: 0,
      thumbnail: "/courses/free.jpeg",
      link: "https://learn.siddhiprep.com/products/siddhi-free-materials/",
      comingSoon: false,
    },
    {
      id: 12,
      title: "SSC CGL 75 Days Challenge - The Final Push",
      description:
        "SSC CGL 2026 preparation enters its most important phase! Only 75 Days are left for Tier 1, and this is the FINAL PUSH that can completely change your result. we are launching the FREE 75 Day SSC CGL 2026 Challenge designed specially for aspirants scoring around 100–110 marks and aiming for 135+ in Tier 1.",
      category: "SSC Free",
      level: "Beginner",
      duration: "Free Materials",
      students: 300,
      price: 0,
      // salePrice: 2896,
      thumbnail: "/courses/75days.png",
      link: "https://learn.siddhiprep.com/products/cgl-75-days-challenge-the-final-push/",
      comingSoon: false,
    },

  ];

  const categories = ["All", "SSC", "SSC Free", "SSC(Tests + Short Notes)"];

  // Filter courses
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory ||
      (selectedCategory === "All" && true);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />

      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Browse Courses
            </h1>
            <p className="text-base text-gray-600">
              Explore SiddhiPrep's courses designed for SSC aspirants.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
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
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center space-x-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                          {category}
                        </span>
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
                  <span className="font-semibold text-gray-900">
                    {filteredCourses.length}
                  </span>{" "}
                  results
                </p>
              </div>

              {/* Courses */}
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 gap-6"
                    : "space-y-4"
                }
              >
                {filteredCourses.map((course) => (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      key={course.id}
                      className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                        viewMode === "list" ? "flex" : ""
                      } ${course.comingSoon ? "opacity-80" : ""}`}
                    >
                      {/* Thumbnail */}
                      <div
                        className={`bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden ${
                          viewMode === "list"
                            ? "w-48 flex-shrink-0 flex items-center justify-center"
                            : ""
                        }`}
                      >
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
                            className="w-full h-auto  object-contain"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = `<div class="flex items-center justify-center w-full aspect-video"><span class="text-lg font-bold text-gray-400 text-center px-4">${course.title}</span></div>`;
                            }}
                          />
                        )}
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {course.category === "All"
                              ? course.comingSoon
                                ? "Coming Soon"
                                : "Free"
                              : course.category}
                          </span>
                          {course.price === 0 && !course.comingSoon && (
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                              FREE
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                          {course.description}
                        </p>

                        {!course.comingSoon && (
                          <div className="flex items-center flex-wrap gap-3 text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{course.duration}</span>
                            </div>
                            {course.students > 0 && (
                              <div className="flex items-center space-x-1">
                                <Users size={14} />
                                <span>
                                  {course.students.toLocaleString()}+ enrolled
                                </span>
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
                              <span className="text-lg font-bold text-gray-400 ">
                                TBA
                              </span>
                            ) : course.price === 0 ? (
                              <span className="text-2xl font-bold text-green-600">
                                Free
                              </span>
                            ) : course.salePrice ? (
                              <div className="flex gap-2">
                                <span className="text-lg font-bold text-gray-500 line-through">
                                  ₹{course.price.toLocaleString()}
                                </span>
                                <span className="text-2xl font-bold text-gray-900">
                                  ₹{course.salePrice.toLocaleString()}
                                </span>
                              </div>
                            ) : (
                              <span className="text-2xl font-bold text-gray-900">
                                ₹{course.price.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <div>
                            {course.comingSoon ? (
                              <span className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium cursor-default">
                                Coming Soon
                              </span>
                            ) : (
                              <div className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium inline-block">
                                {course.price === 0
                                  ? "Register Free"
                                  : "Enroll Now"}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
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
