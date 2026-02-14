import React, { useState, useEffect } from 'react';
import { Linkedin } from 'react-feather';
import { getTeam } from '../services/api';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await getTeam();
      setTeam(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching team:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <div className="animate-pulse">Loading team...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate educators and industry experts dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 text-center group hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="relative mb-3 inline-block">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover ring-2 ring-gray-100 group-hover:ring-primary/20 transition-all"
                />
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-0.5 leading-tight">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-primary font-medium mb-1.5">{member.role}</p>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">{member.tagline}</p>

              <a
                href={member.linkedin}
                className="inline-flex items-center justify-center w-8 h-8 bg-gray-50 rounded-full text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Linkedin size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
