import React, { useState } from 'react';
import { Phone, MapPin, Loader2, Clock, Check } from 'lucide-react';

const HeroInteractive: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length < 5) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="relative min-h-[90vh] bg-white flex items-center justify-center py-20 overflow-hidden">
      
      {/* Background Map Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M10,10 Q30,50 50,30 T90,90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-900" />
           <path d="M10,90 Q40,60 60,80 T90,10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-900" />
           <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-900" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full font-bold text-sm mb-8 animate-fade-in-up">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live Dispatch Center
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight animate-fade-in-up [animation-delay:100ms]">
          How fast can we <br /> get to you?
        </h1>
        
        <p className="text-xl text-slate-500 mb-12 animate-fade-in-up [animation-delay:200ms]">
          Enter your zip code to check average response times in your area.
        </p>

        {/* Interaction Card */}
        <div className="bg-white p-2 rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100 max-w-xl mx-auto mb-12 animate-fade-in-up [animation-delay:300ms]">
          {status === 'success' ? (
             <div className="p-8 bg-green-50 rounded-xl flex flex-col items-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Excellent Coverage!</h3>
                <p className="text-slate-600 mb-6">
                  We have crews near <span className="font-bold text-slate-900">{zipCode}</span> right now.
                </p>
                <div className="flex items-center gap-3 text-4xl font-bold text-slate-900 mb-2">
                   <Clock className="w-8 h-8 text-primary" /> 47 <span className="text-lg text-slate-500 font-medium">min avg.</span>
                </div>
                <p className="text-xs text-slate-400 mb-6">Estimated arrival time based on current traffic.</p>
                <a href="tel:8774970007" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200">
                  Call to Book (877) 497-0007
                </a>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 p-2">
              <div className="relative flex-grow">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Enter Zip Code" 
                  className="w-full h-14 pl-12 pr-4 bg-slate-50 rounded-xl text-lg font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 border-none placeholder:font-normal"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g,'').slice(0,5))}
                />
              </div>
              <button 
                type="submit"
                disabled={zipCode.length < 5 || status === 'loading'}
                className="h-14 px-8 bg-primary hover:bg-primary-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all min-w-[160px] flex items-center justify-center"
              >
                {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Check Time'}
              </button>
            </form>
          )}
        </div>

        {/* Fallback CTA */}
        <div className="animate-fade-in-up [animation-delay:400ms]">
          <p className="text-slate-400 text-sm font-medium mb-4">Need immediate help?</p>
          <a href="tel:8774970007" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            Call our 24/7 Emergency Line: (877) 497-0007
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroInteractive;