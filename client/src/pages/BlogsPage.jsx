import React from 'react';
import { Edit3, BookOpen, Users, Heart, CheckCircle } from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const BlogsPage = () => {
  const upcomingFeatures = [
    { icon: <Edit3 size={20} />, text: 'Expert Written Notes' },
    { icon: <Users size={20} />, text: "Our Team's Struggle & Success Stories" },
    { icon: <Heart size={20} />, text: "Our Student's Stories" },
    { icon: <BookOpen size={20} />, text: 'Valuable Lessons' },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />

      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Blogs</h1>
            <p className="text-base text-gray-600">Coming Soon</p>
          </div>

          {/* Content Card */}
          <div className="max-w-2xl">
            {/* Description */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-6">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                We are building something very valuable to all the aspirants based on our team's experience in cracking Multiple Exams.
              </p>
            </div>

            {/* Upcoming Features */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">Upcoming Features</h2>
              <ul className="space-y-4">
                {upcomingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-200 text-primary">
                      {feature.icon}
                    </span>
                    <span className="text-gray-700 text-sm sm:text-base">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
              <CheckCircle size={16} />
              <span>Actively in development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
