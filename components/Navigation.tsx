import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* LOGO */}
        <div className="bg-white border-2 border-dark shadow-neo pointer-events-auto px-4 py-2 rotate-[-1deg] hover:rotate-0 transition-transform duration-300 flex items-center justify-center group cursor-pointer overflow-hidden min-w-[160px] h-[64px]">
          <img 
            src="/crative-logo.svg" 
            alt="Crative Studio Logo" 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
