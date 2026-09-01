import React from 'react';
import { 
  X, CheckCircle2, ShieldCheck, ArrowRight, 
  Workflow, Lock, Download, 
  GraduationCap, BookOpen, Users, Briefcase, Globe, Sparkles, Database, Layers, HelpCircle
} from 'lucide-react';
import { SolutionModule } from '../types';

interface SolutionDetailModalProps {
  solution: SolutionModule | null;
  onClose: () => void;
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({ solution, onClose, onOpenLeadModal }) => {
  if (!solution) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#F27D26]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#F27D26]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#F27D26]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#F27D26]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#F27D26]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#F27D26]" />;
      case 'Database': return <Database className="w-6 h-6 text-[#F27D26]" />;
      default: return <Layers className="w-6 h-6 text-[#F27D26]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#0c0c0c] text-white w-full max-w-4xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#121212] border-b border-white/10 flex items-start justify-between relative shrink-0">
          <div className="flex items-start space-x-4 pr-8">
            <div className="p-3.5 rounded-2xl bg-black border border-white/10 shrink-0">
              {getIcon(solution.icon)}
            </div>
            <div>
              {solution.badge && (
                <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/30 mb-2 font-mono">
                  {solution.badge}
                </span>
              )}
              <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tighter text-white font-display">
                {solution.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-normal">
                {solution.shortDesc}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
            id="modal-close-btn"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-gray-300 text-sm">
          
          {/* Solution Overview */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#F27D26] mb-2 font-mono">
              // ARCHITECTURE & OPERATIONAL OVERVIEW
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
              {solution.fullDesc}
            </p>
          </div>

          {/* Who It Is For */}
          <div className="bg-[#121212] p-6 rounded-2xl border border-white/10">
            <h3 className="text-xs font-black uppercase tracking-widest text-white mb-3.5 flex items-center font-mono">
              <Users className="w-4 h-4 mr-2 text-[#F27D26]" />
              TARGET ORGANIZATIONS & DEPARTMENTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {solution.targetAudience.map((audience, idx) => (
                <div key={idx} className="flex items-center text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F27D26] mr-2 shrink-0" />
                  <span>{audience}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Grid */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-white mb-4 flex items-center font-mono">
              <Layers className="w-4 h-4 mr-2 text-[#F27D26]" />
              DELIVERED MODULES & CORE CAPABILITIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#121212] border border-white/10 shadow-sm flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#F27D26] mt-1.5 shrink-0"></div>
                  <span className="text-xs font-bold text-gray-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Benefits */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#F27D26] mb-3 flex items-center font-mono">
              <CheckCircle2 className="w-4 h-4 mr-2 text-[#F27D26]" />
              SUBSTANTIATED BUSINESS & ADMINISTRATIVE IMPACT
            </h3>
            <ul className="space-y-2.5">
              {solution.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start text-xs text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mr-3 shrink-0 mt-1.5"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation Workflow */}
          {solution.workflow && solution.workflow.length > 0 && (
            <div className="pt-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-white mb-4 flex items-center font-mono">
                <Workflow className="w-4 h-4 mr-2 text-[#F27D26]" />
                STRUCTURED 4-STEP ROLLOUT WORKFLOW
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {solution.workflow.map((st) => (
                  <div key={st.step} className="p-4 rounded-2xl bg-[#121212] border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-black text-[#F27D26] font-mono">0{st.step}.</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-tight mt-1">{st.title}</h4>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-2 font-normal">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security & Reliability */}
          <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#F27D26] mb-3 flex items-center font-mono">
              <Lock className="w-4 h-4 mr-2 text-[#F27D26]" />
              SECURITY, AUDIT TRAIL & INDIAN DATA RESIDENCY
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
              {solution.securityHighlights.map((sec, idx) => (
                <div key={idx} className="flex items-start">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                  <span>{sec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {solution.faqs && solution.faqs.length > 0 && (
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-white mb-3.5 flex items-center font-mono">
                <HelpCircle className="w-4 h-4 mr-2 text-[#F27D26]" />
                FREQUENTLY ASKED TECHNICAL & DEPLOYMENT QUESTIONS
              </h3>
              <div className="space-y-3">
                {solution.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#121212] border border-white/10">
                    <h4 className="text-xs font-bold text-white">{faq.question}</h4>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed font-normal">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-5 sm:p-6 bg-[#121212] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenLeadModal('brochure', solution.name);
            }}
            className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#F27D26] flex items-center space-x-2 font-mono transition-colors"
            id="modal-download-brochure-btn"
          >
            <Download className="w-4 h-4" />
            <span>Download Specification Deck</span>
          </button>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenLeadModal('quotation', solution.name);
              }}
              className="flex-1 sm:flex-initial px-5 py-3 text-xs font-black uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/20 rounded-full transition-colors font-mono"
              id="modal-request-quote-btn"
            >
              Get Quotation
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenLeadModal('demo', solution.name);
              }}
              className="flex-1 sm:flex-initial px-6 py-3 text-xs font-black uppercase tracking-widest text-white bg-[#F27D26] hover:bg-[#ff9040] rounded-full shadow-lg shadow-[#F27D26]/20 transition-all flex items-center justify-center space-x-2"
              id="modal-book-demo-btn"
            >
              <span>Schedule Live Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
