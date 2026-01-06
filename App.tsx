import React, { useState } from 'react';
import HeroSplit from './components/HeroSplit';
import HeroCentered from './components/HeroCentered';
import HeroVideo from './components/HeroVideo';
import HeroCard from './components/HeroCard';
import { Eye, Layout } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const variants = [
    { name: 'Split Hero', component: <HeroSplit /> },
    { name: 'Centered Hero', component: <HeroCentered /> },
    { name: 'Video Hero', component: <HeroVideo /> },
    { name: 'Card Hero', component: <HeroCard /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation for Demo Purposes */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Layout className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-slate-900">Flood Doctor Variants</h1>
          </div>
          
          <div className="flex p-1 bg-slate-100 rounded-full overflow-x-auto max-w-full no-scrollbar">
            {variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
            <Eye className="w-4 h-4" />
            <span>Preview Mode</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="w-full">
        {variants[activeTab].component}
      </main>

      {/* Footer for Context */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-center">
        <p className="mb-4">© 2024 Flood Doctor. All rights reserved.</p>
        <p className="text-sm">Northern Virginia's 24/7 Water Damage Experts</p>
      </footer>
    </div>
  );
};

export default App;