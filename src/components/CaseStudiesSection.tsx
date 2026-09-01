import React, { useState } from 'react';
import { 
  Building2, CheckCircle2, ShieldCheck, ArrowRight, 
  MapPin, Clock, ExternalLink, Filter, GraduationCap, Award
} from 'lucide-react';
import { INSTITUTIONAL_CASE_STUDIES } from '../data/institutionalData';

interface CaseStudiesSectionProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenLeadModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'University', 'College', 'Autonomous Body', 'Community / Temple'];

  const filteredStudies = activeFilter === 'All' 
    ? INSTITUTIONAL_CASE_STUDIES 
    : INSTITUTIONAL_CASE_STUDIES.filter(cs => cs.institutionType === activeFilter);

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 04. PROVEN INSTITUTIONAL TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            MEASURABLE <span className="text-stroke-white text-transparent">IMPACT</span> & <span className="text-[#F27D26]">RESULTS.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto pt-1">
            Real deployments across premier universities, constituent colleges, state law authorities, and heritage institutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all backdrop-blur-md ${
                activeFilter === opt
                  ? 'bg-[#F27D26] text-black shadow-lg shadow-[#F27D26]/20'
                  : 'bg-[#0b142b]/60 text-gray-300 border border-white/10 hover:bg-[#0d1836]/80 hover:text-white'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStudies.map((cs, idx) => (
            <div
              key={cs.id}
              className="bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#F27D26] transition-all group relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              {/* Numeral watermark */}
              <div className="absolute top-3 right-5 text-5xl font-mono font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#F27D26]/10 transition-colors">
                0{idx + 1}
              </div>

              <div className="space-y-5 relative z-10">
                {/* Header Strip */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 text-[#F27D26] border border-white/10">
                      {cs.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-3 group-hover:text-[#F27D26] transition-colors">
                      {cs.client}
                    </h3>
                  </div>
                  <div className="flex items-center text-[11px] font-mono text-gray-400 shrink-0 ml-2">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#F27D26]" />
                    <span>{cs.location}</span>
                  </div>
                </div>

                {/* Challenge */}
                <div className="p-4 rounded-2xl bg-[#121212] border border-white/10 text-xs">
                  <span className="font-black text-gray-400 uppercase tracking-widest block mb-1.5 text-[10px]">
                    Operational Challenge:
                  </span>
                  <p className="text-gray-300 leading-relaxed font-normal">{cs.challenge}</p>
                </div>

                {/* Samnvya Solution */}
                <div className="text-xs space-y-1.5">
                  <span className="font-black text-[#F27D26] uppercase tracking-widest block text-[10px]">
                    Samnvya Solution & Implementation:
                  </span>
                  <p className="text-gray-300 leading-relaxed font-normal">{cs.samnvyaSolution}</p>
                </div>

                {/* Delivered Modules */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2">
                    Delivered Capabilities:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cs.deliveredModules.map((mod, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold uppercase tracking-wider"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs">
                  <div className="flex items-center space-x-2 font-black text-emerald-400 uppercase tracking-widest text-[10px] mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Institutional Outcome:</span>
                  </div>
                  <p className="text-emerald-100/90 leading-relaxed font-normal">{cs.substantiatedOutcome}</p>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 relative z-10">
                <span className="font-mono text-[11px]">{cs.period}</span>
                <button
                  onClick={() => onOpenLeadModal('demo', `Case Study Ref: ${cs.client}`)}
                  className="text-white font-bold uppercase tracking-wider hover:text-[#F27D26] flex items-center text-[11px] transition-colors"
                >
                  <span>Request Similar Stack</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#F27D26]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Footnote & Verification Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto font-mono">
            * All listed institutional engagements reflect verified deployments, web maintenance agreements, and information management services delivered by SAMNVYA IMS Pvt. Ltd.
          </p>
        </div>

      </div>
    </section>
  );
};
