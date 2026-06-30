import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Star, 
  ArrowRight,
  Sparkles,
  Users,
  CheckCircle2
} from 'lucide-react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { OFFICE_CONTACTS } from './data';

// High-quality professional HVAC & Chiller slider images representing Shahin Alam Technical Services LLC projects
const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80',
    tag: 'INDUSTRIAL CHILLERS & HEAVY CENTRAL HVAC',
    title: 'Enterprise Cooling Engineering',
    desc: 'Bespoke central VRF systems and industrial-grade water chillers engineered for continuous high-load GCC climates.'
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    tag: 'PRECISION DUCT FABRICATION & PRESSURE BALANCING',
    title: 'Custom Airflow Solutions',
    desc: 'High-performance double-insulated sheet metal ductwork design, vacuum sanitization, and meticulous air velocity balancing.'
  },
  {
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1600&q=80',
    tag: 'GOLD-STANDARD RESIDENTIAL AC INSTALS & CHEMICAL FLUSH',
    title: 'Elite Architectural Comfort',
    desc: 'Bespoke linear slot air diffusers and ultra-quiet split-unit chemistry cleaning, maintaining pristine indoor air quality indexes.'
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedServiceToBook, setSelectedServiceToBook] = useState<string | undefined>(undefined);
  
  // Lead dispatch console states
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackService, setCallbackService] = useState('AC Maintenance');
  const [callbackSuccess, setCallbackSuccess] = useState(false);

  // Automatic slide rotation every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll helper
  const handleTriggerBooking = (serviceTitle: string) => {
    setSelectedServiceToBook(serviceTitle);
    const element = document.getElementById('contact');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleClearPreselected = () => {
    setSelectedServiceToBook(undefined);
  };

  const handleCallbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCallbackSuccess(true);
    // Scroll to booking or reset form
    setTimeout(() => {
      setCallbackSuccess(false);
      setCallbackName('');
      setCallbackPhone('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-[#e6f1ff] font-sans overflow-x-hidden selection:bg-amber-400/30 selection:text-white">
      
      {/* 1. STICKY DUAL HEADER NAVBAR */}
      <Header />

      {/* 2. HERO SECTION WITH IMAGE SLIDESHOW BACKGROUND */}
      <section 
        id="home" 
        className="relative pt-40 pb-24 sm:pt-44 md:pt-48 md:pb-36 min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Absolute Slide Images Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Slide Image */}
              <img 
                src={HERO_SLIDES[currentSlide].image} 
                alt="Shahin Alam Technical Services project background"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Scrim Overlay for WCAG 2.1 AAA absolute text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/45 md:bg-slate-950/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-slate-950/50" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2D Decorative Grid Overlay */}
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none z-10" />

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-20 w-full mt-8 md:mt-4">
          
          {/* Left Column: Typography Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Live Location / Certification Ribbon */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-xl max-w-full sm:max-w-fit shadow-lg backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
              <span className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold leading-normal break-words">
                24/7 HVAC EMERGENCY SERVICE • DUBAI DED LICENSE
              </span>
            </motion.div>

            {/* Main Title with sliding information context */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-slate-300 tracking-widest uppercase block">
                {HERO_SLIDES[currentSlide].tag}
              </span>
              <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
                {HERO_SLIDES[currentSlide].title}
              </h1>
            </div>

            {/* Description Text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {HERO_SLIDES[currentSlide].desc} Over a decade of gold-standard diagnostic precision, silent air preservation, duct fabrications, and rapid corporate emergency support across Dubai & Northern Emirates.
            </p>

            {/* Corporate proofing credentials */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>100% Guaranteed SLA</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>60-Min Emergency Response</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Based in Deira, Dubai</span>
              </div>
            </div>

            {/* Buttons for Call to Action */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => handleTriggerBooking('AC Maintenance')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-display font-bold text-sm tracking-wide shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                Book Service Catalog
                <ChevronRight className="w-4 h-4 text-slate-900" />
              </button>

              <button
                onClick={() => handleTriggerBooking('General inquiry')}
                className="px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-display font-bold text-sm tracking-wide border border-slate-700/60 transition-all cursor-pointer hover:border-slate-500 flex items-center gap-2"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Tiny visual metrics bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-sm mt-3">
              <div>
                <span className="text-sm min-[380px]:text-base font-mono font-black text-amber-400">4,800+</span>
                <p className="text-[9px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">Projects Completed</p>
              </div>
              <div>
                <span className="text-sm min-[380px]:text-base font-mono font-black text-amber-400">15+</span>
                <p className="text-[9px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">HVAC Specialists</p>
              </div>
              <div>
                <span className="text-sm min-[380px]:text-base font-mono font-black text-amber-400">98.4%</span>
                <p className="text-[9px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">Client Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Dispatch & SLA Callback Center */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-sm bg-slate-950/85 border border-slate-800/90 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md"
            >
              {/* Radial background glowing mesh */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Console Header */}
              <div className="space-y-1 text-left pb-4 border-b border-slate-800/80">
                <span className="text-[8.5px] font-mono tracking-widest text-amber-400 uppercase font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  EMERGENCY DISPATCH MONITOR
                </span>
                <h3 className="text-base font-display font-extrabold text-white">Technician SLA Callback</h3>
                <p className="text-xs text-slate-400">Need immediate assistance? Submit your mobile number to trigger an instant technical dispatch callback within 10 minutes.</p>
              </div>

              {/* Submission Form */}
              {!callbackSuccess ? (
                <form onSubmit={handleCallbackSubmit} className="space-y-4 pt-5 text-left">
                  {/* Select Category */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Required Service</label>
                    <select 
                      value={callbackService}
                      onChange={(e) => setCallbackService(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 text-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                    >
                      <option value="AC Maintenance">AC Chemical Deep Clean</option>
                      <option value="AC Installation">New AC / VRF Installation</option>
                      <option value="AC Repair">Compressor & Gas Leak Repair</option>
                      <option value="Ductwork Solutions">Duct Fabrication & Duct Vacuum</option>
                      <option value="Commercial Service">Corporate SLA Chiller Service</option>
                    </select>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      placeholder="e.g., Sakil Ahmed"
                      className="w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-500 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">UAE Mobile Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500 text-xs font-mono">
                        +971
                      </div>
                      <input 
                        type="tel" 
                        required
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        placeholder="58 197 4849"
                        className="w-full bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-500 rounded-xl pl-12 pr-3 py-2.5 text-xs focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-display font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/10 cursor-pointer mt-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    Request 10-Min Callback
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-display font-bold text-white">Callback Request Confirmed!</h4>
                    <p className="text-xs text-slate-400 px-4 leading-relaxed">
                      Thank you, <strong>{callbackName}</strong>. Our on-duty HVAC dispatch engineer has been notified to call you back instantly on <strong>+971 {callbackPhone}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* Footnotes */}
              <div className="mt-5 pt-4 border-t border-slate-900 flex justify-between items-center text-[9px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>ISO 9001:2015 Technical Certified</span>
                </span>
                <span>Active 24/7/365</span>
              </div>
            </motion.div>
          </div>

        </div>

      </section>

      {/* 3. ABOUT SECTION (HVAC Engineers, Technical values) */}
      <AboutSection />

      {/* 4. SERVICES CATALOGUE SECTION (AC Installation, AC Maintenance, AC Repair, Ductwork, Commercial) */}
      <ServicesSection onBookClick={handleTriggerBooking} />

      {/* 5. WHY CHOOSE US (Counting values panel) */}
      <WhyChooseUs />

      {/* 6. CONTACT & DISPATCH BOOKING FLOW PIPELINE */}
      <ContactSection 
        customPreloadedService={selectedServiceToBook}
        onClearPreloadedService={handleClearPreselected}
        onSubmitBookingSuccess={() => {}}
      />

      {/* 7. ELEGANT CORPORATE FOOTER */}
      <Footer />

    </div>
  );
}
