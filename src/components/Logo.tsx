import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'icon';
  className?: string;
  iconSize?: number;
}

export default function Logo({ variant = 'full', className = '', iconSize = 48 }: LogoProps) {
  // Gradients for SVG
  const logoId = React.useId();
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dynamic SVG Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          {/* Gold Metallic Gradient */}
          <linearGradient id={`${logoId}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="30%" stopColor="#FBBF24" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          
          {/* Blue Corporate Gradient */}
          <linearGradient id={`${logoId}-blue`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Light Blue Accent Gradient */}
          <linearGradient id={`${logoId}-light-blue`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* 1. Cogwheel (Background Gear) */}
        <g id="gear" className="origin-center" style={{ transformOrigin: '250px 250px' }}>
          <path
            d="M250 110 L250 80 A170 170 0 0 1 295 86 L283 115 A140 140 0 0 0 250 110 Z"
            fill="url(#"
            style={{ fill: 'url(#' + logoId + '-blue)' }}
          />
          {/* Outer cogs representing mechanical precision */}
          <path
            d="M250 100 C167.16 100 100 167.16 100 250 C100 332.84 167.16 400 250 400 C332.84 400 400 332.84 400 250 C400 167.16 332.84 100 250 100 Z"
            stroke="url(#"
            style={{ stroke: 'url(#' + logoId + '-blue)' }}
            strokeWidth="24"
            strokeDasharray="40,25"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
        </g>

        {/* 2. City Skyline / Skyscraper Silhouette inside the Cogwheel */}
        <g id="skyline">
          {/* Building 1 (Left) */}
          <rect x="180" y="180" width="45" height="140" fill="url(#" style={{ fill: 'url(#' + logoId + '-blue)' }} opacity="0.8" rx="2" />
          {/* Building 2 (Center Tall) */}
          <path d="M235 120 L275 140 L275 320 L235 320 Z" fill="url(#" style={{ fill: 'url(#' + logoId + '-blue)' }} rx="2" />
          {/* Building 3 (Right) */}
          <rect x="285" y="190" width="38" height="130" fill="url(#" style={{ fill: 'url(#' + logoId + '-blue)' }} opacity="0.8" rx="2" />
          
          {/* Skyscraper highlights (windows) */}
          <line x1="245" y1="160" x2="245" y2="300" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6,8" opacity="0.5" />
          <line x1="260" y1="170" x2="260" y2="300" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6,8" opacity="0.5" />
          <line x1="195" y1="200" x2="195" y2="300" stroke="#1E40AF" strokeWidth="2" strokeDasharray="5,10" opacity="0.5" />
          <line x1="300" y1="210" x2="300" y2="300" stroke="#1E40AF" strokeWidth="2" strokeDasharray="5,10" opacity="0.5" />
        </g>

        {/* 3. Sweeping gold ring & blue ring representing orbital dynamics and technical service */}
        <path
          d="M110 330 C150 410, 350 410, 390 330"
          stroke="url(#"
          style={{ stroke: 'url(#' + logoId + '-gold)' }}
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M90 315 C135 435, 365 435, 410 315"
          stroke="url(#"
          style={{ stroke: 'url(#' + logoId + '-blue)' }}
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />

        {/* 4. Stylized Letters "SA" (Bold foreground overlapping layers) */}
        {/* Letter "S" - Navy Blue and corporate styled */}
        <path
          d="M170 210 C170 180, 230 170, 240 210 C245 230, 210 240, 200 250 C180 270, 180 300, 220 310 C260 320, 280 280, 275 250"
          stroke="url(#"
          style={{ stroke: 'url(#' + logoId + '-blue)' }}
          strokeWidth="38"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Letter "A" - Yellow Gold Metallic gradient, overlapping S */}
        <path
          d="M230 305 L265 175 L300 305"
          stroke="url(#"
          style={{ stroke: 'url(#' + logoId + '-gold)' }}
          strokeWidth="38"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M242 265 L288 265"
          stroke="url(#"
          style={{ stroke: 'url(#' + logoId + '-gold)' }}
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Typography Side for Full and Horizontal variants */}
      {variant !== 'icon' && (
        <div className="flex flex-col text-left">
          <span className="font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 leading-tight">
            SHAHIN ALAM
          </span>
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-4 bg-slate-600 hidden min-[370px]:block" />
            <span className="text-[9px] min-[370px]:text-[10px] font-mono tracking-widest text-slate-300 uppercase leading-none font-bold">
              TECHNICAL SERVICES LLC
            </span>
            <span className="h-[1px] w-4 bg-slate-600 hidden min-[370px]:block" />
          </div>
        </div>
      )}
    </div>
  );
}
