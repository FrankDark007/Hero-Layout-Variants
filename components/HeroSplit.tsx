import React from 'react';
import { Phone, CheckCircle, Shield, Clock, ArrowRight, Star } from 'lucide-react';

const HeroSplit: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
        {/* Dot Pattern */}
        <div className="absolute top-20 right-1/2 w-64 h-64 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm transition-transform hover:scale-105 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-600">60-Min Rapid Response</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              We Restore <br />
              <span className="relative whitespace-nowrap text-primary">
                <svg className="absolute -bottom-2 w-full h-3 text-blue-200 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" />
                </svg>
                <span className="relative">Safety & Calm</span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg font-medium">
              Northern Virginia's premier water damage experts. We handle the mess, the mold, and the insurance claim—so you can get back to normal, faster.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-2">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                       <img src={`https://i.pravatar.cc/150?img=${10 + i}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <div>
                 <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                 </div>
                 <p className="text-sm font-semibold text-slate-700">Trusted by 5,000+ homeowners</p>
               </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-white shadow-glow transition-all hover:bg-primary-dark hover:shadow-lg hover:-translate-y-1">
                <div className="relative flex items-center justify-center gap-3 font-bold text-lg">
                  <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <span>(877) 497-0007</span>
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
              </button>
              
              <button className="group flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-slate-900 shadow-sm border border-slate-200 transition-all hover:bg-slate-50 hover:border-slate-300">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up [animation-delay:200ms]">
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full max-w-md mx-auto">
               
               {/* Background Shapes */}
               <div className="absolute top-10 -right-10 w-full h-full border border-slate-200 rounded-[40px] z-0"></div>
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full blur-2xl z-0"></div>
               
               {/* Main Image */}
               <div className="relative h-full rounded-[40px] overflow-hidden shadow-2xl z-10 transform transition-transform hover:scale-[1.02] duration-500">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=1974&auto=format&fit=crop" 
                   alt="Professional Restoration" 
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Floating Glass Cards */}
                 <div className="absolute bottom-8 left-8 right-8 z-30 space-y-3">
                   <div className="glass-panel p-4 rounded-2xl flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">Arrival Time</p>
                        <p className="text-sm font-semibold text-slate-600">Arriving in <span className="text-green-600 font-bold">45 mins</span></p>
                      </div>
                   </div>
                 </div>
               </div>

               {/* Decorative Badge */}
               <div className="absolute -top-6 -right-6 z-40 bg-white p-4 rounded-2xl shadow-xl animate-float">
                  <div className="flex flex-col items-center">
                    <Shield className="w-8 h-8 text-primary mb-1" />
                    <span className="text-[10px] font-bold uppercase text-slate-400">Certified</span>
                    <span className="font-bold text-slate-900">IICRC</span>
                  </div>
               </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSplit;