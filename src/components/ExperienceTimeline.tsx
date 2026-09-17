'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Hospital, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = [
    {
      period: 'March 2025 – Present',
      role: 'Consultant General Surgeon',
      organization: 'Star Care Hospital Kozhikode',
      location: 'Kozhikode (Calicut), Kerala',
      badge: 'Current Clinical Appointment',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      isCurrent: true,
      description:
        'Conducting specialized OPD consultations, elective laparoscopic interventions (gallbladder, hernia, appendix), daycare laser proctology (LHP, FiLaC), and diabetic foot limb preservation surgeries at premier private hospital.',
      highlights: [
        'Dedicated Department of Minimally Invasive & Laser Surgery',
        'Regular OPD Consultations (Monday – Saturday)',
        'State-of-the-art Daycare Surgery Suite & VAC Therapy Unit',
      ],
    },
    {
      period: 'March 2024 – March 2025',
      role: 'Senior Resident, Department of General Surgery',
      organization: 'Government Medical College, Manjery',
      location: 'Manjery, Malappuram, Kerala',
      badge: 'Academic & Clinical Senior Residency',
      badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
      isCurrent: false,
      description:
        'Served as Senior Surgical Resident managing acute polytrauma, emergency laparotomies, elective abdominal surgery, and outpatient clinical care while mentoring surgical junior residents and medical interns.',
      highlights: [
        'High-volume acute abdomen & emergency surgical decision-making',
        'Performed independent major gastrointestinal & trauma operations',
        'Comprehensive perioperative patient management',
      ],
    },
    {
      period: '2020 – 2023',
      role: 'MS General Surgery Residency',
      organization: 'Government Medical College, Kozhikode',
      location: 'Kozhikode, Kerala',
      badge: 'Postgraduate Surgical Training',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      isCurrent: false,
      description:
        'Rigorous three-year surgical training at Kerala’s premier tertiary medical institution. Acquired deep surgical competencies in oncologic, endocrine, gastrointestinal, vascular, and emergency surgery.',
      highlights: [
        'Rotations through Surgical ICU, Trauma Ward & Endocrine Surgery',
        'Extensive operative log across general and laparoscopic cases',
        'Awarded Master of Surgery (MS) degree in 2023',
      ],
    },
    {
      period: '2012 – 2018',
      role: 'MBBS Degree & Rotating Surgical Clerkships',
      organization: 'Government Medical College, Kozhikode',
      location: 'Kozhikode, Kerala',
      badge: 'Undergraduate Medical Education',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      isCurrent: false,
      description:
        'Completed foundational undergraduate medical education and intensive 1-year rotatory internship with special focus on emergency resuscitation and surgical wards.',
      highlights: [
        'Rigorous clinical exposure across internal medicine and surgery',
        'Foundation for lifelong evidence-based surgical career',
      ],
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardStyles, setCardStyles] = useState([
    { scale: 1, opacity: 1, brightness: 1 },
    { scale: 1, opacity: 1, brightness: 1 },
    { scale: 1, opacity: 1, brightness: 1 },
    { scale: 1, opacity: 1, brightness: 1 },
  ]);

  useEffect(() => {
    let ticking = false;

    const updateStack = () => {
      const newStyles = experiences.map((_, i) => {
        let overlapScore = 0;
        // Check subsequent cards that have scrolled over card i
        for (let j = i + 1; j < experiences.length; j++) {
          const nextCard = cardRefs.current[j];
          if (nextCard) {
            const stickyTop = 84 + j * 30;
            const currentRect = nextCard.getBoundingClientRect();
            // Distance from next card's current top to its sticky resting position
            const diff = currentRect.top - stickyTop;
            if (diff <= 0) {
              overlapScore += 1;
            } else if (diff < 240) {
              // Smooth easing transition as it approaches and stacks
              overlapScore += (240 - diff) / 240;
            }
          }
        }

        // Each overlapping card slightly shrinks and softens the cards in the background
        const scale = Math.max(0.85, 1 - overlapScore * 0.048);
        const opacity = Math.max(0.75, 1 - overlapScore * 0.06);
        const brightness = Math.max(0.88, 1 - overlapScore * 0.035);

        return { scale, opacity, brightness };
      });

      setCardStyles(newStyles);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateStack);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateStack();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [experiences.length]);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white relative border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold font-heading text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block">
            Career Journey & Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            A proven record of clinical & surgical service.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
            From the demanding surgical casualty wards of Government Medical College Kozhikode to
            advanced laparoscopic and laser consultation at Star Care Hospital.
          </p>
        </div>

        {/* Stack on Scroll Cards Container */}
        <div className="relative w-full max-w-5xl mx-auto pb-64 sm:pb-96">
          {experiences.map((exp, idx) => {
            const zIndex = (idx + 1) * 10;
            const currentTransform = cardStyles[idx] || { scale: 1, opacity: 1, brightness: 1 };
            const isLast = idx === experiences.length - 1;
            const topOffset = 84 + idx * 30;

            return (
              <div
                key={idx}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                style={{
                  position: 'sticky',
                  top: `${topOffset}px`,
                  zIndex: zIndex,
                  transform: `scale(${currentTransform.scale})`,
                  transformOrigin: 'top center',
                  filter: `brightness(${currentTransform.brightness})`,
                  opacity: currentTransform.opacity,
                }}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-transform duration-150 ease-out shadow-2xl ${
                  isLast ? 'mb-0' : 'mb-24 sm:mb-36'
                } ${
                  exp.isCurrent
                    ? 'bg-gradient-to-br from-[#f0fdfa] via-white to-[#ecfdf5] border-teal-300 shadow-teal-950/15 ring-1 ring-teal-500/25'
                    : 'bg-white border-slate-200/90 shadow-slate-900/15'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] sm:text-xs font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full border ${exp.badgeColor}`}>
                    {exp.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-600 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 leading-snug">
                  {exp.role}
                </h3>

                <div className="flex items-center gap-2 text-sm font-semibold text-teal-800 mt-1">
                  <Hospital className="w-4 h-4 text-teal-600" />
                  <span>{exp.organization}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-medium">{exp.location}</span>
                </div>

                <p className="text-slate-600 text-sm font-body leading-relaxed mt-4">
                  {exp.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200/60 space-y-2">
                  {exp.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Sticky scroll travel spacer: ensures the complete 4-card stack stays pinned and visible together */}
          <div className="h-[75vh] sm:h-[85vh] pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
