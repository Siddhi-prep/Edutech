import React from 'react';
import { Target, Users, Award, TrendingUp, Play } from 'react-feather';

const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ';

const Vision = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: 'Mission-Driven',
      description: 'Democratizing quality education for everyone, everywhere.',
    },
    {
      icon: <Users size={24} />,
      title: 'Community First',
      description: 'Learn together with peers, mentors, and industry experts.',
    },
    {
      icon: <Award size={24} />,
      title: 'Industry-Recognized',
      description: 'Earn certificates valued by top companies worldwide.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Career Growth',
      description: 'Track your progress and unlock new opportunities.',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center max-w-5xl mx-auto">
          {/* Left: Text Content */}
          <div className="animate-slide-up px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
              Our Vision &
              <span className="text-primary"> Mission</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-5 md:mb-6 leading-relaxed">
              At EduTech, we believe education should be accessible, engaging, and transformative.
              We're building the future of learning with cutting-edge technology and world-class content.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="bg-blue-50 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: YouTube Video Thumbnail */}
          <div className="relative animate-fade-in px-4 md:px-0">
            <a
              href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                alt="Watch our vision video"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play size={24} className="text-primary ml-1" fill="currentColor" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
