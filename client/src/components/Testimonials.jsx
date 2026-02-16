import React from 'react';

const testimonials = [
  {
    name: 'Chandu',
    handle: 'SSC CGL Aspirant',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Chandu&backgroundColor=b6e3f4',
    text: 'Siddhi has been a great place for SSC CGL preparation. The faculty explain concepts clearly, the study material is helpful, and the overall environment motivates me to learn better. I feel more confident about my exam after joining Siddhi.',
  },
  {
    name: 'Uttej Velpula',
    handle: 'BrahMos Batch Student',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Uttej&backgroundColor=c0aede',
    text: "Truly Siddhi is the best mentorship course. I have ever seen such a mentor and content — it was like the gate pass for any exam to clear. I'll make sure that I would be in 2026 results and waiting for celebrations with BrahMos.",
  },
  {
    name: 'Revanth',
    handle: 'SSC CGL Aspirant',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Revanth&backgroundColor=ffd5dc',
    text: 'When I compared to my previous coaching, Siddhi is very much better — classes, tests, revision notes, weekly timetables, mentorships. In every aspect Siddhi leads. I am feeling that I took a good decision.',
  },
  {
    name: 'Vinay Kumar',
    handle: 'BrahMos Batch Student',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Vinay&backgroundColor=d1f4d9',
    text: 'Before joining Siddhi, I scored 70-80 in full mocks. Now I am able to score 100-110. This is only because of the Siddhi team. Teaching is excellent, mapping is top notch, and analysing paper patterns is another level.',
  },
  {
    name: 'Mouna Suma',
    handle: 'BrahMos Batch Student',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Mouna&backgroundColor=ffdfbf',
    text: "I discovered Siddhi Sir on YouTube. Then Sir launched the BrahMos course and it was a turning point for me. His way of teaching is truly different. He makes you fall in love with the subject, removes your fear and builds your confidence step by step.",
  },
  {
    name: 'Manoj Acche',
    handle: 'SSC CGL Aspirant',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Manoj&backgroundColor=b6e3f4',
    text: 'After I got Siddhi I never want to compromise on things. I felt like learning from my brother — the comfort and clarity in every session is unmatched.',
  },
  {
    name: 'K Bhanu Prakash',
    handle: 'SSC CGL Aspirant',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Bhanu&backgroundColor=c0aede',
    text: 'SIDDHI is an excellent app for SSC CGL aspirants. The teaching quality is very good, especially for Maths, English, and GS. The revision notes are very useful and the Sunday mentorship sessions provide guidance, motivation, and proper direction.',
  },
  {
    name: 'Vaishnavi',
    handle: 'BrahMos Batch Student',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Vaishnavi&backgroundColor=ffd5dc',
    text: "After 1 year of struggling to find a better source, I came to know about Siddhi. As the Sanskrit meaning suggests — Perfection — in the content, depth of class, and the way Sir teaches. The team has done fabulous work. Really happy that I joined.",
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
        loading="lazy"
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
            Real words from real aspirants preparing with SiddhiPrep
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div
            className="group flex overflow-hidden p-2 flex-row [--gap:1rem] [--duration:40s]"
            style={{ gap: 'var(--gap)' }}
          >
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                className="flex shrink-0 animate-marquee flex-row group-hover:[animation-play-state:paused]"
                style={{ gap: 'var(--gap)' }}
                aria-hidden={copyIndex === 1}
              >
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${copyIndex}-${i}`}
                    {...testimonial}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white sm:block" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
