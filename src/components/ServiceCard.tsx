import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ServiceDetail } from '../types';
import * as LucideIcons from 'lucide-react';
import { ArrowUpRight, Wind, Activity, Layers, Disc3 } from 'lucide-react';

interface ServiceCardProps {
  key?: string;
  service: ServiceDetail;
  onBookClick: (serviceTitle: string) => void;
}

// Map key letters to custom isometric 3D shapes representing heavy equipment
function Isometric3DShape({ iconName, stateIsHovered }: { iconName: string; stateIsHovered: boolean }) {
  // Return rotating 3D HVAC apparatus
  return (
    <div 
      className="relative w-14 h-14"
      style={{ perspective: '300px' }}
    >
      <motion.div
        animate={{
          rotateY: stateIsHovered ? 210 : 30,
          rotateX: stateIsHovered ? -25 : -15,
          rotateZ: stateIsHovered ? 15 : 0,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 rounded-lg flex items-center justify-center border border-slate-700/60 shadow-lg"
          style={{
            transform: 'translateZ(14px)',
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
            boxShadow: stateIsHovered ? '0 0 20px rgba(0, 240, 255, 0.4)' : 'none',
          }}
        >
          {iconName === 'Wrench' && <LucideIcons.Wrench className="w-6 h-6 text-[#00f0ff]" />}
          {iconName === 'ShieldCheck' && <LucideIcons.ShieldCheck className="w-6 h-6 text-[#00f0ff]" />}
          {iconName === 'Cpu' && <LucideIcons.Cpu className="w-6 h-6 text-[#00f0ff]" />}
          {iconName === 'Wind' && <Wind className="w-6 h-6 text-[#00f0ff]" />}
          {iconName === 'Building2' && <LucideIcons.Building2 className="w-6 h-6 text-[#00f0ff]" />}
        </div>

        {/* Dynamic Fan blades spinning deep inside the 3D grid backplate */}
        <div 
          className="absolute inset-0 rounded-lg flex items-center justify-center border border-slate-700/40"
          style={{
            transform: 'rotateY(90deg) translateZ(28px)',
            background: 'rgba(7, 14, 30, 0.9)',
          }}
        >
          <Disc3 className={`w-6 h-6 text-slate-500 ${stateIsHovered ? 'animate-spin' : ''}`} style={{ animationDuration: '1s' }} />
        </div>

        {/* Metallic high gloss top cap face */}
        <div 
          className="absolute inset-0 rounded-lg"
          style={{
            transform: 'rotateX(90deg) translateZ(28px)',
            background: 'linear-gradient(to top, #1e3a8a, #00f0ff)',
            opacity: 0.25
          }}
        />

        {/* Dynamic shadow support */}
        <div 
          className="absolute w-full h-3 bg-cyan-950/40 blur-sm rounded-full -bottom-1"
          style={{ transform: 'rotateX(90deg) translateZ(-20px)' }}
        />
      </motion.div>
    </div>
  );
}

export default function ServiceCard({ service, onBookClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,240,255,0.06)] overflow-hidden group"
    >
      {/* Dynamic glow corner lights */}
      <div 
        className="absolute -top-32 -right-32 w-64 h-64 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00f0ff]/10 transition-all duration-500" 
      />

      <div className="flex flex-col gap-6 text-left relative z-10">
        {/* Header containing interactive 3D shape icon or indicators */}
        <div className="flex justify-between items-center">
          <Isometric3DShape iconName={service.iconName} stateIsHovered={isHovered} />
          
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-mono tracking-widest text-[#00f0ff] uppercase bg-[#00f0ff]/10 px-2.5 py-1 rounded-full border border-[#00f0ff]/10">
              {service.flowRate}
            </span>
            <span className="text-xs font-semibold text-slate-400 mt-1">{service.averagePrice}</span>
          </div>
        </div>

        {/* Card Titles */}
        <div>
          <h3 className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-[#00f0ff] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed mt-2.5 min-h-[64px]">
            {service.description}
          </p>
        </div>

        {/* Key diagnostic benefits */}
        <div className="space-y-2 pt-3 border-t border-slate-800/80">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">TECHNICAL SCOPE</span>
          {service.benefits.map((benefit, bIdx) => (
            <div key={bIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]/70" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Booking CTA trigger buttons */}
      <div className="mt-8 flex items-center justify-between relative z-10 pt-4 border-t border-slate-800/40">
        <button
          onClick={() => onBookClick(service.title)}
          id={`book-${service.id}`}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 group-hover:bg-[#00f0ff] text-slate-200 group-hover:text-[#070e1e] font-display text-xs font-semibold tracking-wide border border-slate-700/60 group-hover:border-transparent transition-all shadow-md active:scale-95 duration-300"
        >
          Book Service
          <motion.span
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        </button>

        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1">
          <Activity className="className w-3 h-3 text-[#00f0ff]" />
          ACTIVE UNIT
        </span>
      </div>
    </motion.div>
  );
}
