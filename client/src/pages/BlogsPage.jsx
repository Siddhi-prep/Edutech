import React from 'react';
import { BookOpen, Edit3, Users, TrendingUp, Layers, CheckCircle } from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const BlogsPage = () => {
  const upcomingFeatures = [
    { icon: <Edit3 size={20} />, text: 'Expert-written technical blogs' },
    { icon: <Layers size={20} />, text: 'Real project case studies' },
    { icon: <Users size={20} />, text: 'Student & mentor stories' },
    { icon: <TrendingUp size={20} />, text: 'Industry insights and trends' },
    { icon: <BookOpen size={20} />, text: 'Step-by-step tutorials' },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />

      <div className="relative z-10 pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8">
            <Edit3 size={36} className="text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blogs Coming Soon
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-500 mb-16 max-w-md mx-auto">
            We're building something valuable for learners and creators.
          </p>

          {/* Upcoming Features */}
          <div className="text-left bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
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
          <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
            <CheckCircle size={16} />
            <span>Actively in development</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
