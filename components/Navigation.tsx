import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* LOGO PLACEHOLDER */}
        <div className="bg-white border-2 border-dark shadow-neo pointer-events-auto px-4 py-3 rotate-[-1deg] hover:rotate-0 transition-transform duration-300 flex items-center justify-center group cursor-pointer overflow-hidden min-w-[160px] h-[64px]">
          {/* 
              REPLACE THE DIV BELOW WITH YOUR SVG 
              Example: <svg>...</svg>
          */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-syne font-extrabold text-2xl leading-none text-dark tracking-tighter group-hover:text-primary transition-colors">
              [ YOUR LOGO ]
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;