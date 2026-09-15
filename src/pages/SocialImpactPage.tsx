import React from 'react';
import { 
  HeartHandshake, Users, Sparkles, GraduationCap, Briefcase, 
  Globe, ShieldCheck, ChevronRight, ArrowRight, CheckCircle2, 
  MapPin, BookOpen, Layers, Lightbulb, Share2
} from 'lucide-react';
import { PageId } from '../types';

interface SocialImpactPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

export const SocialImpactPage: React.FC<SocialImpactPageProps> = ({
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
        <span className="text-[#FFD000] font-bold">Social Impact</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#081736]/90 via-[#0d2252]/80 to-[#040a1c]/90 border border-amber-500/20 p-8 sm:p-14 mb-14 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <HeartHandshake className="w-3.5 h-3.5 mr-1.5" />
            SOCIAL IMPACT & DIGITAL INCLUSION
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-5">
            Technology Should Not Only Digitise Information — <span className="text-[#FFD000]">It Should Expand Opportunity.</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 font-sans">
            At SAMNVYA IMS Private Limited, we believe that software must generate both economic value and genuine social value. 
            Rooted in Rajasthan, our platforms bridge the digital divide by opening pathways for employment, community connection, 
            academic enrichment, and accessible institutional digitisation.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenLeadModal('consultation', 'Community & Social Impact Initiative')}
              className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Partner for Community Impact</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </button>
            <button
              onClick={() => onNavigatePage('projects')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <span>Explore Documented Initiatives</span>
              <ChevronRight className="w-4 h-4 ml-1 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Core Philosophy Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#061026] to-amber-500/5 border border-amber-500/30 mb-16 text-center max-w-4xl mx-auto">
        <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-[0.25em] block mb-2">
          OUR SOCIAL PHILOSOPHY
        </span>
        <blockquote className="text-xl sm:text-2xl font-black text-white font-sans italic mb-4">
          &ldquo;Digital transformation is incomplete if it remains confined to elite enterprises. True progress occurs when information systems strengthen public colleges, local communities, students, and grassroots institutions.&rdquo;
        </blockquote>
        <div className="text-xs font-mono text-gray-400">
          — SAMNVYA Corporate Social Charter, Jaipur, Rajasthan
        </div>
      </div>

      {/* 6 Pillars of Social Impact */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-black text-[#FFD000] uppercase tracking-[0.25em]">
            ACTIONABLE PATHWAYS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
            Six Pillars of Technology-Enabled Inclusion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#FFD000] flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] uppercase tracking-wider mb-1">Pillar 01</div>
              <h3 className="text-lg font-bold text-white mb-2">Accessible Employment & Job Connectivity</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Empowering tier-2 and tier-3 job-seekers and college graduates through our digital employment ecosystems. 
                Connecting skilled students directly to institutional and regional recruiters without commercial exploitation.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Free student registration</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Verified local employer listings</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#FFD000] flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] uppercase tracking-wider mb-1">Pillar 02</div>
              <h3 className="text-lg font-bold text-white mb-2">Community & Social Foundations</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Partnering with grassroots trusts and community panchayats (such as the Pujya Sindhi Central Panchayat) 
                to deploy multi-purpose portals covering scholarships, community welfare registries, and matrimonial connections.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Accessible matrimonial parichay sammelans</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Transparent scholarship distribution</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#FFD000] flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] uppercase tracking-wider mb-1">Pillar 03</div>
              <h3 className="text-lg font-bold text-white mb-2">Institutional Digitisation for Public Colleges</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Digitising historic libraries and student administrations in state universities (e.g. Maharani College and Maharaja College, Jaipur), 
                democratising access to scholarly literature for thousands of undergraduate and postgraduate students.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Barcode & RFID catalogue digitization</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> 100% paperless student book transactions</li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#FFD000] flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] uppercase tracking-wider mb-1">Pillar 04</div>
              <h3 className="text-lg font-bold text-white mb-2">Open Educational Workshops & Training</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Hosting non-commercial skill workshops, including Women in AI Leadership conclaves, high-school Physics/Maths masterclasses 
                via Concepts Academy, Soft Skills for Life Success, and pandemic-era webinars for teachers and students.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Women in AI leadership training</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Free intellectual property & patent awareness</li>
            </ul>
          </div>

          {/* Pillar 5 */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#FFD000] flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] uppercase tracking-wider mb-1">Pillar 05</div>
              <h3 className="text-lg font-bold text-white mb-2">Cultural & Shrine Digital Accessibility</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Delivering high-reliability live-streaming, official portal architecture, and online darshan infrastructure 
                for revered regional temples (Khole Ke Hanuman Ji, Shri Sankat Mochan Hanuman Temple), uniting global devotees.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Zero-lag Mahasabha and Aarti streams</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Transparent trust donation gateways</li>
            </ul>
          </div>

          {/* Pillar 6 */}
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-[#FFD000] flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] uppercase tracking-wider mb-1">Pillar 06</div>
              <h3 className="text-lg font-bold text-white mb-2">Affordable SaaS for Grassroots Non-Profits</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Deploying zero-server-overhead Software-as-a-Service tools so community trusts and educational institutions 
                can automate operations without prohibitive upfront capital investments or IT specialist staffing.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Subsidized non-profit licensing tiers</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Hands-on vernacular user onboarding</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rajasthan Connection Section */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061026] via-[#09183d] to-[#040817] border border-amber-500/20 mb-16 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#FFD000] font-bold uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4" />
              <span>COMMITTED TO RAJASTHAN'S DIGITAL TRANSFORMATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-sans mb-4">
              Building Sovereign, Inclusive Digital Pedigree from Jaipur
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              As a homegrown Rajasthan technology enterprise headquartered in Pratap Nagar, Jaipur, 
              SAMNVYA IMS is dedicated to advancing the state's knowledge economy. We actively coordinate with 
              state university departments, community organizations, and local cultural trusts to ensure that the 
              transformative power of digital systems reaches every corner of our state.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-300">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                • 100% Indian Sovereign Server Hosting
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                • Vernacular Hindi & English User Interfaces
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                • Zero Data Monopolization or Commercial Resale
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
            <div className="text-3xl sm:text-4xl font-black text-[#FFD000] font-mono mb-2">
              Inclusive
            </div>
            <div className="text-sm font-bold text-white uppercase mb-2">
              By Purpose & Design
            </div>
            <p className="text-xs text-gray-400 mb-6 font-sans">
              Are you an educational trust, non-profit society, or community body in need of digital systems?
            </p>
            <button
              onClick={() => onOpenLeadModal('consultation', 'Non-Profit / Community Digitisation Inquiry')}
              className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider w-full"
            >
              Request Non-Profit Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
