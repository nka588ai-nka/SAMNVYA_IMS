export type PageId = 
  | 'home' 
  | 'about-us' 
  | 'solutions' 
  | 'industries' 
  | 'corporate' 
  | 'social-impact' 
  | 'business-with-us' 
  | 'opportunities' 
  | 'projects' 
  | 'events-news' 
  | 'videos' 
  | 'photos' 
  | 'contact-us';

export interface SolutionModule {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: 'infomgmt' | 'erp' | 'library' | 'community' | 'business' | 'webcloud' | 'specialized';
  icon: string;
  badge?: string;
  benefits: string[];
  targetAudience: string[];
  features: string[];
  workflow: { step: number; title: string; desc: string }[];
  securityHighlights: string[];
  faqs: { question: string; answer: string }[];
  brochureUrl?: string;
}

export interface SolutionCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  modules: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  institutionType: 'University' | 'College' | 'Department' | 'Autonomous Body' | 'Community / Temple';
  location: string;
  challenge: string;
  samnvyaSolution: string;
  deliveredModules: string[];
  substantiatedOutcome: string;
  period: string;
  badge: string;
}

export interface IndustrySector {
  id: string;
  name: string;
  headline: string;
  description: string;
  icon: string;
  recommendedSolutions: string[];
  keyPainPoints: string[];
  deliverables: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export interface NewsEventItem {
  id: string;
  type: 'Deployment' | 'MoU / Partnership' | 'Workshop' | 'Milestone' | 'Notice';
  title: string;
  date: string;
  organization: string;
  summary: string;
  linkText?: string;
}

export interface BrochureItem {
  id: string;
  title: string;
  category: string;
  pages: string;
  size: string;
  summary: string;
  highlights: string[];
  downloadName: string;
}

export interface LeadSubmission {
  fullName: string;
  organizationName: string;
  designation: string;
  email: string;
  mobile: string;
  city: string;
  orgType: 'University / Higher Ed' | 'College / School' | 'Government / Autonomous' | 'Enterprise / SME' | 'Community / Association' | 'Other';
  solutionOfInterest: string;
  userCount?: string;
  estimatedTimeline?: string;
  projectRequirements: string;
  consent: boolean;
  type: 'demo' | 'quotation' | 'consultation' | 'brochure';
}

export interface WizardQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    icon: string;
    value: string;
  }[];
}

export interface WizardRecommendation {
  primarySolution: string;
  matchScore: number;
  description: string;
  recommendedModules: string[];
  implementationWeeks: string;
  keyBenefits: string[];
}
