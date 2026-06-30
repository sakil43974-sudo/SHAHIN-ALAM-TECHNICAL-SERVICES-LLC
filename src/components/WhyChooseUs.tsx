import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Award, Zap, DollarSign, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { TECHNICAL_METRICS } from '../data';

// Custom component to count up to values smoothly
function CountingMetric({ value, suffix, label, desc, delay }: { key?: React.Key; value: number; suffix: string; label: string; desc: string; delay: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Standard delay for cinematic scroll reveal transition
    const timer = setTimeout(() => {
      const controls = animate(0, value, {
        duration: 2.2,
        ease: 'easeOut',
        onUpdate(value) {
          setDisplayValue(Math.floor(value));
        }
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/40 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex flex-col justify-between text-left shadow-lg relative group"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/5 rounded-bl-full group-hover:bg-[#00f0ff]/10 pointer-events-none transition-colors" />

      <div>
        <h4 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-white flex items-baseline">
          <span>{displayValue}</span>
          <span className="text-[#00f0ff] font-display ml-1">{suffix}</span>
        </h4>
        <h5 className="text-sm font-display font-semibold text-slate-200 mt-2">{label}</h5>
        <div className="w-8 h-[2px] bg-[#00f0ff] mt-3 group-hover:w-16 transition-all duration-300" />
      </div>

      <p className="text-xs text-slate-500 mt-4 leading-relaxed group-hover:text-slate-400 transition-colors">
        {desc}
      </p>
    </motion.div>
  );
}

// Interactive floating 3D luxury badges based on requirements
function Floating3DBadge({ title, desc, iconName }: { title: string; desc: string; iconName: string }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Calculate 3D tilt
    setRotate({ x: -y * 0.12, y: x * 0.12 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '800px' }}
    >
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: 'spring', damping: 20, stiffness: 120 }}
        className="relative rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_15px_35px_rgba(0,240,255,0.08)] flex gap-4 h-full transition-all text-left z-10 w-full overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute top-0 right-0 w-16 h-[2px] bg-gradient-to-r from-transparent to-[#00f0ff]" />

        {/* Floating elements inside to give parallax effect */}
        <div 
          className="p-3 bg-gradient-to-br from-slate-800 to-slate-950 text-[#00f0ff] rounded-xl border border-slate-700/60 shadow-lg"
          style={{ transform: 'translateZ(25px)' }}
        >
          {iconName === 'Expert' && <Award className="w-6 h-6" />}
          {iconName === 'Fast' && <Zap className="w-6 h-6 text-amber-400" />}
          {iconName === 'Affordable' && <DollarSign className="w-6 h-6 text-emerald-400" />}
          {iconName === 'Satisfaction' && <Heart className="w-6 h-6 text-rose-400" />}
        </div>

        <div style={{ transform: 'translateZ(10px)' }}>
          <h4 className="font-display font-bold text-slate-200 text-sm tracking-wide">{title}</h4>
          <p className="text-xs text-slate-500 mt-1 pb-1 leading-normal">{desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 relative overflow-hidden bg-slate-900/10">
      
      {/* Visual glowing particle backdrops */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">UNCOMPROMISING COMPLIANCE</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-[1.12]">
            High Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-[#00f0ff]">Quality Benchmarks</span>
          </h2>

          <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
            We operate under rigid corporate standards to ensure every mechanical component behaves efficiently, reducing consumption and maximizing life.
          </p>
        </div>

        {/* Real-time Smooth Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TECHNICAL_METRICS.map((metric, idx) => (
            <CountingMetric 
              key={idx}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              desc={metric.desc}
              delay={idx * 0.2}
            />
          ))}
        </div>

        {/* Animated 3D Floating Value Badges layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Floating3DBadge 
            title="Expert Technicians"
            desc="Every dispatch engineer carries full HVAC credentials and certification from respected trade frameworks."
            iconName="Expert"
          />
          <Floating3DBadge 
            title="Fast Service"
            desc="Equipped with pre-loaded service vans containing standard filters, compressors and diagnostic parts."
            iconName="Fast"
          />
          <Floating3DBadge 
            title="Affordable Pricing"
            desc="Rigid pricing matrix ensures clear billing without hidden charges, complete with a physical diagnostics copy."
            iconName="Affordable"
          />
          <Floating3DBadge 
            title="Customer Satisfaction"
            desc="Over 4,800 active homes, premium villas & warehouses trust Shahin Alam LLC to maintain air quality."
            iconName="Satisfaction"
          />
        </div>

      </div>
    </section>
  );
}
