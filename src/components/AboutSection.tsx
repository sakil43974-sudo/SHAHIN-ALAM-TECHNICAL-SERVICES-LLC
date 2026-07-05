import { motion } from 'motion/react';
import { Shield, Sparkles, Clock, MapPin, Award, CheckCircle } from 'lucide-react';
import { OFFICE_CONTACTS } from '../data';

// @ts-ignore
import imgTechnician3d from '../assets/images/hvac_technician_3d_1779275740350.png';

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
            Pioneering Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#cbd5e1] to-[#00f0ff]">Technical & Maintenance</span> Services in Dubai
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl"
          >
            At Shahin Alam Technical Services L.L.C, we combine rigorous Dubai-standard engineering expertise with multi-disciplinary maintenance capabilities. Officially licensed by the Department of Economy and Tourism (DET), our certified team delivers premium, high-efficiency solutions in HVAC, Swimming Pools, Carpentry, Painting, Plumbing, False Ceilings, and Tiling across the UAE.
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
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">Whenever mechanical, plumbing, or AC faults occur, our emergency response teams reach your doorstep in under 60 minutes.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800/40">
              <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-display font-bold text-slate-200">Certified Technical Experts</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">All staff are officially trained, vetted, and equipped with precision instruments to execute heavy maintenance to perfection.</p>
              </div>
            </div>
          </motion.div>

          {/* Dubai DET Commercial License Verification Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900/80 border border-amber-500/20 shadow-[0_4px_30px_rgba(245,158,11,0.03)] text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                    DUBAI COMMERCIAL TRADE LICENSE
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVE & VERIFIED (مفعل)
                  </span>
                </div>
                
                <h3 className="text-base font-display font-bold text-slate-200 mt-1">
                  SHAHIN ALAM TECHNICAL SERVICES L.L.C
                </h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                  شاهين علم للخدمات الفنية ش.ذ.م.ম (Limited Liability Company)
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 mt-4 pt-3 border-t border-slate-800/80 text-[11px]">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">License Number</span>
                    <span className="font-mono text-slate-200 font-bold">1283230</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">DCCI Registration</span>
                    <span className="font-mono text-slate-200 font-bold">691917</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">Authorized Manager</span>
                    <span className="text-slate-200 font-medium font-display">Shahin Alam Mohammad Ali</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase font-mono">Governing Authority</span>
                    <span className="text-slate-300 font-medium">Dubai DED / DET</span>
                  </div>
                </div>
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
                src={imgTechnician3d} 
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
