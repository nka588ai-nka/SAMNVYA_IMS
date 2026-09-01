import React from 'react';
import { 
  Building2, Phone, Mail, MapPin, Globe, 
  ShieldCheck, Sparkles, ArrowRight, Heart
} from 'lucide-react';

interface FooterProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onSelectSolution: (solutionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal, onSelectSolution }) => {
  return (
    <footer className="bg-[#040814]/90 backdrop-blur-2xl text-gray-300 text-xs border-t border-white/10 relative">
      
      {/* Upper Footer CTA Strip */}
      <div className="bg-[#070e1e]/80 backdrop-blur-xl border-b border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-black text-[#F27D26] uppercase tracking-[0.3em] block mb-1 font-mono">
              // START YOUR TRANSFORMATION
            </span>
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-display">
              SCHEDULE A TAILORED DEMONSTRATION FOR YOUR CAMPUS
            </h4>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenLeadModal('quotation')}
              className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-wider border border-white/20 transition-colors"
            >
              Get a Quotation
            </button>
            <button
              onClick={() => onOpenLeadModal('demo')}
              className="px-6 py-3 rounded-full bg-[#F27D26] hover:bg-[#ff9040] text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-[#F27D26]/20 transition-all flex items-center space-x-2"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & NAP Info (Span 1.5 cols on desktop) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5">
              <img 
                src="/samnvya-logo.png" 
                alt="SAMNVYA IMS Logo" 
                className="w-12 h-12 object-contain rounded-2xl bg-white/5 border border-white/10 p-1" 
              />
              <div className="flex flex-col">
                <span className="font-black text-lg text-white tracking-tighter uppercase font-display">SAMNVYA IMS</span>
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                  The Information Management System
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              SAMNVYA IMS PRIVATE LIMITED delivers enterprise Information Management Systems, College/University ERP, Digital Libraries, and modular SaaS platforms for institutions, government bodies, and enterprises.
            </p>

            <div className="space-y-2 pt-2 text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-[#F27D26] mr-2.5 shrink-0 mt-0.5" />
                <span className="text-[11px]">171/251, Pratap Nagar, Jaipur, Rajasthan – 302033</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-3.5 h-3.5 text-[#F27D26] mr-2.5 shrink-0" />
                <a href="tel:+919509386565" className="hover:text-white transition-colors font-mono font-bold">
                  +91-9509386565
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-3.5 h-3.5 text-[#F27D26] mr-2.5 shrink-0" />
                <a href="mailto:samnvya.ims@gmail.com" className="hover:text-white transition-colors font-mono font-bold">
                  samnvya.ims@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Official Websites in Order */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-mono flex items-center">
              <Globe className="w-3.5 h-3.5 mr-1.5 text-[#F27D26]" />
              Official Web Portals
            </h5>
            <div className="space-y-2.5 text-xs">
              <a 
                href="https://online.samnvya.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-white group-hover:text-cyan-300">
                  <span>1. Online ERP Portal</span>
                  <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">online.samnvya.com</span>
              </a>

              <a 
                href="https://thekhyati.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/30 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-white group-hover:text-violet-300">
                  <span>2. The Khyati Network</span>
                  <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">thekhyati.com</span>
              </a>

              <a 
                href="https://samnvya.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#F27D26]/30 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-white group-hover:text-[#F27D26]">
                  <span>3. Samnvya Corporate HQ</span>
                  <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-[#F27D26] group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">samnvya.com</span>
              </a>

              <a 
                href="https://samnvya.com/test/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-white group-hover:text-emerald-300">
                  <span>4. Testing & Sandbox</span>
                  <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">samnvya.com/test/</span>
              </a>
            </div>
          </div>

          {/* Solutions Verticals */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-mono">Solutions</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solutions" className="hover:text-[#F27D26] transition-colors">
                  Information Management
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F27D26] transition-colors">
                  Institutional ERP Software
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F27D26] transition-colors">
                  Digital Library & OPAC
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F27D26] transition-colors">
                  Alumni & Community Portal
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F27D26] transition-colors">
                  Smart Visitor Management
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#F27D26] transition-colors">
                  Institutional Web AMC
                </a>
              </li>
            </ul>
          </div>

          {/* Industries & Sectors */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-mono">Industries Served</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#industries" className="hover:text-[#F27D26] transition-colors">
                  Higher Education & Colleges
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#F27D26] transition-colors">
                  Government & Autonomous
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#F27D26] transition-colors">
                  Enterprises & SMEs
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#F27D26] transition-colors">
                  Religious Shrines & Trusts
                </a>
              </li>
              <li>
                <a href="#b2g" className="hover:text-[#F27D26] transition-colors">
                  Government Procurement (B2G)
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-[#F27D26] transition-colors">
                  Institutional Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Tools & Quick Links */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-mono">Tools & Resources</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#recommender" className="hover:text-[#F27D26] transition-colors">
                  Solution Finder Wizard
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#F27D26] transition-colors">
                  ROI & Impact Calculator
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-[#F27D26] transition-colors">
                  Brochure Center (PDFs)
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-[#F27D26] transition-colors">
                  Ecosystem News & Updates
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F27D26] transition-colors">
                  About SAMNVYA & Jaipur HQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F27D26] transition-colors">
                  Contact & Support Desk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 font-mono">
          <div>
            © 2026 SAMNVYA IMS PRIVATE LIMITED. All rights reserved. CIN Registered in India.
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Data Sovereignty</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
