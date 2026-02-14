import React from 'react';

const testimonials = [
  {
    name: 'Ananya Sharma',
    handle: 'B.Tech CSE Student',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    text: 'EduTech completely changed how I prepare for placements. The structured courses and real-world projects gave me the confidence I needed to crack my dream company.',
  },
  {
    name: 'Rahul Verma',
    handle: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    text: 'The mentorship quality here is unmatched. I went from knowing basic HTML to building production-ready apps in just 4 months. Highly recommend for anyone serious about tech.',
  },
  {
    name: 'Priya Patel',
    handle: 'Data Science Intern',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    text: 'The data science track is incredibly well-designed. Each module builds on the last, and the hands-on projects made complex concepts feel approachable and practical.',
  },
  {
    name: 'Arjun Mehta',
    handle: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: 'As a design student, I was surprised by how well EduTech covers the intersection of design and development. The community feedback on projects is genuinely helpful.',
  },
  {
    name: 'Sneha Reddy',
    handle: 'MCA Graduate',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    text: 'I tried multiple platforms before finding EduTech. The difference is the focus on real skills over certificates. The quizzes and case studies keep you sharp and job-ready.',
  },
];

const TestimonialCard = ({ name, handle, avatar, text }) => (
  <div
    className="flex flex-col rounded-xl border border-gray-200 bg-gradient-to-b from-gray-50/80 to-white p-5 sm:p-6 max-w-[320px] sm:max-w-[320px] transition-colors duration-300 hover:from-gray-100/80 hover:to-gray-50/40"
  >
    <div className="flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold leading-tight text-gray-900">
          {name}
        </h3>
        <p className="text-sm text-gray-500">
          {handle}
        </p>
      </div>
    </div>
    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
      {text}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-16 sm:py-24 md:py-32 px-0">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          <h2 className="max-w-[720px] text-3xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight">
            What Our Students Say
          </h2>
          <p className="text-base max-w-[600px] font-medium text-gray-500 sm:text-lg">
            Real success stories from learners who transformed their careers with EduTech
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div
            className="group flex overflow-hidden p-2 flex-row"
            style={{ '--gap': '1rem', '--duration': '40s', gap: 'var(--gap)' }}
          >
            <div
              className="flex shrink-0 justify-around animate-marquee flex-row group-hover:[animation-play-state:paused]"
              style={{ gap: 'var(--gap)' }}
            >
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white sm:block" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
