import { DoctorProfile } from '@/types';

export const doctorData: DoctorProfile = {
  name: 'Dr. Ananthu N',
  salutation: 'Dr.',
  designation: 'Specialist General Surgeon',
  shortBio:
    'Specialist General Surgeon based in Kozhikode, Kerala, with advanced fellowship training in Minimal Access Surgery (FMAS), Laser Proctology (MMIP), and Diabetic Foot Limb Salvage (FDFM). Consultant at Star Care Hospital Kozhikode.',
  degrees: ['MBBS', 'MS (General Surgery)', 'DNB (General Surgery)'],
  fellowships: [
    {
      code: 'FMAS',
      name: 'Fellowship in Minimal Access Surgery',
      year: '2024',
      institution: 'Association of Minimal Access Surgeons of India (AMASI)',
      description: 'Advanced surgical training in laparoscopic keyhole procedures including cholecystectomy, hernia repairs, and appendectomy.',
    },
    {
      code: 'MMIP',
      name: 'Master Course in Minimal Invasive Proctology',
      year: '2025',
      institution: 'Specialized Laser & Proctology Training Institute',
      description: 'Painless, daycare laser procedures for hemorrhoids/piles (LHP), anal fissures, complex fistulas (FiLaC), and pilonidal sinus.',
    },
    {
      code: 'FDFM',
      name: 'Fellowship in Diabetic Foot Management',
      year: '2025',
      institution: 'Advanced Wound Care & Podiatric Surgery Center',
      description: 'Dedicated limb salvage protocol, surgical debridement, vacuum-assisted VAC therapy, and biomechanical offloading to prevent amputations.',
    },
  ],
  affiliations: [
    {
      role: 'Active Member',
      organization: 'Association of Surgeons of India (ASI)',
    },
    {
      role: 'Active Member',
      organization: 'Association of Minimal Access Surgeons of India (AMASI)',
    },
    {
      role: 'Alumnus',
      organization: 'Government Medical College, Kozhikode',
    },
  ],
  currentRole: {
    title: 'Consultant General Surgeon',
    hospital: 'Star Care Hospital',
    location: 'Kozhikode, Kerala',
    since: 'March 2025 – Present',
  },
  contact: {
    phone: '8891468763',
    displayPhone: '+91 88914 68763',
    email: 'ananthu.nandakumar@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/dr-ananthu-n-123223134',
    whatsappNumber: '918891468763',
  },
  philosophy:
    'Precision in surgery, clarity in decision-making, and genuine care for every patient.',
  bioParagraphs: [
    'Dr. Ananthu N is a Specialist General Surgeon based in Kozhikode, Kerala, dedicated to delivering modern, precise, and patient-centred surgical care. He completed his MBBS (2012–2018) and his MS in General Surgery (2020–2023) from Government Medical College Kozhikode, one of Kerala’s premier institutes for surgical training.',
    'Following his postgraduate residency, Dr. Ananthu served as a Senior Resident in the Department of General Surgery at Government Medical College, Manjery (March 2024 – March 2025), gaining extensive experience in handling complex trauma, acute surgical emergencies, and high-volume surgical care.',
    'With a strong commitment to minimally invasive patient outcomes, he pursued three focused sub-specialty fellowships: Fellowship in Minimal Access Surgery (FMAS), Master Course in Minimal Invasive Proctology (MMIP), and Fellowship in Diabetic Foot Management (FDFM).',
    'Currently practicing as Consultant General Surgeon at Star Care Hospital Kozhikode, his clinical focus combines sound surgical fundamentals with cutting-edge laparoscopic keyhole techniques, daycare laser proctology, and dedicated diabetic foot limb preservation pathways.',
  ],
};
