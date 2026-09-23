'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-2 sm:pt-4 pb-8 sm:pb-14 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Editorial Hero Card Container */}
        <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between bg-slate-950">
          
          {/* Background Doctor Photo + Extended Green Wave Layer */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            {/* Background Doctor Photo - Seated in Modern Hospital Clinic Office */}
            <img
              src="/images/doctor-hero-real.png"
              alt="Dr. Ananthu N - Specialist General Surgeon"
              className="w-full h-full object-cover object-[78%_25%] sm:object-center select-none"
            />

            {/* Extended Green Wave - Covers all white text completely */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              <svg
                className="w-full h-full"
                viewBox="0 0 1400 800"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="heroEmeraldWave" x1="0%" y1="15%" x2="90%" y2="85%">
                    <stop offset="0%" stopColor="#047857" stopOpacity="0.98" />
                    <stop offset="30%" stopColor="#059669" stopOpacity="0.96" />
                    <stop offset="60%" stopColor="#10b981" stopOpacity="0.92" />
                    <stop offset="85%" stopColor="#16a34a" stopOpacity="0.82" />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                  </linearGradient>
                  <filter id="waveSoftBlur" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="35" />
                  </filter>
                </defs>

                {/* Primary Organic Wave - Extended to x=860-920 in the middle and across bottom to 100% cover the white text */}
                <path
                  d="M 0 0 L 820 0 C 720 160 680 240 740 340 C 820 440 920 480 940 560 C 960 660 980 740 1020 800 L 0 800 Z"
                  fill="url(#heroEmeraldWave)"
                />

                {/* Secondary Soft Ambient Wave - Deep atmospheric glow reaching near the doctor */}
                <path
                  d="M 0 50 L 760 50 C 680 180 660 280 740 400 C 840 520 980 580 1040 680 C 1100 750 1150 780 1200 800 L 0 800 Z"
                  fill="#059669"
                  opacity="0.4"
                  filter="url(#waveSoftBlur)"
                />
              </svg>
            </div>

            {/* Mobile & Tablet Responsive Gradient Overlay - 100% text contrast coverage */}
            <div className="absolute inset-0 md:hidden bg-gradient-to-t from-emerald-950/98 via-emerald-900/90 to-emerald-800/60 pointer-events-none" />
          </div>

          {/* Top spacer so hero text sits cleanly below the fixed header pill */}
          <div className="w-full pt-16 sm:pt-20 px-2.5 sm:px-6 relative z-10" aria-hidden="true" />

          {/* Bottom/Foreground: Hero Essential Text & CTA Button (Fully Enclosed within the Green) */}
          <div className="relative z-20 w-full p-5 sm:p-12 lg:p-16 pb-10 sm:pb-16 max-w-xl text-left space-y-3 sm:space-y-6">
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.18] drop-shadow-sm break-words">
              Strategic Precision.
              <br />
              Compassionate Care.
            </h1>

            {/* Concise Description - 100% on Green Background */}
            <p className="text-xs sm:text-base lg:text-lg text-white/95 font-body leading-relaxed drop-shadow-xs max-w-lg">
              Specialist General & Minimally Invasive Surgeon based in Kozhikode. Dedicated to advanced laparoscopic surgery, painless daycare proctology, and limb-salvage wound management.
            </p>

            {/* Pill CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 min-h-[48px] bg-white text-slate-900 hover:bg-slate-100 rounded-full font-heading font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:scale-105 active:scale-95 transition-all group cursor-pointer"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
