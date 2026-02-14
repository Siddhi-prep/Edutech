import React, { useState } from 'react';
import { 
  Search, Download, TrendingUp, Award, Target, Zap, CheckCircle, Star, Info
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';

const LeaderboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');

  // Calculate current week range (Monday to Sunday)
  const getCurrentWeekRange = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = currentDay === 0 ? -6 : 1 - currentDay; // Adjust to get Monday
    
    const monday = new Date(today);
    monday.setDate(today.getDate() + diff);
    
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    
    const formatDate = (date) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}`;
    };
    
    return `${formatDate(monday)} - ${formatDate(sunday)}, ${today.getFullYear()}`;
  };

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Leaderboards</h1>
            <p className="text-base text-gray-600">Track top performers across quizzes, courses, and streaks</p>
          </div>

          {/* Search and Tabs */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Motivational Quote */}
            <div className="flex items-center gap-2">
              <TrendingUp className="text-primary flex-shrink-0" size={18} />
              <p className="text-sm font-medium text-gray-600 italic">
                Excellence is not a destination, it's a continuous journey
              </p>
            </div>

            {/* Period */}
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium"
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>All Time</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar - How to Get Featured */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="text-amber-500" size={24} />
                  <h3 className="font-bold text-gray-900 text-lg">Get Featured!</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">Follow these steps to become a top performer</p>
                
                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Complete Courses</h4>
                        <p className="text-xs text-gray-600">Finish multiple courses to earn points and boost your rank</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Take Quizzes</h4>
                        <p className="text-xs text-gray-600">Score high on quizzes to accumulate more points faster</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Stay Consistent</h4>
                        <p className="text-xs text-gray-600">Maintain daily learning streaks to maximize your progress</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Engage with Community</h4>
                        <p className="text-xs text-gray-600">Participate in discussions and help fellow learners</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Aim for Excellence</h4>
                        <p className="text-xs text-gray-600">Strive for high completion rates and quiz scores</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-center">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Award className="text-white" size={18} />
                    <p className="text-sm font-semibold">Your Goal</p>
                  </div>
                  <p className="text-xs opacity-90">Rank in Top 10 to get featured!</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Single Top 10 Performers Image Placeholder */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <Award className="text-amber-500" size={20} />
                    <span>Top Performers</span>
                  </h3>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Download size={16} />
                    <span>Export Image</span>
                  </button>
                </div>

                {/* Image Placeholder */}
                <div className="relative w-full rounded-lg overflow-hidden bg-gray-50 border-2 border-dashed border-gray-300" style={{ minHeight: '900px' }}>
                  {/* Instructions - Will hide when image loads */}
                  <div className="absolute inset-0 flex items-center justify-center p-8" id="top10-instructions">
                    <div className="text-center max-w-2xl">
                      <Award className="mx-auto text-gray-400 mb-4" size={48} />
                      <h4 className="text-2xl font-bold text-gray-700 mb-2">Top 10 Performers Image</h4>
                      <p className="text-gray-500 mb-6">Upload a professional image featuring all top 10 learners (Ranks 1-10)</p>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm space-y-5 text-left">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                            1
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Place your image in the public folder</h5>
                            <code className="text-sm bg-gray-100 px-3 py-1 rounded block">/client/public/top-10-performers.jpg</code>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                            2
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Name your image file exactly</h5>
                            <code className="text-sm bg-gray-100 px-3 py-1 rounded font-semibold">top-10-performers.jpg</code>
                            <p className="text-xs text-gray-500 mt-1">Formats: .jpg, .png, .webp</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                            3
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Refresh the browser</h5>
                            <p className="text-sm text-gray-600">Your image will appear here automatically, hiding these instructions</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-2 mb-1">
                          <Info className="text-blue-900" size={16} />
                          <p className="text-sm font-semibold text-blue-900">Image Specifications</p>
                        </div>
                        <p className="text-xs text-blue-700">Recommended: 1200px × 900px | Max file size: 600KB</p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <img
                    src="/top-10-performers.jpg"
                    alt="Top 10 Performers"
                    className="relative z-10 w-full h-full object-contain"
                    onLoad={(e) => {
                      e.target.parentElement.style.background = 'white';
                      e.target.parentElement.style.border = 'none';
                      const instructions = document.getElementById('top10-instructions');
                      if (instructions) instructions.style.display = 'none';
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
