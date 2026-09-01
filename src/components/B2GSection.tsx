import React from 'react';
import { 
  Building2, ShieldCheck, FileText, CheckCircle2, 
  Download, ArrowRight, Server, Phone, Lock, Award
} from 'lucide-react';
import { GOVERNMENT_CAPABILITY } from '../data/institutionalData';

interface B2GSectionProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
}

export const B2GSection: React.FC<B2GSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="b2g" className="py-20 lg:py-28 bg-transparent text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 05. GOVERNMENT PROCUREMENT & PUBLIC BODIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            TRUSTED FOR <span className="text-stroke-white text-transparent">PUBLIC</span> & <span className="text-[#F27D26]">AUTONOMOUS.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal pt-1">
            {GOVERNMENT_CAPABILITY.overview}
          </p>
        </div>

        {/* 3 Deployment Architectures */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOVERNMENT_CAPABILITY.deploymentModels.map((model, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-[#0b142b]/70 backdrop-blur-xl border border-white/10 hover:border-[#F27D26] transition-all flex flex-col justify-between group relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-950/20">
              <div className="absolute top-2 right-4 text-5xl font-mono font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#F27D26]/10 transition-colors">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#F27D26] flex items-center justify-center font-mono font-black text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-white mb-2">{model.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Certifications Checklist */}
        <div className="mt-10 p-6 sm:p-10 rounded-3xl bg-[#0b142b]/70 backdrop-blur-xl border border-white/15 shadow-2xl shadow-cyan-950/20">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#F27D26] mb-5 flex items-center">
            <Award className="w-4 h-4 mr-2 text-[#F27D26]" />
            INSTITUTIONAL COMPLIANCE, SECURITY & DATA SOVEREIGNTY STANDARDS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GOVERNMENT_CAPABILITY.certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start text-xs text-gray-200 bg-white/5 p-3.5 rounded-2xl border border-white/10 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support Commitments & Procurement Box */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-8 p-7 rounded-3xl bg-[#0b142b]/70 backdrop-blur-xl border border-white/15 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white flex items-center">
              <Phone className="w-3.5 h-3.5 mr-2 text-[#F27D26]" />
              REGIONAL ENGINEERING HUB & LOCALIZED SLA (JAIPUR, RAJASTHAN)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
              {GOVERNMENT_CAPABILITY.supportCommitment.map((supp, i) => (
                <div key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mr-2.5 shrink-0 mt-1.5"></span>
                  <span>{supp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col space-y-3">
            <button
              onClick={() => onOpenLeadModal('brochure', 'Government & Institutional Capability Statement')}
              className="w-full py-4 px-5 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-[#F27D26] hover:text-white shadow flex items-center justify-center space-x-2 transition-all"
              id="b2g-download-profile-btn"
            >
              <Download className="w-4 h-4" />
              <span>Download Capability PDF</span>
            </button>

            <button
              onClick={() => onOpenLeadModal('consultation', 'Institutional / Government Tender Consultation')}
              className="w-full py-4 px-5 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest border border-white/20 flex items-center justify-center space-x-2 transition-all"
              id="b2g-schedule-consultation-btn"
            >
              <span>Schedule Proposal Call</span>
              <ArrowRight className="w-4 h-4 text-[#F27D26]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
