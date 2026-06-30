import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ZoomIn, ArrowRight } from 'lucide-react';

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
    title: 'Industrial Chiller Overhaul',
    category: 'chiller',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=800&q=80',
    description: 'Compressor rebuilding and mechanical pressure testing for commercial chiller plant.'
  },
  {
    id: 'g2',
    title: 'Precision AC Installation',
    category: 'ac-install',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Wall-mounted split AC unit alignment and copper pipe routing in luxury apartment.'
  },
  {
    id: 'g3',
    title: 'Central HVAC Ductwork',
    category: 'ductwork',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description: 'Double-insulated sheet metal duct fabrication and ventilation air balancing.'
  },
  {
    id: 'g4',
    title: 'Refrigerant Line Welding',
    category: 'repair',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'High-temperature copper welding and nitrogen pressure leak-testing.'
  },
  {
    id: 'g5',
    title: 'AC Electrical Diagnostics',
    category: 'repair',
    imageUrl: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80',
    description: 'Calibrated multimeter capacitor and contractor controls testing.'
  },
  {
    id: 'g6',
    title: 'VRF Condenser Layout',
    category: 'ac-install',
    imageUrl: 'https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&w=800&q=80',
    description: 'High-capacity multi-zone outdoor inverter condenser system installation.'
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
