import React from 'react';

export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={`${className} transform transition-transform duration-300 hover:scale-105`} viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      
      <circle 
        cx="400" 
        cy="400" 
        r="350" 
        stroke="currentColor"
        strokeWidth="50" 
        strokeDasharray="80"
      />

      {/* Main "OUP" text - larger and not rounded */}
      <text 
        x="150" 
        y="500" 
        fontSize="400" 
        fill="currentColor" 
        fontFamily="Arial" 
        fontWeight="bold"
        style={{ letterSpacing: '10px' }}
      >
        OUP
      </text>

      {/* Arrow - larger */}
      <text 
        x="650" 
        y="280" 
        fontSize="200" 
        fill="currentColor" 
        fontFamily="Arial" 
        fontWeight="bold"
      >
        ↗
      </text>

      {/* "Agency" text - much smaller */}
      <text 
        x="400" 
        y="650" 
        fontSize="30" 
        fill="currentColor" 
        fontFamily="Arial"
        textAnchor="middle"
      >
        Agency
      </text>
    </svg>
  );
}