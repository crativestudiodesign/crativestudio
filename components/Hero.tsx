import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const marqueeText = "STRATEGY • IDENTITY • STORYTELLING • PACKAGING • ";

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-[-10%] w-[50vh] h-[50vh] bg-accent rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vh] h-[60vh] bg-primary rounded-full blur-[140px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-8">
            <h1 className="font-syne font-extrabold text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter text-dark mb-8">
              WE TURN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-800">BUSINESSES</span> <br />
              INTO <span className="relative inline-block">
                BRANDS.
                <svg className="absolute w-full h-4 bottom-2 left-0 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#1cff1c" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start gap-8 mb-4">
            <p className="font-jakarta text-lg md:text-xl font-medium text-gray-700 leading-relaxed border-l-4 border-primary pl-6">
              Crative Studio is a strategic branding agency building identities that speak louder.
            </p>
            
            <button className="relative group bg-dark text-white border-2 border-dark px-8 py-4 font-syne font-bold text-lg shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-active transition-all duration-200 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                START A PROJECT
                <ArrowDownRight className="group-hover:rotate-[-45deg] transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Seamless Marquee */}
      <div className="absolute bottom-[9px] left-0 w-full overflow-hidden whitespace-nowrap border-y-2 border-dark bg-accent py-4 rotate-1 scale-110">
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
          <div className="font-syne font-semibold text-3xl md:text-4xl text-dark uppercase tracking-tight py-1">
            {marqueeText.repeat(8)}
          </div>
          <div className="font-syne font-semibold text-3xl md:text-4xl text-dark uppercase tracking-tight py-1">
            {marqueeText.repeat(8)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;