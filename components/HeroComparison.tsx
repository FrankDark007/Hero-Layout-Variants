import React from 'react';
import { Phone, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';

const HeroComparison: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      
      {/* Left Side: The Problem */}
      <div className="relative w-full md:w-1/2 min-h-[50vh] md:h-screen bg-slate-900 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=2070&auto=format&fit=crop" 
            alt="Flooded room" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 z-10 p-8 md:p-16 flex flex-col justify-center md:items-end md:text-right">
          <div className="bg-red-500/20 border border-red-500/50 backdrop-blur-md px-4 py-2 rounded-lg inline-flex items-center gap-2 text-red-400 mb-6 w-fit md:ml-auto">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-sm">Critical Damage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Disaster.</h2>
          <p className="text-slate-300 text-lg max-w-md">
            Untreated water damage leads to structural failure and mold growth within 48 hours. The clock is ticking.
          </p>
        </div>
      </div>

      {/* Right Side: The Solution */}
      <div className="relative w-full md:w-1/2 min-h-[50vh] md:h-screen bg-white overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-blue-50/50"></div>
        
        <div className="relative z-10 p-8 md:p-16 w-full">
           <div className="bg-green-100 border border-green-200 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-green-700 mb-6">
            <CheckCircle className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-sm">Restored Completely</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Solution.</h2>
          
          <ul className="space-y-4 mb-10">
            {['Immediate Water Extraction', 'Hospital-Grade Sanitization', 'Insurance Claims Handled', 'Complete Structural Drying'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ArrowRight className="w-4 h-4" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
             <button className="bg-primary hover:bg-primary-dark text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-200 transition-all hover:scale-105 flex items-center justify-center gap-3">
               <Phone className="w-5 h-5" />
               Fix It Now
             </button>
             <div className="flex flex-col justify-center">
               <span className="text-sm font-bold text-slate-900">Call (877) 497-0007</span>
               <span className="text-xs text-slate-500">24/7 Live Operator</span>
             </div>
          </div>
        </div>
      </div>

      {/* Center Divider/Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-slate-100">
           <ArrowRight className="w-8 h-8 text-slate-300" />
        </div>
      </div>

    </section>
  );
};

export default HeroComparison;