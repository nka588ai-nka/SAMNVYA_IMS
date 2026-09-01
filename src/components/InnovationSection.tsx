import React from 'react';
import { 
  Sparkles, Cpu, CheckCircle2, Compass, 
  Search, ShieldCheck, Zap, Bot, Database
} from 'lucide-react';

export const InnovationSection: React.FC = () => {
  const deployedCapabilities = [
    {
      title: 'Automated Multi-Bank Instant Reconciliation',
      desc: 'Real-time webhook verification across payment gateways (SBI, Razorpay, HDFC) matching transactions with student ledgers instantly.',
      badge: 'Live in Production',
      icon: Zap
    },
    {
      title: 'High-Concurrency OPAC & Catalog Discovery',
      desc: 'Sub-second search engine querying physical accession records, digital theses, and MARC21 metadata with intelligent typo-tolerance.',
      badge: 'Live in Production',
      icon: Search
    },
    {
      title: 'Contactless QR Gate Passes & Headcounts',
      desc: 'Mobile-first QR check-in workflows with automated SMS host authorization and multi-gate entry-exit status sync.',
      badge: 'Live in Production',
      icon: ShieldCheck
    },
    {
      title: 'OCR & Digital Document Vault',
      desc: 'Secure digital indexing of statutory circulars, historical marksheets, and research papers with searchable full-text archiving.',
      badge: 'Live in Production',
      icon: Database
    }
  ];

  const roadmapCapabilities = [
    {
      title: 'AI-Assisted Admission & FAQ Assistant',
      desc: 'Natural language conversational assistant to resolve applicant admission queries, eligibility criteria, and fee structures 24/7.',
      badge: 'In Active R&D / Roadmap',
      icon: Bot
    },
    {
      title: 'Predictive Admission & Student Attrition Analytics',
      desc: 'Machine-learning models identifying early attendance drop-offs and forecasting course popularity for upcoming academic sessions.',
      badge: 'In Active R&D / Roadmap',
      icon: Cpu
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 07. FUTURE-READY INNOVATION ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            APPLIED <span className="text-stroke-white text-transparent">INTELLIGENCE</span> & <span className="text-[#F27D26]">R&D.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto pt-1">
            Transparently presenting our battle-tested deployed capabilities alongside our forward-looking research and AI initiatives.
          </p>
        </div>

        {/* 1. Deployed Capabilities */}
        <div className="mt-14">
          <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-emerald-400 mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>Currently Deployed in Live Production</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {deployedCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-[#0b142b]/70 backdrop-blur-xl border border-white/10 hover:border-emerald-500/60 transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-cyan-950/20">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                        {cap.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-tight text-white mb-2">{cap.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Roadmap / Proposed Capabilities */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-[#F27D26] mb-6">
            <Compass className="w-4 h-4" />
            <span>Next-Gen Innovation Roadmap (Under Active Research)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-7 rounded-3xl bg-[#0b142b]/70 backdrop-blur-xl border border-white/10 hover:border-[#F27D26] transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-cyan-950/20">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F27D26]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-[#F27D26] border border-white/10">
                        {cap.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-black uppercase tracking-tight text-white mb-2">{cap.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
