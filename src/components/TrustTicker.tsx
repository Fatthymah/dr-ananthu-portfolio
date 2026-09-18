'use client';

import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';

export default function TrustTicker() {
  const items = [
    'Association of Surgeons of India (ASI)',
    'Association of Minimal Access Surgeons of India (AMASI)',
    'Government Medical College Kozhikode Alumnus',
    'Consultant General & Laparoscopic Surgeon',
    'Fellow in Minimal Access Surgery (FMAS)',
    'Master in Minimal Invasive Proctology (MMIP)',
    'Fellow in Diabetic Foot Management (FDFM)',
    'National Board of Examinations (DNB General Surgery)',
  ];

  return (
    <div className="w-full py-4 bg-[#091b27] text-white border-y border-teal-500/20 overflow-hidden relative select-none">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#091b27] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#091b27] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0 px-2">
            <span className="text-xs sm:text-sm font-heading font-semibold text-slate-200 tracking-wide">
              {item}
            </span>
            <span className="text-teal-400 text-sm font-black">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
