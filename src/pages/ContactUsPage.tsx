import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare, 
  CheckCircle2, ArrowRight, ExternalLink, Globe, ChevronRight, Building
} from 'lucide-react';
import { PageId } from '../types';

interface ContactUsPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onOpenLeadModal, onNavigatePage }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    department: 'Higher Education ERP',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto text-gray-200">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-6 font-mono">
        <button 
          onClick={() => onNavigatePage('home')}
          className="hover:text-[#FFD000] transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <span className="text-[#FFD000] font-bold">Contact Us</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#061027]/90 via-[#0a183d]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-12 mb-12 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
            DIRECT DESK • ZERO MIDDLEMEN
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            Contact <span className="text-[#FFD000]">SAMNVYA IMS</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            Connect directly with our corporate headquarters in Jaipur. Whether you require an institutional ERP audit, 
            a technical demonstration, or quotation documentation, our dedicated team is here to assist.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919509386565"
              className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2 text-[#061638]" />
              <span>Call +91-9509386565</span>
            </a>
            <a
              href="https://wa.me/919509386565?text=Hello%20Samnvya%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/50 flex items-center transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Direct Channel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
            <Phone className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Direct Calling Desks</div>
          <div className="space-y-1 font-mono">
            <a href="tel:+919782468523" className="text-sm font-bold text-white hover:text-[#FFD000] transition-colors block">
              +91-9782468523
            </a>
            <a href="tel:+919509386565" className="text-sm font-bold text-white hover:text-[#FFD000] transition-colors block">
              +91-9509386565
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Priority voice desks for university Chancellors, Registrars & Principals.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
            <Mail className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Corporate Email</div>
          <a href="mailto:samnvya.ims@gmail.com" className="text-sm font-bold text-white hover:text-[#FFD000] font-mono transition-colors block break-all">
            samnvya.ims@gmail.com
          </a>
          <p className="text-xs text-gray-400 mt-2">
            Send official RFPs, RFQs, procurement documents, and collaboration proposals.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Jaipur Corporate Office</div>
          <div className="text-sm font-bold text-white font-mono">
            Pratap Nagar, Jaipur, Rajasthan
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Pin Code: 302033, Rajasthan, India. Client visitations by prior appointment.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
            <Clock className="w-5 h-5" />
          </div>
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Operating Hours</div>
          <div className="text-sm font-bold text-white font-mono">
            Mon – Sat: 9:30 AM – 6:30 PM
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Indian Standard Time (IST). 24/7 automated monitoring for production servers.
          </p>
        </div>
      </div>

      {/* Main Grid: Form & Department Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left 7 Cols: Inquiry & Quotation Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#061026] border border-amber-500/20 shadow-2xl">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
              MESSAGE & INQUIRY FORM
            </span>
            <h2 className="text-2xl font-black text-white uppercase mt-1">
              Send Official Inquiry
            </h2>
            <p className="text-xs text-gray-300 mt-1">
              Guaranteed technical evaluation and response within 24 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Dispatched Successfully</h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto">
                Thank you, {formData.name}. Your inquiry has been routed to our {formData.department} department. We will contact you at {formData.email}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alok Mathur"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Institution / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Rajasthan Technical University"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@university.edu.in"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91-9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Department to Route To</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08132e] border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Higher Education ERP">Higher Education ERP & Automation</option>
                    <option value="The Khyati Alumni Network">The Khyati Alumni Platform</option>
                    <option value="B2G & Government Projects">B2G & Government Projects</option>
                    <option value="Technical Support & Sandbox">Technical Support & Sandbox</option>
                    <option value="Business Partnerships">Business Partnerships & Franchises</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Subject / Requirement Type</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Request for Quotation / Demo"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase mb-1">Detailed Message / Project Scope</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your student count, campus locations, or existing software bottlenecks..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full golden-shimmer-btn py-3 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center shadow-xl"
              >
                <Send className="w-4 h-4 mr-2 text-[#061638]" />
                <span>Submit Inquiry Directly to Jaipur HQ</span>
              </button>
            </form>
          )}
        </div>

        {/* Right 5 Cols: Department Routing Directory & Portals */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
            <h3 className="text-base font-black text-white uppercase font-sans flex items-center">
              <Building className="w-4 h-4 mr-2 text-[#FFD000]" />
              Department Routing Directory
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="font-bold text-white uppercase">Higher Education Advisory</div>
                <div className="text-gray-400 mt-0.5">Universities, Autonomous Colleges, Polytechs</div>
                <div className="text-[#FFD000] font-mono mt-1">+91-9509386565 • Ext 101</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="font-bold text-white uppercase">The Khyati Platform Desk</div>
                <div className="text-gray-400 mt-0.5">Alumni associations, student communities</div>
                <div className="text-[#FFD000] font-mono mt-1">thekhyati.com • Onboarding</div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="font-bold text-white uppercase">B2G & Public Sector Unit Desk</div>
                <div className="text-gray-400 mt-0.5">State departments, GeM tenders, PSUs</div>
                <div className="text-[#FFD000] font-mono mt-1">samnvya.ims@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-gradient-to-br from-amber-950/30 to-[#070e24] border border-amber-500/20">
            <div className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest mb-1">
              FASTEST RESPONSE
            </div>
            <h4 className="text-lg font-black text-white uppercase mb-2">
              WhatsApp Technical Desk
            </h4>
            <p className="text-xs text-gray-300 mb-4">
              Need immediate answers regarding module feasibility or pricing slabs? Chat with our senior system engineer in real-time.
            </p>
            <a
              href="https://wa.me/919509386565?text=Hello%20Samnvya%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-black uppercase tracking-wider text-emerald-400 hover:text-white"
            >
              <span>Open WhatsApp Direct</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
