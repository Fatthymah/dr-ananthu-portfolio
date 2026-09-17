export interface DoctorProfile {
  name: string;
  salutation: string;
  designation: string;
  shortBio: string;
  degrees: string[];
  fellowships: {
    code: string;
    name: string;
    year: string;
    institution: string;
    description: string;
  }[];
  affiliations: {
    role: string;
    organization: string;
  }[];
  currentRole: {
    title: string;
    hospital: string;
    location: string;
    since: string;
  };
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    linkedIn: string;
    whatsappNumber: string;
  };
  philosophy: string;
  bioParagraphs: string[];
}

export interface Procedure {
  name: string;
  technique: string;
  benefits: string;
  daycare: boolean;
  recoveryTime: string;
}

export interface ClinicalPillar {
  id: string;
  number: string;
  title: string;
  badge: string;
  summary: string;
  iconName: 'Activity' | 'Flame' | 'ShieldAlert' | 'Stethoscope';
  colorTheme: string;
  highlightPoints: string[];
  procedures: Procedure[];
}

export interface HospitalSchedule {
  hospitalName: string;
  tagline: string;
  department: string;
  address: string;
  city: string;
  days: string;
  timings: string;
  phone: string;
  displayPhone: string;
  emergencyPhone: string;
  email: string;
  bookingNote: string;
  mapEmbedUrl?: string;
  googleMapsUrl: string;
}

export interface ClinicalOutcome {
  id: string;
  metric: string;
  label: string;
  category: string;
  description: string;
  verificationBadge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'laparoscopy' | 'proctology' | 'diabetic-foot' | 'general';
}
