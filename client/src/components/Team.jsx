import React from 'react';

const braveLeaders = [
  { id: 1, name: 'Major Vivek B', unit: '21 Para', image: '/team/major-vivek.png' },
  { id: 2, name: 'Major Sandeep Unnikrishnan, AC', unit: '', image: '/team/major-sandeep.jpeg' },
  { id: 3, name: 'Capt. Viper SC', unit: '10 Para', image: '/team/capt-viper.png' },
  { id: 4, name: 'Captain Nair', unit: '2 Para', image: '/team/captain-nair.png' },
];

const faculties = [
  { id: 1, name: 'Siddhi Sir', role: 'Academic Head & Lead Faculty', image: '/team/siddhi-sir.png' },
  { id: 2, name: 'Akshay Sir', role: 'Faculty – Science', image: '/team/akshay-sir.jpg', placeholder: true },
  { id: 3, name: 'Dr Sree Lakshmi Mam', role: 'Faculty – Science', image: '/team/dr-sree-lakshmi.png' },
  { id: 4, name: 'Dr Aparna Mam', role: 'Faculty – English', image: '/team/dr-aparna.png' },
  { id: 5, name: 'Akhil Sir', role: 'Faculty – Maths', image: '/team/akhil-sir.jpg', placeholder: true },
  { id: 6, name: 'Ritik Sir', role: 'Associate Faculty – Mathematics', image: '/team/rithik.jpeg' },
];

const PlaceholderAvatar = () => (
  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto ring-2 ring-gray-100 overflow-hidden">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-14 h-14 sm:w-16 sm:h-16 text-gray-400 mt-2"
    >
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 21c0-4.418 3.582-7 8-7s8 2.582 8 7" fill="currentColor" />
    </svg>
  </div>
);

const Team = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        {/* Main Heading */}
        <div className="text-center mb-4 md:mb-6 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Meet Our Team</h2>
          <p className="text-base md:text-lg text-gray-600">
            Brave Leaders & Passionate Educators dedicated to your success
          </p>
        </div>

        {/* Row 1 — Brave Leaders */}
        <div className="mb-12 md:mb-16">
          <p className="text-center text-sm text-gray-500 italic mb-6 md:mb-8">
            Inspired from the Sacrifices & Leadership of our Brave Hearts
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 max-w-4xl mx-auto">
            {braveLeaders.map((leader) => (
              <div key={leader.id} className="text-center group w-28 sm:w-32">
                <div className="relative mb-3 inline-block">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover object-top ring-2 ring-gray-200 group-hover:ring-primary/30 transition-all"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center mx-auto hidden">
                    <span className="text-2xl font-bold text-gray-400">
                      {leader.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight mb-0.5">
                  {leader.name}
                </h3>
                {leader.unit && (
                  <p className="text-xs text-gray-500">{leader.unit}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — Expert Faculties */}
        <div>
          <h3 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
            Our Expert Faculties & Mentors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {faculties.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-gray-100 rounded-xl p-4 text-center group hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div className="relative mb-3 inline-block">
                  {member.placeholder ? (
                    <PlaceholderAvatar name={member.name} />
                  ) : (
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover object-top ring-2 ring-gray-100 group-hover:ring-primary/20 transition-all"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center mx-auto hidden">
                        <span className="text-2xl font-bold text-primary/60">
                          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs text-primary font-medium leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Team);
