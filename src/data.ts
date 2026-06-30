import { ServiceDetail } from './types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'ac-install',
    title: 'AC Installation',
    description: 'Bespoke high-efficiency AC system design, load calculation, and gold-standard implementation for villas, penthouses, and commercial units across the UAE.',
    benefits: [
      'Accurate BTUs load matching calculations',
      'Anti-vibration high-durability brackets',
      '5-Year extended compressor warranty support',
      'Pristine interior finish and clean routing'
    ],
    iconName: 'Wrench',
    flowRate: 'Ultra-Quiet Fan Flow',
    averagePrice: 'From AED 1,200'
  },
  {
    id: 'ac-maintenance',
    title: 'AC Maintenance',
    description: 'Proactive deep coil chemical cleaning, filter disinfection, pressure tuning, and system optimization to safeguard air purity and significantly reduce electricity bills.',
    benefits: [
      'Chemical-flush deep coil sanitation',
      'Refrigerant pressure level balancing',
      'Drain line flush to prevent water leaks',
      'Multi-point diagnostic checklist check'
    ],
    iconName: 'ShieldCheck',
    flowRate: 'Optimized Energy Flow',
    averagePrice: 'From AED 250'
  },
  {
    id: 'ac-repair',
    title: 'AC Repair',
    description: 'Rapid-response 24/7 HVAC diagnostic, emergency compressor repair, capacitor replacement, leak seals, and certified electrical repairs with genuine spare parts.',
    benefits: [
      '60-Minute rapid arrival guarantee',
      'Highly calibrated diagnostic instrumentation',
      '100% original manufacturer OEM parts',
      'Post-repair cooling testing certificate'
    ],
    iconName: 'Cpu',
    flowRate: 'Instant Ice-Cold Revival',
    averagePrice: 'Diagnostic from AED 150'
  },
  {
    id: 'ac-ductwork',
    title: 'Ductwork Solutions',
    description: 'High-end interior duct system vacuuming, sanitization, customized sheet metal structural fabrication, thermal insulation wrapping, and pressure-balanced air balancing.',
    benefits: [
      'Video camera duct interior inspection',
      'Hospital-grade sanitizing mist treatment',
      'High-performance fiberglass duct wrapping',
      '消除 air leakage for perfect cooling'
    ],
    iconName: 'Wind',
    flowRate: 'Primal Air Purification',
    averagePrice: 'Customized Quote'
  },
  {
    id: 'commercial-tech',
    title: 'Commercial Services',
    description: 'Heavy enterprise cooling engineering, VRF/VRV central system maintenance, chilling tower diagnostics, and complex contract technical support for office blocks and warehouses.',
    benefits: [
      'Dedicated corporate technical engineer assigned',
      'Comprehensive custom SLA support',
      'Zero operational disruption maintenance windows',
      'Asset performance logging lifecycle dashboard'
    ],
    iconName: 'Building2',
    flowRate: 'Industrial Grade Heavy Output',
    averagePrice: 'Corporate Agreement'
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
