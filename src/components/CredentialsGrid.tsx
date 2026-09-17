'use client';

import React from 'react';
import { doctorData } from '@/data/doctorData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

export default function CredentialsGrid() {
  const credentials = [
    {
      code: 'MBBS',
      title: 'Bachelor of Medicine & Surgery',
      institution: 'Government Medical College, Kozhikode',
      period: '2012 – 2018',
      type: 'Primary Medical Degree',
      badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
      description:
        'Comprehensive clinical training covering medical sciences, clinical rotations, diagnostics, and foundational trauma care.',
    },
    {
      code: 'MS (General Surgery)',
      title: 'Master of Surgery',
      institution: 'Government Medical College, Kozhikode',
      period: '2020 – 2023',
      type: 'Postgraduate Surgical Degree',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      description:
        'Three years of intensive surgical residency handling high-volume emergency trauma, open laparotomies, endocrine, and oncologic surgical procedures.',
    },
    {
      code: 'DNB',
      title: 'Diplomate of National Board',
      institution: 'National Board of Examinations, New Delhi',
      period: '2024',
      type: 'National Board Credential',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      description:
        'Prestigious national specialty certification validating advanced surgical competency and adherence to rigorous national standards.',
    },
    {
      code: 'FMAS',
      title: 'Fellowship in Minimal Access Surgery',
      institution: 'AMASI / World Laparoscopy Center',
      period: '2024',
      type: 'Super-Specialty Fellowship',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      description:
        'Advanced hands-on fellowship in keyhole laparoscopic techniques, advanced knotting, camera navigation, and minimally invasive abdominal procedures.',
    },
    {
      code: 'MMIP',
      title: 'Minimal Invasive Proctology',
      institution: 'Advanced Laser & Proctology Institute',
      period: '2025',
      type: 'Specialized Master Certification',
      badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
      description:
        'Comprehensive mastery of 1470nm diode laser surgery for piles (LHP), complex fistula closure (FiLaC), fissures, and pilonidal disease.',
    },
    {
      code: 'FDFM',
      title: 'Fellowship in Diabetic Foot Management',
      institution: 'National Center for Wound Care & Podiatry',
      period: '2025',
      type: 'Amputation Prevention Fellowship',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      description:
        'Specialized fellowship in surgical limb preservation, vacuum-assisted closure (VAC), biomechanical offloading, and aggressive ulcer salvage.',
    },
  ];

  return (
    <section id="qualifications" className="py-20 sm:py-28 bg-[#0b1f2d] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(13,148,136,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold font-heading uppercase tracking-widest text-teal-300 bg-teal-500/20 px-4 py-1.5 rounded-full border border-teal-500/30 inline-block backdrop-blur-md">
            Medical Degrees & Surgical Fellowships
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Rigorous surgical training from premiere institutions.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed max-w-2xl mx-auto">
            Dr. Ananthu N has systematically built expertise through government medical college
            training and targeted surgical fellowships to ensure optimal patient safety and outcomes.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="bg-white/10 hover:bg-white/15 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/15 hover:border-teal-400/40 transition-all duration-300 shadow-md hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-extrabold font-heading uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border ${cred.badgeColor}`}>
                    {cred.type}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-teal-300 bg-slate-900/60 px-2.5 py-0.5 rounded-md border border-white/10">
                    {cred.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-black text-white leading-snug">
                  {cred.code}
                </h3>
                <p className="text-xs font-semibold text-teal-200 mt-1">
                  {cred.title}
                </p>
                <p className="text-xs font-medium text-slate-300 mt-0.5">
                  {cred.institution}
                </p>

                <p className="text-xs text-slate-300/90 font-body leading-relaxed mt-4 pt-4 border-t border-white/10">
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Memberships Ribbon */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-teal-300">
                Professional Memberships
              </p>
              <p className="text-sm font-semibold text-white">
                Association of Surgeons of India (ASI) • Association of Minimal Access Surgeons of India (AMASI)
              </p>
            </div>
          </div>

          <a
            href="#booking"
            className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold font-heading transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Consult Dr. Ananthu N</span>
          </a>
        </div>
      </div>
    </section>
  );
}
