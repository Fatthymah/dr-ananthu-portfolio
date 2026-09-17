import { ClinicalOutcome } from '@/types';

export const clinicalOutcomes: ClinicalOutcome[] = [
  {
    id: 'lap-recovery',
    metric: '24 Hours',
    label: 'Average Hospital Stay',
    category: 'Laparoscopic Care',
    description:
      'Patients undergoing elective laparoscopic cholecystectomy or hernia repair achieve full oral intake and ambulation within hours, typically returning home the next day.',
    verificationBadge: 'Evidence-Based Protocol',
  },
  {
    id: 'laser-daycare',
    metric: '95%+',
    label: 'Same-Day Discharge',
    category: 'Laser Proctology',
    description:
      'By replacing surgical incisions with 1470nm radial laser ablation for piles and fissures, postoperative pain scores are reduced by over 70% compared to conventional surgery.',
    verificationBadge: 'MMIP Standards',
  },
  {
    id: 'limb-salvage',
    metric: 'Zero-Delay',
    label: 'Infection Containment',
    category: 'Diabetic Foot Care',
    description:
      'Combining emergency debridement, vacuum VAC dressings, and early offloading to save viable tissue, prevent ascending septicemia, and safeguard patient mobility.',
    verificationBadge: 'FDFM Protocol',
  },
  {
    id: 'wound-healing',
    metric: '3x Faster',
    label: 'Granulation Bed Formation',
    category: 'VAC Therapy',
    description:
      'Application of sub-atmospheric negative pressure wound therapy stimulates micro-capillary angiogenesis, accelerating healing in non-healing diabetic and chronic ulcers.',
    verificationBadge: 'Clinical Benchmark',
  },
];
