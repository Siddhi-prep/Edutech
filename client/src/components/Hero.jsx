import React from 'react';
import { ArrowRight, Play } from 'react-feather';
import { motion } from 'framer-motion';
import GradientBackground from './GradientBackground';
import useAnimatedCounter from '../hooks/useAnimatedCounter';
import useParallax from '../hooks/useParallax';

/* ── Reusable animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 1.4 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Hero = () => {
  const parallaxOffset = useParallax(0.3);

  // Apple-inspired smooth counters
  const ytLearners = useAnimatedCounter(35000, 6000);
  const appLearners = useAnimatedCounter(25000, 5500);
  const credibleCourses = useAnimatedCounter(5, 4500);


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4">
      {/* Modern Gradient Background with Parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <GradientBackground />
      </div>

      <div className="container-custom relative z-10 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="text-center max-w-4xl mx-auto">

          {/* Main Headline — staggered slide-up with blur */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight px-2">
            <motion.span
              className="inline-block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              Learn Smart.
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              Revise Daily.
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              Achieve with Siddhi.
            </motion.span>
          </h1>

          {/* Hashtag — scale-in with blur */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 md:mb-6"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={0.7}
          >
            #SiddhiThoSadhiddam
          </motion.p>

          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
          >
            Join the Siddhi Family — where thousands of aspirants grow and prepare together.
            Learn from credible faculty and move one step closer to your dream job every single day.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.1}
          >
            <a
              href="https://www.siddhiprep.com/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2 text-base md:text-lg group w-full sm:w-auto transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <span>Browse Courses</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PL9grYD5cBKDvNeAkDD953piUmftb78pE8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2 text-base md:text-lg w-full sm:w-auto transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <Play size={18} />
              <span>Watch Demo</span>
            </a>
          </motion.div>

          {/* Stats Section — staggered children */}
          <motion.div
            className="max-w-4xl mx-auto px-6"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={1.3}
          >
            <div className="bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 md:p-8 shadow-lg">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* YouTube Learners */}
                <motion.div className="text-center" variants={statItem}>
                  <div
                    ref={ytLearners.ref}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-tight tracking-tight"
                  >
                    {ytLearners.count.toLocaleString()}+
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">YouTube Learners</div>
                </motion.div>

                {/* App Learners */}
                <motion.div className="text-center" variants={statItem}>
                  <div
                    ref={appLearners.ref}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2 leading-tight tracking-tight"
                  >
                    {appLearners.count.toLocaleString()}+
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">App Learners</div>
                </motion.div>

                {/* Credible Courses */}
                <motion.div className="text-center" variants={statItem}>
                  <div
                    ref={credibleCourses.ref}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 leading-tight tracking-tight"
                  >
                    {credibleCourses.count}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Credible Courses</div>
                </motion.div>

                {/* Pan India Community */}
                <motion.div className="text-center" variants={statItem}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight tracking-tight" style={{ background: 'linear-gradient(180deg, #FF9933 30%, #FFFFFF 50%, #138808 70%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    IN
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Pan India Community</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
