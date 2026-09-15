import React, { useState } from 'react';
import { 
  Briefcase, Handshake, Network, Award, ArrowRight, 
  CheckCircle2, Building2, Send, Phone, Mail, ChevronRight, Zap
} from 'lucide-react';
import { PageId } from '../types';

interface BusinessWithUsPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

export const BusinessWithUsPage: React.FC<BusinessWithUsPageProps> = ({ onOpenLeadModal, onNavigatePage }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    partnershipTrack: 'Authorized Reseller / Channel Partner',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <span className="text-[#FFD000] font-bold">Business With Us</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#08122c]/90 via-[#0c1c45]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-12 mb-12 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Handshake className="w-3.5 h-3.5 mr-1.5" />
            STRATEGIC PARTNERSHIPS & ALLIANCES
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            Business <span className="text-[#FFD000]">With Us</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            Join forces with Samnvya IMS Private Limited. We invite channel partners, system integrators, 
            technology providers, and institutional vendors to build, deploy, and scale high-impact digital solutions together.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#partner-form"
              className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Apply for Partnership</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </a>
            <button
              onClick={() => onOpenLeadModal('brochure', 'Partner Program Brochure')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <span>Download Partner Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Partnership Tracks */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-black text-[#FFD000] uppercase tracking-[0.25em]">
            OPPORTUNITY TRACKS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
            Choose How You Want to Collaborate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] font-bold uppercase tracking-widest mb-1">Track 1</div>
              <h3 className="text-lg font-bold text-white mb-2">Authorized Channel Partner & Reseller</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Represent SAMNVYA ERP, The Khyati Network, and cloud modules in your designated state or regional territory. 
                Receive aggressive licensing margins, recurring AMC revenue shares, and qualified institutional leads.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> High recurring license margins</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Exclusive regional territorial rights</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Comprehensive sales & demo enablement</li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
                <Network className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] font-bold uppercase tracking-widest mb-1">Track 2</div>
              <h3 className="text-lg font-bold text-white mb-2">System Integrator & Deployment Partner</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Specialized IT firms providing on-ground server provisioning, biometric/RFID access gate installations, 
                smart classroom setups, campus networking, and end-user faculty training on SAMNVYA software.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Retain 100% implementation service revenues</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Hardware integration API certification</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Direct engineering level escalation desk</li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] font-bold uppercase tracking-widest mb-1">Track 3</div>
              <h3 className="text-lg font-bold text-white mb-2">Technology & API Alliance</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Connect your banking payment gateways, verified SMS/WhatsApp engines, optical mark reading (OMR) scanners, 
                or cloud services directly into SAMNVYA's standard API bus for automatic institutional adoption.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Sandbox integration testing portal (samnvya.com/test/)</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Joint go-to-market solution briefs</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Verified technology partner badge</li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-[#FFD000] font-bold uppercase tracking-widest mb-1">Track 4</div>
              <h3 className="text-lg font-bold text-white mb-2">Government Tender & B2G Consortia</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Partner with us for joint bidding on state university e-Governance tenders, GeM procurement bids, 
                and municipal digitization projects requiring proven institutional credentialing and technical pedigree.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300 font-mono border-t border-white/5 pt-3">
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Past performance certificates & audit compliance</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Turnkey technical documentation & RFP support</li>
              <li className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e]" /> Transparent tripartite agreements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Featured Portals from PDF (Pages 27-30): Job Portal & Matrimonial Portal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Job Portal Section */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#071330] to-[#040a1c] border border-blue-500/30 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
              FEATURED PORTAL • CAREERS & RECRUITMENT
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Active Module
            </span>
          </div>

          <h3 className="text-2xl font-black text-white uppercase mb-3">
            Samnvya Job Portal
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
            Software Development, IT Services, Web Design & AMC. We provide an institutional job board & placement cell platform 
            connecting college students, alumni, and state-wide recruiters. We are also continuously hiring talented engineers for our Jaipur HQ!
          </p>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 space-y-2 text-xs font-mono text-gray-300">
            <div className="text-white font-bold mb-1">Current Openings at Samnvya IMS:</div>
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span>Full-Stack Web Developer (React / Node / TS)</span>
              <span className="text-[#FFD000]">Jaipur HQ</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span>Institutional ERP Implementation Specialist</span>
              <span className="text-[#FFD000]">Jaipur HQ</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span>Linux Systems & Cloud Security Engineer</span>
              <span className="text-[#FFD000]">Jaipur HQ</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenLeadModal('demo', 'Samnvya Job Portal Module')}
              className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider"
            >
              Request Job Portal Demo
            </button>
            <a
              href="mailto:samnvya.ims@gmail.com?subject=Job%20Application%20at%20Samnvya%20IMS"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/10 flex items-center"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
              <span>Send CV to HR Desk</span>
            </a>
          </div>
        </div>

        {/* Matrimonial Portal Section */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1b0826] to-[#070514] border border-pink-500/30 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest">
              FEATURED PORTAL • COMMUNITY SERVICES
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-pink-500/20 text-pink-300 border border-pink-500/30">
              Community Solution
            </span>
          </div>

          <h3 className="text-2xl font-black text-white uppercase mb-3">
            Samnvya Matrimonial Portal
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-sans">
            As part of our socially oriented initiatives, Samnvya develops accessible, privacy-compliant, and verified matrimonial platforms 
            for community panchayats, trusts, and regional organizations (such as the Pujya Sindhi Central Panchayat portal).
          </p>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 space-y-2 text-xs font-mono text-gray-300">
            <div className="text-white font-bold mb-1">Key Community Platform Features:</div>
            <div className="flex items-center py-1 border-b border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-pink-400" />
              <span>Aadhaar & Community-verified profile onboarding</span>
            </div>
            <div className="flex items-center py-1 border-b border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-pink-400" />
              <span>Strict privacy controls & photo blur options</span>
            </div>
            <div className="flex items-center py-1">
              <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-pink-400" />
              <span>Dedicated administrative approval dashboard for trusts</span>
            </div>
          </div>

          <button
            onClick={() => onOpenLeadModal('consultation', 'Community Matrimonial Portal Setup')}
            className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider"
          >
            Launch Community Matrimonial Portal
          </button>
        </div>
      </div>

      {/* Partnership Application Form */}
      <div id="partner-form" className="p-8 sm:p-12 rounded-3xl bg-[#061026] border border-amber-500/20 mb-16 shadow-2xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
              DIRECT PARTNER DESK
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
              Submit Business Partnership Inquiry
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2">
              Fill out this form and our Jaipur corporate alliances team will respond within 24 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Partnership Application Received</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Thank you for your interest in partnering with Samnvya IMS Private Limited. Our Business Development Director will reach out to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Company / Organization Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Acme Tech Solutions Pvt Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="partner@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91-9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">City / Region *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Jaipur / Delhi / Mumbai"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Partnership Track of Interest *</label>
                <select
                  value={formData.partnershipTrack}
                  onChange={(e) => setFormData({ ...formData, partnershipTrack: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#08132e] border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                >
                  <option value="Authorized Reseller / Channel Partner">Track 1: Authorized Reseller / Channel Partner</option>
                  <option value="System Integrator & Deployment Partner">Track 2: System Integrator & Deployment Partner</option>
                  <option value="Technology & API Alliance">Track 3: Technology & API Alliance</option>
                  <option value="Government Tender & B2G Consortia">Track 4: Government Tender & B2G Consortia</option>
                  <option value="Other Commercial Collaboration">Other Commercial Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Brief Overview / Collaboration Proposal</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your organization, current client footprint, or specific tender opportunities..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full golden-shimmer-btn py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center shadow-xl"
              >
                <Send className="w-4 h-4 mr-2 text-[#061638]" />
                <span>Submit Partnership Application</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
