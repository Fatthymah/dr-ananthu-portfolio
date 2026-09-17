'use client';

import React from 'react';
import { clinicalPillars } from '@/data/specialtiesData';
import {
  Activity,
  Flame,
  ShieldAlert,
  Stethoscope,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export default function SpecialtiesSection() {
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

  const getBadgeStyle = (id: string) => {
    switch (id) {
      case 'laparoscopy':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'proctology':
        return 'bg-rose-50 text-rose-800 border-rose-200';
      case 'diabetic-foot':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-teal-50 text-teal-800 border-teal-200';
    }
  };

  return (
    <section id="specialties" className="py-20 sm:py-28 bg-[#fafbfc] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Matching CredentialsGrid style */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-heading uppercase tracking-widest text-teal-700 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200 inline-block">
            Specialized Surgical Domains
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Surgical care engineered for rapid, painless recovery.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed max-w-2xl mx-auto">
            Evidence-based keyhole laparoscopy, painless daycare laser proctology, and dedicated
            diabetic foot limb preservation—delivered with precision at Star Care Hospital Kozhikode.
          </p>
        </div>

        {/* 4-Card Grid - Matching CredentialsGrid Card Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {clinicalPillars.map((pillar) => {
            const Icon = getIcon(pillar.iconName);
            const badgeStyle = getBadgeStyle(pillar.id);

            return (
              <div
                key={pillar.id}
                className="bg-white hover:bg-slate-50/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/90 hover:border-teal-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Badge + Number */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`text-[10px] font-extrabold font-heading uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border ${badgeStyle}`}>
                      {pillar.badge}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200/80">
                      Pillar {pillar.number}
                    </span>
                  </div>

                  {/* Icon + Title + Credential Subtitle */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-semibold text-teal-700 mt-0.5">
                        Star Care Hospital Kozhikode • Specialized Care
                      </p>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed mt-2">
                    {pillar.summary}
                  </p>

                  {/* Clinical Highlights Strip */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Clinical Highlights
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pillar.highlightPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Surgical Procedures */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-400">
                        Key Surgical Procedures
                      </p>
                      <span className="text-[10px] font-mono text-slate-400">
                        {pillar.procedures.length} Procedures
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.procedures.map((proc, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:border-teal-400/40 hover:bg-teal-50/20 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                                {proc.daycare ? 'Daycare' : 'Hospital'}
                              </span>
                              <div className="flex items-center gap-1 text-[10px] font-semibold text-teal-700">
                                <Clock className="w-2.5 h-2.5" />
                                <span>{proc.recoveryTime}</span>
                              </div>
                            </div>
                            <h4 className="font-heading font-bold text-xs text-slate-900 leading-snug">
                              {proc.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 font-body mt-1 leading-snug line-clamp-2">
                              {proc.technique}
                            </p>
                          </div>
                          <div className="mt-2 pt-1.5 border-t border-slate-200/60">
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

                {/* Card Bottom CTA */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500 font-body">
                    OPD consultations available Mon–Sat
                  </div>
                  <a
                    href={`#booking?specialty=${encodeURIComponent(pillar.title)}`}
                    className="px-4 py-2 bg-slate-900 hover:bg-teal-700 text-white rounded-xl text-xs font-bold font-heading transition-all inline-flex items-center gap-1.5 shrink-0 shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consult</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner - Matching Ribbon Style from CredentialsGrid */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-700 font-heading">
                Direct Consultation at Star Care Hospital
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
    </section>
  );
}
