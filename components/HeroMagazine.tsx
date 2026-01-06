import React from 'react';
import { ArrowRight, Phone, Award, Shield } from 'lucide-react';

const HeroMagazine: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden flex flex-col justify-center py-20">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top Meta Data */}
        <div className="flex justify-between items-center mb-12 border-b border-black pb-4">
          <span className="font-bold text-sm tracking-[0.2em] uppercase">Est. 2004</span>
          <span className="font-bold text-sm tracking-[0.2em] uppercase text-primary">Northern Virginia Edition</span>
          <span className="font-bold text-sm tracking-[0.2em] uppercase">Emergency Issue</span>
        </div>

        {/* Massive Typography */}
        <div className="relative text-center">
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-slate-900 uppercase mix-blend-multiply opacity-90">
            Water <br />
            <span className="font-serif font-light italic text-slate-400 normal-case tracking-normal">Damage</span> <br />
            Experts
          </h1>

          {/* Floating Thumbnails */}
          <div className="absolute top-[10%] left-[10%] w-32 md:w-48 aspect-[3/4] hidden lg:block transform -rotate-6 transition-transform hover:rotate-0 hover:z-20 hover:scale-110 duration-500 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover border-4 border-white"
              alt="Water texture" 
            />
          </div>

          <div className="absolute bottom-[20%] right-[10%] w-40 md:w-56 aspect-square hidden lg:block transform rotate-12 transition-transform hover:rotate-0 hover:z-20 hover:scale-110 duration-500 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover border-4 border-white rounded-full"
              alt="Restoration worker" 
            />
          </div>

          {/* Center Overlay Content */}
          <div className="relative z-10 mt-12 max-w-xl mx-auto backdrop-blur-sm bg-white/30 p-6 rounded-2xl border border-white/40">
            <p className="text-xl md:text-2xl font-serif italic text-slate-800 mb-6">
              "When disaster strikes, we don't just restore your home. We restore your peace of mind."
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <a href="tel:8774970007" className="inline-flex items-center gap-2 text-primary hover:text-slate-900 font-bold text-lg tracking-wide uppercase transition-colors group">
                Call (877) 497-0007
                <span className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></span>
              </a>
              
              <div className="flex gap-3 mt-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  <Award className="w-3 h-3" /> IICRC Certified
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  <Shield className="w-3 h-3" /> Licensed
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 grid grid-cols-3 gap-4 text-center border-t border-black pt-8">
           <div>
             <span className="block text-3xl font-black">60m</span>
             <span className="text-xs uppercase tracking-widest text-slate-500">Response</span>
           </div>
           <div className="border-x border-slate-200">
             <span className="block text-3xl font-black">5k+</span>
             <span className="text-xs uppercase tracking-widest text-slate-500">Jobs Done</span>
           </div>
           <div>
             <span className="block text-3xl font-black">24/7</span>
             <span className="text-xs uppercase tracking-widest text-slate-500">Service</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HeroMagazine;