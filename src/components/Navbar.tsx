import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronDown, 
  Database, Layers, BookOpen, Users, ShieldCheck, 
  Cloud, Sparkles, ArrowRight, CheckCircle2, FileText,
  Building2, GraduationCap, Briefcase, Globe, ExternalLink, TestTube
} from 'lucide-react';
import { SOLUTION_CATEGORIES } from '../data/solutionsData';

interface NavbarProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onSelectSolution: (solutionId: string) => void;
  activeSection: string;
}

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

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal, onSelectSolution, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [portalsDropdownOpen, setPortalsDropdownOpen] = useState(false);
  const [brandColorIndex, setBrandColorIndex] = useState(0);

  // Dynamic bright color changer every 2 seconds for SAMNVYA
  useEffect(() => {
    const timer = setInterval(() => {
      setBrandColorIndex((prev) => (prev + 1) % BRIGHT_BRAND_COLORS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-blue-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-violet-600" />;
      case 'Users': return <Users className="w-5 h-5 text-purple-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600" />;
      default: return <Database className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Corporate Contact & Official Portals Strip */}
      <div className="bg-[#050b18] text-gray-300 text-[11px] py-2.5 px-4 border-b border-white/10 hidden md:block font-mono">
        <div className="max-w-7xl mx-auto space-y-2">
          {/* Contact Details & Vision Row */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-5 lg:space-x-7">
              <a 
                href="tel:+919509386565" 
                className="flex items-center text-white hover:text-[#FFD000] font-bold transition-colors"
                id="topbar-phone-link"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#FFD000]" />
                <span>+91-9509386565</span>
              </a>
              <a 
                href="mailto:samnvya.ims@gmail.com" 
                className="flex items-center text-white hover:text-[#FFD000] font-bold transition-colors"
                id="topbar-email-link"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5 text-[#FFD000]" />
                <span>samnvya.ims@gmail.com</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#FFD000]" />
                <span>Pratap Nagar, Jaipur, Rajasthan</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] uppercase font-black tracking-[0.2em] bg-amber-500/10 text-[#FFD000] border border-amber-400/30 shadow-[0_0_10px_rgba(255,208,0,0.2)]">
                VISION: “THE DIRECT DIGITAL WORLD”
              </span>
              <a
                href="https://wa.me/919509386565?text=Hello%20Samnvya%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:text-white font-black transition-colors flex items-center text-[10px] uppercase tracking-wider"
                id="topbar-whatsapp-link"
              >
                <span className="w-2 h-2 rounded-full bg-[#22c55e] mr-1.5 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                WhatsApp Desk
              </a>
            </div>
          </div>

          {/* Official Websites Link Strip - Center Aligned in Golden Shining Box */}
          <div className="border-t border-white/10 pt-2 flex flex-col items-center justify-center gap-1.5 text-center">
            <div className="flex items-center justify-center space-x-1.5 text-[#FFD000] font-black text-[11px]">
              <Globe className="w-3.5 h-3.5 text-[#FFD000]" />
              <span className="uppercase tracking-[0.2em] font-mono">OFFICIAL WEBSITES:</span>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-2 text-[11px]">
              <a
                href="https://online.samnvya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="golden-shimmer-btn px-3.5 py-1 text-[11px] rounded-lg group shadow-md"
                title="Samnvya Online Cloud ERP Portal"
              >
                <span>https://online.samnvya.com/</span>
                <ExternalLink className="w-3 h-3 ml-1.5 text-[#061638] group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://thekhyati.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="golden-shimmer-btn px-3.5 py-1 text-[11px] rounded-lg group shadow-md"
                title="The Khyati Institutional & Alumni Network"
              >
                <span>https://thekhyati.com/</span>
                <ExternalLink className="w-3 h-3 ml-1.5 text-[#061638] group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://samnvya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="golden-shimmer-btn px-3.5 py-1 text-[11px] rounded-lg group shadow-md"
                title="SAMNVYA IMS Corporate Website"
              >
                <span>https://samnvya.com/</span>
                <ExternalLink className="w-3 h-3 ml-1.5 text-[#061638] group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://samnvya.com/test/"
                target="_blank"
                rel="noopener noreferrer"
                className="golden-shimmer-btn px-3.5 py-1 text-[11px] rounded-lg group shadow-md"
                title="Samnvya Testing & Sandbox Portal"
              >
                <span>https://samnvya.com/test/</span>
                <ExternalLink className="w-3 h-3 ml-1.5 text-[#061638] group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-[#040916]/95 backdrop-blur-xl border-amber-500/20 py-2 shadow-2xl shadow-black/80' 
            : 'bg-[#040817]/90 backdrop-blur-md border-white/10 py-2.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity (No box behind logo, SAMNVYA large with dynamic 2s color rotation, then THE INFORMATION MANAGEMENT SYSTEM, then Samnvya IMS Private Limited - exactly aligned from start to end) */}
          <a href="#home" className="flex items-center space-x-3 group shrink-0" id="navbar-brand-logo">
            <img 
              src="/samnvya-logo.png" 
              alt="SAMNVYA IMS Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain group-hover:scale-105 transition-transform shrink-0" 
            />
            <div className="flex flex-col justify-center select-none shrink-0">
              <svg 
                viewBox="0 0 170 48" 
                className="w-[165px] sm:w-[185px] lg:w-[205px] h-auto overflow-visible"
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
          </a>

          {/* Desktop Navigation Links - Sleek, single-line Golden Nav Items without crowding */}
          <div className="hidden xl:flex items-center space-x-1.5 flex-nowrap shrink-0">
            <a 
              href="#home" 
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'home' 
                  ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                  : 'golden-shimmer-btn'
              }`}
              id="navlink-home"
            >
              Home
            </a>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <a 
                href="#solutions" 
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all inline-flex items-center whitespace-nowrap ${
                  activeSection === 'solutions' 
                    ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                    : 'golden-shimmer-btn'
                }`}
                id="navlink-solutions"
              >
                <span>Solutions</span>
                <ChevronDown className="w-3 h-3 ml-1 text-[#061638]" />
              </a>

              {/* Mega Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[760px] bg-[#070e22]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-amber-400/30 p-6 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="col-span-2 pb-3 border-b border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFD000]">Enterprise Modular SaaS</div>
                      <p className="text-xs text-gray-300 mt-0.5">Architectures for Higher Education, Governance & Enterprises</p>
                    </div>
                    <button 
                      onClick={() => onOpenLeadModal('demo')}
                      className="text-xs font-bold text-[#FFD000] hover:text-white flex items-center uppercase tracking-wider"
                      id="dropdown-book-demo-btn"
                    >
                      Book Full Demo <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#FFD000]" />
                    </button>
                  </div>

                  {SOLUTION_CATEGORIES.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#solutions`}
                      onClick={() => {
                        onSelectSolution(cat.id);
                        setSolutionsDropdownOpen(false);
                      }}
                      className="flex items-start p-3 rounded-xl hover:bg-white/10 transition-colors group/item border border-transparent hover:border-amber-400/30"
                    >
                      <div className="p-2 rounded-lg bg-amber-400/10 text-[#FFD000] group-hover/item:bg-[#FFD000] group-hover/item:text-[#061638] transition-all mr-3 mt-0.5">
                        {getCategoryIcon(cat.icon)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover/item:text-[#FFD000] transition-colors flex items-center uppercase tracking-wide">
                          {cat.title}
                        </div>
                        <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{cat.tagline}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <a 
                href="#industries" 
                className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all inline-flex items-center whitespace-nowrap ${
                  activeSection === 'industries' 
                    ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                    : 'golden-shimmer-btn'
                }`}
                id="navlink-industries"
              >
                <span>Industries</span>
                <ChevronDown className="w-3 h-3 ml-1 text-[#061638]" />
              </a>

              {industriesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-[#070e22]/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-amber-400/30 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <a href="#industries" className="flex items-center p-2.5 rounded-lg hover:bg-white/10 text-xs font-bold text-gray-200 hover:text-[#FFD000] uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 mr-2.5 text-[#FFD000]" />
                    Higher Education & Colleges
                  </a>
                  <a href="#industries" className="flex items-center p-2.5 rounded-lg hover:bg-white/10 text-xs font-bold text-gray-200 hover:text-[#FFD000] uppercase tracking-wider">
                    <Building2 className="w-4 h-4 mr-2.5 text-[#FFD000]" />
                    Government & Autonomous
                  </a>
                  <a href="#industries" className="flex items-center p-2.5 rounded-lg hover:bg-white/10 text-xs font-bold text-gray-200 hover:text-[#FFD000] uppercase tracking-wider">
                    <Briefcase className="w-4 h-4 mr-2.5 text-[#FFD000]" />
                    Enterprises & SMEs
                  </a>
                  <a href="#industries" className="flex items-center p-2.5 rounded-lg hover:bg-white/10 text-xs font-bold text-gray-200 hover:text-[#FFD000] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 mr-2.5 text-[#FFD000]" />
                    Communities & Shrines
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#case-studies" 
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'case-studies' 
                  ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                  : 'golden-shimmer-btn'
              }`}
              id="navlink-case-studies"
            >
              Case Studies
            </a>

            <a 
              href="#recommender" 
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'recommender' 
                  ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                  : 'golden-shimmer-btn'
              }`}
              id="navlink-recommender"
            >
              Finder
            </a>

            <a 
              href="#calculator" 
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'calculator' 
                  ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                  : 'golden-shimmer-btn'
              }`}
              id="navlink-calculator"
            >
              ROI Impact
            </a>

            <a 
              href="#b2g" 
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'b2g' 
                  ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                  : 'golden-shimmer-btn'
              }`}
              id="navlink-b2g"
            >
              B2G
            </a>

            <a 
              href="#resources" 
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'resources' 
                  ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                  : 'golden-shimmer-btn'
              }`}
              id="navlink-resources"
            >
              Resources
            </a>

            <a 
              href="#about" 
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'about' 
                  ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                  : 'golden-shimmer-btn'
              }`}
              id="navlink-about"
            >
              About
            </a>

            <a 
              href="#contact" 
              className={`px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg transition-all whitespace-nowrap ${
                activeSection === 'contact' 
                  ? 'golden-shimmer-btn golden-shimmer-btn-active scale-105' 
                  : 'golden-shimmer-btn'
              }`}
              id="navlink-contact"
            >
              Contact
            </a>

            {/* Official Portals Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPortalsDropdownOpen(true)}
              onMouseLeave={() => setPortalsDropdownOpen(false)}
            >
              <button
                className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-black rounded-lg inline-flex items-center golden-shimmer-btn transition-all whitespace-nowrap"
                id="navlink-official-portals"
              >
                <Globe className="w-3.5 h-3.5 mr-1 text-[#061638]" />
                <span>Portals</span>
                <ChevronDown className="w-3 h-3 ml-1 text-[#061638]" />
              </button>

              {portalsDropdownOpen && (
                <div className="absolute right-0 mt-1 w-80 bg-[#070e22]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-amber-400/30 p-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-2.5 py-1.5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FFD000]">
                      // OFFICIAL WEB SITES
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold">4 Verified</span>
                  </div>

                  <a 
                    href="https://online.samnvya.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start p-2.5 rounded-xl hover:bg-white/10 group transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FFD000] mr-2.5 mt-1.5 shrink-0 shadow-[0_0_6px_#FFD000]"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-[#FFD000]">Samnvya Online ERP</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#FFD000]" />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono block">online.samnvya.com</span>
                    </div>
                  </a>

                  <a 
                    href="https://thekhyati.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start p-2.5 rounded-xl hover:bg-white/10 group transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FFD000] mr-2.5 mt-1.5 shrink-0 shadow-[0_0_6px_#FFD000]"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-[#FFD000]">The Khyati Platform</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#FFD000]" />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono block">thekhyati.com</span>
                    </div>
                  </a>

                  <a 
                    href="https://samnvya.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start p-2.5 rounded-xl hover:bg-white/10 group transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FFD000] mr-2.5 mt-1.5 shrink-0 shadow-[0_0_6px_#FFD000]"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-[#FFD000]">SAMNVYA Corporate HQ</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#FFD000]" />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono block">samnvya.com</span>
                    </div>
                  </a>

                  <a 
                    href="https://samnvya.com/test/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start p-2.5 rounded-xl hover:bg-white/10 group transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FFD000] mr-2.5 mt-1.5 shrink-0 shadow-[0_0_6px_#FFD000]"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-[#FFD000]">Testing & Sandbox</span>
                        <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#FFD000]" />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono block">samnvya.com/test/</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Action CTAs: Bold Golden Buttons with High Contrast */}
          <div className="hidden lg:flex items-center space-x-2.5 shrink-0">
            <button
              onClick={() => onOpenLeadModal('quotation')}
              className="px-3.5 py-2 text-xs font-black golden-shimmer-btn rounded-xl transition-all shadow"
              id="navbar-get-quote-btn"
            >
              Quotation
            </button>
            <button
              onClick={() => onOpenLeadModal('demo')}
              className="group flex items-center space-x-2 golden-shimmer-btn pl-4 pr-1.5 py-1.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow"
              id="navbar-request-demo-btn"
            >
              <span>Demo</span>
              <div className="w-6 h-6 rounded-lg bg-[#061638] text-[#FFD000] flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={() => onOpenLeadModal('demo')}
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider golden-shimmer-btn rounded-lg"
              id="mobile-header-demo-btn"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-amber-400 hover:text-white hover:bg-white/10 focus:outline-none"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#070e22]/98 backdrop-blur-2xl border-t border-amber-500/20 px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200">
            {/* Mobile Official Portals Quick Strip */}
            <div className="pb-3 border-b border-white/10">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FFD000] block mb-2">
                Official Web Portals
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://online.samnvya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg golden-shimmer-btn text-[10.5px] font-black flex items-center justify-between"
                >
                  <span>Online ERP</span>
                  <ExternalLink className="w-3 h-3 text-[#061638]" />
                </a>
                <a
                  href="https://thekhyati.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg golden-shimmer-btn text-[10.5px] font-black flex items-center justify-between"
                >
                  <span>The Khyati</span>
                  <ExternalLink className="w-3 h-3 text-[#061638]" />
                </a>
                <a
                  href="https://samnvya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg golden-shimmer-btn text-[10.5px] font-black flex items-center justify-between"
                >
                  <span>SAMNVYA HQ</span>
                  <ExternalLink className="w-3 h-3 text-[#061638]" />
                </a>
                <a
                  href="https://samnvya.com/test/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg golden-shimmer-btn text-[10.5px] font-black flex items-center justify-between"
                >
                  <span>Testing Portal</span>
                  <ExternalLink className="w-3 h-3 text-[#061638]" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                Home
              </a>
              <a 
                href="#solutions" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                Solutions
              </a>
              <a 
                href="#industries" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                Industries
              </a>
              <a 
                href="#case-studies" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                Case Studies
              </a>
              <a 
                href="#recommender" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                Finder
              </a>
              <a 
                href="#calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                ROI Impact
              </a>
              <a 
                href="#b2g" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                B2G
              </a>
              <a 
                href="#resources" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                Resources
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2.5 text-center text-xs uppercase tracking-wider font-black golden-shimmer-btn rounded-lg"
              >
                Contact
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('demo');
                }}
                className="w-full py-3 text-center text-xs font-black uppercase tracking-widest golden-shimmer-btn rounded-xl shadow-lg"
                id="mobile-drawer-demo-btn"
              >
                Request a Live Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('quotation');
                }}
                className="w-full py-3 text-center text-xs font-black uppercase tracking-wider text-white border border-amber-400/40 bg-white/5 rounded-xl hover:bg-white/10"
                id="mobile-drawer-quote-btn"
              >
                Get a Quotation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
