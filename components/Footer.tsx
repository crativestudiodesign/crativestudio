import React, { useState } from 'react';
import { ArrowUpRight, Send, Instagram, Twitter, Linkedin, Loader2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Persiapan Data
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // URL Google Script (GANTI TEXT DI BAWAH INI DENGAN URL DARI LANGKAH 1)
    const scriptURL = "https://script.google.com/macros/s/AKfycbyz3am0gnGsyF0dkjf_0n1WNudLd80VAddoYLANMtzWYGqcG0IUvyCZ4Z8yQpWnVIreww/exec";

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Penting agar tidak error CORS di browser
      });

      // Jika berhasil
      alert('Message sent! Our team will reach out soon.');
      setFormData({ name: '', email: '', project: '' });
    } catch (error) {
      // Jika gagal
      console.error('Error!', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-dark text-white min-h-screen flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none select-none">
        <h1 className="font-syne font-extrabold text-[20vw] whitespace-nowrap leading-none tracking-tighter">
          CRATIVE STUDIO CRATIVE STUDIO
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 py-12 flex-grow flex flex-col justify-center">
        <div className="mb-12">
          <h2 className="font-syne font-extrabold text-5xl md:text-8xl lg:text-[5rem] leading-[1] tracking-tighter mb-8 max-w-5xl">
            READY TO TAKE <br />
            YOUR BRAND <span className="text-accent italic">SERIOUSLY?</span> <br />
            SO ARE WE.
          </h2>
          
          <a 
            href="mailto:hello@crativestudiodesign.com" 
            className="group inline-block font-syne font-bold text-2xl md:text-5xl lg:text-6xl text-white hover:text-accent transition-colors duration-300 break-all"
          >
            hello@crativestudiodesign.com
            <div className="h-1 w-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-2"></div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Inquiry Form Bento Box */}
          <div className="bg-white p-8 border-2 border-dark shadow-neo rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
            <h3 className="font-syne font-bold text-dark text-2xl mb-6 uppercase tracking-tight">Send an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name" // WAJIB ADA
                  placeholder="NAME"
                  required
                  className="w-full bg-light border-2 border-dark p-4 font-jakarta font-bold text-dark placeholder:text-gray-400 focus:outline-none focus:bg-white transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email" // WAJIB ADA
                  placeholder="EMAIL"
                  required
                  className="w-full bg-light border-2 border-dark p-4 font-jakarta font-bold text-dark placeholder:text-gray-400 focus:outline-none focus:bg-white transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <textarea 
                  name="project" // WAJIB ADA
                  placeholder="TELL US ABOUT THE PROJECT"
                  rows={3}
                  className="w-full bg-light border-2 border-dark p-4 font-jakarta font-bold text-dark placeholder:text-gray-400 focus:outline-none focus:bg-white transition-colors resize-none"
                  value={formData.project}
                  onChange={(e) => setFormData({...formData, project: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-syne font-extrabold py-4 px-8 border-2 border-dark shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>SENDING... <Loader2 className="animate-spin" size={20}/></>
                ) : (
                  <>SUBMIT PROJECT <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </div>

          {/* Links & Info Bento Box */}
          <div className="flex flex-col gap-8 h-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent p-6 border-2 border-dark shadow-neo rotate-[1deg] hover:rotate-0 transition-transform duration-500">
                <h4 className="font-syne font-bold text-dark text-sm uppercase mb-4 tracking-widest">Socials</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Instagram />, label: 'IG' },
                    { icon: <Twitter />, label: 'TW' },
                    { icon: <Linkedin />, label: 'LI' },
                  ].map((social, i) => (
                    <a key={i} href="#" className="text-dark hover:text-primary transition-colors flex items-center gap-1 font-jakarta font-bold text-xs">
                      {social.icon} {social.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-primary p-6 border-2 border-dark shadow-neo -rotate-[1deg] hover:rotate-0 transition-transform duration-500">
                <h4 className="font-syne font-bold text-white text-sm uppercase mb-4 tracking-widest">Office</h4>
                <p className="font-jakarta font-bold text-white/90 text-sm leading-tight">
                  123 Design Blvd,<br />
                  Creative District,<br />
                  Cloud City 90210
                </p>
              </div>
            </div>

            <div className="bg-light p-8 border-2 border-dark shadow-neo flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                {/* LOGO */}
                <div className="flex flex-col">
                  <div className="h-12 w-48 bg-white border-2 border-dark shadow-neo-sm flex items-center justify-center mb-2 overflow-hidden px-2">
                     <img 
                        src="/crative-logo.svg" 
                        alt="Crative Studio Logo" 
                        className="w-full h-full object-contain" 
                      />
                  </div>
                </div>
                <ArrowUpRight className="text-dark w-8 h-8" />
              </div>
              <p className="mt-8 font-jakarta text-xs text-gray-500 font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} Crative Studio. All rights reserved. <br />
                Built for the bold, by the bold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
