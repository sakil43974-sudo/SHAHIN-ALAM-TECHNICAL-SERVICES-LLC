import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Calendar, 
  Facebook, 
  Instagram, 
  ChevronDown, 
  ShieldCheck, 
  Briefcase, 
  CalendarDays, 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Send 
} from 'lucide-react';
import { 
  OFFICE_CONTACTS, 
  PROJECTS, 
  QHSE_POLICIES, 
  COMPANY_EVENTS 
} from '../data';
import Logo from './Logo';

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Custom modal states for advanced tabs
  const [activeModal, setActiveModal] = useState<'qhse' | 'projects' | 'events' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };



  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 w-full flex flex-col ${
          scrollActive 
            ? 'shadow-xl' 
            : 'bg-transparent'
        }`}
      >
        {/* 1. UPPER ROW: Tagline, Live Hotline, Socials, Schedule Button */}
        <div className="w-full bg-[#020617] text-slate-300 border-b border-slate-800/60 py-1.5 px-3 sm:px-6 flex justify-between items-center text-[10px] sm:text-xs font-medium z-50 gap-2 overflow-x-auto scrollbar-none">
          {/* Tagline */}
          <div className="hidden md:flex items-center gap-2 text-left flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
            <span className="text-[11px] sm:text-xs font-sans tracking-tight text-slate-400">
              Leading the Future of HVAC, Chiller & Advanced Cooling Solutions in the UAE
            </span>
          </div>

          {/* Right Section containing phone links and CTAs */}
          <div className="flex items-center justify-between md:justify-end gap-2.5 sm:gap-4 w-full md:w-auto">
            {/* Landline */}
            <a 
              href={`tel:${OFFICE_CONTACTS.landline.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-500 transition-colors text-[10px] sm:text-xs font-mono whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-amber-500 flex-shrink-0" />
              <span className="hidden min-[400px]:inline">Landline:</span>
              <span>{OFFICE_CONTACTS.landline}</span>
            </a>

            {/* Mobile / Whatsapp */}
            <a 
              href={`tel:${OFFICE_CONTACTS.mobile.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors text-[10px] sm:text-xs font-mono border-l border-slate-800 pl-2.5 sm:pl-4 whitespace-nowrap"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="hidden min-[400px]:inline">Mobile:</span>
              <span>{OFFICE_CONTACTS.mobile}</span>
            </a>

            {/* Social Channels */}
            <div className="hidden sm:flex items-center gap-1.5 border-l border-slate-800 pl-4 pr-1 flex-shrink-0">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3 h-3" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-5 h-5 rounded bg-slate-800 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
            </div>

            {/* Glowing CTA Button */}
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-[#00f0ff] hover:bg-cyan-400 text-slate-900 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg flex items-center gap-1 text-[9px] sm:text-xs font-display font-bold tracking-wider uppercase transition-all hover:scale-[1.02] shadow-md shadow-cyan-400/20 active:scale-95 cursor-pointer ml-1 sm:ml-2 flex-shrink-0"
            >
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span>BOOK</span>
            </button>
          </div>
        </div>

        {/* 2. LOWER ROW: Logo & Main Navigation Links */}
        <div 
          className={`w-full transition-all duration-300 px-6 py-3 flex justify-between items-center ${
            scrollActive 
              ? 'bg-[#090f20f0] backdrop-blur-md border-b border-slate-800/95 py-2.5' 
              : 'bg-[#020617ba] backdrop-blur-sm border-b border-slate-800/50'
          }`}
        >
          {/* Logo container */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center hover:opacity-95 transition-opacity"
          >
            <Logo variant="full" iconSize={50} />
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-display font-semibold">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-slate-200 hover:text-amber-400 transition-colors py-1 px-1.5"
            >
              Home
            </a>
            
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-slate-200 hover:text-amber-400 transition-colors py-1 px-1.5 flex items-center gap-1"
            >
              About Us <ChevronDown className="w-3 h-3 text-slate-400" />
            </a>

            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-slate-200 hover:text-amber-400 transition-colors py-1 px-1.5 flex items-center gap-1"
            >
              Services <ChevronDown className="w-3 h-3 text-slate-400" />
            </a>

            <button 
              onClick={() => setActiveModal('qhse')}
              className="text-slate-200 hover:text-amber-400 transition-colors py-1 px-1.5 flex items-center gap-1 cursor-pointer"
            >
              QHSE <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            <button 
              onClick={() => setActiveModal('projects')}
              className="text-slate-200 hover:text-amber-400 transition-colors py-1 px-1.5 cursor-pointer"
            >
              Projects
            </button>

            <button 
              onClick={() => setActiveModal('events')}
              className="text-slate-200 hover:text-amber-400 transition-colors py-1 px-1.5 cursor-pointer"
            >
              Events
            </button>

            <button 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 font-bold px-4 py-2 rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-500/10"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile hamburger menu toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-200 hover:text-amber-400 transition-colors rounded-lg bg-slate-900/60 border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 3. MOBILE MENU OVERLAY */}
        {mobileOpen && (
          <div className="xl:hidden absolute top-[100%] inset-x-0 bg-[#090f20e6] backdrop-blur-lg border-b border-slate-800 shadow-2xl py-6 px-6 flex flex-col gap-4 text-left z-40 animate-in fade-in slide-in-from-top-4 duration-200">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-sm font-display font-bold text-slate-200 pb-2 border-b border-slate-800/50 hover:text-amber-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-sm font-display font-bold text-slate-200 pb-2 border-b border-slate-800/50 hover:text-amber-400 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-sm font-display font-bold text-slate-200 pb-2 border-b border-slate-800/50 hover:text-amber-400 transition-colors"
            >
              Services Catalogue
            </a>
            <button 
              onClick={() => { setActiveModal('qhse'); setMobileOpen(false); }}
              className="text-left text-sm font-display font-bold text-slate-200 pb-2 border-b border-slate-800/50 hover:text-amber-400 transition-colors"
            >
              QHSE Policies
            </button>
            <button 
              onClick={() => { setActiveModal('projects'); setMobileOpen(false); }}
              className="text-left text-sm font-display font-bold text-slate-200 pb-2 border-b border-slate-800/50 hover:text-amber-400 transition-colors"
            >
              Completed Projects
            </button>
            <button 
              onClick={() => { setActiveModal('events'); setMobileOpen(false); }}
              className="text-left text-sm font-display font-bold text-slate-200 pb-2 border-b border-slate-800/50 hover:text-amber-400 transition-colors"
            >
              Corporate Events
            </button>
            <button 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-center text-sm font-display font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-yellow-500 py-2.5 rounded-xl transition-all"
            >
              Contact Us
            </button>
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-800/60 text-xs text-slate-400 mt-1">
              <a 
                href={`tel:${OFFICE_CONTACTS.mobile.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors py-1 px-1 bg-slate-950/40 rounded-lg border border-slate-800/30"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[11px]">Mobile: {OFFICE_CONTACTS.mobile}</span>
              </a>
              <a 
                href={`tel:${OFFICE_CONTACTS.landline.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors py-1 px-1 bg-slate-950/40 rounded-lg border border-slate-800/30"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-mono text-[11px]">Landline: {OFFICE_CONTACTS.landline}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 4. MODALS RENDER CENTER */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
              <div className="flex items-center gap-3">
                {activeModal === 'qhse' && (
                  <>
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    <div>
                      <h3 className="text-lg font-display font-bold text-white">QHSE Standards & Compliance</h3>
                      <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Quality, Health, Safety & Environment</p>
                    </div>
                  </>
                )}
                {activeModal === 'projects' && (
                  <>
                    <TrendingUp className="w-6 h-6 text-amber-400" />
                    <div>
                      <h3 className="text-lg font-display font-bold text-white">Our Master Projects</h3>
                      <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Engineering Feats in Dubai & UAE</p>
                    </div>
                  </>
                )}
                {activeModal === 'events' && (
                  <>
                    <CalendarDays className="w-6 h-6 text-cyan-400" />
                    <div>
                      <h3 className="text-lg font-display font-bold text-white">Corporate Events & Updates</h3>
                      <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Milestones & Community Seminars</p>
                    </div>
                  </>
                )}
              </div>
              
              <button 
                onClick={() => { setActiveModal(null); }}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-all"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
              
              {/* A. QHSE MODAL CONTENT */}
              {activeModal === 'qhse' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    At Shahin Alam Technical Services LLC, Quality, Health, Safety, and Environment (QHSE) form the backbone of our operation. We strive to maintain a spotless safety record while executing the most challenging chiller plant flushes and high-altitude VRF compressor riggings across the UAE.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {QHSE_POLICIES.map((policy, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">
                            {policy.standard}
                          </span>
                          <h4 className="text-sm font-display font-bold text-white mt-3">{policy.title}</h4>
                          <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{policy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <p className="text-xs text-emerald-300 leading-normal">
                      <strong>Certified HVAC Disinfection:</strong> All chemicals and anti-fungal flushes used by our team are 100% compliant with Dubai Municipality Environmental Health standards, ensuring pure interior air index.
                    </p>
                  </div>
                </div>
              )}

              {/* B. PROJECTS MODAL CONTENT */}
              {activeModal === 'projects' && (
                <div className="space-y-6">
                  <p className="text-sm text-slate-400">
                    We take pride in our precision. Below are selected, real-life HVAC, central air distribution, and chilled water chiller overhauls implemented recently by our certified technical teams.
                  </p>
                  
                  <div className="space-y-4">
                    {PROJECTS.map((proj) => (
                      <div key={proj.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 items-center">
                        <div className="md:col-span-4 h-32 rounded-lg overflow-hidden relative">
                          <img 
                            src={proj.imageUrl} 
                            alt={proj.title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-2 left-2 text-[9px] font-mono font-bold text-slate-900 bg-amber-400 px-2 py-0.5 rounded uppercase">
                            {proj.category}
                          </span>
                        </div>
                        <div className="md:col-span-8 space-y-2">
                          <div className="flex justify-between items-center flex-wrap gap-2">
                            <h4 className="text-sm font-display font-bold text-white">{proj.title}</h4>
                            <span className="text-[10px] font-mono text-slate-500">{proj.year}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{proj.description}</p>
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                            <MapPin className="w-3 h-3 text-slate-600" />
                            <span>{proj.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* C. EVENTS MODAL CONTENT */}
              {activeModal === 'events' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Check out recent milestones, seminars, and training updates from our headquarters. We believe in continuous education to stay updated with smart HVAC controllers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {COMPANY_EVENTS.map((evt, i) => (
                      <div key={i} className="p-5 rounded-xl bg-slate-950/40 border border-slate-800 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded uppercase font-bold">
                              {evt.type}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">{evt.date}</span>
                          </div>
                          <h4 className="text-sm font-display font-bold text-white">{evt.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">{evt.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}



            </div>
          </div>
        </div>
      )}
    </>
  );
}
