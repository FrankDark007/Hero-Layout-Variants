import React from 'react';
import { Phone, ChevronRight, Activity, MapPin, ArrowUpRight } from 'lucide-react';

const HeroVideo: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-slate-950">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454694220579-9d6672b1283d?q=80&w=2070&auto=format&fit=crop" 
          alt="Water background" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full h-full flex flex-col justify-center">
        
        <div className="max-w-4xl pt-20">
          
          {/* HUD Element */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Emergency Crews Active</span>
            <span className="w-px h-3 bg-slate-700 mx-1"></span>
            <span className="text-slate-400">Avg Response: 42m</span>
          </div>

          <h1 className="animate-fade-in-up [animation-delay:100ms] text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
            Total Restoration. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
              Zero Compromise.
            </span>
          </h1>
          
          <p className="animate-fade-in-up [animation-delay:200ms] text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
            Northern Virginia's first line of defense against flood and water damage. We deploy hospital-grade technology to restore your property instantly.
          </p>

          <div className="animate-fade-in-up [animation-delay:300ms] flex flex-wrap gap-6 items-center">
            <button className="flex items-center gap-4 bg-white text-slate-950 text-lg font-bold px-8 py-5 rounded-full transition-all hover:bg-slate-200 hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <Phone className="w-6 h-6" />
              <span>(877) 497-0007</span>
            </button>
            <button className="group flex items-center gap-2 text-white/90 font-semibold hover:text-white transition-colors px-6 py-4 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm">
              <span>View Service Areas</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Floating Info */}
        <div className="absolute bottom-12 right-6 hidden lg:flex gap-4 animate-fade-in-up [animation-delay:500ms]">
          <div className="w-64 p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
            <div className="flex items-start justify-between mb-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Status</span>
            </div>
            <p className="text-white font-medium text-sm">Crews deployed in Fairfax, Arlington, and Alexandria.</p>
          </div>
          <div className="w-64 p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
             <div className="flex items-start justify-between mb-2">
              <Activity className="w-5 h-5 text-green-400" />
              <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Capacity</span>
            </div>
            <p className="text-white font-medium text-sm">High availability. Immediate dispatch ready.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroVideo;