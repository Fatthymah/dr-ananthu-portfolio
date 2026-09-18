'use client';

import React, { useState, useEffect } from 'react';
import { clinicalPillars } from '@/data/specialtiesData';
import { ClinicalPillar } from '@/types';
import {
  Activity,
  Flame,
  ShieldAlert,
  Stethoscope,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  X,
} from 'lucide-react';

export default function SpecialtiesSection() {
  const [activeModalPillar, setActiveModalPillar] = useState<ClinicalPillar | null>(null);

  // Close modal on Escape key and handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalPillar(null);
      }
    };

    if (activeModalPillar) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalPillar]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return Activity;
      case 'Flame':
        return Flame;
      case 'ShieldAlert':
        return ShieldAlert;
      default:
        return Stethoscope;
    }
  };

  const getDomainImage = (id: string) => {
    switch (id) {
      case 'laparoscopy':
        return '/images/domains/laparoscopy.jpg';
      case 'proctology':
        return '/images/domains/proctology.jpg';
      case 'diabetic-foot':
        return '/images/domains/diabetic-foot.jpg';
      case 'general-surgery':
        return '/images/domains/general-surgery.jpg';
      default:
        return '/images/doctor-procedure.jpg';
    }
  };

  const getShortTagline = (id: string) => {
    switch (id) {
      case 'laparoscopy':
        return 'Keyhole surgical precision with 5mm micro-incisions for rapid 24–48h discharge.';
      case 'proctology':
        return 'Painless daycare laser procedures with non-cutting radial diode energy.';
      case 'diabetic-foot':
        return 'Dedicated multidisciplinary limb salvage protocols to prevent amputation.';
      default:
        return 'Comprehensive diagnostic evaluation & surgical care from emergency to elective.';
    }
  };

  const getBadgeStyle = (id: string) => {
    switch (id) {
      case 'laparoscopy':
        return 'bg-purple-500/20 text-purple-200 border-purple-400/30';
      case 'proctology':
        return 'bg-rose-500/20 text-rose-200 border-rose-400/30';
      case 'diabetic-foot':
        return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
      default:
        return 'bg-teal-500/20 text-teal-200 border-teal-400/30';
    }
  };

  return (
    <section id="specialties" className="py-20 sm:py-28 bg-[#fafbfc] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-heading uppercase tracking-widest text-teal-700 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200 inline-block">
            Specialized Surgical Domains
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Surgical care engineered for rapid, painless recovery.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed max-w-2xl mx-auto">
            Evidence-based keyhole laparoscopy, painless daycare laser proctology, and dedicated
            diabetic foot limb preservation—delivered with clinical precision in Kozhikode.
          </p>
        </div>

        {/* 4-Card Grid - Image-Focused Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {clinicalPillars.map((pillar) => {
            const Icon = getIcon(pillar.iconName);
            const badgeStyle = getBadgeStyle(pillar.id);
            const domainImage = getDomainImage(pillar.id);
            const tagline = getShortTagline(pillar.id);

            return (
              <div
                key={pillar.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveModalPillar(pillar)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalPillar(pillar);
                  }
                }}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/90 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between h-[360px] sm:h-[420px] bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {/* Clear, Vibrant Background Image with Smooth Hover Scale */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={domainImage}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle, Minimal Gradient: Top vignette for badge + bottom fade for title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/20 transition-opacity duration-300" />
                </div>

                {/* Top Row: Translucent Category Pill & Pillar Number */}
                <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                  <span className={`text-[10px] font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md shadow-xs ${badgeStyle}`}>
                    {pillar.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-white/90 bg-slate-900/60 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/20">
                    Pillar {pillar.number}
                  </span>
                </div>

                {/* Bottom Overlay: Minimal Content & Interactive Trigger */}
                <div className="relative z-10 p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-teal-300 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-tight drop-shadow-md">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] font-medium text-teal-300/90 mt-0.5">
                        Specialized Surgical Care
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 font-body leading-relaxed line-clamp-2 drop-shadow-xs">
                    {tagline}
                  </p>

                  <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center justify-between">
                    <span className="text-xs font-semibold text-teal-300 group-hover:text-teal-200 transition-colors">
                      View Details & Procedures
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-teal-500 group-hover:text-white border border-white/20 flex items-center justify-center text-slate-200 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-700 font-heading">
                Direct Clinical Consultation
              </p>
              <p className="text-sm font-semibold text-slate-800">
                Have questions about specialized surgical care? Discuss treatment options and recovery timelines during an OPD consultation.
              </p>
            </div>
          </div>

          <a
            href="#booking"
            className="px-5 py-2.5 bg-slate-900 hover:bg-teal-700 text-white rounded-xl text-xs font-bold font-heading transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Inquire With Doctor</span>
          </a>
        </div>
      </div>

      {/* Full Details Modal / Popup on Card Click */}
      {activeModalPillar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setActiveModalPillar(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-domain-title"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 text-slate-900 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header Banner */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0 bg-slate-950">
              <img
                src={getDomainImage(activeModalPillar.id)}
                alt={activeModalPillar.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

              {/* Close Button in Header */}
              <button
                type="button"
                onClick={() => setActiveModalPillar(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badges & Title in Banner */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold font-heading uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md ${getBadgeStyle(activeModalPillar.id)}`}>
                    {activeModalPillar.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-teal-300 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
                    Pillar {activeModalPillar.number}
                  </span>
                </div>
                <h3 id="modal-domain-title" className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white leading-tight">
                  {activeModalPillar.title}
                </h3>
                <p className="text-xs font-semibold text-teal-300 mt-0.5">
                  Kozhikode, Kerala • Specialized Care
                </p>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
              {/* Summary Description */}
              <div>
                <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed border-l-3 border-teal-600 pl-3.5 bg-teal-50/40 p-3 rounded-r-xl">
                  {activeModalPillar.summary}
                </p>
              </div>

              {/* Clinical Highlights Strip */}
              <div className="space-y-3">
                <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Clinical Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalPillar.highlightPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Surgical Procedures */}
              <div className="space-y-3 border-t border-slate-200/80 pt-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-heading font-semibold uppercase tracking-wider text-slate-800">
                    Key Surgical Procedures ({activeModalPillar.procedures.length})
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    Daycare & Inpatient
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalPillar.procedures.map((proc, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-500/40 hover:bg-teal-50/20 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                            {proc.daycare ? 'Daycare' : 'Inpatient'}
                          </span>
                          <div className="flex items-center gap-1 text-[10px] font-semibold text-teal-700">
                            <Clock className="w-2.5 h-2.5" />
                            <span>{proc.recoveryTime}</span>
                          </div>
                        </div>
                        <h5 className="font-heading font-semibold text-xs sm:text-sm text-slate-900 leading-snug">
                          {proc.name}
                        </h5>
                        <p className="text-[11px] text-slate-600 font-body mt-1 leading-snug">
                          {proc.technique}
                        </p>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-slate-200/80">
                        <p className="text-[10px] font-semibold text-teal-800">
                          <span className="text-slate-400 font-normal">Benefit: </span>
                          {proc.benefits}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Sticky Actions */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500 font-body hidden sm:inline">
                OPD consultations available Mon–Sat
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModalPillar(null)}
                  className="px-4 py-2 rounded-xl text-xs font-heading font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`#booking?specialty=${encodeURIComponent(activeModalPillar.title)}`}
                  onClick={() => setActiveModalPillar(null)}
                  className="px-4 py-2 bg-slate-900 hover:bg-teal-700 text-white rounded-xl text-xs font-bold font-heading transition-all inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
