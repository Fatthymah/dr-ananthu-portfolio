'use client';

import React, { useState } from 'react';
import { Zap, Eye, HeartPulse, Check, ArrowRight, Shield, Monitor } from 'lucide-react';

export default function TechnologyFeature() {
  const [selectedTech, setSelectedTech] = useState(0);

  const technologies = [
    {
      title: '1470nm Diode Radial Laser',
      badge: 'Laser Proctology (MMIP)',
      headline: 'Targeted submucosal photocoagulation without tissue excision.',
      description:
        'Instead of traditional scalpel excisions that damage delicate sphincter tissue, 1470nm radial laser fibers deliver circumferential thermal energy to obliterate hemorrhoidal cushions and seal fistula tracts from within.',
      benefits: [
        'Zero open surgical incisions',
        'Preservation of sphincter continence',
        'Virtually no postoperative bleeding',
        'Discharge within hours; normal walking next day',
      ],
      tag: 'Daycare Laser Technology',
    },
    {
      title: 'High-Definition Laparoscopic Tower',
      badge: 'Keyhole Surgery (FMAS)',
      headline: 'Micro-optical visualization with 5mm precision instrumentation.',
      description:
        'Magnified high-definition laparoscopes provide the surgeon with an expansive, illuminated view of the peritoneal cavity. Gallbladder stones and complex hernia defects are repaired with millimeter accuracy through tiny 5mm ports.',
      benefits: [
        'Tiny keyhole scars with excellent cosmetics',
        'Minimal post-operative pain requiring fewer painkillers',
        'Reduced risk of wound infection or incisional hernia',
        'Rapid 24–48 hour hospital discharge',
      ],
      tag: 'Advanced Minimal Access',
    },
    {
      title: 'Sub-Atmospheric VAC Therapy (NPWT)',
      badge: 'Diabetic Foot Salvage (FDFM)',
      headline: 'Continuous negative pressure accelerating ulcer bed granulation.',
      description:
        'Negative Pressure Wound Therapy (NPWT) creates a sealed sub-atmospheric environment that continuously removes bacterial exudate, reduces localized tissue edema, and drastically accelerates microvascular tissue regeneration.',
      benefits: [
        'Stimulates 3x faster healthy granulation tissue',
        'Prevents ascending systemic bacterial infections',
        'Minimizes requirement for extensive flap surgeries',
        'Key pillar in avoiding diabetic limb amputation',
      ],
      tag: 'Amputation Prevention Standard',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#061019] text-white relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold font-heading uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Modern Surgical Technology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
            Advanced medical instruments driving safer clinical outcomes.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed">
            By deploying cutting-edge laser diodes, high-definition laparoscopy towers, and vacuum
            closure systems, surgical care becomes safer, cleaner, and markedly less painful.
          </p>
        </div>

        {/* Featured Procedure Room Visual Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-teal-500/30 bg-slate-900/60 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative h-[250px] sm:h-[440px] overflow-hidden group">
              <img
                src="/images/doctor-procedure.jpg"
                alt="Dr. Ananthu N in the operating theater reviewing laparoscopic monitors"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#061019] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061019] via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-5 sm:p-10 space-y-4 text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-bold font-heading">
                <Monitor className="w-3.5 h-3.5" />
                <span>State-of-the-Art Surgical Theater</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight">
                High-Definition Laparoscopy & Laser Suites
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-body leading-relaxed">
                Utilizing advanced minimally invasive surgical suites, Dr. Ananthu operates with
                high-definition endoscopic monitors and micro-instrumentation to perform complex
                abdominal and daycare proctological procedures with millimeter precision.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-teal-200">
                <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/15">
                  1080p Optical Towers
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/15">
                  Zero-Blood Laser Ablation
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/15">
                  Sub-Atmospheric VAC Dressings
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Tech Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {technologies.map((tech, idx) => {
            const isSelected = selectedTech === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedTech(idx)}
                className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#0c202e] border-teal-500/80 shadow-xl shadow-teal-950/40 ring-1 ring-teal-400/30'
                    : 'bg-[#091722]/80 border-white/10 hover:border-white/25 hover:bg-[#0c202e]/60'
                }`}
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      {tech.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white leading-snug">
                    {tech.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-teal-200 leading-snug">
                    {tech.headline}
                  </p>

                  <p className="text-xs text-slate-300 font-body leading-relaxed pt-2 border-t border-white/10">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Clinical Advantages:
                  </span>
                  {tech.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
