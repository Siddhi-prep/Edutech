import React from 'react';
import { ArrowRight } from 'react-feather';
import GradientBackground from './GradientBackground';
import useAnimatedCounter from '../hooks/useAnimatedCounter';
import useParallax from '../hooks/useParallax';

const Hero = () => {
  const parallaxOffset = useParallax(0.3);
  
  // Apple-inspired smooth counters
  const learners = useAnimatedCounter(25000, 6000); // 25,000+ users
  const courses = useAnimatedCounter(50, 5500); // 50+ Premium Courses
  const mentors = useAnimatedCounter(50, 5000);
  const countries = useAnimatedCounter(15, 4500);

  const scrollToCourses = () => {
    const element = document.querySelector('#courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div className="text-center max-w-4xl mx-auto animate-fade-in">

          {/* Main Headline with Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight px-2 animate-fade-in">
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Learn Smart.
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Revise Daily.
            </span>
            <br />
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Achieve with Siddhi.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 md:mb-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            #SiddhiThoSadhiddam
          </p>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            Join thousands of learners upgrading their skills with AI-powered learning.
            Master in-demand skills and accelerate your career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <button
              onClick={scrollToCourses}
              className="btn-primary flex items-center space-x-2 text-base md:text-lg group w-full sm:w-auto transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
            >
              <span>Browse Courses</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            <button className="btn-secondary text-base md:text-lg w-full sm:w-auto transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Apple-Inspired Stats Section */}
          <div className="max-w-4xl mx-auto px-6 animate-fade-in" style={{ animationDelay: '1.7s' }}>
            <div className="bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {/* Active Learners */}
                <div className="text-center">
                  <div 
                    ref={learners.ref}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 leading-tight tracking-tight"
                  >
                    {learners.count.toLocaleString()}+
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Active Learners</div>
                </div>

                {/* Premium Courses */}
                <div className="text-center">
                  <div 
                    ref={courses.ref}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2 leading-tight tracking-tight"
                  >
                    {courses.count}+
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Premium Courses</div>
                </div>

                {/* Expert Mentors */}
                <div className="text-center">
                  <div 
                    ref={mentors.ref}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 leading-tight tracking-tight"
                  >
                    {mentors.count}+
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Expert Mentors</div>
                </div>

                {/* Countries Reached */}
                <div className="text-center">
                  <div 
                    ref={countries.ref}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 leading-tight tracking-tight"
                  >
                    {countries.count}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">Countries Reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
