import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowRight, ArrowLeft, 
  RotateCcw, ShieldCheck, Zap, Layers, Clock, Cpu
} from 'lucide-react';
import { RECOMMENDER_QUESTIONS } from '../data/insightsData';
import { WizardRecommendation } from '../types';

interface SolutionRecommenderProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
}

export const SolutionRecommender: React.FC<SolutionRecommenderProps> = ({ onOpenLeadModal }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < RECOMMENDER_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  const calculateRecommendation = (): WizardRecommendation => {
    const org = answers[1] || 'education';
    const challenge = answers[2] || 'erp_pain';
    const scale = answers[3] || 'medium';
    const deployment = answers[4] || 'cloud';

    if (challenge === 'library_pain') {
      return {
        primarySolution: 'Samnvya Digital Library & Knowledge Vault',
        matchScore: 98,
        description: 'Engineered specifically to catalog physical books, manage barcodes, archive rare digital manuscripts, and deploy a responsive 24/7 OPAC search portal.',
        recommendedModules: ['Multi-Parameter OPAC Catalog', 'Accession Register & Barcode Generator', 'E-Book & Thesis Digital Vault', 'Patron Circulation & Fine Engine'],
        implementationWeeks: scale === 'enterprise' ? '3 to 4 Weeks' : '1 to 2 Weeks',
        keyBenefits: ['Fast barcode scan checkout', 'Remote mobile OPAC search for students', 'Zero software licensing headaches with cloud setup']
      };
    } else if (challenge === 'visitor_pain') {
      return {
        primarySolution: 'Samnvya Smart Visitor & Entry-Exit Security',
        matchScore: 97,
        description: 'Replaces paper registers with contactless QR codes, SMS/WhatsApp host authorization, contractor tracking, and multi-gate synchronization.',
        recommendedModules: ['QR Visitor Pass Kiosk / Guard Console', 'Host Instant Pre-Approval Engine', 'Multi-Gate Real-Time Sync', 'Emergency Headcount & Overstay Alerts'],
        implementationWeeks: '7 to 10 Days',
        keyBenefits: ['Eliminates fake logbook identities', 'Instant WhatsApp notifications to officers/hosts', 'Real-time premises analytics']
      };
    } else if (challenge === 'web_pain') {
      return {
        primarySolution: 'Institutional Web Portals & Managed AMC',
        matchScore: 99,
        description: 'High-availability, GIGW-compliant bilingual CMS with dedicated Jaipur-based AMC support, daily cloud backups, and anti-DDoS admission surge protection.',
        recommendedModules: ['Bilingual Institutional CMS (Hindi/English)', 'Circular & Tender Fast-Publishing Engine', 'High-Concurrency Cloud Hosting', 'Jaipur-Based Annual Maintenance (AMC)'],
        implementationWeeks: '2 to 3 Weeks',
        keyBenefits: ['99.9% uptime during peak admission results', 'Same-day circular upload SLA', 'Full GIGW and WCAG accessibility compliance']
      };
    } else if (challenge === 'alumni_pain') {
      return {
        primarySolution: 'Samnvya Alumni & Community Engagement Platform',
        matchScore: 96,
        description: 'Centralized directory for graduating batches, career mentorship feeds, distinguished alumni spotlights, and secure donation gateways.',
        recommendedModules: ['Verified Alumni Directory & Geo-Map', 'Placement & Mentorship Referral Feed', 'Donation & Endowment Gateway (80G)', 'Reunion & Webinar Event Kiosk'],
        implementationWeeks: '2 Weeks',
        keyBenefits: ['Re-engage lost alumni batches', 'Direct campus hiring referrals', 'Transparent endowment fundraising']
      };
    } else if (challenge === 'temple_pain') {
      return {
        primarySolution: 'Specialized Shrines & Community Management Suite',
        matchScore: 99,
        description: 'Tailored technology for religious trusts and shrines featuring automated digital donation receipts (80G), online seva bookings, and dharamshala records.',
        recommendedModules: ['Online Seva & Pooja Booking Portal', 'Instant Digital 80G Receipt via SMS/WhatsApp', 'Thermal Counter POS Software', 'Trust Ledger & Bhandar Management'],
        implementationWeeks: '1 to 2 Weeks',
        keyBenefits: ['100% transparent donation audits', 'Devotee SMS confirmations', 'Hybrid counter cash + online reconciliation']
      };
    } else {
      return {
        primarySolution: 'Samnvya Institutional ERP Suite',
        matchScore: 99,
        description: 'The definitive academic automation platform unifying online admissions, fee collections with instant bank reconciliation, continuous grading, and NAAC/NIRF reporting.',
        recommendedModules: ['Online Admissions & Merit Engine', 'Fee Management with Multi-Bank Bridges', 'Continuous Internal Assessment (CIA) & Grade Cards', 'NAAC / AISHE Institutional Data Compiler', 'Student Self-Service Portal'],
        implementationWeeks: scale === 'enterprise' ? '4 to 6 Weeks' : '2 to 3 Weeks',
        keyBenefits: ['Zero fee collection leakages', '70% reduction in administrative paper processing', 'Turnkey compliance with state university regulations']
      };
    }
  };

  const currentQ = RECOMMENDER_QUESTIONS[currentStep];
  const isSelected = answers[currentQ?.id] !== undefined;
  const recommendation = showResult ? calculateRecommendation() : null;

  return (
    <section id="recommender" className="py-20 lg:py-28 bg-transparent text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 02. INTERACTIVE ARCHITECTURE WIZARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white font-display">
            FIND THE <span className="text-stroke-white text-transparent">OPTIMAL</span> <span className="text-[#F27D26]">STACK.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto pt-1">
            Answer 4 quick parameters regarding institutional bottlenecks, student/faculty scale, and governance readiness for an instant recommendation.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="mt-12 bg-[#0b142b]/70 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/30 relative overflow-hidden">
          
          {!showResult ? (
            <div>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-gray-400 mb-2">
                  <span className="uppercase tracking-wider">QUESTION 0{currentStep + 1} OF 0{RECOMMENDER_QUESTIONS.length}</span>
                  <span className="text-[#F27D26]">{Math.round(((currentStep + 1) / RECOMMENDER_QUESTIONS.length) * 100)}% COMPLETE</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#F27D26] transition-all duration-300 ease-out rounded-full"
                    style={{ width: `${((currentStep + 1) / RECOMMENDER_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Box */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  {currentQ.question}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {currentQ.options.map((opt) => {
                  const active = answers[currentQ.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectOption(currentQ.id, opt.value)}
                      className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                        active
                          ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-xl shadow-[#F27D26]/20 font-bold'
                          : 'bg-[#121212] border-white/10 text-gray-300 hover:border-white/30 hover:bg-[#181818]'
                      }`}
                    >
                      <div className="flex items-start justify-between w-full">
                        <div className={`font-black text-sm uppercase tracking-wide ${active ? 'text-black' : 'text-white'}`}>
                          {opt.label}
                        </div>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${active ? 'border-black bg-black text-white' : 'border-gray-600'}`}>
                          {active && <div className="w-2 h-2 rounded-full bg-[#F27D26]"></div>}
                        </div>
                      </div>
                      <p className={`text-xs mt-2 ${active ? 'text-black/80 font-medium' : 'text-gray-400'}`}>
                        {opt.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors ${
                    currentStep === 0
                      ? 'text-gray-700 cursor-not-allowed'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-white/10'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!isSelected}
                  className={`px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center space-x-2 transition-all ${
                    isSelected
                      ? 'bg-white text-black hover:bg-[#F27D26] hover:text-white shadow-xl shadow-white/5'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === RECOMMENDER_QUESTIONS.length - 1 ? 'Generate Blueprint' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* Results Screen */
            recommendation && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[11px] font-black uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{recommendation.matchScore}% Match for Your Criteria</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                      Recommended: <span className="text-[#F27D26]">{recommendation.primarySolution}</span>
                    </h3>
                  </div>
                  <button
                    onClick={handleReset}
                    className="self-start sm:self-auto text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white flex items-center space-x-1 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                  >
                    <RotateCcw className="w-3.5 h-3.5 mr-1" />
                    <span>Reset</span>
                  </button>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {recommendation.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Recommended Modules */}
                  <div className="p-5 rounded-2xl bg-[#121212] border border-white/10">
                    <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-[#F27D26] mb-3">
                      <Layers className="w-4 h-4" />
                      <span>Recommended Core Stack</span>
                    </div>
                    <ul className="space-y-2.5">
                      {recommendation.recommendedModules.map((mod, i) => (
                        <li key={i} className="flex items-start text-xs text-gray-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] mr-2.5 shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Operational Impact & Timeline */}
                  <div className="p-5 rounded-2xl bg-[#121212] border border-white/10 space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-[#22c55e] mb-2">
                        <Clock className="w-4 h-4" />
                        <span>Estimated Deployment SLA</span>
                      </div>
                      <p className="text-sm font-bold text-white">
                        {recommendation.implementationWeeks} (Including Historical Data Migration & Training)
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                        Key Value Highlights
                      </div>
                      <ul className="space-y-1.5">
                        {recommendation.keyBenefits.map((ben, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mr-2 shrink-0"></span>
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Direct Action Callout */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    Ready to evaluate live screens and test this architecture?
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenLeadModal('quotation', recommendation.primarySolution)}
                      className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                      id="wizard-quote-btn"
                    >
                      Get Quotation
                    </button>
                    <button
                      onClick={() => onOpenLeadModal('demo', recommendation.primarySolution)}
                      className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#F27D26] hover:text-white text-xs font-black uppercase tracking-widest shadow-xl flex items-center space-x-2 transition-all"
                      id="wizard-demo-btn"
                    >
                      <span>Book Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
};
