import React from 'react';
import { Award, TrendingUp } from 'react-feather';

const Leaderboard = () => {

  return (
    <section id="leaderboard" className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Top Learners</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12">
            Celebrate excellence and get inspired by our top performers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 md:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-bold flex items-center space-x-2">
                  <Award size={24} className="md:w-7 md:h-7" />
                  <span>Top 5 Learners</span>
                </h3>
                <TrendingUp size={20} className="md:w-6 md:h-6" />
              </div>
            </div>

            {/* Top 5 Performers Image Placeholder */}
            <div className="p-6">
              <div className="relative w-full rounded-lg overflow-hidden bg-gray-50 border-2 border-dashed border-gray-300" style={{ minHeight: '800px' }}>
                {/* Instructions - Will hide when image loads */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center max-w-2xl">
                    <div className="mb-8">
                      <Award className="mx-auto text-gray-400 mb-4" size={48} />
                      <h3 className="text-2xl font-bold text-gray-700 mb-2">Top 5 Performers Image</h3>
                      <p className="text-gray-500">Follow these steps to add your performers image</p>
                    </div>
                    
                    <div className="space-y-6 text-left bg-white rounded-lg p-6 shadow-sm">
                      {/* Step 1 */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">Place your image in the public folder</h4>
                          <p className="text-sm text-gray-600">
                            <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                              /client/public/top-5-performers.jpg
                            </code>
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">Name your image file</h4>
                          <p className="text-sm text-gray-600">
                            Use exactly: <code className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold">top-5-performers.jpg</code>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Supported formats: .jpg, .png, .webp</p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">Refresh the page</h4>
                          <p className="text-sm text-gray-600">
                            After placing the image, refresh your browser to see it displayed here
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-6">
                      Recommended size: 1200px × 800px | Max file size: 500KB
                    </p>
                  </div>
                </div>

                {/* Image - Will show on top of instructions when loaded */}
                <img
                  src="/top-5-performers.jpg"
                  alt="Top 5 Performers"
                  className="relative z-10 w-full h-full object-contain"
                  onLoad={(e) => {
                    // Hide instructions when image loads successfully
                    e.target.parentElement.style.background = 'white';
                    const instructions = e.target.previousElementSibling;
                    if (instructions) instructions.style.display = 'none';
                  }}
                  onError={(e) => {
                    // Show instructions if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>


          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Want to see your name here? Start learning today!
            </p>
            <button className="btn-primary">Start Your Journey</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
