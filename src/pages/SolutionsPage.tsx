import React, { useState } from 'react';
import { 
  BookOpen, Layers, Database, CreditCard, UserCheck, 
  MessageSquare, GraduationCap, Briefcase, Heart, Users, 
  Globe, Wrench, Video, Cpu, Search, CheckCircle2, 
  ArrowRight, ChevronRight, ShieldCheck, Sparkles, Building
} from 'lucide-react';
import { PageId } from '../types';

interface SolutionsPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

interface SolutionItem {
  id: string;
  name: string;
  category: 'Education & Institutional' | 'Community & Social' | 'Web & Digital' | 'Specialised Services';
  icon: any;
  shortDesc: string;
  benefits: string[];
  badge?: string;
}

const ALL_SOLUTIONS: SolutionItem[] = [
  // A. Education & Institutional Technology
  {
    id: 'digital-library',
    name: 'Digital Library Management',
    category: 'Education & Institutional',
    icon: BookOpen,
    badge: 'Flagship Deployed',
    shortDesc: 'End-to-end digitisation of institutional libraries, MARC21/Dublin Core cataloguing, barcode/RFID tracking, patron member portals, and OPAC discovery terminals.',
    benefits: [
      'Eliminates lost books and manual paper accession registers',
      'Instant barcode & QR scanning at issue/return counters',
      'Deployed at prestigious colleges like Maharani & Maharaja, Jaipur'
    ]
  },
  {
    id: 'institutional-erp',
    name: 'Institutional ERP (Samnvya NextGen EduSuite)',
    category: 'Education & Institutional',
    icon: Layers,
    badge: 'NEP 2020 Compliant',
    shortDesc: 'Integrated academic and administrative management covering admissions, faculty workload, timetable scheduling, CBCS credits, and encrypted examination result processing.',
    benefits: [
      'Unified cloud system replacing disconnected spreadsheets',
      'Tamper-proof digital marksheets with verifiable QR codes',
      'Automated parent notifications and attendance analytics'
    ]
  },
  {
    id: 'digital-organisation',
    name: 'Digital Organisation & Workflow Automation',
    category: 'Education & Institutional',
    icon: Database,
    shortDesc: 'Digital systems for converting internal paperwork, circulars, department notes, approvals, and dispatches into searchable, auditable digital records.',
    benefits: [
      'Role-based permissions with encrypted file storage',
      'Real-time dispatch tracking and clearance workflows',
      'Substantial reduction in physical paper consumption'
    ]
  },
  {
    id: 'student-fees',
    name: 'Student Fees & Financial Management',
    category: 'Education & Institutional',
    icon: CreditCard,
    shortDesc: 'End-to-end digital fee management with automated fee structures, installment tracking, online bank payment gateway integration, and instant computerized receipts.',
    benefits: [
      'Direct reconciliation with institutional bank accounts',
      'Automatic SMS/email fee reminders to parents',
      'Detailed defaulter lists and concession audit ledgers'
    ]
  },
  {
    id: 'visitor-tracking',
    name: 'Visitor Tracking & Campus Security',
    category: 'Education & Institutional',
    icon: UserCheck,
    shortDesc: 'Contactless visitor registration, host faculty approval alerts, digital pass generation, and automated timestamped entry-exit security logs.',
    benefits: [
      'Replaces insecure paper visitor logbooks at campus gates',
      'Photo capture and identity verification',
      'Overstay alerts and multi-gate synchronization'
    ]
  },
  {
    id: 'digital-feedback',
    name: 'Digital Feedback & NAAC/NIRF Analytics',
    category: 'Education & Institutional',
    icon: MessageSquare,
    shortDesc: 'Structured online feedback collection from students, alumni, parents, and faculty with automated graphical reports aligned with accreditation requirements.',
    benefits: [
      'Anonymous or verified feedback submission options',
      'Automated metric aggregation for NAAC SSR criteria',
      'Course evaluation and faculty appraisal analytics'
    ]
  },
  {
    id: 'alumni-network',
    name: 'Alumni Network & Engagement Platform',
    category: 'Education & Institutional',
    icon: Users,
    shortDesc: 'Centralized alumni directory, verified batch registries, mentorship connections, fundraising campaign management, and alumni reunion event portals.',
    benefits: [
      'Lifelong institutional connection for graduating batches',
      'Direct alumni-to-student career mentorship desks',
      'Secure donation collection for institutional endowments'
    ]
  },
  {
    id: 'educational-tech',
    name: 'Educational Technology & Academic Systems',
    category: 'Education & Institutional',
    icon: GraduationCap,
    shortDesc: 'Technology-supported learning, digital question banks, academic repository access, and online continuous assessment modules for modern pedagogy.',
    benefits: [
      'Centralized e-content distribution for students',
      'Online quizzes and internal continuous assessments',
      'Accessible across desktop and mobile devices'
    ]
  },

  // B. Community & Social Digital Services
  {
    id: 'job-portal',
    name: 'Employment / Job Portal',
    category: 'Community & Social',
    icon: Briefcase,
    badge: 'Social Inclusion',
    shortDesc: 'Accessible digital employment portal designed to connect job seekers with verified local and institutional opportunities without commercial exploitation.',
    benefits: [
      'Free registration and resume profile builder for candidates',
      'Direct recruitment desk for regional employers and colleges',
      'Dedicated placement cell management for institutions'
    ]
  },
  {
    id: 'matrimonial-portal',
    name: 'Matrimonial & Community Connection Portal',
    category: 'Community & Social',
    icon: Heart,
    badge: 'Community Verified',
    shortDesc: 'Dignified, privacy-compliant matchmaking platforms deployed for community panchayats, societies, and trusts with verified family profile onboarding.',
    benefits: [
      'Strict photo blur and identity privacy controls',
      'Community trust administrative verification',
      'Support for online parichay sammelans and regional directories'
    ]
  },
  {
    id: 'membership-portal',
    name: 'Membership & Association Management',
    category: 'Community & Social',
    icon: Users,
    shortDesc: 'Digital registration, digital ID card issuance, annual subscription renewal tracking, and broadcast communication for professional and social bodies.',
    benefits: [
      'Automated digital member credential generation',
      'Direct online renewal via payment gateways',
      'Member directory with privacy-filtered views'
    ]
  },
  {
    id: 'community-platforms',
    name: 'Community Welfare & Society Platforms',
    category: 'Community & Social',
    icon: Building,
    shortDesc: 'Customised digital portals for associations and non-profits combining scholarship distribution, welfare news, obituary notices, and event tracking.',
    benefits: [
      'Documented deployment for Pujya Sindhi Central Panchayat',
      'Transparent community donation and aid distribution',
      'Bilingual content support in English and Hindi'
    ]
  },

  // C. Web & Digital Services
  {
    id: 'web-development',
    name: 'Website Development & Modernization',
    category: 'Web & Digital',
    icon: Globe,
    shortDesc: 'Responsive, high-speed, SEO-optimized websites built for educational institutions, government bodies, religious trusts, and enterprises.',
    benefits: [
      'Mobile-first responsive architecture',
      'Accessible typography and dark/light high-contrast designs',
      'Integrated CMS for seamless non-technical staff updates'
    ]
  },
  {
    id: 'web-maintenance',
    name: 'Website Maintenance & Dedicated AMC',
    category: 'Web & Digital',
    icon: Wrench,
    shortDesc: 'Continuous technical monitoring, cybersecurity patches, server uptime guarantees, database backups, and prompt content publishing services.',
    benefits: [
      'SLA-backed emergency technical support desk',
      'Regular vulnerability assessments and SSL renewals',
      'Daily offsite automated backups'
    ]
  },
  {
    id: 'live-streaming',
    name: 'Live Streaming & Event Broadcasting',
    category: 'Web & Digital',
    icon: Video,
    shortDesc: 'High-availability low-latency streaming infrastructure for religious ceremonies, temple aartis, educational webinars, and institutional convocations.',
    benefits: [
      'Capable of managing heavy festival traffic spikes',
      'Multi-platform streaming to portals, YouTube, and Facebook',
      'Archival video on-demand recording integration'
    ]
  },
  {
    id: 'digital-platform-dev',
    name: 'Digital Platform Development',
    category: 'Web & Digital',
    icon: Cpu,
    shortDesc: 'Bespoke web applications and custom software engineering built from scratch to address unique organizational data challenges and state tender specs.',
    benefits: [
      'Modern microservices architecture with robust RESTful APIs',
      'Cloud deployment on Indian sovereign datacenters',
      'Comprehensive source code documentation and staff handover'
    ]
  },
  {
    id: 'information-management',
    name: 'Information Management Services',
    category: 'Web & Digital',
    icon: Database,
    shortDesc: 'Consultancy and practical digitisation services to audit, organize, structure, and securely deliver organizational institutional knowledge.',
    benefits: [
      '“Right information, right place, right time” operational philosophy',
      'Legacy record scanning, OCR, and semantic indexing',
      'Strict adherence to statutory retention policies'
    ]
  },

  // D. Specialised Services
  {
    id: 'concepts-academy',
    name: 'Concepts Academy (Academic Enrichment)',
    category: 'Specialised Services',
    icon: GraduationCap,
    badge: 'Educational Service',
    shortDesc: 'Specialized conceptual science and mathematics educational programmes (CBSE/RBSE Physics, Mathematics, Chemical Kinetics, Organic Chemistry).',
    benefits: [
      'Mentored by experienced faculty including Ms. Dhwani Gangal',
      'Conceptual clarity focus rather than rote memorization',
      'Documented student success in prestigious institutions like MNIT Jaipur'
    ]
  },
  {
    id: 'tax-consultancy',
    name: 'Tax Consultancy & ITR Assistance',
    category: 'Specialised Services',
    icon: ShieldCheck,
    badge: 'Statutory Advisory',
    shortDesc: 'Professional advisory, income tax return (ITR) preparation, compliance filing assistance, and accounting software guidance for institutions and individuals.',
    benefits: [
      'Authorized compliance guidance for non-profits and societies',
      'Accurate tax calculation and electronic filing support',
      'Dedicated statutory advisory desk'
    ]
  },
  {
    id: 'stock-trading-digital',
    name: 'Stock-Trading Related Digital Services',
    category: 'Specialised Services',
    icon: Sparkles,
    shortDesc: 'Specialized digital dashboards, computational models, and analytical tools for market awareness and trading data observation.',
    benefits: [
      'Custom technical analysis charting interfaces',
      'High-speed calculation engines',
      'Educational and observational digital utilities'
    ]
  },
  {
    id: 'temple-services',
    name: 'Temple & Religious Digital Services',
    category: 'Specialised Services',
    icon: Building,
    badge: 'Documented Work',
    shortDesc: 'End-to-end digital infrastructure for temples: websites, virtual darshan broadcasting, e-donation gateways, festival seva booking, and trust archives.',
    benefits: [
      'Trusted by Shri Khole Ke Hanuman Ji & Shri Sankat Mochan Temples',
      'Honest, secure online collection for sacred institutions',
      'Zero-lag global livestreaming for religious occasions'
    ]
  },
  {
    id: 'custom-ims',
    name: 'Custom Information Management Solutions',
    category: 'Specialised Services',
    icon: Cpu,
    shortDesc: 'Tailor-made software architectures designed specifically for unique institutional challenges where off-the-shelf commercial packages fail.',
    benefits: [
      'Rapid prototype development to production deployment',
      'Complete workflow customization for exact departmental needs',
      'Long-term SLA and direct engineering support'
    ]
  }
];

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onOpenLeadModal,
  onNavigatePage,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSolutions = ALL_SOLUTIONS.filter(sol => {
    const matchesCategory = activeCategory === 'All' || sol.category === activeCategory;
    const matchesSearch = sol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sol.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <span className="text-[#FFD000] font-bold">Solutions</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#071330]/90 via-[#0a1e4a]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-14 mb-12 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Layers className="w-3.5 h-3.5 mr-1.5" />
            INTEGRATED INFORMATION PLATFORMS & SAAS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            Our Digital <span className="text-[#FFD000]">Solutions</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            SAMNVYA develops purpose-built Software-as-a-Service, institutional ERP, digital library suites, 
            and community platforms designed around our core philosophy: 
            <strong> &ldquo;Providing the right information at the right place and at the right time.&rdquo;</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenLeadModal('demo', 'SAMNVYA Institutional Solutions Suite')}
              className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Request Platform Demo</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </button>
            <button
              onClick={() => onNavigatePage('projects')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <span>View Deployed Case Studies</span>
              <ChevronRight className="w-4 h-4 ml-1 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {['All', 'Education & Institutional', 'Community & Social', 'Web & Digital', 'Specialised Services'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#FFD000] text-[#061638] shadow-lg'
                  : 'bg-white/[0.03] text-gray-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search all solutions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
          />
        </div>
      </div>

      {/* Solutions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredSolutions.map((sol) => {
          const IconComp = sol.icon;
          return (
            <div
              key={sol.id}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-[#FFD000] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  {sol.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold uppercase">
                      {sol.badge}
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                  {sol.category}
                </div>

                <h3 className="text-xl font-black text-white uppercase font-sans mb-3 group-hover:text-[#FFD000] transition-colors">
                  {sol.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
                  {sol.shortDesc}
                </p>

                <div className="border-t border-white/5 pt-4 mb-6">
                  <div className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Key Value Points:
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
                    {sol.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenLeadModal('demo', sol.name)}
                  className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#061638]" />
                </button>
                <button
                  onClick={() => onOpenLeadModal('quotation', sol.name)}
                  className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
                >
                  Get Proposal →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Consultation Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#061026] border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
            CUSTOM SOLUTION ARCHITECTURE
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1 mb-2 font-sans">
            Need a Solution Configured for Your Specific Institution?
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl font-sans">
            Our systems engineers in Jaipur evaluate your current workflow, database structures, and accreditation requirements to draft a customized solution blueprint.
          </p>
        </div>
        <button
          onClick={() => onOpenLeadModal('consultation', 'Custom Information Architecture Consultation')}
          className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider shrink-0"
        >
          Schedule System Evaluation
        </button>
      </div>
    </div>
  );
};
