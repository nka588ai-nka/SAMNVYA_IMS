import React, { useState, useEffect } from 'react';
import { 
  Building2, Phone, Mail, MapPin, Globe, 
  ShieldCheck, Sparkles, ArrowRight, Heart
} from 'lucide-react';
import { PageId } from '../types';

const BRIGHT_BRAND_COLORS = [
  '#FFFFFF', // Bright Crisp White
  '#FFD700', // Electric Gold
  '#00F5FF', // Neon Cyan
  '#39FF14', // Luminous Lime / Emerald
  '#FF6080', // Vivid Coral / Bright Rose
  '#FFA500', // Vibrant Amber Orange
  '#C084FC', // Electric Purple
  '#38BDF8', // Bright Radiant Azure
];

interface FooterProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onSelectSolution: (solutionId: string) => void;
  onNavigatePage?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal, onSelectSolution, onNavigatePage }) => {
  const [brandColorIndex, setBrandColorIndex] = useState(0);

  const handleNav = (page: PageId) => {
    if (onNavigatePage) {
      onNavigatePage(page);
    }
  };

  // Dynamic bright color changer every 2 seconds for SAMNVYA
  useEffect(() => {
    const timer = setInterval(() => {
      setBrandColorIndex((prev) => (prev + 1) % BRIGHT_BRAND_COLORS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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
                className="w-14 h-14 object-contain shrink-0" 
              />
              <div className="flex flex-col justify-center select-none shrink-0">
                <svg 
                  viewBox="0 0 170 48" 
                  className="w-[175px] sm:w-[195px] h-auto overflow-visible"
                  aria-label="SAMNVYA - The Information Management System - Samnvya IMS Private Limited"
                >
                  {/* Line 1: SAMNVYA Large with 2s rotating bright color */}
                  <text
                    x="0"
                    y="23"
                    textLength="170"
                    lengthAdjust="spacing"
                    fontSize="26"
                    fontWeight="900"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fill={BRIGHT_BRAND_COLORS[brandColorIndex]}
                    style={{
                      transition: 'fill 0.7s ease',
                      filter: `drop-shadow(0 0 10px ${BRIGHT_BRAND_COLORS[brandColorIndex]}66)`
                    }}
                  >
                    SAMNVYA
                  </text>
                  {/* Line 2: THE INFORMATION MANAGEMENT SYSTEM - Exactly flush with S and A */}
                  <text
                    x="0"
                    y="35"
                    textLength="170"
                    lengthAdjust="spacing"
                    fontSize="8"
                    fontWeight="600"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fill="#E2E8F0"
                  >
                    THE INFORMATION MANAGEMENT SYSTEM
                  </text>
                  {/* Line 3: Samnvya IMS Private Limited - Exactly flush with S and A */}
                  <text
                    x="0"
                    y="47"
                    textLength="170"
                    lengthAdjust="spacing"
                    fontSize="9.8"
                    fontWeight="700"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    fill="#FFD000"
                  >
                    Samnvya IMS Private Limited
                  </text>
                </svg>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              SAMNVYA IMS PRIVATE LIMITED delivers enterprise Information Management Systems, College/University ERP, Digital Libraries, and modular SaaS platforms for institutions, government bodies, and enterprises.
            </p>

            <div className="space-y-2 pt-2 text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-[#FFD000] mr-2.5 shrink-0 mt-0.5" />
                <span className="text-[11px]">171/251, Pratap Nagar, Jaipur, Rajasthan – 302033</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-3.5 h-3.5 text-[#FFD000] mr-2.5 shrink-0" />
                <a href="tel:+919509386565" className="hover:text-[#FFD000] transition-colors font-mono font-bold">
                  +91-9509386565
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-3.5 h-3.5 text-[#FFD000] mr-2.5 shrink-0" />
                <a href="mailto:samnvya.ims@gmail.com" className="hover:text-[#FFD000] transition-colors font-mono font-bold">
                  samnvya.ims@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Official Websites */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-mono flex items-center">
              <Globe className="w-3.5 h-3.5 mr-1.5 text-[#FFD000]" />
              Official Web Portals
            </h5>
            <div className="space-y-2.5 text-xs">
              <a 
                href="https://online.samnvya.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-400/30 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-white group-hover:text-amber-300">
                  <span>Samnvya Online ERP</span>
                  <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">online.samnvya.com</span>
              </a>

              <a 
                href="https://thekhyati.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/30 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-white group-hover:text-violet-300">
                  <span>The Khyati Platform</span>
                  <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">thekhyati.com</span>
              </a>

              <a 
                href="https://samnvya.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-400/30 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-white group-hover:text-[#FFD000]">
                  <span>SAMNVYA Corporate HQ</span>
                  <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-[#FFD000] group-hover:translate-x-0.5 transition-all" />
                </div>
                <span className="text-[10px] text-gray-400 font-mono block">samnvya.com</span>
              </a>

              <a 
                href="https://samnvya.com/test/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-white group-hover:text-emerald-300">
                  <span>Testing & Sandbox</span>
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
                <button onClick={() => handleNav('solutions')} className="hover:text-[#F27D26] transition-colors text-left">
                  Information Management
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#F27D26] transition-colors text-left">
                  Institutional ERP Software
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#F27D26] transition-colors text-left">
                  Digital Library & OPAC
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#F27D26] transition-colors text-left">
                  Alumni & Community Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#F27D26] transition-colors text-left">
                  Smart Visitor Management
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-[#F27D26] transition-colors text-left">
                  Institutional Web AMC
                </button>
              </li>
            </ul>
          </div>

          {/* Industries & Sectors */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-mono">Industries Served</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-[#F27D26] transition-colors text-left">
                  Higher Education & Colleges
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-[#F27D26] transition-colors text-left">
                  Government & Autonomous
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-[#F27D26] transition-colors text-left">
                  Enterprises & SMEs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-[#F27D26] transition-colors text-left">
                  Religious Shrines & Trusts
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('corporate')} className="hover:text-[#F27D26] transition-colors text-left">
                  Government Procurement (B2G)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-[#F27D26] transition-colors text-left">
                  Institutional Projects & Deployments
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Tools & Quick Links */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-mono">Company & Pages</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('about-us')} className="hover:text-[#F27D26] transition-colors text-left">
                  About SAMNVYA & Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('corporate')} className="hover:text-[#F27D26] transition-colors text-left">
                  Corporate & MCA Compliance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('business-with-us')} className="hover:text-[#F27D26] transition-colors text-left">
                  Business With Us & Tenders
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('events-news')} className="hover:text-[#F27D26] transition-colors text-left">
                  Events & Press Releases
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('videos')} className="hover:text-[#F27D26] transition-colors text-left">
                  Video Demonstrations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('photos')} className="hover:text-[#F27D26] transition-colors text-left">
                  Photo Gallery & Field Deployments
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact-us')} className="hover:text-[#F27D26] transition-colors text-left">
                  Contact & Support Desk
                </button>
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
