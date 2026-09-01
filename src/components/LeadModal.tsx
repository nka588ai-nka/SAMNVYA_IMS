import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'demo' | 'quotation' | 'consultation' | 'brochure';
  initialSolution?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialType = 'demo',
  initialSolution = 'Samnvya Institutional ERP'
}) => {
  const [leadType, setLeadType] = useState<'demo' | 'quotation' | 'consultation' | 'brochure'>(initialType);
  const [formData, setFormData] = useState<LeadSubmission>({
    fullName: '',
    organizationName: '',
    designation: '',
    email: '',
    mobile: '',
    city: 'Jaipur',
    orgType: 'University / Higher Ed',
    solutionOfInterest: initialSolution,
    projectRequirements: '',
    consent: true,
    type: initialType
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

  useEffect(() => {
    setLeadType(initialType);
    setFormData((prev) => ({
      ...prev,
      type: initialType,
      solutionOfInterest: initialSolution || prev.solutionOfInterest
    }));
    setIsSubmitted(false);
  }, [initialType, initialSolution, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `SAM-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setIsSubmitted(true);
  };

  const getTitle = () => {
    switch (leadType) {
      case 'demo': return 'REQUEST LIVE INSTITUTIONAL DEMO';
      case 'quotation': return 'REQUEST COMMERCIAL QUOTATION';
      case 'consultation': return 'SCHEDULE EXECUTIVE CONSULTATION';
      case 'brochure': return 'DOWNLOAD SOLUTION SPECIFICATION';
      default: return 'CONNECT WITH SAMNVYA IMS';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#0c0c0c] text-white w-full max-w-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#121212] border-b border-white/10 flex items-start justify-between relative shrink-0">
          <div className="flex items-start space-x-3.5 pr-4">
            <img 
              src="/samnvya-logo.png" 
              alt="SAMNVYA IMS Logo" 
              className="w-11 h-11 object-contain rounded-2xl bg-black border border-white/10 p-1 shrink-0 mt-0.5" 
            />
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-[#F27D26]/20 text-[#F27D26] text-[10px] font-black uppercase tracking-widest mb-1.5 border border-[#F27D26]/30 font-mono">
                <Sparkles className="w-3 h-3 text-[#F27D26]" />
                <span>SAMNVYA DIRECT RESPONSE DESK</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase font-display">
                {getTitle()}
              </h2>
              <p className="text-xs text-gray-400 mt-1 font-normal">
                Direct technical evaluation support from our Jaipur Headquarters.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
            id="lead-modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Type Switcher */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pb-2">
                {[
                  { id: 'demo', label: 'Live Demo' },
                  { id: 'quotation', label: 'Quotation' },
                  { id: 'consultation', label: 'Consult' },
                  { id: 'brochure', label: 'Brochure' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setLeadType(tab.id as any);
                      setFormData({ ...formData, type: tab.id as any });
                    }}
                    className={`py-2 px-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all font-mono ${
                      leadType === tab.id
                        ? 'bg-[#F27D26] text-white border-[#F27D26] shadow-sm'
                        : 'bg-[#121212] text-gray-400 border-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Row 1: Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    id="input-fullname"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    Designation / Role *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Principal / Registrar / IT Head"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    id="input-designation"
                  />
                </div>
              </div>

              {/* Row 2: Organization Name & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    Organization / Institution Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Government Degree College"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    id="input-orgname"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    Organization Category *
                  </label>
                  <select
                    value={formData.orgType}
                    onChange={(e) => setFormData({ ...formData, orgType: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                    id="select-orgtype"
                  >
                    <option value="University / Higher Ed" className="bg-[#121212] text-white">University / Higher Education</option>
                    <option value="College / School" className="bg-[#121212] text-white">Autonomous / Degree College</option>
                    <option value="Government / Autonomous" className="bg-[#121212] text-white">Government / Autonomous Directorate</option>
                    <option value="Enterprise / SME" className="bg-[#121212] text-white">Corporate Enterprise / SME</option>
                    <option value="Community / Association" className="bg-[#121212] text-white">Community Trust / Religious Shrine</option>
                    <option value="Other" className="bg-[#121212] text-white">Other Specialized Organization</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Email & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="admin@institution.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    id="input-email"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    Mobile Number (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9509386565"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    id="input-mobile"
                  />
                </div>
              </div>

              {/* Row 4: Solution & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    Solution of Interest *
                  </label>
                  <select
                    value={formData.solutionOfInterest}
                    onChange={(e) => setFormData({ ...formData, solutionOfInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white focus:outline-none focus:border-[#F27D26]"
                    id="select-solution"
                  >
                    <option value="Samnvya Institutional ERP" className="bg-[#121212] text-white">Samnvya Institutional ERP Suite</option>
                    <option value="Samnvya Digital Library & Knowledge Vault" className="bg-[#121212] text-white">Digital Library & OPAC Vault</option>
                    <option value="Samnvya Alumni & Community Engagement" className="bg-[#121212] text-white">Alumni & Community Portal</option>
                    <option value="Samnvya Smart Visitor & Entry-Exit System" className="bg-[#121212] text-white">Smart QR Visitor Management</option>
                    <option value="Samnvya Employment & Placement Portal" className="bg-[#121212] text-white">Campus Placement & Job Portal</option>
                    <option value="Institutional Web Portals & Managed AMC" className="bg-[#121212] text-white">Institutional Web Portal & AMC</option>
                    <option value="Specialized Shrines & Community Management" className="bg-[#121212] text-white">Religious Shrines & Seva Portal</option>
                    <option value="Custom Digital Transformation Architecture" className="bg-[#121212] text-white">Custom Full-Stack Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Rajasthan"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                    id="input-city"
                  />
                </div>
              </div>

              {/* Requirement Summary */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono text-[11px]">
                  Requirements / Scope Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need student admissions, online fee reconciliation with bank bridge, and library OPAC for 4,000 students."
                  value={formData.projectRequirements}
                  onChange={(e) => setFormData({ ...formData, projectRequirements: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F27D26]"
                  id="textarea-requirements"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-center space-x-2.5 pt-1">
                <input
                  type="checkbox"
                  required
                  id="consent-check"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="w-4 h-4 accent-[#F27D26] rounded border-white/20"
                />
                <label htmlFor="consent-check" className="text-[11px] text-gray-400">
                  I authorize SAMNVYA IMS Pvt. Ltd. to contact our representative regarding this inquiry.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#F27D26] hover:bg-[#ff9040] text-white font-black text-xs uppercase tracking-widest shadow-xl flex items-center justify-center space-x-2 transition-all"
                  id="lead-submit-btn"
                >
                  <span>Submit & Schedule Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          ) : (
            /* Success Screen */
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#F27D26] bg-[#F27D26]/10 px-3 py-1 rounded-full border border-[#F27D26]/30">
                  REF TICKET ID: #{ticketId}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-3 font-display">
                  THANK YOU, {formData.fullName}!
                </h3>
                <p className="text-xs text-gray-400 max-w-md mx-auto mt-2 leading-relaxed">
                  Your request for <strong>{formData.solutionOfInterest}</strong> on behalf of <strong>{formData.organizationName}</strong> has been logged at our Jaipur Operations Center.
                </p>
              </div>

              <div className="p-5 bg-[#121212] rounded-2xl border border-white/10 text-xs text-gray-300 max-w-md mx-auto space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact Officer:</span>
                  <span className="font-bold text-white">{formData.fullName} ({formData.designation})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Official Mobile:</span>
                  <span className="font-bold text-[#F27D26] font-mono">{formData.mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Response Window:</span>
                  <span className="font-bold text-emerald-400">Within 2 to 4 Business Hours</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919509386565?text=Hello%20Samnvya%20Team%2C%20I%20have%20submitted%20inquiry%20ticket%20%23${ticketId}%20for%20${encodeURIComponent(formData.organizationName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider shadow flex items-center justify-center space-x-2"
                >
                  <span>Connect Instantly on WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-black uppercase tracking-wider transition-colors font-mono"
                >
                  Close Window
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
