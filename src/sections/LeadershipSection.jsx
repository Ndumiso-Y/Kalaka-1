import React, { useState } from 'react';
import CEOImage from '../assets/images/CEO.png';
import CFOImage from '../assets/images/CFO.png';
import OperationsDirectorImage from '../assets/images/OperationsDirector.png';

const leaders = [
  {
    name: 'Executive Chairman',
    role: 'CEO',
    image: CEOImage,
    highlights: [
      'Actuarial science background',
      'Extensive commodities trading experience',
      'Strategic leadership across African markets',
    ],
    bio: 'Brings over 20 years of experience in commodities trading and strategic leadership, with a strong foundation in actuarial science and risk management.',
  },
  {
    name: 'Chief Financial Officer',
    role: 'CFO',
    image: CFOImage,
    highlights: [
      'Corporate finance expertise',
      'Listed company experience',
      'Capital allocation and treasury management',
    ],
    bio: 'Seasoned financial executive with a track record in listed company environments, specializing in corporate finance, treasury, and capital allocation.',
  },
  {
    name: 'Operations Director',
    role: 'Operations Director',
    image: OperationsDirectorImage,
    highlights: [
      'Mining operations and safety',
      'Supply chain optimization',
      'On-site project management',
    ],
    bio: 'Veteran operations leader with deep expertise in mining site management, safety protocols, and supply chain efficiency across African operations.',
  },
];

function LeadershipSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="border-b border-slate-800 bg-slate-900 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-kalakaGold">
            LEADERSHIP
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Experienced Management Team
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-700 bg-slate-950 p-6"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-64 w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-100">{leader.name}</h3>
              <p className="text-sm font-semibold text-kalakaGold">{leader.role}</p>
              <ul className="mt-4 space-y-2">
                {leader.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300">
                    <span className="mr-2 text-kalakaGold">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              {expandedIndex === index && (
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{leader.bio}</p>
              )}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="mt-4 text-sm font-semibold text-kalakaGold hover:text-kalakaGold/80 transition"
              >
                {expandedIndex === index ? 'Show less' : 'Read more'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
