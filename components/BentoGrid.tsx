import React from 'react';
import { ArrowUpRight, Monitor, PenTool, Target, Zap, MessageSquare } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* Large Feature - Strategy */}
        <div className="md:col-span-2 row-span-2 bg-white border-2 border-dark shadow-neo p-8 flex flex-col justify-between group hover:shadow-neo-hover transition-shadow duration-300">
          <div>
            <div className="w-12 h-12 bg-primary flex items-center justify-center border-2 border-dark mb-6 group-hover:bg-accent transition-colors">
              <Target className="text-white group-hover:text-dark" size={24} />
            </div>
            <h3 className="font-syne font-bold text-4xl mb-4">Strategic Core</h3>
            <p className="font-jakarta text-gray-600 text-lg">
              We dig deep into your "why" before we draw a single line. Our strategy workshops define your market position, voice, and long-term vision.
            </p>
          </div>
          <div className="mt-8 flex gap-2 flex-wrap">
            {['Brand Audit', 'Positioning', 'Voice & Tone', 'Market Analysis'].map(tag => (
              <span key={tag} className="bg-light border border-dark px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-dark hover:text-white transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* New Non-AI Feature - Brand Voice */}
        <div className="md:col-span-1 row-span-2 bg-accent border-2 border-dark shadow-neo p-8 flex flex-col justify-between group hover:shadow-neo-hover transition-all">
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center border-2 border-dark mb-6">
                <MessageSquare className="text-dark" size={24} />
              </div>
              <h3 className="text-3xl font-syne font-bold text-dark mb-4 uppercase leading-none">Brand Voice</h3>
              <p className="text-dark/70 text-sm font-jakarta font-bold">We craft a verbal identity as distinct as your visual one. From naming to full copywriting systems.</p>
            </div>
            <div className="flex-grow flex items-end">
              <div className="w-full bg-dark text-white p-4 border-2 border-dark shadow-neo-sm transform rotate-[-2deg]">
                <p className="font-syne font-bold italic">"Speak with authority."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medium Feature - Visual Identity */}
        <div className="bg-light border-2 border-dark shadow-neo p-6 flex flex-col justify-between group hover:-translate-y-1 transition-transform">
          <PenTool className="mb-4 text-primary" size={32} />
          <div>
            <h3 className="font-syne font-bold text-2xl mb-2">Visual Identity</h3>
            <p className="font-jakarta text-sm font-medium">Logos, colors, and systems that stick in the mind.</p>
          </div>
          <ArrowUpRight className="self-end opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Medium Feature - Web */}
        <div className="bg-primary text-white border-2 border-dark shadow-neo p-6 flex flex-col justify-between group hover:-translate-y-1 transition-transform">
          <Monitor className="mb-4" size={32} />
          <div>
            <h3 className="font-syne font-bold text-2xl mb-2">Web Experience</h3>
            <p className="font-jakarta text-sm opacity-90">Digital homes that convert visitors into believers.</p>
          </div>
          <ArrowUpRight className="self-end opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Stat/Social Proof */}
        <div className="bg-dark text-white border-2 border-dark shadow-neo p-6 flex flex-col items-center justify-center text-center">
          <h4 className="font-syne font-extrabold text-5xl text-accent mb-2">150+</h4>
          <p className="font-jakarta text-sm uppercase tracking-widest text-gray-400">Brands Launched</p>
        </div>

        {/* Callout */}
        <div className="md:col-span-2 bg-light border-2 border-dark shadow-neo p-8 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors">
          <div>
            <h3 className="font-syne font-bold text-2xl md:text-3xl mb-2">Ready to disrupt?</h3>
            <p className="font-jakarta text-gray-600">Let's build something loud together.</p>
          </div>
          <div className="bg-dark text-white p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
            <Zap className="fill-accent text-accent" size={24} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;