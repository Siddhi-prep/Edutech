import React, { useState } from 'react';
import { Award, Star, TrendingUp } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import GradientBackground from '../components/GradientBackground';

/* ── Leaderboard data per tab ── */
const leaderboardData = {
  weeklyFreeTest: [
    { rank: 1, name: 'Ananya Sharma', score: 980, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya&backgroundColor=b6e3f4', badge: '🥇' },
    { rank: 2, name: 'Rahul Verma', score: 945, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=c0aede', badge: '🥈' },
    { rank: 3, name: 'Priya Patel', score: 920, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ffd5dc', badge: '🥉' },
    { rank: 4, name: 'Arjun Mehta', score: 890, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=d1f4d9' },
    { rank: 5, name: 'Sneha Reddy', score: 875, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha&backgroundColor=ffdfbf' },
    { rank: 6, name: 'Karan Singh', score: 860, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&backgroundColor=b6e3f4' },
    { rank: 7, name: 'Meera Joshi', score: 840, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&backgroundColor=c0aede' },
    { rank: 8, name: 'Vikram Das', score: 820, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&backgroundColor=ffd5dc' },
    { rank: 9, name: 'Pooja Nair', score: 800, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja&backgroundColor=d1f4d9' },
    { rank: 10, name: 'Aditya Rao', score: 785, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya&backgroundColor=ffdfbf' },
  ],
  brahmosBatch1: [
    { rank: 1, name: 'Deepak Kumar', score: 970, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Deepak&backgroundColor=b6e3f4', badge: '🥇' },
    { rank: 2, name: 'Kavya Iyer', score: 955, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya&backgroundColor=ffd5dc', badge: '🥈' },
    { rank: 3, name: 'Rohan Gupta', score: 930, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan&backgroundColor=c0aede', badge: '🥉' },
    { rank: 4, name: 'Ishita Bansal', score: 910, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ishita&backgroundColor=d1f4d9' },
    { rank: 5, name: 'Nikhil Tiwari', score: 895, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&backgroundColor=ffdfbf' },
    { rank: 6, name: 'Shruti Mishra', score: 880, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shruti&backgroundColor=b6e3f4' },
    { rank: 7, name: 'Amit Pandey', score: 865, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit&backgroundColor=c0aede' },
    { rank: 8, name: 'Riya Saxena', score: 850, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=ffd5dc' },
    { rank: 9, name: 'Saurabh Jain', score: 835, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Saurabh&backgroundColor=d1f4d9' },
    { rank: 10, name: 'Tanvi Kapoor', score: 820, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvi&backgroundColor=ffdfbf' },
  ],
  brahmosBatch2: [
    { rank: 1, name: 'Harsh Agarwal', score: 960, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh&backgroundColor=b6e3f4', badge: '🥇' },
    { rank: 2, name: 'Nisha Yadav', score: 940, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha&backgroundColor=ffd5dc', badge: '🥈' },
    { rank: 3, name: 'Varun Chopra', score: 925, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Varun&backgroundColor=c0aede', badge: '🥉' },
    { rank: 4, name: 'Divya Sharma', score: 905, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Divya&backgroundColor=d1f4d9' },
    { rank: 5, name: 'Manish Reddy', score: 890, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manish&backgroundColor=ffdfbf' },
    { rank: 6, name: 'Sakshi Dubey', score: 875, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sakshi&backgroundColor=b6e3f4' },
    { rank: 7, name: 'Rajat Verma', score: 860, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajat&backgroundColor=c0aede' },
    { rank: 8, name: 'Ankita Jha', score: 845, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ankita&backgroundColor=ffd5dc' },
    { rank: 9, name: 'Suresh Pillai', score: 830, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh&backgroundColor=d1f4d9' },
    { rank: 10, name: 'Neha Kulkarni', score: 815, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha&backgroundColor=ffdfbf' },
  ],
};

const tabs = [
  { id: 'weeklyFreeTest', label: 'Weekly Free Test' },
  { id: 'brahmosBatch1', label: 'Brahmos Batch 1' },
  { id: 'brahmosBatch2', label: 'Brahmos Batch 2' },
];

/* ── Rank card component ── */
const RankCard = ({ rank, name, score, avatar, badge }) => {
  const isTop3 = rank <= 3;
  const ringColor = rank === 1 ? 'ring-amber-400' : rank === 2 ? 'ring-gray-400' : rank === 3 ? 'ring-amber-600' : 'ring-gray-200';

  return (
    <div className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${isTop3 ? 'bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/15' : 'bg-white border-gray-100 hover:border-gray-200'}`}>
      {/* Rank */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isTop3 ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-gray-100 text-gray-600'}`}>
        {badge || rank}
      </div>

      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className={`w-10 h-10 rounded-full object-cover ring-2 ${ringColor} flex-shrink-0`}
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold truncate ${isTop3 ? 'text-gray-900' : 'text-gray-700'}`}>{name}</p>
        <p className="text-xs text-gray-400">Rank #{rank}</p>
      </div>

      {/* Score */}
      <div className="text-right flex-shrink-0">
        <p className={`text-sm font-bold ${isTop3 ? 'text-primary' : 'text-gray-700'}`}>{score}</p>
        <p className="text-xs text-gray-400">pts</p>
      </div>
    </div>
  );
};

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />

      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Leaderboards</h1>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-primary flex-shrink-0" size={18} />
              <p className="text-sm font-medium text-gray-500 italic">
                Excellence is not a destination, it's a continuous journey
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar - Get Featured (kept exactly as-is) */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="text-amber-500" size={24} />
                  <h3 className="font-bold text-gray-900 text-lg">Get Featured!</h3>
                </div>
                <p className="text-sm text-gray-600 mb-6">Follow these steps to become a top performer</p>

                <div className="space-y-5">
                  {[
                    { step: 1, title: 'Complete Courses', desc: 'Finish multiple courses to earn points and boost your rank' },
                    { step: 2, title: 'Take Quizzes', desc: 'Score high on quizzes to accumulate more points faster' },
                    { step: 3, title: 'Stay Consistent', desc: 'Maintain daily learning streaks to maximize your progress' },
                    { step: 4, title: 'Engage with Community', desc: 'Participate in discussions and help fellow learners' },
                    { step: 5, title: 'Aim for Excellence', desc: 'Strive for high completion rates and quiz scores' },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                          <p className="text-xs text-gray-600">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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

            {/* Main Content — Animated Tabs Leaderboard */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                {/* Animated Tab Bar */}
                <div className="flex gap-1 p-1.5 bg-gray-100 rounded-xl m-4 sm:m-5">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="relative flex-1 px-3 py-2.5 text-sm font-medium rounded-lg outline-none transition-colors"
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="active-leaderboard-tab"
                          className="absolute inset-0 bg-white rounded-lg shadow-sm"
                          transition={{ type: 'spring', duration: 0.5 }}
                        />
                      )}
                      <span className={`relative z-10 ${activeTab === tab.id ? 'text-primary font-semibold' : 'text-gray-500'}`}>
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="px-4 sm:px-5 pb-5">
                  <AnimatePresence mode="wait">
                    {tabs.map(
                      (tab) =>
                        activeTab === tab.id && (
                          <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="space-y-2.5"
                          >
                            {leaderboardData[tab.id].map((person) => (
                              <RankCard key={person.rank} {...person} />
                            ))}
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
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
