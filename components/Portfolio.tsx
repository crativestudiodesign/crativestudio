import React from 'react';

const projects = [
  {
    id: '01',
    name: 'LUMA',
    industry: 'High-End Skincare',
    problem: 'Lost in the sea of generic apothecary brands with zero shelf presence.',
    strategy: 'We implemented a minimalist architectural system focused on clinical purity. By stripping the noise, we created a visual language that commands premium positioning.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1600',
    accentColor: '#1cff1c',
    textColor: 'text-dark'
  },
  {
    id: '02',
    name: 'VORTEX',
    industry: 'Next-Gen Logistics',
    problem: 'An outdated visual identity failing to communicate modern speed and tech-first reliability.',
    strategy: 'Aerodynamic lines meet high-contrast typography. We built a system optimized for high-speed recognition across global supply chains.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
    accentColor: '#2935F2',
    textColor: 'text-white'
  },
  {
    id: '03',
    name: 'OAK & IRON',
    industry: 'Artisanal Furniture',
    problem: 'Perceived as a local hobby shop rather than a premium international manufacturer.',
    strategy: 'Reclaiming industrial heritage through raw textures and refined serif typography. We positioned the craft as a long-term investment rather than a purchase.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1600',
    accentColor: '#1A1A1A',
    textColor: 'text-white'
  },
  {
    id: '04',
    name: 'PULSE',
    industry: 'Crypto Banking',
    problem: 'Users felt the app was too "techy" and cold, leading to significant trust issues.',
    strategy: 'Financial stability meets digital fluidity. We combined rigid grid systems with approachable soft-touch gradients to create digital authority.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600',
    accentColor: '#1cff1c',
    textColor: 'text-dark'
  },
  {
    id: '05',
    name: 'KAIZEN',
    industry: 'Premium Matcha',
    problem: 'Exceptional product quality hidden behind cluttered, traditional packaging.',
    strategy: 'Zero-point aesthetics. We shifted the focus to the product color itself, using high-gloss finishes and aggressive negative space for modern luxury.',
    image: 'https://images.unsplash.com/photo-1582733315328-84419961ac0c?auto=format&fit=crop&q=80&w=1600',
    accentColor: '#2935F2',
    textColor: 'text-white'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="bg-dark pt-24">
      <div className="px-4 max-w-7xl mx-auto mb-20">
        <h2 className="font-syne font-extrabold text-7xl md:text-9xl tracking-tighter text-white leading-none">
          THE <br />
          <span className="text-accent italic">PORTFOLIO</span>
        </h2>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-0.5 w-24 bg-accent"></div>
          <p className="font-jakarta text-gray-400 font-bold uppercase tracking-[0.3em]">Case Studies of disruption</p>
        </div>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div key={project.id} className="relative min-h-screen w-full flex flex-col group border-b border-white/10">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-60"
              />
            </div>

            <div className="relative z-10 flex-grow flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 py-24 gap-12">
              {/* Project Title and Index */}
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="font-syne font-bold text-2xl text-accent mb-4 block">[{project.id}]</span>
                  <h3 className="font-syne font-extrabold text-8xl md:text-[10rem] text-white leading-none tracking-tighter mb-4">
                    {project.name}
                  </h3>
                  <p className="font-jakarta font-bold text-accent text-xl uppercase tracking-widest">{project.industry}</p>
                </div>
              </div>

              {/* Content Bento Box */}
              <div className="lg:w-1/2 flex flex-col justify-end">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Problem Card */}
                  <div className="bg-white p-8 border-2 border-dark shadow-neo transform rotate-[-1deg]">
                    <h4 className="font-syne font-bold text-primary uppercase text-sm mb-3 tracking-widest">The Problem</h4>
                    <p className="font-jakarta text-dark font-medium leading-tight">
                      {project.problem}
                    </p>
                  </div>
                  
                  {/* Strategy Card */}
                  <div className="bg-accent p-8 border-2 border-dark shadow-neo transform rotate-[1deg]">
                    <h4 className="font-syne font-bold text-dark uppercase text-sm mb-3 tracking-widest">The Strategy</h4>
                    <p className="font-jakarta text-dark font-bold leading-tight">
                      {project.strategy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Reveal Overlay (Neo-Brutalist strip) */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;