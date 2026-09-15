import React, { useState } from 'react';
import { 
  FolderKanban, Award, ChevronRight, ArrowRight, CheckCircle2, 
  ExternalLink, Building2, Landmark, GraduationCap, Users, 
  Layers, Sparkles, Clock, ShieldCheck, Heart
} from 'lucide-react';
import { PageId } from '../types';

interface ProjectsPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

interface ProjectItem {
  id: string;
  title: string;
  category: 'Higher Education' | 'Community' | 'Cultural & Shrines' | 'Next-Gen Initiative';
  client: string;
  year: string;
  status: 'Deployed & Active' | 'Active Initiative' | 'Platform Concept';
  summary: string;
  deliverables: string[];
  impactMetric: string;
}

const FLAGSHIP_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Maharani College Digital Library Management Ecosystem',
    category: 'Higher Education',
    client: 'University Maharani College, Jaipur (University of Rajasthan constituent)',
    year: '2021 – 2022',
    status: 'Deployed & Active',
    summary: 'Turnkey library digitisation, barcode asset labeling, automated member card generation, and zero-error circulation software enabling seamless digital borrowing for thousands of female scholars.',
    deliverables: [
      'Comprehensive bibliographic catalog digitisation',
      'Barcode and RFID-compatible automated issue/return',
      'Faculty and student hands-on weeklong training workshops',
      'Digital OPAC book search terminal infrastructure'
    ],
    impactMetric: '100% paperless issue/return workflow'
  },
  {
    id: 'proj-2',
    title: 'Maharaja College Central Library Digitisation',
    category: 'Higher Education',
    client: 'University Maharaja College, Jaipur',
    year: '2020',
    status: 'Deployed & Active',
    summary: 'Cloud-integrated digital catalogue and student registration suite enabling students to access catalogue queries directly via mobile devices, modernizing one of Rajasthan’s premier science colleges.',
    deliverables: [
      'Automated accession ledger digitisation',
      'Student mobile inquiry portal',
      'Rapid circulation counter workflows',
      'Overdue fine tracking and digital receipts'
    ],
    impactMetric: 'Streamlined access for thousands of science scholars'
  },
  {
    id: 'proj-3',
    title: 'Pujya Sindhi Central Panchayat Multi-Purpose Community Portal',
    category: 'Community',
    client: 'Pujya Sindhi Central Panchayat, Jaipur Mahanagar',
    year: '2022',
    status: 'Deployed & Active',
    summary: 'Unified community platform integrating verified member registration, socio-economic matrimonial introductions, student scholarship applications, and community announcements.',
    deliverables: [
      'Verified family & individual member registry',
      'Matrimonial biodata directory with privacy controls',
      'Educational scholarship disbursement module',
      'Community news, events & obituary bulletin board'
    ],
    impactMetric: 'Unified digital hub for community empowerment'
  },
  {
    id: 'proj-4',
    title: 'Shri Khole Ke Hanuman Ji Temple Portal & Online Darshan',
    category: 'Cultural & Shrines',
    client: 'Shri Khole Ke Hanuman Ji Mandir Trust, Jaipur',
    year: '2020 – 2021',
    status: 'Deployed & Active',
    summary: 'Official digital gateway inaugurated with religious fanfare, providing high-definition live aarti streaming, online darshan scheduling, and digital donation collection for devotees globally.',
    deliverables: [
      'Zero-latency live streaming integration',
      'Online Prasadi & donation payment gateway',
      'Temple history, festivals & daily darshan timetable',
      'High-traffic infrastructure capable of festival load spikes'
    ],
    impactMetric: 'Global connectivity for lakhs of devotees'
  },
  {
    id: 'proj-5',
    title: 'Shri Sankat Mochan Hanuman Temple Digital Services',
    category: 'Cultural & Shrines',
    client: 'Shri Sankat Mochan Hanuman Ji Mandir, Jaipur',
    year: '2021',
    status: 'Deployed & Active',
    summary: 'Official temple website and virtual broadcast suite facilitating virtual darshan, festive event announcements, and spiritual documentation during challenging pandemic periods.',
    deliverables: [
      'Official web portal with mobile responsiveness',
      'Virtual prayer registration desk',
      'Festive audio/video archival media repository'
    ],
    impactMetric: 'Unbroken spiritual connection during peak lockdowns'
  },
  {
    id: 'proj-6',
    title: 'Samnvya NextGen EduSuite & SmartCampus',
    category: 'Next-Gen Initiative',
    client: 'Higher Education Institutions & Universities',
    year: '2023 – Present',
    status: 'Active Initiative',
    summary: 'Unified modular campus intelligence suite integrating admissions, CBCS curriculum, autonomous examination marksheets with tamper-proof QR codes, and faculty workload accounting.',
    deliverables: [
      'End-to-end institutional ERP modular matrix',
      'National Education Policy (NEP 2020) credits engine',
      'Encrypted marksheet generation with digital verification',
      'Multi-campus hierarchical governance dashboard'
    ],
    impactMetric: 'Zero server footprint with cloud-native SaaS'
  },
  {
    id: 'proj-7',
    title: 'VTIMS (Virtual / Information Management Ecosystem)',
    category: 'Higher Education',
    client: 'Autonomous Institutions & Enterprise Archives',
    year: 'Foundational – Present',
    status: 'Deployed & Active',
    summary: 'A core platform ecosystem designed to organize unstructured organizational records, institutional files, and faculty activity workflows into structured, instant-retrieval data stores.',
    deliverables: [
      'Centralized document & circular repository',
      'Role-based access security protocols',
      'Audit trails & revision histories',
      'Multi-department dispatch tracking'
    ],
    impactMetric: 'Multi-institutional operational pedigree'
  }
];

const NEXT_GEN_CONCEPTS = [
  {
    name: 'SAMNVYA SAKSHAM SAHELI',
    type: 'Social & Women Empowerment Concept',
    description: 'Digital capacity building platform targeted at enhancing digital literacy, women-led micro-entrepreneurship, and self-help group record-keeping.'
  },
  {
    name: 'SWASTHYAFLOW',
    type: 'Healthcare & Camp Workflow Concept',
    description: 'Lightweight, offline-capable digital health camp record tracking system for rural medical missions and community blood donation camps.'
  },
  {
    name: 'RAJ-SECUREMATCH',
    type: 'Community Trust Protocol Concept',
    description: 'Privacy-first, community-mediated matchmaking protocol guaranteeing verified family onboarding with strict image protection controls.'
  },
  {
    name: 'Carbon-Neutral Digital Library',
    type: 'Green Computing Initiative',
    description: 'Optimized server-side caching algorithms and green-cloud provisioning strategies to minimize compute power per book search transaction.'
  }
];

const EVOLUTION_TIMELINE = [
  { phase: 'Phase 1', title: 'Information Management', desc: 'Pioneering structured information architecture and digital archiving methods in Jaipur.' },
  { phase: 'Phase 2', title: 'Web Services & Portals', desc: 'Developing tailored websites, AMC services, and dynamic portals for regional entities.' },
  { phase: 'Phase 3', title: 'Institutional Digitisation', desc: 'Digitising physical records, accession ledgers, and administration in academic bodies.' },
  { phase: 'Phase 4', title: 'Digital Libraries', desc: 'Large-scale deployments at prominent Rajasthan colleges including Maharani & Maharaja.' },
  { phase: 'Phase 5', title: 'Institutional ERP', desc: 'Integrated modular campus administration: fees, examinations, admissions, and alumni.' },
  { phase: 'Phase 6', title: 'Community Platforms', desc: 'Empowering grassroots trusts with job portals, matrimonial services, and scholarship desks.' },
  { phase: 'Phase 7', title: 'Cloud-Native SaaS', desc: 'Zero-maintenance subscription architecture eliminating costly on-premise hardware.' },
  { phase: 'Phase 8', title: 'Next-Gen & AI Solutions', desc: 'Applied intelligence, NEP compliance engines, and automated information delivery.' },
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenLeadModal,
  onNavigatePage,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? FLAGSHIP_PROJECTS
    : FLAGSHIP_PROJECTS.filter(p => p.category === activeCategory);

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
        <span className="text-[#FFD000] font-bold">Projects</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#061026]/90 via-[#0a1b42]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-14 mb-14 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <FolderKanban className="w-3.5 h-3.5 mr-1.5" />
            DEPLOYMENT FOOTPRINT & KEY INITIATIVES
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            Documented Projects & <span className="text-[#FFD000]">Initiatives</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-sans">
            From premier university colleges to iconic cultural shrines and community foundations, 
            explore SAMNVYA’s documented deployments across Rajasthan. Each initiative reflects our focus on 
            organising information, empowering administrators, and delivering accessible digital services.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenLeadModal('demo', 'Institutional Project Consultation')}
              className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Consult on Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </button>
            <button
              onClick={() => onNavigatePage('solutions')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <span>Explore All Solutions</span>
              <ChevronRight className="w-4 h-4 ml-1 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {['All', 'Higher Education', 'Community', 'Cultural & Shrines', 'Next-Gen Initiative'].map(cat => (
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {filteredProjects.map((p) => (
          <div 
            key={p.id}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-wider">
                  {p.category}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {p.status}
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-2 font-sans">
                {p.title}
              </h3>

              <div className="text-xs font-mono text-gray-400 mb-4 flex items-center">
                <Building2 className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
                <span>{p.client}</span>
                <span className="mx-2 text-gray-600">•</span>
                <span>{p.year}</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
                {p.summary}
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                <div className="text-xs font-mono font-bold text-white mb-2 uppercase">
                  Delivered Capabilities:
                </div>
                <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
                  {p.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#FFD000] font-bold">
                {p.impactMetric}
              </span>
              <button
                onClick={() => onOpenLeadModal('demo', p.title)}
                className="text-white hover:text-[#FFD000] flex items-center transition-colors"
              >
                <span>Inquire About Similar Setup</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Digital Transformation Journey Timeline */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#061026] border border-amber-500/20 mb-20 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-black text-[#FFD000] uppercase tracking-[0.25em]">
            EVOLUTION OF CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
            Our Digital Transformation Journey
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            A continuous trajectory of engineering from foundational information archives to cloud SaaS and applied institutional intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVOLUTION_TIMELINE.map((step, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-400/30 transition-all relative"
            >
              <div className="text-xs font-mono font-black text-[#FFD000] uppercase tracking-wider mb-1">
                {step.phase}
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next-Gen Concepts & Programmatic Initiatives */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-black text-[#FFD000] uppercase tracking-[0.25em]">
            FUTURE ROADMAP
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
            Next-Generation Concepts & Programme Frameworks
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Concepts and active development programmes designed to address emerging societal and governance challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEXT_GEN_CONCEPTS.map((item, i) => (
            <div 
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-amber-400/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-[#FFD000] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                {item.type}
              </div>
              <h4 className="text-sm font-bold text-white mb-2 font-mono">
                {item.name}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
