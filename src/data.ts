import { ServiceDetail } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'hvac-filtration',
    title: 'Air-Conditioning, Ventilation & Air Filtration',
    description: 'Expert installation, deep chemical disinfection, and preventative maintenance of all HVAC types, from split/ducted units to commercial multi-zone VRF/VRV central systems.',
    benefits: [
      'Precision load calculation & custom duct layout',
      'Antibacterial deep coil chemical foam washing',
      'Eco-friendly refrigerant recovery & pressure tuning',
      'High-durability copper welding & pipe leak sealing'
    ],
    iconName: 'Wind',
    flowRate: 'Optimal Air Purity Flow',
    averagePrice: 'From AED 150'
  },
  {
    id: 'swimming-pools',
    title: 'Swimming Pools Installation Works',
    description: 'Comprehensive design, plumbing, tile layout, filtration system setup, and structural maintenance for luxury swimming pools in private villas and residential complexes.',
    benefits: [
      'High-efficiency filter and water pump integration',
      'Precision structural waterproofing & plumbing layout',
      'Pristine mosaic tiling and grout restoration',
      'Smart automation of pool lighting & chemical control'
    ],
    iconName: 'Waves',
    flowRate: 'Crystal-Clear Hydrology',
    averagePrice: 'Customized Quote'
  },
  {
    id: 'sanitary-plumbing',
    title: 'Sanitary Installation & Pipes Repairing',
    description: 'Gold-standard plumbing repairs, high-pressure water pump stations, drain lines clearing, and complete leak diagnostic assessments for residential and commercial spaces.',
    benefits: [
      'Calibrated thermal-imaging leak diagnosis',
      'Professional PPR, PEX, and copper pipe installations',
      'Rapid-response drainage block clearance',
      'Pristine bathroom & kitchen fixture setups'
    ],
    iconName: 'Droplet',
    flowRate: 'Balanced Hydraulic Flow',
    averagePrice: 'From AED 120'
  },
  {
    id: 'carpentry-flooring',
    title: 'Carpentry & Wood Flooring Works',
    description: 'Premium wooden flooring parquet layout, custom wardrobe cabinetry, wooden door installations, and master-craft carpentry repair of fine timber finishes.',
    benefits: [
      'Flawless alignment of luxury wooden parquet',
      'Bespoke kitchen cabinet & wardrobe designs',
      'Accurate door sizing, framing, & hinge balancing',
      'Moisture-resistant underlayment protective barrier'
    ],
    iconName: 'Hammer',
    flowRate: 'Timeless Timber Artistry',
    averagePrice: 'From AED 250'
  },
  {
    id: 'painting-contracting',
    title: 'Painting Contracting',
    description: 'Interior and exterior painting services using weather-resistant, non-toxic, eco-safe coatings. Providing texture finishes, accent walls, and precise multi-coat protective finishes.',
    benefits: [
      'Precision multi-coat primer and smooth finishing',
      'High-durability weather-resistant outdoor paint',
      'Elegant textured finishes and decorative coatings',
      'Meticulous masking, clean edges & zero-spill policy'
    ],
    iconName: 'Paintbrush',
    flowRate: 'Vivid Surface Preservation',
    averagePrice: 'From AED 300'
  },
  {
    id: 'tiling-works',
    title: 'Floor & Wall Tiling Works',
    description: 'Professional layout of fine ceramics, porcelain slabs, granite slabs, and luxury marble for bathrooms, kitchens, lobbies, and swimming pool surrounding areas.',
    benefits: [
      'Laser-aligned floor & wall joint leveling',
      'High-bonding polymer adhesive application',
      'Waterproof sealing of sanitary wet areas',
      'Precision cutting around fixtures & corners'
    ],
    iconName: 'Grid',
    flowRate: 'Flawless Joint Alignment',
    averagePrice: 'From AED 150'
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling & Light Partitions Installation',
    description: 'Aesthetic gypsum board ceilings, acoustic grid tiles, lightweight drywalls for commercial divisions, and custom recessed led profile slots implementation.',
    benefits: [
      'Reinforced steel suspension framework grids',
      'Modern ambient lighting slots & linear diffuser cuts',
      'Acoustic soundproofing partition layers',
      'Smooth joint compounding & paint-ready finishing'
    ],
    iconName: 'Layers',
    flowRate: 'Architectural Dimensioning',
    averagePrice: 'Customized Quote'
  },
  {
    id: 'plaster-works',
    title: 'Plaster Works',
    description: 'High-quality wall cement plastering, surface smoothing, concrete screeding, and wall leveling preparations to achieve structurally solid, pristine surface templates.',
    benefits: [
      'Precise corner bead alignment and crack repairs',
      'Multi-coat thermal & acoustic backing options',
      'Laser-guided flat floor screeding systems',
      'Flawless texture leveling prior to painting'
    ],
    iconName: 'Sparkles',
    flowRate: 'Solid Structural Prep',
    averagePrice: 'From AED 100'
  },
  {
    id: 'wallpaper-fixing',
    title: 'Wallpaper Fixing Works',
    description: 'Seamless alignment, bubble-free adhesion, and pattern matching for luxury textured, vinyl, and high-end photographic fabric wallpapers.',
    benefits: [
      'Perfect pattern matching & seam integration',
      'Non-staining specialty adhesive formula',
      'Meticulous surface pre-cleaning & priming',
      'Accurate corner cuts and fixture trim fittings'
    ],
    iconName: 'FileText',
    flowRate: 'Seamless Aesthetic Wraps',
    averagePrice: 'From AED 200'
  }
];

export const TECHNICAL_METRICS = [
  { value: 98, label: 'Satisfied clients', suffix: '%', desc: 'Verified UAE customer support score' },
  { value: 12, label: 'Average Response Time', suffix: ' Min', desc: 'Fastest dispatch in Dubai' },
  { value: 15, label: 'HVAC Engineers', suffix: '+', desc: 'Certified and highly trained technical experts' },
  { value: 4800, label: 'Completed projects', suffix: '+', desc: 'Villas, towers & complex workspaces completed' }
];

export const OFFICE_CONTACTS = {
  phoneNumber: '+971 05 01971662',
  landline: '+971 05 63132810',
  mobile: '+971 05 01971662',
  email: 'shahin664347@gmail.com',
  address: 'Deira, Dubai, United Arab Emirates',
  workingHours: '24/7 HVAC Emergency, Chiller Maintenance & Standard Support'
};

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  imageUrl: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Commercial Chiller Overhaul',
    category: 'Chiller Plant',
    location: 'Downtown Dubai, UAE',
    year: '2025',
    description: 'Complete high-pressure chiller compression system overhaul, tube scaling treatment, and energy-balancing validation for a 45-story commercial skyscraper.',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'proj-2',
    title: 'Luxury Villa VRF Integration',
    category: 'AC Installation',
    location: 'Palm Jumeirah, Dubai',
    year: '2025',
    description: 'Custom implementation of high-end silent multi-zone VRF AC systems with customized linear grill ducting and architectural design preservation.',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'proj-3',
    title: 'Industrial Warehouse Air Flow Balanced',
    category: 'Ductwork Solutions',
    location: 'Al Quoz Industrial Area, Dubai',
    year: '2024',
    description: 'Comprehensive design and fabrication of heavy double-insulated sheet metal ducts, balancing ventilation velocities and relative humidity controls.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  }
];

export interface QHSEPolicy {
  title: string;
  description: string;
  standard: string;
}

export const QHSE_POLICIES: QHSEPolicy[] = [
  {
    title: 'Occupational Health & Safety',
    description: 'Strict commitment to zero-accident workflows. Daily toolbox talks, 100% mandatory PPE gear compliance, and certified electrical & pressure rigging procedures.',
    standard: 'ISO 45001 Compliant'
  },
  {
    title: 'Environmental Stewardship',
    description: 'Responsible management of HVAC chemical wastes. Mandatory retrieval and certified recycling of R22, R410A, and R32 refrigerants to eliminate ozone depleting leaks.',
    standard: 'ISO 14001 Standards'
  },
  {
    title: 'Acoustics & Energy Auditing',
    description: 'Optimizing chiller plants and split units to exceed Dubai Municipality energy ratings while retaining ultra-silent noise levels under 28dB for comfort.',
    standard: 'Dubai Green Buildings Compliant'
  }
];

export interface CareerOpening {
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
}

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    title: 'Senior HVAC & Chiller Technician',
    type: 'Full-time',
    location: 'Dubai Office, UAE',
    experience: '5+ Years in GCC',
    description: 'Experienced in diagnosing and repairing heavy screw/scroll chiller compressor plants, electrical control circuits, and multi-zone VRF systems.'
  },
  {
    title: 'Assistant AC Mechanic',
    type: 'Full-time',
    location: 'Dubai Office, UAE',
    experience: '2+ Years',
    description: 'To assist senior technicians with split & package unit deep chemical flushes, gas charging, filter sanitization, and copper pipe routing.'
  }
];

export interface CompanyEvent {
  title: string;
  date: string;
  description: string;
  type: string;
}

export const COMPANY_EVENTS: CompanyEvent[] = [
  {
    title: 'HVAC Summer Preparedness Campaign',
    date: 'May 2026',
    description: 'Deploying optimized rapid-response diagnostic camps across Deira & Bur Dubai to support commercial properties with summer-load cooling checks.',
    type: 'Community Care'
  },
  {
    title: 'Eco-Friendly Refrigerant Certification',
    date: 'January 2026',
    description: 'Entire team completed masterclasses in handling low-GWP R32 & R454B eco-safety refrigerants under Dubai Municipality supervision.',
    type: 'Training Seminar'
  }
];
