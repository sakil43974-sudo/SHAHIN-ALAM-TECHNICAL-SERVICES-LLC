import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OFFICE_CONTACTS } from '../data';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] overflow-hidden pt-20 border-t border-slate-800/60 text-left">
      
      {/* 1. Animated wave current effects on top of footer container */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <svg 
          className="absolute bottom-0 w-full h-12 text-[#020617] preserve-3d" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Wave Layer 1 */}
          <path 
            d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1350,20 1500,60 L1500,120 L0,120 Z" 
            className="fill-current opacity-20"
            style={{
              animation: 'cool-wave 12s infinite linear',
              transform: 'translateX(0)'
            }}
          />
          {/* Wave Layer 2 */}
          <path 
            d="M0,80 C180,30 320,110 520,50 C720,110 900,30 1100,80 C1250,110 1350,30 1500,80 L1500,120 L0,120 Z" 
            className="fill-[#020617] opacity-40"
            style={{
              animation: 'cool-wave 18s infinite linear',
              transform: 'translateX(-10%)'
            }}
          />
          {/* Wave Layer 3 */}
          <path 
            d="M0,40 C120,80 280,10 480,50 C680,90 880,10 1080,45 L1500,120 L0,120 Z" 
            className="fill-[#020617]"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pb-16 relative z-10">
        
        {/* Company Identification and Branding */}
        <div className="md:col-span-4 flex flex-col gap-5 text-left">
          <Logo variant="full" iconSize={55} />

          <p className="text-xs text-slate-400 leading-relaxed">
            The UAE's premier provider of multi-disciplinary maintenance, contracting, and technical solutions. Combining meticulous high-end craftsmanship with reliable, officially certified compliance audits.
          </p>

          <div className="flex flex-wrap gap-2">
            {['License No: 1283230', 'DCCI: 691917', 'Dubai DET Registered'].map((tag, idx) => (
              <span key={idx} className="text-[9px] font-mono text-slate-400 bg-slate-900 border border-slate-800/80 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic section links */}
        <div className="md:col-span-3 flex flex-col gap-4 text-left">
          <h4 className="text-xs font-mono text-amber-400 tracking-widest uppercase font-bold">Quick Navigation</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="#home" className="hover:text-amber-400 transition-colors">Home Dashboard</a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition-colors">About Engineers</a>
            </li>
            <li>
              <a href="#services" className="hover:text-amber-400 transition-colors">Mechanical Services</a>
            </li>
            <li>
              <a href="#why-choose-us" className="hover:text-amber-400 transition-colors">Trust Benchmarks</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Book Dispatch</a>
            </li>
          </ul>
        </div>

        {/* Technical help guidelines */}
        <div className="md:col-span-3 flex flex-col gap-4 text-left">
          <h4 className="text-xs font-mono text-amber-400 tracking-widest uppercase font-bold">Licensed Scope</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>AC & HVAC Engineering</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>Swimming Pools Works</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>Sanitary & Pipes Repairing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>Carpentry & Floor Works</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>Wallpaper, Painting & Tiling</span>
            </li>
          </ul>
        </div>

        {/* Office Contact points in Dubai */}
        <div className="md:col-span-2 flex flex-col gap-4 text-left">
          <h4 className="text-xs font-mono text-amber-400 tracking-widest uppercase font-bold">Contact Details</h4>
          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>{OFFICE_CONTACTS.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <a href={`tel:${OFFICE_CONTACTS.mobile}`} className="hover:text-amber-400 transition-colors">{OFFICE_CONTACTS.mobile}</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <a href={`mailto:${OFFICE_CONTACTS.email}`} className="hover:text-amber-400 transition-colors break-all">{OFFICE_CONTACTS.email}</a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright notes */}
      <div className="border-t border-slate-900 bg-slate-950/70 py-6 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} Shahin Alam Technical Services L.L.C. Trade License 1283230. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400">DED Approved SLA</span>
            <span>•</span>
            <span className="hover:text-slate-400">Commercial Tariff Card</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
