import { motion } from 'motion/react';
import { Shield, Sparkles, Clock, MapPin, Award, CheckCircle } from 'lucide-react';
import { OFFICE_CONTACTS } from '../data';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0b1329]">
      {/* Dynamic blurred overlay circles */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: 2D Text & Mission Details */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full max-w-fit"
          >
            <Shield className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">ABOUT SHAHIN ALAM TECHNICAL</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-white leading-[1.12]"
          >
            Pioneering Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#cbd5e1] to-[#00f0ff]">HVAC Maintenance</span> & Engineering in the UAE
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl"
          >
            At Shahin Alam Technical Services LLC, we combine rigorous Dubai-standard technical expertise with modern, hyper-efficient cooling technologies. Our dedicated team of mechanical technicians delivers state-of-the-art diagnostics, silent thermal management, and robust AC system installation services designed to endure the demanding GCC climate.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
          >
            {/* Split Core Values */}
            <div className="flex gap-3 items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800/40">
              <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-display font-bold text-slate-200">24/7 Rapid Priority Dispatch</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">Whenever your system experiences faults, our localized emergency response teams land in 60 minutes.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800/40">
              <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-display font-bold text-slate-200">Certified HVAC Engineers</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">All staff are officially trained in modern VRF/VRV central inverter, split-units, and high-pressure ducting.</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Assurance Checks checklist */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mt-2 pt-2 border-t border-slate-800/60"
          >
            {['100% Guaranteed Satisfaction', 'Eco-Friendly Disinfectants', 'Dubai Municipally Compliant'].map((txt, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span className="font-mono tracking-tight text-[11px]">{txt}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: 3D Technician Visual Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, rotate: 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[390px] aspect-square rounded-3xl p-3 bg-gradient-to-tr from-slate-800/40 to-slate-900/20 border border-slate-700/30 shadow-2xl relative overflow-visible group"
          >
            {/* Outer high-tech glass card frames and accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#00f0ff] rounded-tl-xl opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#00f0ff] rounded-br-xl opacity-60" />

            {/* Glowing active badge overlay */}
            <div className="absolute right-2 min-[440px]:-right-6 top-4 min-[440px]:top-8 bg-slate-950/90 text-white border border-slate-800 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-10 hover:border-cyan-500/60 transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
              <div className="text-left">
                <h5 className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">DISPATCHING STATUS</h5>
                <p className="text-xs font-display font-medium text-white">Emergency Team Active</p>
              </div>
            </div>

            {/* Interactive technician image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950/80 group">
              <img 
                src="/src/assets/images/hvac_technician_3d_1779275740350.png" 
                alt="HVAC technician servicing dynamic AC systems" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent pointer-events-none" />
              
              {/* Overlay HUD system values */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/40 text-left">
                <p className="text-[8px] font-mono text-[#00f0ff] tracking-widest uppercase">TECHNICAL SPECIFICATIONS</p>
                <div className="flex justify-between items-center mt-1.5">
                  <span className="text-xs font-bold text-slate-200">ISO 9001 HVAC Compliance</span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">CLASS A</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
