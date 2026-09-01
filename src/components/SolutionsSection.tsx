import React, { useState } from 'react';
import { 
  Database, Layers, BookOpen, Users, ShieldCheck, 
  Cloud, Sparkles, ArrowRight, CheckCircle2, 
  ExternalLink, FileText, ChevronRight
} from 'lucide-react';
import { SOLUTION_CATEGORIES, DETAILED_SOLUTIONS } from '../data/solutionsData';
import { SolutionModule } from '../types';

interface SolutionsSectionProps {
  onSelectSolutionDetail: (solution: SolutionModule) => void;
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  activeCategoryId?: string;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onSelectSolutionDetail, 
  onOpenLeadModal,
  activeCategoryId = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(activeCategoryId);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-blue-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-violet-600" />;
      case 'Users': return <Users className="w-5 h-5 text-purple-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600" />;
      default: return <Layers className="w-5 h-5 text-indigo-600" />;
    }
  };

  const filteredSolutions = selectedCategory === 'all' 
    ? DETAILED_SOLUTIONS 
    : DETAILED_SOLUTIONS.filter(s => s.category === selectedCategory);

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 01. ENTERPRISE SAAS SUITES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            ENGINEERED FOR <span className="text-stroke-white text-transparent">SCALE</span> & <span className="text-[#F27D26]">PRECISION.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-normal pt-1">
            SAMNVYA delivers 7 foundational solution categories engineered for mission-critical institutional operations and zero-latency digital workflows.
          </p>
        </div>

        {/* 7 Core Categories Navigation Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden backdrop-blur-xl ${
              selectedCategory === 'all'
                ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-xl shadow-[#F27D26]/20 font-black'
                : 'bg-[#0b142b]/60 text-white border-white/10 hover:border-cyan-400/40 hover:bg-[#0d1836]/70'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-mono font-black uppercase tracking-widest ${selectedCategory === 'all' ? 'text-black/80' : 'text-gray-400'}`}>
                ALL VERTICALS
              </span>
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-sm font-black uppercase tracking-tight mt-2">Comprehensive Catalog</div>
            <p className={`text-xs mt-1 ${selectedCategory === 'all' ? 'text-black/80' : 'text-gray-400'}`}>
              Browse all 7 specialized enterprise modules
            </p>
          </button>

          {SOLUTION_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden backdrop-blur-xl ${
                  isSelected
                    ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-xl shadow-[#F27D26]/20 font-black'
                    : 'bg-[#0b142b]/60 text-white border-white/10 hover:border-cyan-400/40 hover:bg-[#0d1836]/70'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-black uppercase tracking-widest ${isSelected ? 'text-black/80' : 'text-[#F27D26]'}`}>
                    VERT 0{cat.number}
                  </span>
                  <div className={`p-1 rounded-lg ${isSelected ? 'bg-black text-[#F27D26]' : 'bg-white/5 text-[#F27D26]'}`}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                </div>
                <div className="text-sm font-black uppercase tracking-tight mt-2 line-clamp-1">{cat.title}</div>
                <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-black/80' : 'text-gray-400'}`}>
                  {cat.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Solutions Cards Display */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((sol, idx) => (
            <div 
              key={sol.id}
              className="bg-[#0b142b]/70 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-[#F27D26] transition-all duration-300 flex flex-col justify-between overflow-hidden group relative hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              {/* Giant numeral watermark */}
              <div className="absolute top-2 right-4 text-5xl font-mono font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#F27D26]/10 transition-colors">
                {idx < 9 ? `0${idx + 1}` : idx + 1}
              </div>

              <div className="p-6 space-y-4 relative z-10">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 text-[#F27D26] border border-white/10">
                    {sol.badge || 'ENTERPRISE'}
                  </span>
                  <button
                    onClick={() => onSelectSolutionDetail(sol)}
                    className="text-gray-500 hover:text-[#F27D26] p-1 transition-colors"
                    title="View full specification"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-[#F27D26] transition-colors">
                    {sol.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                    {sol.shortDesc}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="pt-3 space-y-2 border-t border-white/10">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Key Highlights:
                  </div>
                  {sol.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] mr-2 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-[#121212] border-t border-white/10 flex items-center justify-between gap-2 relative z-10">
                <button
                  onClick={() => onSelectSolutionDetail(sol)}
                  className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white flex items-center py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#F27D26]" />
                </button>

                <button
                  onClick={() => onOpenLeadModal('demo', sol.name)}
                  className="text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full bg-white text-black hover:bg-[#F27D26] hover:text-white transition-all shadow-sm"
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-14 bg-gradient-to-br from-[#121212] via-[#0c0c0c] to-[#080808] border border-white/10 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F27D26]">TAILORED DEPLOYMENTS</div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Need a Custom Transformation Architecture?</h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
              We specialize in custom university information management architectures, departmental databases, GIGW-compliant portals, and hybrid on-premise deployments across India.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10">
            <button
              onClick={() => onOpenLeadModal('consultation')}
              className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-white font-bold text-xs uppercase tracking-widest border border-white/20 transition-all"
            >
              Consultation
            </button>
            <button
              onClick={() => onOpenLeadModal('quotation')}
              className="px-6 py-3.5 rounded-full bg-[#F27D26] hover:bg-[#ff8a34] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-[#F27D26]/20 transition-all"
            >
              Custom Quotation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
