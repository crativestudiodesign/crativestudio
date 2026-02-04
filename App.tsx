import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark selection:bg-accent selection:text-dark overflow-x-hidden flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        
        {/* Step-by-step methodology */}
        <Process />

        {/* Highlighted Case Studies */}
        <Portfolio />

        {/* Feature Grid with AI Integration */}
        <BentoGrid />

        {/* Detailed Service Pillars */}
        <Services />
      </main>
      <Footer />
      
      {/* Aesthetic Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}

export default App;