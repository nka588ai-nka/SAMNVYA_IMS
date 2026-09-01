import React, { useState } from 'react';
import { 
  GraduationCap, Building2, Briefcase, Sparkles, 
  CheckCircle2, ArrowRight, Layers, ShieldCheck, AlertCircle
} from 'lucide-react';
import { INDUSTRY_SECTORS } from '../data/institutionalData';

interface IndustriesSectionProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenLeadModal, onScrollToSection }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('education');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <GraduationCap className="w-5 h-5" />;
    }
  };

  const activeSector = INDUSTRY_SECTORS.find(s => s.id === selectedIndustry) || INDUSTRY_SECTORS[0];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 03. SPECIALIZED INDUSTRY VERTICALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            DOMAINS WE <span className="text-stroke-white text-transparent">TRANSFORM.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto pt-1">
            Tailored digital frameworks resolving domain-specific compliance, governance, and operational complexities across sectors.
          </p>
        </div>

        {/* Industry Sector Tab Buttons */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          {INDUSTRY_SECTORS.map((sector) => {
            const isSelected = selectedIndustry === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedIndustry(sector.id)}
                className={`p-4 rounded-2xl flex items-center space-x-3 text-left border transition-all relative overflow-hidden backdrop-blur-xl ${
                  isSelected
                    ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-xl shadow-[#F27D26]/20 font-black'
                    : 'bg-[#0b142b]/60 text-white border-white/10 hover:border-cyan-400/40 hover:bg-[#0d1836]/70'
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-black text-[#F27D26]' : 'bg-white/5 text-[#F27D26]'}`}>
                  {getIndustryIcon(sector.icon)}
                </div>
                <div>
                  <div className={`text-[10px] font-mono font-black uppercase tracking-wider ${isSelected ? 'text-black/80' : 'text-gray-400'}`}>SECTOR</div>
                  <div className="text-xs sm:text-sm font-black uppercase tracking-tight truncate">{sector.name}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Card */}
        <div className="mt-10 bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl shadow-cyan-950/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Summary & Pain Points */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F27D26]">
                  SPECIALIZED INDUSTRY SUITE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1.5">
                  {activeSector.headline}
                </h3>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed font-normal">
                  {activeSector.description}
                </p>
              </div>

              {/* Solved Pain Points */}
              <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
                <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-[#F27D26] mb-3">
                  <AlertCircle className="w-4 h-4 text-[#F27D26]" />
                  <span>Eliminated Operational Bottlenecks</span>
                </div>
                <ul className="space-y-2">
                  {activeSector.keyPainPoints.map((pain, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mr-2.5 shrink-0 mt-1.5"></span>
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenLeadModal('demo', `${activeSector.name} Package`)}
                  className="px-7 py-3.5 rounded-full bg-white text-black hover:bg-[#F27D26] hover:text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center space-x-2 transition-all"
                >
                  <span>Request {activeSector.name} Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Key Deliverables & Recommended Solution Stack */}
            <div className="lg:col-span-6 space-y-6">
              {/* Recommended Stack */}
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
                <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-[#F27D26]">
                  <Layers className="w-4 h-4" />
                  <span>Recommended Samnvya Architecture</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSector.recommendedSolutions.map((sol, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs font-bold text-gray-200 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] mr-2.5 shrink-0" />
                      <span className="truncate">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Deliverables */}
              <div className="p-6 rounded-2xl bg-[#080808] border border-white/10 text-white space-y-3">
                <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Key Technical Deliverables</span>
                </div>
                <ul className="space-y-2.5">
                  {activeSector.deliverables.map((deliv, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2.5 shrink-0 mt-1.5"></span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
