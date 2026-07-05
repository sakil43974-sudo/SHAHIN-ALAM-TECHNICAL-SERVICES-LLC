import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ZoomIn, ArrowRight } from 'lucide-react';

// Import local on-site HVAC images
// @ts-ignore
import imgManifoldValves from '../assets/images/hvac_manifold_valves_1783261540287.jpg';
// @ts-ignore
import imgChemicalCleaning from '../assets/images/hvac_chemical_cleaning_1783261554051.jpg';
// @ts-ignore
import imgRooftopDucts from '../assets/images/hvac_rooftop_ducts_1783261566665.jpg';
// @ts-ignore
import imgCassetteInstall from '../assets/images/hvac_cassette_install_1783261583413.jpg';
// @ts-ignore
import imgCondenserRepair from '../assets/images/hvac_condenser_repair_1783261601293.jpg';
// @ts-ignore
import imgWaterPumpSystem from '../assets/images/hvac_water_pump_system_1783261613190.jpg';
// @ts-ignore
import imgDuctCladding from '../assets/images/hvac_duct_cladding_1783261625276.jpg';
// @ts-ignore
import imgIndoorAcWash from '../assets/images/hvac_indoor_ac_wash_1783261638145.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'chiller' | 'ac-install' | 'repair' | 'ductwork';
  imageUrl: string;
  description: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Water Pump Booster Station',
    category: 'chiller',
    imageUrl: imgWaterPumpSystem,
    description: 'Installation and plumbing of high-efficiency water booster pump system with integrated pressure gauge controls.'
  },
  {
    id: 'g2',
    title: 'Ceiling Cassette AC Installation',
    category: 'ac-install',
    imageUrl: imgCassetteInstall,
    description: 'Professional layout, wiring, and flush installation of a multi-directional ceiling cassette AC unit.'
  },
  {
    id: 'g3',
    title: 'Rooftop Insulated Air Ducts',
    category: 'ductwork',
    imageUrl: imgRooftopDucts,
    description: 'High-performance double-insulated rectangular HVAC ducts routed across a commercial rooftop.'
  },
  {
    id: 'g4',
    title: 'Evaporator Deep Chemical Wash',
    category: 'repair',
    imageUrl: imgChemicalCleaning,
    description: 'Active chemical foaming spray application on indoor evaporator cooling coils to dissolve dirt and restore airflow.'
  },
  {
    id: 'g5',
    title: 'Condenser Electrical Repair',
    category: 'repair',
    imageUrl: imgCondenserRepair,
    description: 'Comprehensive electrical diagnostics and component repair on outdoor condenser circuit boards.'
  },
  {
    id: 'g6',
    title: 'Heavy Duty Valves & Manifold',
    category: 'chiller',
    imageUrl: imgManifoldValves,
    description: 'High-durability plumbing manifold with pressure testing gauges and brass liquid regulation valves.'
  },
  {
    id: 'g7',
    title: 'Rooftop Duct Cladding Work',
    category: 'ductwork',
    imageUrl: imgDuctCladding,
    description: 'Applying custom protective aluminum sheet metal cladding insulation to large outdoor air distribution ducts.'
  },
  {
    id: 'g8',
    title: 'Split AC Deep Pressure Wash',
    category: 'repair',
    imageUrl: imgIndoorAcWash,
    description: 'High-pressure internal sanitization of wall-mounted split AC unit utilizing a specialized water-catch jacket.'
  }
];

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'chiller' | 'ac-install' | 'repair' | 'ductwork'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <div className="w-full bg-slate-900/40 border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3 text-left">
        <div>
          <span className="text-[8.5px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold block">
            PORTFOLIO SHOWCASE
          </span>
          <h4 className="text-sm font-display font-extrabold text-white mt-0.5">
            Our Work Gallery
          </h4>
        </div>
        <span className="text-[10px] font-mono text-slate-500">
          {GALLERY_IMAGES.length} Projects
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {[
          { id: 'all', label: 'All' },
          { id: 'chiller', label: 'Chillers' },
          { id: 'ac-install', label: 'AC Install' },
          { id: 'repair', label: 'Repairs' },
          { id: 'ductwork', label: 'Ducts' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`px-2.5 py-1 rounded-md text-[10px] font-display font-bold transition-all uppercase tracking-wider cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#00f0ff] text-slate-950 shadow-md'
                : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-750'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-2 gap-3 min-h-[220px]">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveImage(img)}
              className="relative aspect-square rounded-xl overflow-hidden bg-slate-950 group cursor-pointer border border-slate-800/50 hover:border-cyan-500/30 transition-all"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Eye icon and info on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-2 text-left">
                <span className="text-[8px] font-mono text-cyan-400 font-bold uppercase tracking-wider block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.category.replace('-', ' ')}
                </span>
                <span className="text-[10px] font-display font-bold text-white truncate block">
                  {img.title}
                </span>
                <span className="text-[8px] text-slate-400 line-clamp-1 mt-0.5 hidden group-hover:block transition-all duration-300">
                  {img.description}
                </span>
              </div>

              {/* Centered Zoom Indicator on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-700/50 text-white">
                  <ZoomIn className="w-3.5 h-3.5 text-[#00f0ff]" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-lg w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-1.5 bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white rounded-lg z-10 hover:border-slate-750 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-video relative overflow-hidden bg-slate-950">
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 text-left space-y-2">
                <span className="text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/10 uppercase font-bold inline-block">
                  {activeImage.category.replace('-', ' ')}
                </span>
                <h3 className="text-base font-display font-bold text-white">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {activeImage.description}
                </p>
                <div className="pt-2 border-t border-slate-800/60 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>Professional Grade</span>
                  <span>100% Quality Assurance</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
