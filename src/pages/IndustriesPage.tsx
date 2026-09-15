import React from 'react';
import { 
  Building2, GraduationCap, Landmark, Users, 
  Building, BookOpen, ShieldCheck, ArrowRight, ChevronRight, CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';

interface IndustriesPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

interface SectorCard {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  overview: string;
  challenges: string[];
  recommendedSolutions: string[];
  impactOutcome: string;
}

const SECTORS: SectorCard[] = [
  {
    id: 'universities',
    title: 'Universities & Higher Education Colleges',
    subtitle: 'NEP 2020, CBCS Credit Engines & NAAC Accreditation Automation',
    icon: GraduationCap,
    overview: 'Autonomous universities, constituent colleges, and affiliated institutions require high-throughput student lifecycles, complex exam grading, and digital library automation.',
    challenges: [
      'Manual compilation of thousands of course credits across semesters',
      'Long queues during admissions and fee reconciliation',
      'Scattered data hindering rapid NAAC SSR / NIRF reporting'
    ],
    recommendedSolutions: [
      'Samnvya NextGen EduSuite (Institutional ERP)',
      'Digital Library Management with Barcode/RFID Sync',
      'Student Online Fee Gateway with Bank Reconciliation',
      'Encrypted Examination Result Processing & QR Marksheets'
    ],
    impactOutcome: '100% paperless workflow with verified student credentialing'
  },
  {
    id: 'autonomous-colleges',
    title: 'Autonomous Institutions & Examination Boards',
    subtitle: 'High-Integrity Result Management, Confidentiality & OMR Audits',
    icon: BookOpen,
    overview: 'Institutions with academic autonomy need independent examination controllership, confidential marks coding, and zero-error grade calculation.',
    challenges: [
      'Confidentiality risks during physical marks handling',
      'Delayed result declarations affecting student career prospects',
      'Time-consuming manual recalculations and re-evaluation processing'
    ],
    recommendedSolutions: [
      'Confidential Exam Controller Engine with Fictitious Roll Coding',
      'Automated Moderation & Grace Mark Rules Execution',
      'Digital Marksheet Dispatch with Tamper-Proof Cryptographic QR Codes'
    ],
    impactOutcome: 'Result publication lead times compressed from weeks to hours'
  },
  {
    id: 'government-public',
    title: 'Government Bodies & Public Organizations',
    subtitle: 'B2G Digital Services, Citizen Transparency & Sovereign Hosting',
    icon: Landmark,
    overview: 'State departments, autonomous boards, and municipal agencies demanding strict compliance with Indian IT Act, cyber safety norms, and GeM procurement standards.',
    challenges: [
      'Paper registry congestion and slow intra-department file movements',
      'Need for sovereign Indian hosting on certified datacenters',
      'Strict audit accountability and RTI compliance'
    ],
    recommendedSolutions: [
      'Digital Organisation & File Dispatch Tracking System',
      'Visitor Security & Entry-Exit Biometric Logs',
      'Bespoke e-Governance Platform Engineering'
    ],
    impactOutcome: 'Real-time departmental file tracing with immutable audit logs'
  },
  {
    id: 'community-trusts',
    title: 'Community Foundations & Social Trusts',
    subtitle: 'Membership Registries, Scholarships & Matrimonial Services',
    icon: Users,
    overview: 'Community panchayats, welfare associations, and charitable societies seeking to connect their demographic base and disburse financial aid transparently.',
    challenges: [
      'Disconnected member registries and outdated family address records',
      'Disorganized manual scholarship application verification',
      'Need for dignified, private community matrimonial matchmaking'
    ],
    recommendedSolutions: [
      'Unified Community Member & Family Directory',
      'Matrimonial Portal with Verified Onboarding & Photo Privacy',
      'Transparent Student Scholarship & Welfare Disbursement Module'
    ],
    impactOutcome: 'Proven empowerment deployed for Pujya Sindhi Central Panchayat'
  },
  {
    id: 'shrines-temples',
    title: 'Religious Shrines & Temple Trusts',
    subtitle: 'Virtual Darshan, Zero-Lag Live Streaming & Transparent E-Donations',
    icon: Building,
    overview: 'Historic temples and spiritual trusts requiring high-concurrency broadcast architecture and audit-compliant digital donation receipts.',
    challenges: [
      'Overwhelming peak festival attendance spikes crashing standard websites',
      'Lack of virtual access for distant and elderly overseas devotees',
      'Manual cash donation accounting prone to bookkeeping discrepancies'
    ],
    recommendedSolutions: [
      'Official Temple Web Gateway with Zero-Latency Live Streaming',
      'Online Darshan & Festive Puja Booking Desks',
      'Audited E-Donation Gateway with Instant Digital Receipts'
    ],
    impactOutcome: 'Trusted by Khole Ke Hanuman Ji and Sankat Mochan Temples'
  },
  {
    id: 'enterprises-msmes',
    title: 'Enterprises & Commercial Organizations',
    subtitle: 'Smart Visitor Management, Workflow Digitisation & Web Engineering',
    icon: Building2,
    overview: 'Corporate offices, manufacturing plants, and service firms modernizing front-desk security, external website presence, and internal administrative approvals.',
    challenges: [
      'Insecure paper visitor logbooks at security reception gates',
      'Unstructured digital document storage and lack of version control',
      'Outdated static corporate websites with zero mobile responsiveness'
    ],
    recommendedSolutions: [
      'Contactless QR Visitor Pass & Host Approval Engine',
      'Enterprise Document Vault & Internal Circular Dispatch',
      'Custom Web Development, High-Speed Hosting & Dedicated AMC'
    ],
    impactOutcome: 'Enhanced workplace security and accelerated operational velocity'
  }
];

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onOpenLeadModal,
  onNavigatePage,
}) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto text-gray-200">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-6 font-mono">
        <button 
          onClick={() => onNavigatePage('home')}
          className="hover:text-[#FFD000] transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <span className="text-[#FFD000] font-bold">Industries</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#071330]/90 via-[#0a1e4a]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-14 mb-14 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Building2 className="w-3.5 h-3.5 mr-1.5" />
            DOMAIN-TAILORED ARCHITECTURES
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            Industries & <span className="text-[#FFD000]">Sectors</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            Information systems cannot follow a one-size-fits-all model. We engineer tailored architectures 
            specifically adapted to the regulatory, workflow, and data requirements of universities, autonomous colleges, 
            government bodies, community foundations, and religious shrines across Rajasthan.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenLeadModal('consultation', 'Industry-Specific Information Architecture')}
              className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Request Sector Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </button>
            <button
              onClick={() => onNavigatePage('solutions')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <span>Explore Solution Modules</span>
              <ChevronRight className="w-4 h-4 ml-1 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Sector Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {SECTORS.map((sec) => {
          const IconComp = sec.icon;
          return (
            <div
              key={sec.id}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-[#FFD000] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-black text-white uppercase font-sans mb-1 group-hover:text-[#FFD000] transition-colors">
                  {sec.title}
                </h3>

                <div className="text-xs font-mono text-amber-400/80 mb-4">
                  {sec.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
                  {sec.overview}
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                  <div className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Recommended Platforms:
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
                    {sec.recommendedSolutions.map((sol, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#FFD000] font-bold">
                  {sec.impactOutcome}
                </span>
                <button
                  onClick={() => onOpenLeadModal('demo', sec.title)}
                  className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#061638]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
