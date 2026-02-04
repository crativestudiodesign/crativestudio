import React from 'react';
import { Search, PenTool, Layout, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Strategy & Research',
    description: 'We dive deep into your market, competitors, and soul to find the unique angle that sets you apart.',
    icon: <Search className="w-8 h-8" />,
    bgColor: 'bg-white',
    textColor: 'text-dark',
    borderColor: 'border-dark'
  },
  {
    number: '02',
    title: 'Define',
    subtitle: 'Voice & Identity',
    description: 'Building the verbal and visual language. We craft a personality that resonates and a system that scales.',
    icon: <PenTool className="w-8 h-8" />,
    bgColor: 'bg-accent',
    textColor: 'text-dark',
    borderColor: 'border-dark'
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Collateral & Visuals',
    description: 'Bringing the brand to life across every touchpoint, from digital interfaces to physical packaging.',
    icon: <Layout className="w-8 h-8" />,
    bgColor: 'bg-primary',
    textColor: 'text-white',
    borderColor: 'border-dark'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-5xl">
          <h2 className="font-syne font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-dark">
            We don't just draw logos. <br />
            <span className="text-primary italic">We define who you are.</span>
          </h2>
        </div>
        <div className="hidden md:block pb-4">
          <div className="w-20 h-20 border-2 border-dark rounded-full flex items-center justify-center animate-bounce">
            <ArrowRight className="rotate-90 w-10 h-10 text-primary" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`group relative ${step.bgColor} ${step.textColor} border-[3px] ${step.borderColor} p-8 shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-[380px]`}
          >
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="font-syne font-extrabold text-6xl opacity-20 tracking-tighter">
                  {step.number}
                </span>
                <div className={`p-4 border-2 border-dark bg-white text-dark group-hover:scale-110 transition-transform duration-500 shadow-neo-sm`}>
                  {step.icon}
                </div>
              </div>
              <h3 className="font-syne font-bold text-3xl mb-1">{step.title}</h3>
              <p className={`font-jakarta font-bold text-sm uppercase tracking-widest mb-4 ${index === 2 ? 'text-accent' : 'text-primary'}`}>
                {step.subtitle}
              </p>
            </div>
            
            <p className="font-jakarta text-lg leading-snug opacity-90">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;