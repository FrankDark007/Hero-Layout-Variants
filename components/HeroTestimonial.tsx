import React from 'react';
import { Phone, Star, Quote, ArrowRight } from 'lucide-react';

const HeroTestimonial: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="flex flex-col items-center text-center">
          
          {/* Main Quote Card */}
          <div className="relative max-w-4xl">
            <Quote className="absolute -top-8 -left-8 md:-left-16 w-16 h-16 md:w-24 md:h-24 text-blue-100 fill-current -z-10 transform -rotate-12" />
            
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-10 italic">
              "They arrived in 45 minutes and saved our hardwood floors. The team was professional, clean, and incredibly fast."
            </h1>

            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" 
                  alt="Sarah J." 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">Sarah Jenkins</div>
                <div className="text-slate-500 text-sm">Homeowner in Alexandria, VA</div>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mt-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-slate-200 max-w-sm mb-12"></div>

          {/* Sub-headline & CTA */}
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-xl font-medium text-slate-600">
              Join 5,000+ happy neighbors who chose Flood Doctor.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                Call (877) 497-0007
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
                Read 847 Reviews
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* "As Seen On" Bar */}
          <div className="mt-20 pt-10 border-t border-slate-200 w-full">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-bold">Trusted & Verified By</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simple Text Placeholders for Logos to avoid external assets */}
              <span className="text-xl font-black text-slate-800">Google</span>
              <span className="text-xl font-black text-slate-800">Yelp</span>
              <span className="text-xl font-black text-slate-800 font-serif">Angi</span>
              <span className="text-xl font-black text-slate-800">Thumbtack</span>
              <span className="text-xl font-black text-slate-800">BBB</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroTestimonial;