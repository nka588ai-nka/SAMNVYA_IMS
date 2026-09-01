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

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal, onSelectSolution, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [portalsDropdownOpen, setPortalsDropdownOpen] = useState(false);

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
      {/* Top Corporate Contact Strip */}
      <div className="bg-[#080808] text-gray-400 text-[11px] py-2 px-4 border-b border-white/5 hidden md:block font-mono">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+919509386565" 
              className="flex items-center hover:text-[#F27D26] transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3 h-3 mr-1.5 text-[#F27D26]" />
              <span>+91-9509386565</span>
            </a>
            <a 
              href="mailto:samnvya.ims@gmail.com" 
              className="flex items-center hover:text-[#F27D26] transition-colors"
              id="topbar-email-link"
            >
              <Mail className="w-3 h-3 mr-1.5 text-[#F27D26]" />
              <span>samnvya.ims@gmail.com</span>
            </a>
            <div className="flex items-center text-gray-500">
              <MapPin className="w-3 h-3 mr-1.5 text-[#F27D26]" />
              <span>Pratap Nagar, Jaipur, Rajasthan</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-[0.2em] bg-white/5 text-gray-300 border border-white/10">
              VISION: “THE DIRECT DIGITAL WORLD”
            </span>
            <a
              href="https://wa.me/919509386565?text=Hello%20Samnvya%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22c55e] hover:text-white font-bold transition-colors flex items-center text-[10px] uppercase tracking-wider"
              id="topbar-whatsapp-link"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mr-1.5 animate-pulse"></span>
              WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-[#050505]/95 backdrop-blur-md border-white/10 py-3 shadow-2xl shadow-black' 
            : 'bg-[#050505] border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center space-x-3 group" id="navbar-brand-logo">
            <img 
              src="/samnvya-logo.png" 
              alt="SAMNVYA IMS Logo" 
              className="w-10 h-10 object-contain rounded-xl bg-black border border-white/10 p-0.5 group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-black text-2xl tracking-tighter text-white uppercase font-display">SAMNVYA</span>
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-[#F27D26] text-white tracking-widest uppercase font-mono">
                  IMS
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-bold font-mono">
                The Information Management System
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <a 
              href="#home" 
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-colors ${
                activeSection === 'home' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg inline-flex items-center transition-colors ${
                  activeSection === 'solutions' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                id="navlink-solutions"
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-500" />
              </a>

              {/* Mega Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[760px] bg-[#0c0c0c] rounded-2xl shadow-2xl border border-white/10 p-6 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 pb-3 border-b border-white/10 flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F27D26]">Enterprise Modular SaaS</div>
                      <p className="text-xs text-gray-400 mt-0.5">Architectures for Higher Education, Governance & Enterprises</p>
                    </div>
                    <button 
                      onClick={() => onOpenLeadModal('demo')}
                      className="text-xs font-bold text-white hover:text-[#F27D26] flex items-center uppercase tracking-wider"
                      id="dropdown-book-demo-btn"
                    >
                      Book Full Demo <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#F27D26]" />
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
                      className="flex items-start p-3 rounded-xl hover:bg-white/5 transition-colors group/item border border-transparent hover:border-white/10"
                    >
                      <div className="p-2 rounded-lg bg-white/5 text-[#F27D26] group-hover/item:bg-[#F27D26] group-hover/item:text-white transition-all mr-3 mt-0.5">
                        {getCategoryIcon(cat.icon)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover/item:text-[#F27D26] transition-colors flex items-center uppercase tracking-wide">
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
                className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg inline-flex items-center transition-colors ${
                  activeSection === 'industries' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                id="navlink-industries"
              >
                <span>Industries</span>
                <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-500" />
              </a>

              {industriesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-[#0c0c0c] rounded-xl shadow-2xl border border-white/10 p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a href="#industries" className="flex items-center p-2.5 rounded-lg hover:bg-white/5 text-xs font-bold text-gray-300 hover:text-[#F27D26] uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 mr-2.5 text-[#F27D26]" />
                    Higher Education & Colleges
                  </a>
                  <a href="#industries" className="flex items-center p-2.5 rounded-lg hover:bg-white/5 text-xs font-bold text-gray-300 hover:text-[#F27D26] uppercase tracking-wider">
                    <Building2 className="w-4 h-4 mr-2.5 text-[#F27D26]" />
                    Government & Autonomous
                  </a>
                  <a href="#industries" className="flex items-center p-2.5 rounded-lg hover:bg-white/5 text-xs font-bold text-gray-300 hover:text-[#F27D26] uppercase tracking-wider">
                    <Briefcase className="w-4 h-4 mr-2.5 text-[#F27D26]" />
                    Enterprises & SMEs
                  </a>
                  <a href="#industries" className="flex items-center p-2.5 rounded-lg hover:bg-white/5 text-xs font-bold text-gray-300 hover:text-[#F27D26] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 mr-2.5 text-[#F27D26]" />
                    Communities & Shrines
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#case-studies" 
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-colors ${
                activeSection === 'case-studies' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              id="navlink-case-studies"
            >
              Case Studies
            </a>

            <a 
              href="#recommender" 
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-colors ${
                activeSection === 'recommender' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              id="navlink-recommender"
            >
              Finder
            </a>

            <a 
              href="#calculator" 
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-colors ${
                activeSection === 'calculator' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              id="navlink-calculator"
            >
              ROI Impact
            </a>

            <a 
              href="#b2g" 
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-colors ${
                activeSection === 'b2g' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              id="navlink-b2g"
            >
              B2G
            </a>

            <a 
              href="#resources" 
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-colors ${
                activeSection === 'resources' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              id="navlink-resources"
            >
              Resources
            </a>

            <a 
              href="#about" 
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-colors ${
                activeSection === 'about' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              id="navlink-about"
            >
              About
            </a>

            <a 
              href="#contact" 
              className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-colors ${
                activeSection === 'contact' ? 'text-[#F27D26] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                className="px-3 py-2 text-xs uppercase tracking-[0.15em] font-bold rounded-lg inline-flex items-center text-cyan-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
                id="navlink-official-portals"
              >
                <Globe className="w-3.5 h-3.5 mr-1 text-[#F27D26]" />
                <span>Portals</span>
                <ChevronDown className="w-3.5 h-3.5 ml-1 text-gray-500" />
              </button>

              {portalsDropdownOpen && (
                <div className="absolute right-0 mt-1 w-80 bg-[#0b142b]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/15 p-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-2.5 py-1.5 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26]">
                      // OFFICIAL SITES IN ORDER
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400">4 Active</span>
                  </div>

                  <a 
                    href="https://online.samnvya.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start p-2.5 rounded-xl hover:bg-white/10 group transition-all"
                  >
                    <span className="text-[10px] font-mono font-black text-[#F27D26] bg-[#F27D26]/10 px-1.5 py-0.5 rounded mr-2.5 mt-0.5">01</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-cyan-300">Samnvya Online ERP</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-cyan-400" />
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
                    <span className="text-[10px] font-mono font-black text-[#F27D26] bg-[#F27D26]/10 px-1.5 py-0.5 rounded mr-2.5 mt-0.5">02</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-violet-300">The Khyati Platform</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-violet-400" />
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
                    <span className="text-[10px] font-mono font-black text-[#F27D26] bg-[#F27D26]/10 px-1.5 py-0.5 rounded mr-2.5 mt-0.5">03</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-[#F27D26]">SAMNVYA Corporate HQ</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-[#F27D26]" />
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
                    <span className="text-[10px] font-mono font-black text-[#F27D26] bg-[#F27D26]/10 px-1.5 py-0.5 rounded mr-2.5 mt-0.5">04</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-emerald-300">Testing & Sandbox</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-emerald-400" />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono block">samnvya.com/test/</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Action CTAs: Bold Typography signature pill with circle icon */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => onOpenLeadModal('quotation')}
              className="px-4 py-2.5 text-xs font-bold text-gray-300 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-colors uppercase tracking-wider"
              id="navbar-get-quote-btn"
            >
              Quotation
            </button>
            <button
              onClick={() => onOpenLeadModal('demo')}
              className="group flex items-center space-x-3 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#F27D26] hover:text-white transition-all shadow-lg shadow-white/5"
              id="navbar-request-demo-btn"
            >
              <span>Demo</span>
              <div className="w-7 h-7 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenLeadModal('demo')}
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#F27D26] rounded-full"
              id="mobile-header-demo-btn"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c0c0c] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in duration-200">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              Home
            </a>
            <a 
              href="#solutions" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              Solutions (7 Verticals)
            </a>
            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              Industries
            </a>
            <a 
              href="#case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              Case Studies
            </a>
            <a 
              href="#recommender" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              Solution Finder
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              ROI Calculator
            </a>
            <a 
              href="#b2g" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              Government / B2G
            </a>
            <a 
              href="#resources" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              Brochures & News
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              About SAMNVYA
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs uppercase tracking-wider font-bold text-gray-300 hover:bg-white/5 hover:text-[#F27D26] rounded-lg"
            >
              Contact Desk
            </a>

            {/* Mobile Portals Directory */}
            <div className="pt-2 pb-1 border-t border-white/10">
              <span className="px-3 text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26] block mb-2">
                Official Web Portals
              </span>
              <div className="grid grid-cols-2 gap-2 px-1">
                <a
                  href="https://online.samnvya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-bold text-cyan-300 flex items-center justify-between"
                >
                  <span>1. Online ERP</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
                <a
                  href="https://thekhyati.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-bold text-violet-300 flex items-center justify-between"
                >
                  <span>2. The Khyati</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
                <a
                  href="https://samnvya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-bold text-[#F27D26] flex items-center justify-between"
                >
                  <span>3. SAMNVYA HQ</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
                <a
                  href="https://samnvya.com/test/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-bold text-emerald-300 flex items-center justify-between"
                >
                  <span>4. Testing Portal</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('demo');
                }}
                className="w-full py-3 text-center text-xs font-black uppercase tracking-widest text-black bg-[#F27D26] rounded-xl shadow"
                id="mobile-drawer-demo-btn"
              >
                Request a Live Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('quotation');
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white border border-white/10 bg-white/5 rounded-xl"
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
