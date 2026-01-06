import React from 'react';
import { Phone, Droplets, Trophy, Users, Clock, Zap } from 'lucide-react';

const HeroCentered: React.FC = () => {
  return (
    <section className="relative bg-white pt-24 pb-40 overflow-hidden">
      
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-[100%] blur-3xl opacity-60"></div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[80px] animate-blob"></div>
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-cyan-100/40 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
        
        {/* Top Floating Tag */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 font-semibold text-sm mb-8 hover:border-primary/30 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available Now • 60-Minute Response
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="animate-fade-in-up [animation-delay:100ms] text-6xl md:text-8xl font-bold text-slate-900 tracking-tight mb-8 leading-[0.95] max-w-5xl mx-auto">
          We bring your home <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600">
            back to life.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up [animation-delay:200ms] text-xl md:text-2xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
          Top-rated water damage restoration in Northern Virginia. 
          Expert care, hospital-grade sanitization, and 24/7 support.
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up [animation-delay:300ms] flex flex-col sm:flex-row gap-5 w-full justify-center mb-20">
          <button className="group relative px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-2xl shadow-blue-900/20 transition-transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              <span>Call (877) 497-0007</span>
            </div>
          </button>
          
          <button className="px-8 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
             View Service Areas
          </button>
        </div>

        {/* Floating Glass Stats Bar */}
        <div className="animate-fade-in-up [animation-delay:400ms] w-full max-w-6xl">
          <div className="glass-panel rounded-[32px] p-8 md:p-10 shadow-glass">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              
              <div className="flex flex-col items-center justify-center group cursor-default">
                <span className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">20+</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Exp.</span>
              </div>

              <div className="flex flex-col items-center justify-center group cursor-default">
                 <span className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">5k+</span>
                 <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Jobs Done</span>
              </div>

              <div className="flex flex-col items-center justify-center group cursor-default">
                 <div className="flex items-center gap-2 mb-2">
                   <span className="text-4xl lg:text-5xl font-bold text-slate-900 group-hover:text-primary transition-colors">4.9</span>
                   <div className="flex flex-col gap-0.5">
                     <div className="flex text-yellow-400 text-xs"><Zap className="w-3 h-3 fill-current"/><Zap className="w-3 h-3 fill-current"/><Zap className="w-3 h-3 fill-current"/></div>
                   </div>
                 </div>
                 <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Google Rating</span>
              </div>

              <div className="flex flex-col items-center justify-center group cursor-default">
                <div className="flex items-center gap-2 mb-2">
                   <Clock className="w-8 h-8 text-primary" />
                   <span className="text-4xl lg:text-5xl font-bold text-slate-900">60<span className="text-2xl text-slate-400">m</span></span>
                </div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Response</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroCentered;