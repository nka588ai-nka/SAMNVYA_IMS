import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle2, Sparkles, Building2, ShieldCheck, ArrowRight,
  ExternalLink, Globe, Cloud, Users, TestTube, ArrowUpRight
} from 'lucide-react';

interface ContactSectionProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
}

export const OFFICIAL_WEBSITES = [
  {
    order: '01',
    name: 'Samnvya Online ERP Portal',
    tagline: 'Live Institutional Cloud ERP & Online Administration',
    url: 'https://online.samnvya.com/',
    displayUrl: 'https://online.samnvya.com/',
    badge: 'Live Cloud ERP',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    description: 'Centralized cloud management portal for universities and colleges featuring student admissions, online fee payments, examinations, and faculty governance.',
    icon: Cloud,
    buttonText: 'Launch Online Portal'
  },
  {
    order: '02',
    name: 'The Khyati Institutional Network',
    tagline: 'Alumni Engagement & Institutional Media Platform',
    url: 'https://thekhyati.com/',
    displayUrl: 'https://thekhyati.com/',
    badge: 'Alumni & Community Portal',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    description: 'Official digital ecosystem for institutional alumni relations, campus newsletters, student publications, editorial archives, and community networking.',
    icon: Users,
    buttonText: 'Visit The Khyati'
  },
  {
    order: '03',
    name: 'SAMNVYA IMS Corporate Website',
    tagline: 'Primary Corporate Headquarters & Solutions Portal',
    url: 'https://samnvya.com/',
    displayUrl: 'https://samnvya.com/',
    badge: 'Official Corporate HQ',
    badgeColor: 'bg-[#F27D26]/10 text-[#F27D26] border-[#F27D26]/30',
    description: 'Primary corporate technology website of SAMNVYA IMS PRIVATE LIMITED detailing enterprise information management architectures, SaaS modules, and company profiles.',
    icon: Globe,
    buttonText: 'Visit Corporate Portal'
  },
  {
    order: '04',
    name: 'Samnvya Testing & Sandbox Environment',
    tagline: 'Interactive Staging, Beta Modules & Live Pilot Testing',
    url: 'https://samnvya.com/test/',
    displayUrl: 'https://samnvya.com/test/',
    badge: 'Testing & Sandbox Portal',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    description: 'Dedicated testing environment and interactive sandbox for evaluating beta features, workflow customizations, trial deployments, and feature verifications.',
    icon: TestTube,
    buttonText: 'Open Testing Sandbox'
  }
];

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLeadModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [msg, setMsg] = useState('');

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-transparent text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 10. DIRECT ENGAGEMENT & TENDERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            READY TO <span className="text-[#F27D26]">TRANSFORM</span> YOUR <span className="text-stroke-white text-transparent">CAMPUS?</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto pt-1">
            Reach out to our solution architects for customized institutional proposals, live demonstrations, and technical tenders.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Jaipur Office */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/15 p-7 space-y-6 shadow-2xl shadow-cyan-950/20">
              <div className="flex items-center space-x-3 pb-3 border-b border-white/10">
                <img 
                  src="/samnvya-logo.png" 
                  alt="SAMNVYA IMS Logo" 
                  className="w-10 h-10 object-contain rounded-xl bg-black border border-white/10 p-1" 
                />
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-white font-mono">
                    HEADQUARTERS & REGISTERED DESK
                  </h3>
                  <span className="text-[10px] text-gray-400 font-mono">Jaipur Directorate</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-[#F27D26] mr-3 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block uppercase font-mono">SAMNVYA IMS PRIVATE LIMITED</span>
                    <span className="text-gray-400 font-normal">171/251, Pratap Nagar, Sanganer, Jaipur, Rajasthan – 302033, India</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-[#F27D26] mr-3 shrink-0" />
                  <div>
                    <span className="font-bold text-white block uppercase font-mono">Direct Mobile / WhatsApp</span>
                    <a href="tel:+919509386565" className="text-[#F27D26] hover:underline font-mono font-bold">
                      +91-9509386565
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-[#F27D26] mr-3 shrink-0" />
                  <div>
                    <span className="font-bold text-white block uppercase font-mono">Official Email Desk</span>
                    <a href="mailto:samnvya.ims@gmail.com" className="text-[#F27D26] hover:underline font-mono font-bold">
                      samnvya.ims@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-[#F27D26] mr-3 shrink-0" />
                  <div>
                    <span className="font-bold text-white block uppercase font-mono">Engineering Hours</span>
                    <span className="text-gray-400 font-normal">Monday to Saturday: 9:30 AM – 6:30 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <a
                  href="https://wa.me/919509386565?text=Hello%20Samnvya%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20transformation%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow"
                >
                  <span>Chat Directly on WhatsApp</span>
                </a>

                <a
                  href="https://online.samnvya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 text-cyan-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors border border-cyan-500/20"
                >
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Access Online ERP Portal</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Official Portals Quick Summary List */}
            <div className="bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/15 p-6 space-y-3 shadow-2xl shadow-cyan-950/20">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-[#F27D26]" />
                  <h4 className="text-xs font-black uppercase tracking-wider text-white font-mono">
                    OFFICIAL DOMAINS & DIRECT PORTALS
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">4 Verified Links</span>
              </div>
              
              <div className="space-y-2 pt-1">
                {OFFICIAL_WEBSITES.map((site) => (
                  <a
                    key={site.order}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <span className="text-[10px] font-mono font-black text-[#F27D26] bg-[#F27D26]/10 px-2 py-0.5 rounded shrink-0">
                        #{site.order}
                      </span>
                      <div className="truncate">
                        <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors block truncate">
                          {site.name}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono truncate block">
                          {site.displayUrl}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#F27D26] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Credibility Note */}
            <div className="p-5 rounded-2xl bg-[#0b142b]/70 backdrop-blur-xl border border-white/10 flex items-start space-x-3 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
              <span className="font-normal">
                15+ Government and Autonomous Institutions deployed across Rajasthan with 100% Indian cloud data localization.
              </span>
            </div>
          </div>

          {/* Right: Quick Direct Consultation Form */}
          <div className="lg:col-span-7 bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/15 p-6 sm:p-9 shadow-2xl shadow-cyan-950/30">
            {!submitted ? (
              <form onSubmit={handleQuickContact} className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <h3 className="text-sm font-black uppercase tracking-wider text-white font-mono">
                    DIRECT MESSAGE TO SOLUTIONS TEAM
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#F27D26] uppercase">
                    Jaipur HQ Desk
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. A. K. Verma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                      Organization / College *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maharani College / Rajasthan Univ"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="admin@college.ac.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                      Mobile (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9509386565"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    Inquiry / Requirements *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your institutional requirements, expected student count, or required modules."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#F27D26] hover:bg-[#ff9040] text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center space-x-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Samnvya Engineering Desk</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight text-white font-display">
                  INQUIRY RECEIVED
                </h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, {name}. Our solution directorate in Jaipur has received your message regarding {org} and will connect with you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-black uppercase tracking-wider text-[#F27D26] hover:underline"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Official Ecosystem & Web Portals Directory in Order Form */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-[0.25em] text-[#F27D26] font-mono">
                <Globe className="w-3.5 h-3.5" />
                <span>OFFICIAL WEB DIRECTORY & ECOSYSTEM PORTALS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-display mt-1">
                ALL OFFICIAL SAMNVYA <span className="text-[#F27D26]">WEBSITES</span> & <span className="text-stroke-white text-transparent">PORTALS</span>
              </h3>
            </div>
            <p className="text-xs text-gray-400 font-normal max-w-md">
              Direct access to all registered live systems, student/faculty ERP, alumni network, corporate desk, and sandbox environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICIAL_WEBSITES.map((site) => {
              const Icon = site.icon;
              return (
                <div
                  key={site.order}
                  className="bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/15 p-6 flex flex-col justify-between hover:border-[#F27D26] transition-all group relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-950/30"
                >
                  {/* Order Number Watermark */}
                  <div className="absolute top-2 right-4 text-5xl font-mono font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#F27D26]/10 transition-colors">
                    {site.order}
                  </div>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F27D26] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono font-black px-2.5 py-1 rounded-full border ${site.badgeColor}`}>
                        {site.badge}
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono font-black text-[#F27D26] uppercase tracking-wider mb-0.5">
                        ORDER {site.order}
                      </div>
                      <h4 className="text-base font-black text-white group-hover:text-cyan-300 transition-colors leading-tight">
                        {site.name}
                      </h4>
                      <span className="text-[10px] text-gray-400 font-medium block mt-0.5">
                        {site.tagline}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 font-normal leading-relaxed">
                      {site.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/10 space-y-2 relative z-10">
                    <div className="text-[11px] font-mono text-cyan-400 truncate bg-black/40 px-3 py-1.5 rounded-xl border border-white/5">
                      {site.displayUrl}
                    </div>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#F27D26] text-white hover:text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all border border-white/10 hover:border-[#F27D26] shadow"
                    >
                      <span>{site.buttonText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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
