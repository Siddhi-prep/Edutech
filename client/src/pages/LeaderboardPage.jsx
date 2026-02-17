import React, { useState } from 'react';
import { Award, Star, TrendingUp } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import GradientBackground from '../components/GradientBackground';

/* ── Leaderboard data per tab ── */
const leaderboardData = {
  brahmosBatch1: [
    { rank: 1, name: 'Sammathamu Seshank', score: '170.5/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=SS&backgroundColor=b6e3f4', badge: '🥇' },
    { rank: 2, name: 'Arani Gayathri', score: '167.5/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=c0aede', badge: '🥈' },
    { rank: 3, name: 'Umesh Kumar Yadav', score: '165.5/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=UY&backgroundColor=ffd5dc', badge: '🥉' },
    { rank: 4, name: 'Vaishnavi', score: '162.5/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Va&backgroundColor=d1f4d9' },
    { rank: 5, name: 'Sajitha', score: '161.5/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sa&backgroundColor=ffdfbf' },
    { rank: 6, name: 'Priya', score: '160.5/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Pr&backgroundColor=b6e3f4' },
    { rank: 7, name: 'Nikhil', score: '152/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ni&backgroundColor=c0aede' },
    { rank: 8, name: 'Rishipriya', score: '149/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ri&backgroundColor=ffd5dc' },
    { rank: 9, name: 'Arun Raj', score: '138.5/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AR&backgroundColor=d1f4d9' },
    { rank: 10, name: 'Saikrishna N', score: '123/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=SN&backgroundColor=ffdfbf' },
  ],
  brahmosBatch2: [
    { rank: 1, name: 'Sravya', score: '163/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sr&backgroundColor=b6e3f4', badge: '\ud83e\udd47' },
    { rank: 2, name: 'Padma', score: '151/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Pa&backgroundColor=c0aede', badge: '\ud83e\udd48' },
    { rank: 3, name: 'Aiswarya P', score: '149/200', grade: 'A', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AP&backgroundColor=ffd5dc', badge: '\ud83e\udd49' },
    { rank: 4, name: 'Avinash', score: '130/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Av&backgroundColor=d1f4d9' },
    { rank: 5, name: 'Revanth', score: '129/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Re&backgroundColor=ffdfbf' },
    { rank: 6, name: 'Lokesh', score: '126/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Lo&backgroundColor=b6e3f4' },
    { rank: 7, name: 'Anitha', score: '122.5/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=An&backgroundColor=c0aede' },
    { rank: 8, name: 'J Sri Harsha', score: '122/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=JH&backgroundColor=ffd5dc' },
    { rank: 9, name: 'Kurla', score: '119/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ku&backgroundColor=d1f4d9' },
    { rank: 10, name: 'Ricky', score: '118/200', grade: 'B', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ri&backgroundColor=ffdfbf' },
  ],
  weeklyLiveTest: [],
};

const tabs = [
  { id: 'brahmosBatch1', label: 'BrahMos Batch 1' },
  { id: 'brahmosBatch2', label: 'BrahMos Batch 2' },
  { id: 'weeklyLiveTest', label: 'Weekly Live Test' },
];

/* ── Rank card component ── */
const RankCard = ({ rank, name, score, grade, avatar, badge }) => {
  const isTop3 = rank <= 3;
  const ringColor = rank === 1 ? 'ring-amber-400' : rank === 2 ? 'ring-gray-400' : rank === 3 ? 'ring-amber-600' : 'ring-gray-200';
  const gradeColor = grade === 'A' ? 'bg-green-100 text-green-700' : grade === 'B' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600';

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
      </div>

      {/* Grade */}
      <div className="flex-shrink-0">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${gradeColor}`}>{grade}</span>
      </div>
    </div>
  );
};

/* ── Coming Soon placeholder ── */
const ComingSoon = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mb-4">
      <Award className="text-primary" size={28} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{message}</h3>
    <p className="text-sm text-gray-500 max-w-sm">Stay tuned! Results will be updated here once available.</p>
  </div>
);

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
            <p className="text-base text-gray-600">Track top performers across all batches and tests.</p>
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

                <a
                  href="https://www.siddhiprep.com/quizzes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block p-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Award className="text-white" size={18} />
                    <p className="text-sm font-semibold">Attempt Quizzes Now</p>
                  </div>
                  <p className="text-xs opacity-90">Rank in Top 10 to get featured!</p>
                </a>
              </div>
            </div>

            {/* Main Content — Animated Tabs Leaderboard */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                {/* Quote */}
                <div className="flex items-center justify-center gap-2 pt-5 px-5">
                  <TrendingUp className="text-primary flex-shrink-0" size={16} />
                  <p className="text-sm font-medium text-gray-500 italic">
                    Excellence is not a destination, it's a continuous journey
                  </p>
                </div>

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
                            {leaderboardData[tab.id].length > 0 ? (
                              leaderboardData[tab.id].map((person) => (
                                <RankCard key={person.rank} {...person} />
                              ))
                            ) : (
                              <ComingSoon message={tab.id === 'weeklyLiveTest' ? 'Weekly Live Test — Coming Soon' : 'Leaderboard — Coming Soon'} />
                            )}
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
