import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import ServiceCard from './ServiceCard';
import { Sparkles, Cpu, Filter } from 'lucide-react';

interface ServicesSectionProps {
  onBookClick: (serviceTitle: string) => void;
}

export default function ServicesSection({ onBookClick }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hvac-pools' | 'plumbing-masonry' | 'interiors-finishes'>('all');

  const filteredServices = SERVICES.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'hvac-pools') {
      return service.id === 'hvac-filtration' || service.id === 'swimming-pools';
    }
    if (activeFilter === 'plumbing-masonry') {
      return service.id === 'sanitary-plumbing' || service.id === 'plaster-works' || service.id === 'tiling-works';
    }
    if (activeFilter === 'interiors-finishes') {
      return service.id === 'carpentry-flooring' || service.id === 'painting-contracting' || service.id === 'false-ceiling' || service.id === 'wallpaper-fixing';
    }
    return true;
  });

  const filterTabs = [
    { id: 'all', label: 'All Licensed Works' },
    { id: 'hvac-pools', label: 'HVAC & Pools' },
    { id: 'plumbing-masonry', label: 'Plumbing & Masonry' },
    { id: 'interiors-finishes', label: 'Interiors & Decor' }
  ] as const;

  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/70">
      {/* Visual laser glowing separators */}
      <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent pointer-events-none" />

      {/* Decorative cybernetic backdrop element */}
      <div className="absolute top-1/2 left-10 w-[280px] h-[280px] bg-cyan-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00f0ff]/15 border border-[#00f0ff]/20 rounded-full">
            <Cpu className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">APPROVED TRADE ACTIVITIES</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-[1.15]">
            Licensed Technical & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-[#00f0ff]">Maintenance Services</span>
          </h2>

          <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
            Registered and certified by the Dubai Department of Economy & Tourism (DET). We deliver professional fit-out, MEP, HVAC and masonry solutions across the UAE.
          </p>
        </div>

        {/* Dynamic Category Filtering Bar */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/60 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            {filterTabs.map(tab => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-display font-medium tracking-wide transition-all duration-300 ${
                    isActive ? 'text-[#070e1e] font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-cyan-400 rounded-xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ServiceCard 
                  service={service} 
                  onBookClick={onBookClick} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom micro-metrics bar */}
        <div className="mt-12 md:mt-16 flex flex-wrap gap-4 items-center justify-between p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-mono text-slate-400">Our emergency crews serve all of Dubai, including Deira, Downtown, Jumeirah, and Marina.</span>
          </div>
          <div className="text-xs font-mono text-slate-400 font-bold tracking-wider">
            SHAHIN ALAM TECHNICAL SERVICES L.L.C • MAIN LICENSE NO. 1283230
          </div>
        </div>

      </div>
    </section>
  );
}
