import React from 'react';
import { Target, Fingerprint, MessageSquare, Box } from 'lucide-react';

const services = [
  {
    title: 'Strategy',
    icon: <Target className="w-8 h-8" />,
    items: ['Brand Audit', 'Competitor Research', 'Audience Persona'],
    bgColor: 'bg-primary',
    textColor: 'text-white',
    accentColor: 'text-accent'
  },
  {
    title: 'Identity',
    icon: <Fingerprint className="w-8 h-8" />,
    items: ['Logo Design', 'Typography', 'Color Systems'],
    bgColor: 'bg-accent',
    textColor: 'text-dark',
    accentColor: 'text-primary'
  },
  {
    title: 'Voice',
    icon: <MessageSquare className="w-8 h-8" />,
    items: ['Naming', 'Tone of Voice', 'Storytelling'],
    bgColor: 'bg-light',
    textColor: 'text-dark',
    accentColor: 'text-primary'
  },
  {
    title: 'Collateral',
    icon: <Box className="w-8 h-8" />,
    items: ['Packaging', 'Pitch Decks', 'Merch Design'],
    bgColor: 'bg-dark',
    textColor: 'text-white',
    accentColor: 'text-accent'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-syne font-extrabold text-6xl md:text-8xl tracking-tighter text-dark uppercase leading-[0.8]">
          Our <br />
          <span className="text-primary italic">Expertise</span>
        </h2>
        <p className="font-jakarta font-bold text-gray-500 uppercase tracking-widest mt-6 border-l-4 border-accent pl-4">
          The Four Pillars of Modern Branding
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`group p-8 border-[3px] border-dark shadow-neo hover:shadow-neo-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-[420px] ${service.bgColor} ${service.textColor}`}
          >
            <div>
              <div className={`p-4 border-2 border-dark inline-block mb-8 bg-white text-dark shadow-neo-sm group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="font-syne font-extrabold text-xl md:text-2xl mb-6 tracking-tight uppercase">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-accent' : 'bg-primary'}`} />
                    <span className="font-jakarta font-bold text-lg opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 flex justify-end">
              <span className={`font-syne font-bold text-xs uppercase tracking-tighter px-3 py-1 border-2 border-dark ${index % 2 === 0 ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
                Pillar 0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;