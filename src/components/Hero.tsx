import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, 
  Sparkles, Layers, Database, BarChart3, 
  RefreshCw, Cpu, BookOpen, Users, Building2
} from 'lucide-react';
import { INSTITUTIONAL_METRICS } from '../data/institutionalData';

interface HeroProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onScrollToSection }) => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const ecosystemFlow = [
    { id: 0, label: 'Institution & Data', sub: 'Admissions, fees, physical records', icon: Building2 },
    { id: 1, label: 'Samnvya Ingestion', sub: 'Secure digitization & parsing', icon: Database },
    { id: 2, label: 'Intelligent SaaS Core', sub: 'ERP, OPAC, Access Control, Portals', icon: Cpu },
    { id: 3, label: 'Automated Workflows', sub: 'Zero-touch approvals & receipts', icon: RefreshCw },
    { id: 4, label: 'Analytics & NAAC', sub: 'Real-time audits & compliance', icon: BarChart3 },
    { id: 5, label: 'Verified Outcomes', sub: 'High uptime & paperless operations', icon: ShieldCheck }
  ];

  const clientHighlights = [
    'University of Rajasthan',
    'University Maharani College',
    'University Maharaja College',
    'Dr. Bhimrao Ambedkar Law University',
    'Centre for Converging Technologies (CCT)',
    'Five Year Law College',
    'Department of Physics, UoR',
    'Shri Khole Ke Hanuman Ji Trust'
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-transparent text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Subtle Gradient & Grid lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#F27D26]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#F27D26]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Typography Brand Statement & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Vision Eyebrow */}
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F27D26] animate-pulse"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
                // VISION: THE DIRECT DIGITAL WORLD
              </span>
              <span className="text-gray-600 font-mono">/</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                JAIPUR HQ
              </span>
            </div>

            {/* Giant Bold Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.88] text-white font-display">
                TRANSFORMING <br />
                <span className="text-stroke-white text-transparent">INFORMATION</span> <br />
                INTO <span className="text-[#F27D26]">INTELLIGENCE.</span>
              </h1>
            </div>

            {/* Orange Decorative Accent Bar */}
            <div className="w-16 h-1.5 bg-[#F27D26] rounded-full"></div>

            {/* Sub-headline & Description */}
            <div className="space-y-3 pt-1">
              <p className="text-base sm:text-lg font-bold text-gray-200 uppercase tracking-tight">
                Enterprise Information Management • Modular SaaS Platforms • Digital Transformation
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl font-normal">
                SAMNVYA IMS PRIVATE LIMITED delivers high-impact digital architectures, University/College ERPs, Digital Libraries, and workflow automation tailored for higher education, autonomous bodies, and forward-looking enterprises.
              </p>
            </div>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs text-gray-300 bg-[#0e0e0e] border border-white/10 px-3.5 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span className="font-bold text-[11px] uppercase tracking-wider">Modular SaaS Core</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-300 bg-[#0e0e0e] border border-white/10 px-3.5 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span className="font-bold text-[11px] uppercase tracking-wider">GIGW & Cloud Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-300 bg-[#0e0e0e] border border-white/10 px-3.5 py-2.5 rounded-xl col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span className="font-bold text-[11px] uppercase tracking-wider">Jaipur On-Site AMC</span>
              </div>
            </div>

            {/* Action Buttons: Signature High-Impact Pill */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenLeadModal('demo')}
                className="group flex items-center space-x-4 bg-white text-black pl-7 pr-2 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all shadow-xl shadow-white/5"
                id="hero-request-demo-btn"
              >
                <span>REQUEST DEMO</span>
                <div className="w-9 h-9 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              <button
                onClick={() => onScrollToSection('solutions')}
                className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-bold text-xs uppercase tracking-widest transition-all"
                id="hero-explore-solutions-btn"
              >
                Explore 7 Verticals
              </button>

              <button
                onClick={() => onScrollToSection('recommender')}
                className="px-4 py-3.5 text-[#F27D26] hover:text-white font-bold text-xs uppercase tracking-wider flex items-center group"
                id="hero-find-solution-btn"
              >
                <span>Interactive Wizard</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Technology Flow Simulator */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b142b]/70 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-cyan-950/30 relative overflow-hidden">
              {/* Background numeral watermark */}
              <div className="absolute -bottom-8 -right-6 text-[140px] font-black text-cyan-400/[0.04] select-none pointer-events-none font-mono">
                07
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center space-x-2.5">
                  <img 
                    src="/samnvya-logo.png" 
                    alt="SAMNVYA IMS" 
                    className="w-6 h-6 object-contain rounded-md bg-black border border-white/10 p-0.5" 
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    TRANSFORMATION ENGINE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#F27D26] bg-[#F27D26]/10 border border-[#F27D26]/20 px-2 py-0.5 rounded">
                  v2026.4
                </span>
              </div>

              {/* Interactive Steps */}
              <div className="mt-5 space-y-2.5 relative z-10">
                {ecosystemFlow.map((step) => {
                  const Icon = step.icon;
                  const isActive = activeStep === step.id;
                  return (
                    <div
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                        isActive
                          ? 'bg-[#F27D26]/10 border-[#F27D26] shadow-lg shadow-[#F27D26]/10 text-white'
                          : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/20 hover:text-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3.5">
                          <div className={`p-2 rounded-lg font-mono ${isActive ? 'bg-[#F27D26] text-black font-black' : 'bg-white/5 text-gray-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 text-white">
                              <span className="text-[#F27D26] font-mono">0{step.id + 1}.</span>
                              <span>{step.label}</span>
                            </div>
                            <div className="text-[11px] text-gray-400 mt-0.5">
                              {step.sub}
                            </div>
                          </div>
                        </div>
                        {isActive && (
                          <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-[#F27D26] text-black">
                            ACTIVE
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Step Real-time Callout */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs relative z-10 font-mono">
                <span className="text-gray-500 text-[11px] uppercase tracking-wider">Active Module:</span>
                <span className="font-bold text-[#F27D26]">
                  {ecosystemFlow[activeStep].label}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Credibility & Trust Metrics Banner */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {INSTITUTIONAL_METRICS.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#0b142b]/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition-all relative overflow-hidden group hover:shadow-xl hover:shadow-cyan-950/20">
                <div className="absolute top-2 right-3 text-xs font-mono text-white/10 group-hover:text-[#F27D26]/40 transition-colors">
                  0{idx + 1}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter font-display">
                  <span className="text-white group-hover:text-[#F27D26] transition-colors">
                    {metric.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-200 mt-2">
                  {metric.label}
                </div>
                <p className="text-[11px] text-gray-400 mt-1 hidden sm:block">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Institutional Trust Strip */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300 shrink-0">
              TRUSTED BY INSTITUTIONS & AUTHORITIES:
            </span>
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-end">
              {clientHighlights.slice(0, 5).map((org, i) => (
                <span 
                  key={i} 
                  className="px-3.5 py-1.5 rounded-full bg-[#0b142b]/70 backdrop-blur-md text-gray-200 text-xs font-semibold border border-white/10 hover:border-[#F27D26]/60 transition-all"
                >
                  {org}
                </span>
              ))}
              <a 
                href="#case-studies" 
                className="text-xs text-[#F27D26] hover:text-white font-bold ml-2 uppercase tracking-wider"
              >
                + Case Studies
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
