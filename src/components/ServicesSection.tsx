import { motion } from 'motion/react';
import { SERVICES } from '../data';
import ServiceCard from './ServiceCard';
import { Sparkles, Cpu } from 'lucide-react';

interface ServicesSectionProps {
  onBookClick: (serviceTitle: string) => void;
}

export default function ServicesSection({ onBookClick }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/70">
      {/* Visual laser glowing separators */}
      <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent pointer-events-none" />

      {/* Decorative cybernetic backdrop element */}
      <div className="absolute top-1/2 left-10 w-[280px] h-[280px] bg-cyan-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00f0ff]/15 border border-[#00f0ff]/20 rounded-full">
            <Cpu className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">HVAC TECHNICAL CATALOGUE</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-[1.15]">
            Engineered Air & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-[#00f0ff]">Technical Solutions</span>
          </h2>

          <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
            From precision household installations to high-capacity heavy industrial ventilation ductworks. Explore our specialized, fully certified services customized for extreme gulf environments.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {SERVICES.map((service, idx) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onBookClick={onBookClick} 
            />
          ))}
        </div>

        {/* Bottom micro-metrics bar */}
        <div className="mt-12 md:mt-16 flex flex-wrap gap-4 items-center justify-between p-4 rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-mono text-slate-400">Average response time is currently under 15 minutes in Dubai Marina, Jumeirah, & Downtown</span>
          </div>
          <div className="text-xs font-mono text-slate-500">
            SHAHIN ALAM CO. LICENSE NO. 1024340
          </div>
        </div>

      </div>
    </section>
  );
}
