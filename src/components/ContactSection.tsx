import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Clock, Trash2, ShieldCheck, HelpCircle } from 'lucide-react';
import { OFFICE_CONTACTS } from '../data';
import { Booking } from '../types';
import WorkGallery from './WorkGallery';

interface ContactSectionProps {
  customPreloadedService?: string;
  onClearPreloadedService?: () => void;
  onSubmitBookingSuccess?: () => void;
}

export default function ContactSection({ customPreloadedService, onClearPreloadedService, onSubmitBookingSuccess }: ContactSectionProps) {
  // Booking list state
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('AC Maintenance');
  const [formDate, setFormDate] = useState('');
  const [formTimeSlot, setFormTimeSlot] = useState('Morning (08:00 AM - 12:00 PM)');
  const [formNotes, setFormNotes] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Active user queries / messages
  const [activeTab, setActiveTab] = useState<'book' | 'inquiries'>('book');

  // Load existing client bookings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('shahin_alam_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to load local storage bookings', err);
      }
    }
  }, []);

  // Update setService if there is a preselected service from Hero/Catalog clicks
  useEffect(() => {
    if (customPreloadedService) {
      setFormService(customPreloadedService);
    }
  }, [customPreloadedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone || !formEmail) return;

    const newBooking: Booking = {
      id: `booking-${Date.now()}`,
      name: formName,
      phone: formPhone,
      email: formEmail,
      service: formService,
      date: formDate || new Date().toISOString().split('T')[0],
      timeSlot: formTimeSlot,
      notes: formNotes,
      createdAt: new Date().toLocaleDateString('en-AE', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('shahin_alam_bookings', JSON.stringify(updatedBookings));

    // Reset Form Input State
    setFormName('');
    setFormPhone('');
    setFormEmail('');
    setFormNotes('');
    setFormSuccess(true);
    
    if (onSubmitBookingSuccess) {
      onSubmitBookingSuccess();
    }
    if (onClearPreloadedService) {
      onClearPreloadedService();
    }

    setTimeout(() => {
      setFormSuccess(false);
    }, 4500);
  };

  const deleteBooking = (id: string) => {
    const filtered = bookings.filter(b => b.id !== id);
    setBookings(filtered);
    localStorage.setItem('shahin_alam_bookings', JSON.stringify(filtered));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-[#020617]">
      
      {/* Decorative High-End Lighting Orbs */}
      <div className="absolute top-[10%] right-[-100px] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-100px] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">DIGITAL BOOKING OFFICE</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-[1.12]">
            Book Your Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-[#00f0ff]">HVAC Service</span>
          </h2>

          <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
            Submit your cooling challenges down below. Secure a prioritized arrival slot instantly with our local dispatchers in UAE.
          </p>
        </div>

        {/* Master Flex Panel Grid splitting Contact Details cards & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Glassmorphism Info Panel & 3D Interactive bobbing contact cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">Direct Connections</h3>
            <p className="text-sm text-slate-400">Speak directly with Shahin Alam Technical leadership to establish commercial contracts or ask about custom repair status.</p>

            {/* Glowing 3D-effect bobbing contact widgets */}
            <div className="space-y-4">
              
              {/* Phone Contacts 3D widget */}
              <motion.a 
                href={`tel:${OFFICE_CONTACTS.phoneNumber}`}
                whileHover={{ y: -4, scale: 1.01 }}
                className="block p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/30 border border-slate-800 hover:border-[#00f0ff]/40 shadow-xl transition-all relative overflow-hidden group"
              >
                {/* 3D floating phone animation */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00f0ff]/10" />
                
                <div className="flex gap-4 items-center relative z-10">
                  <div className="p-3.5 rounded-xl bg-[#00f0ff]/15 border border-[#00f0ff]/30 text-[#00f0ff] shadow-md group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#00f0ff] uppercase block font-bold">TELEPHONE DISPATCH</span>
                    <span className="text-lg md:text-xl font-mono font-bold text-white leading-tight mt-0.5 block">{OFFICE_CONTACTS.phoneNumber}</span>
                    <span className="text-[11px] text-slate-400 font-sans block mt-0.5">Click to dial & speak with our dispatcher live</span>
                  </div>
                </div>
              </motion.a>

              {/* Email Contacts 3D widget */}
              <motion.a 
                href={`mailto:${OFFICE_CONTACTS.email}`}
                whileHover={{ y: -4, scale: 1.01 }}
                className="block p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/30 border border-slate-800 hover:border-[#00f0ff]/40 shadow-xl transition-all relative overflow-hidden group"
              >
                {/* 3D floating email visual */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00f0ff]/10" />

                <div className="flex gap-4 items-center relative z-10">
                  <div className="p-3.5 rounded-xl bg-[#00f0ff]/15 border border-[#00f0ff]/30 text-[#00f0ff] shadow-md group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#00f0ff] uppercase block font-bold">DIGITAL INBOX</span>
                    <span className="text-base sm:text-lg font-mono font-bold text-white leading-tight mt-0.5 block break-all">{OFFICE_CONTACTS.email}</span>
                    <span className="text-[11px] text-slate-400 font-sans block mt-0.5">Send blueprints or architectural requests</span>
                  </div>
                </div>
              </motion.a>

              {/* Geography widget */}
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex gap-4 items-center relative overflow-hidden">
                <div className="p-3.5 rounded-xl bg-slate-800 text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block">EMIRATE BASE</span>
                  <span className="text-sm font-semibold text-slate-200 mt-0.5 block">{OFFICE_CONTACTS.address}</span>
                  <span className="text-[11px] text-slate-500 leading-snug mt-0.5 block">{OFFICE_CONTACTS.workingHours}</span>
                </div>
              </div>

              {/* Project Showcase Gallery */}
              <WorkGallery />

            </div>

            {/* Quick trust metric lockup */}
            <div className="mt-4 p-4 rounded-xl border border-dashed border-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#00f0ff]/60 flex-shrink-0" />
              <p className="text-[11px] text-slate-400 leading-snug">
                Your communication is encrypted. Submitting schedules automatically reserves dispatch availability locks inside our operations database.
              </p>
            </div>

          </div>

          {/* Right Column: Modern Glassmorphism Contact Form & Booking lists toggler */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            
            {/* Horizontal Sub tabs selector */}
            <div className="flex flex-col min-[420px]:flex-row rounded-xl bg-slate-900/60 p-1 border border-slate-800 w-full min-[420px]:max-w-fit gap-1">
              <button
                onClick={() => setActiveTab('book')}
                className={`px-4 py-2 rounded-lg text-xs font-display font-semibold transition-all text-center ${
                  activeTab === 'book' 
                    ? 'bg-slate-800 text-white shadow-md border border-slate-700' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Service Booking Form
              </button>
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`px-4 py-2 rounded-lg text-xs font-display font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'inquiries' 
                    ? 'bg-slate-800 text-white shadow-md border border-slate-700' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                My Registered Queries
                <span className="bg-cyan-500/10 text-[#00f0ff] text-[9.5px] font-mono px-1.5 py-0.5 rounded border border-cyan-500/10">
                  {bookings.length}
                </span>
              </button>
            </div>

            <div className="w-full">
              <AnimatePresence mode="wait">
                
                {/* Render Booking Form */}
                {activeTab === 'book' && (
                  <motion.div
                    key="booking-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-md relative"
                  >
                    {customPreloadedService && (
                      <div className="mb-4 p-3 bg-cyan-950/40 border border-cyan-500/20 rounded-xl text-left flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#00f0ff]" />
                          <span className="text-xs text-slate-300">Currently booking: <b>{customPreloadedService}</b></span>
                        </div>
                        <button 
                          onClick={onClearPreloadedService}
                          className="text-[10px] font-mono text-[#00f0ff] underline hover:text-white transition-colors"
                        >
                          Change
                        </button>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      
                      {/* Name and Phone details block */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Your Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sultan Al Suwaidi"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="bg-slate-950/60 hover:bg-slate-950 focus:bg-slate-950 border border-slate-800 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors w-full"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">UAE Mobile number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 05x xxxxxxx"
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            className="bg-slate-950/60 hover:bg-slate-950 focus:bg-slate-950 border border-slate-800 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors w-full"
                          />
                        </div>
                      </div>

                      {/* Email information */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. client@dubaihome.ae"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="bg-slate-950/60 hover:bg-slate-950 focus:bg-slate-950 border border-slate-800 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors w-full"
                        />
                      </div>

                      {/* Selectable services dropdown */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Select HVAC Service</label>
                          <select
                            value={formService}
                            onChange={(e) => setFormService(e.target.value)}
                            className="bg-[#090d16] hover:bg-slate-950 border border-slate-800 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-slate-300 outline-none transition-colors w-full cursor-pointer"
                          >
                            <option>AC Installation</option>
                            <option>AC Maintenance</option>
                            <option>AC Repair</option>
                            <option>Ductwork Solutions</option>
                            <option>Commercial Technical Services</option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Preferred Date</label>
                          <input
                            type="date"
                            value={formDate}
                            onChange={(e) => setFormDate(e.target.value)}
                            className="bg-slate-950/60 hover:bg-slate-950 focus:bg-slate-950 border border-slate-800 focus:focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-[#00f0ff] outline-none transition-colors w-full"
                          />
                        </div>
                      </div>

                      {/* Dispatch slot */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Dispatch Time Window</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {[
                            'Morning (08:00 AM - 12:00 PM)',
                            'Afternoon (12:00 PM - 04:00 PM)',
                            'Evening (04:00 PM - 08:00 PM)'
                          ].map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormTimeSlot(slot)}
                              className={`p-3 text-left rounded-xl border text-[11px] font-display font-medium leading-tight transition-all ${
                                formTimeSlot === slot
                                  ? 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]'
                                  : 'bg-slate-950/40 text-slate-400 border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              {slot.split(' (')[0]}
                              <span className="block text-[9px] font-mono text-slate-500 mt-1">{slot.split(' (')[1]?.replace(')', '')}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Notes / Special Instructions */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Special Notes or AC Unit Model details</label>
                        <textarea
                          rows={3}
                          placeholder="e.g. Water dripping from indoor master bedroom unit after eco power setting is enabled..."
                          value={formNotes}
                          onChange={(e) => setFormNotes(e.target.value)}
                          className="bg-slate-950/60 hover:bg-slate-950 focus:bg-slate-950 border border-slate-800 focus:border-[#00f0ff] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors w-full resize-none"
                        />
                      </div>

                      {/* Submit dispatch request button */}
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#00f0ff] hover:bg-cyan-400 text-slate-950 font-display font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                      >
                        <Send className="w-4 h-4" />
                        Book High-Efficiency Service Dispatch
                      </button>

                    </form>

                    {/* Submit animations overlay */}
                    <AnimatePresence>
                      {formSuccess && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="absolute inset-0 rounded-3xl bg-slate-900/95 flex flex-col items-center justify-center p-6 text-center z-20 border border-cyan-500/40"
                        >
                          <div className="p-4 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] mb-4">
                            <CheckCircle className="w-12 h-12" />
                          </div>
                          <h4 className="text-xl font-display font-bold text-white">Booking Slot Registered!</h4>
                          <p className="text-sm text-slate-400 max-w-sm mt-2 leading-relaxed">
                            Your service dispatch slot has been secured. Our HVAC supervisor will call you on your phone within 15 minutes.
                          </p>
                          <span className="text-[11px] font-mono text-[#00f0ff] mt-4 uppercase tracking-widest bg-[#00f0ff]/10 px-2.5 py-1 rounded">
                            GENERATING DISPATCH TICKET...
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                )}

                {/* Render Booking Queries List */}
                {activeTab === 'inquiries' && (
                  <motion.div
                    key="inquiries-tab"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-md min-h-[300px] text-left relative"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                      <div>
                        <h4 className="text-base font-display font-bold text-white">Your Registered Air Tickets</h4>
                        <p className="text-xs text-slate-500">Local live client action pipeline</p>
                      </div>

                      <HelpCircle className="w-4 h-4 text-slate-600" />
                    </div>

                    {bookings.length === 0 ? (
                      <div className="flex flex-col items-center justify-center p-12 text-center">
                        <Calendar className="w-10 h-10 text-slate-600 mb-2" />
                        <h5 className="text-xs font-display font-bold text-slate-400">No active dispatches found</h5>
                        <p className="text-[11px] text-slate-600 max-w-xs mt-1">Book services using the first tab to spawn simulated dispatch trucks.</p>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                        {bookings.map((booking, idx) => (
                          <div 
                            key={booking.id}
                            className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 hover:border-slate-700/80 transition-colors relative group"
                          >
                            <div className="flex flex-wrap justify-between items-start gap-2">
                              <div>
                                <span className="bg-[#00f0ff]/10 text-[#00f0ff] font-mono text-[9px] px-2 py-0.5 rounded border border-[#00f0ff]/10 uppercase font-bold">
                                  {booking.service}
                                </span>
                                <h5 className="text-sm font-display font-bold text-white mt-2">{booking.name}</h5>
                                <p className="text-xs text-slate-450 mt-1">Phone: <b className="font-mono text-slate-300">{booking.phone}</b> • Email: <span className="text-slate-400">{booking.email}</span></p>
                              </div>

                              <div className="flex gap-2 items-center">
                                <span className="text-[9.5px] text-[#00f0ff] font-mono bg-cyan-950/30 px-2 py-1 rounded border border-cyan-800/40 flex items-center gap-1.5 animate-pulse">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  Dispatch Auto-Assigned
                                </span>

                                <button
                                  onClick={() => deleteBooking(booking.id)}
                                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            {/* Additional details block inside ticket listing */}
                            <div className="mt-3 pt-3 border-t border-slate-900 text-[11px] flex flex-wrap justify-between gap-2 text-slate-500 font-mono">
                              <div>
                                Schedule Window: <span className="text-slate-300 font-sans">{booking.date}</span> at <span className="text-[#00f0ff] font-sans font-semibold">{booking.timeSlot?.split(' (')[0]}</span>
                              </div>
                              <div>
                                Registered: <span className="text-slate-450">{booking.createdAt}</span>
                              </div>
                            </div>

                            {booking.notes && (
                              <p className="mt-2 text-xs bg-[#020617] p-2 rounded text-slate-450 italic border-l border-[#00f0ff] pl-2.5 font-sans leading-normal">
                                "{booking.notes}"
                              </p>
                            )}

                          </div>
                        ))}
                      </div>
                    )}

                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
