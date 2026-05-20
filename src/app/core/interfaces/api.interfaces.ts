/* ── Shared API response wrapper ─────────────────────────── */
export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

/* ── CV ──────────────────────────────────────────────────── */
export interface PersonalInfo {
  name: string;
  jobTitle: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  endDate: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface CvPayload {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  languages: Language[];
}

/* ── Job Application ─────────────────────────────────────── */
export type ApplicationStatus = 'Sent' | 'Viewed' | 'Interviewing' | 'Offer' | 'Rejected';

export interface Application {
  company: string;
  title: string;
  date: string;
  status: ApplicationStatus;
}

/* ── Auth ────────────────────────────────────────────────── */
export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends AuthCredentials {
  name: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

/* ── Subscription ────────────────────────────────────────── */
export interface Plan {
  name: string;
  price: string;
  features: string[];
  isCurrent: boolean;
}
