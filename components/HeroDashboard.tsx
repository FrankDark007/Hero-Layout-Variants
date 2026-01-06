import React from 'react';
import { Phone, Map, Radio, Zap, AlertCircle, CheckCircle2, Navigation } from 'lucide-react';

const HeroDashboard: React.FC = () => {
  return (
    <section className="bg-slate-950 min-h-screen relative overflow-hidden flex items-center py-20 font-mono">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center mb-12 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
             <span className="text-emerald-500 text-sm tracking-widest uppercase font-bold">System Online • Monitoring</span>
          </div>
          <div className="hidden md:block text-slate-500 text-xs">ID: FD-NOVA-001</div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Text Content (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded text-blue-400 text-xs mb-6 w-fit">
               EMERGENCY RESPONSE UNIT
             </div>
             
             <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 leading-tight">
               Precision Water <br /> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Restoration Protocol.</span>
             </h1>
             
             <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed font-sans">
               Advanced moisture detection and rapid deployment teams standing by. We mitigate loss through speed and technology.
             </p>

             <div className="flex flex-col sm:flex-row gap-5">
               <button className="relative group overflow-hidden bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-3 hover:bg-primary-dark transition-all">
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <Phone className="w-5 h-5" />
                  Initiate Response (877) 497-0007
               </button>
               <button className="border border-slate-700 text-slate-300 px-8 py-4 rounded font-bold uppercase tracking-wider text-sm hover:bg-slate-800 transition-all">
                  View Service Map
               </button>
             </div>
          </div>

          {/* Right Dashboard Grid (Right 5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Widget 1: Response Time */}
            <div className="col-span-2 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-slate-400 text-xs uppercase font-bold">Avg. Response Time</span>
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-sans font-bold text-white">47</span>
                <span className="text-slate-400 font-sans mb-1">min</span>
              </div>
              <div className="mt-4 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-[78%] relative">
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Widget 2: Active Crews Map */}
            <div className="col-span-2 md:col-span-1 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition-colors">
               <div className="flex justify-between items-start mb-4">
                <span className="text-slate-400 text-xs uppercase font-bold">Active Units</span>
                <Navigation className="w-4 h-4 text-blue-400" />
              </div>
              <div className="relative h-24 w-full bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden">
                 {/* Fake Map Dots */}
                 <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                 <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
                 
                 <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-700"></div>
                 <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full delay-700"></div>

                 <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
                 <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full delay-300"></div>
              </div>
              <div className="mt-2 text-xs text-blue-300">3 Crews Deployed</div>
            </div>

            {/* Widget 3: Status List */}
            <div className="col-span-2 md:col-span-1 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-slate-400 text-xs uppercase font-bold">Coverage</span>
                <Radio className="w-4 h-4 text-green-400" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Fairfax</span>
                  <div className="flex items-center gap-1 text-emerald-500"><CheckCircle2 className="w-3 h-3"/> Ready</div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Arlington</span>
                  <div className="flex items-center gap-1 text-emerald-500"><CheckCircle2 className="w-3 h-3"/> Ready</div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Loudoun</span>
                  <div className="flex items-center gap-1 text-yellow-500"><AlertCircle className="w-3 h-3"/> Busy</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDashboard;