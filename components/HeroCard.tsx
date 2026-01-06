import React from 'react';
import { Phone, Star, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

const HeroCard: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-slate-100">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#f1f5f9,transparent)] opacity-70"></div>
        <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
        <div className="absolute bottom-10 right-[10%] w-[500px] h-[500px] bg-sky-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        {/* Main Glass Card */}
        <div className="relative bg-white/60 backdrop-blur-2xl rounded-[48px] shadow-2xl shadow-slate-200/50 border border-white/60 p-8 md:p-14 lg:p-20 overflow-hidden">
          
          {/* Decorative noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-8">
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full border border-white/50 shadow-sm backdrop-blur-sm">
                   <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 border border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=33" alt=""/></div>
                      <div className="w-6 h-6 rounded-full bg-slate-200 border border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=47" alt=""/></div>
                      <div className="w-6 h-6 rounded-full bg-slate-200 border border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=12" alt=""/></div>
                   </div>
                   <span className="text-xs font-bold text-slate-600 pl-1">Recommended by your neighbors</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                    Water Damage? <br/>
                    <span className="text-primary relative inline-block">
                        We Fix It Fast.
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 opacity-60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor"/></svg>
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                    Don't let water damage wait. We handle the cleanup, repairs, and insurance claims so you can breathe easy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { icon: Clock, text: "60-Minute Response" },
                        { icon: ShieldCheck, text: "Direct Insurance Billing" },
                        { icon: Star, text: "5-Star Rated Service" },
                        { icon: Check, text: "Licensed & Insured" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold bg-white/50 p-3 rounded-xl border border-white/40">
                            <item.icon className="w-5 h-5 text-primary" />
                            <span className="text-sm">{item.text}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="flex-1 bg-slate-900 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1">
                        <Phone className="w-5 h-5" />
                        <span>(877) 497-0007</span>
                    </button>
                    <button className="flex-1 bg-white text-slate-900 border border-slate-200 font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-colors hover:bg-slate-50">
                        <span>Get Estimate</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Right Graphic - 3D Perspective */}
            <div className="order-1 lg:order-2 perspective-1000 relative">
                <div className="relative transform transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-6 rotate-y-6 rotate-x-3 preserve-3d">
                    
                    {/* Abstract Shapes behind image */}
                    <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-yellow-400 rounded-full opacity-80 blur-xl"></div>
                    <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-primary rounded-full opacity-60 blur-2xl"></div>

                    {/* Main Image Card */}
                    <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border-[4px] border-white bg-white">
                         <img 
                            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                            alt="Restoration Equipment" 
                            className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
                        />
                    </div>

                    {/* Floating Info Cards */}
                    <div className="absolute top-8 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 transform translate-z-20 border border-slate-100">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold">
                            24h
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">Availability</p>
                            <p className="font-bold text-slate-900 text-sm">Always Open</p>
                        </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-slate-900 p-5 rounded-2xl shadow-xl text-white transform translate-z-30 max-w-[200px]">
                         <p className="text-xs text-slate-400 font-medium mb-1">Customer Review</p>
                         <p className="font-bold italic text-sm">"Incredible speed and professionalism. Saved our basement!"</p>
                         <div className="flex gap-1 mt-2 text-yellow-400">
                             <Star className="w-3 h-3 fill-current" />
                             <Star className="w-3 h-3 fill-current" />
                             <Star className="w-3 h-3 fill-current" />
                             <Star className="w-3 h-3 fill-current" />
                             <Star className="w-3 h-3 fill-current" />
                         </div>
                    </div>
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroCard;