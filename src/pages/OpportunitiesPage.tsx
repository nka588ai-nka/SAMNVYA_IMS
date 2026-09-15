import React from 'react';
import { 
  TrendingUp, Handshake, Building2, Globe, FileText, 
  Layers, ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, 
  Briefcase, Heart, Sparkles, Send
} from 'lucide-react';
import { PageId } from '../types';

interface OpportunitiesPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

interface OpportunityModel {
  id: string;
  title: string;
  icon: any;
  category: string;
  description: string;
  collaborationScope: string[];
  partnerProfile: string;
  ctaText: string;
}

const BUSINESS_OPPORTUNITIES: OpportunityModel[] = [
  {
    id: 'job-portal-partner',
    title: 'Employment & Job Portal Ecosystem',
    icon: Briefcase,
    category: 'Regional Career Network',
    description: 'Partner with us to expand regional job distribution, campus placement cells, and vocational skill matching across tier-2 and tier-3 colleges in Rajasthan.',
    collaborationScope: [
      'Institutional placement cell syndication',
      'Corporate recruiter onboarding & vacancy feeds',
      'Skill certification integration & candidate testing'
    ],
    partnerProfile: 'Colleges, HR Agencies, Placement Consultants, Skill Foundations',
    ctaText: 'Partner for Job Network'
  },
  {
    id: 'matrimonial-partner',
    title: 'Community Matrimonial Portals',
    icon: Heart,
    category: 'Community Empowerment',
    description: 'Co-deploy private, community-vetted matrimonial platforms for specific associations, societies, and panchayats with dignity and privacy assurance.',
    collaborationScope: [
      'Turnkey platform licensing and white-label deployment',
      'Community trust member verification administration',
      'Hybrid physical & virtual Parichay Sammelan event organization'
    ],
    partnerProfile: 'Community Panchayats, Samaj Trusts, Cultural Foundations',
    ctaText: 'Propose Community Alliance'
  },
  {
    id: 'institutional-partnerships',
    title: 'Higher Education Institutional Partnerships',
    icon: Building2,
    category: 'Academic Technology',
    description: 'Collaborate with universities, autonomous colleges, and accreditation advisory firms to deliver turnkey NEP-compliant digital governance ecosystems.',
    collaborationScope: [
      'Campus-wide ERP & examination controllership deployments',
      'Digital library setup with automated RFID/Barcode infrastructure',
      'NAAC/NIRF accreditation analytics & data repository modeling'
    ],
    partnerProfile: 'University Registrars, College Councils, Academic Consultants',
    ctaText: 'Explore Institutional MoU'
  },
  {
    id: 'saas-adoption',
    title: 'SaaS Reseller & Adoption Network',
    icon: Layers,
    category: 'Cloud Software Distribution',
    description: 'Empower regional IT vendors and system integrators to license, distribute, and support SAMNVYA’s high-margin cloud solutions to local clients.',
    collaborationScope: [
      'Competitive recurring license revenue sharing',
      'Dedicated engineering and deployment support from Jaipur',
      'Co-branded collateral, RFP decks, and technical demonstrations'
    ],
    partnerProfile: 'IT System Integrators, Hardware Vendors, Regional Software Dealers',
    ctaText: 'Apply as SaaS Reseller'
  },
  {
    id: 'tech-alliances',
    title: 'Technology & Cloud Infrastructure Alliances',
    icon: Globe,
    category: 'Engineering & Integration',
    description: 'Form strategic technological alliances with cloud providers, payment gateways, SMS/WhatsApp aggregator networks, and biometric device manufacturers.',
    collaborationScope: [
      'Native API integration into Samnvya NextGen EduSuite',
      'Joint go-to-market packages for institutional clients',
      'Hardware-software bundling for campus turnstiles and library gates'
    ],
    partnerProfile: 'Fintech Gateways, Hardware OEMs, Cloud Infrastructure Vendors',
    ctaText: 'Discuss Tech Integration'
  },
  {
    id: 'tender-consortia',
    title: 'Tender Consortia & Joint Bidding',
    icon: FileText,
    category: 'Public & B2G Procurement',
    description: 'Combine statutory capabilities, domain expertise, and technical references to jointly bid on state government digitisation tenders and large university RFPs.',
    collaborationScope: [
      'Joint Venture (JV) and consortium bidding agreements',
      'Technical qualification backing using verified MCA & client credentials',
      'Shared project management and post-implementation SLA maintenance'
    ],
    partnerProfile: 'Established Government Contractors, Infrastructure Firms, Bid Leads',
    ctaText: 'Propose Bidding Consortium'
  }
];

export const OpportunitiesPage: React.FC<OpportunitiesPageProps> = ({
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
        <span className="text-[#FFD000] font-bold">Business Opportunities</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#071330]/90 via-[#0a1e4a]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-14 mb-14 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Handshake className="w-3.5 h-3.5 mr-1.5" />
            COLLABORATION & STRATEGIC GROWTH
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            Business <span className="text-[#FFD000]">Opportunities</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            We actively seek long-term strategic alliances with educational institutions, community trusts, 
            technology providers, regional resellers, and public procurement consortia to expand digital impact and market reach.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenLeadModal('consultation', 'Strategic Business Partnership Inquiry')}
              className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Initiate Partnership Discussion</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </button>
            <button
              onClick={() => onNavigatePage('contact-us')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <span>Connect with Leadership Desk</span>
              <ChevronRight className="w-4 h-4 ml-1 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {BUSINESS_OPPORTUNITIES.map((opp) => {
          const IconComp = opp.icon;
          return (
            <div
              key={opp.id}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-[#FFD000] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                    {opp.category}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white uppercase font-sans mb-3 group-hover:text-[#FFD000] transition-colors">
                  {opp.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
                  {opp.description}
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                  <div className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Collaboration Scope:
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-300 font-mono">
                    {opp.collaborationScope.map((sc, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e] shrink-0 mt-0.5" />
                        <span>{sc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-400 max-w-[150px] truncate">
                  {opp.partnerProfile}
                </span>
                <button
                  onClick={() => onOpenLeadModal('consultation', opp.title)}
                  className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center"
                >
                  <span>{opp.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#061638]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Alliance Charter */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#061026] border border-amber-500/20 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest block mb-2">
              WHY PARTNER WITH SAMNVYA IMS?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans mb-4">
              Integrity, Technical Pedigree & Statutory Transparency
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              As an active registered entity under the Ministry of Corporate Affairs (CIN: U72900RJ2020PTC068801) 
              with verified deliveries across Rajasthan state universities and prominent trusts, we bring credible 
              institutional credentials, sovereign data residency, and experienced engineering execution to every alliance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-gray-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-bold mb-1">RoC-Jaipur Registered</div>
                <div>Full statutory and GST compliance</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-bold mb-1">Documented Track Record</div>
                <div>Maharani, Maharaja, Panchayats, Shrines</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white font-bold mb-1">Flexible MoUs</div>
                <div>JV, consortium, revenue-share or OEM</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-[#FFD000] mx-auto flex items-center justify-center mb-3">
              <Send className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white uppercase mb-2">
              Submit Alliance Proposal
            </h4>
            <p className="text-xs text-gray-400 mb-6 font-sans">
              Direct submission to the Board of Directors & Strategic Partnerships desk.
            </p>
            <button
              onClick={() => onOpenLeadModal('consultation', 'Executive Partnership RFP')}
              className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider w-full"
            >
              Submit Partnership Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
