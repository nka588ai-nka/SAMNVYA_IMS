import React from 'react';
import { 
  Building2, MapPin, Phone, Mail, Globe, 
  ShieldCheck, CheckCircle2, Sparkles, Award, 
  Users, Layers, ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLeadModal }) => {
  const coreValues = [
    {
      title: 'Modular SaaS Affordability',
      desc: 'Pay only for what your institution needs. Add admissions, digital libraries, or visitor gates as your digital transformation scales.'
    },
    {
      title: 'Deep Institutional Understanding',
      desc: 'Engineered specifically around Indian universities, college quotas, UGC credit frameworks, and state governance regulations.'
    },
    {
      title: 'Jaipur Local Support & SLA',
      desc: 'No automated foreign call centers. Direct telephonic and on-site technical support from our Pratap Nagar, Jaipur engineering desk.'
    },
    {
      title: '100% Indian Data Sovereignty',
      desc: 'All student, financial, and organizational records reside securely within MeitY-compliant Indian cloud infrastructure.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 09. CORPORATE ENTITY & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            ABOUT <span className="text-[#F27D26]">SAMNVYA</span> <span className="text-stroke-white text-transparent">IMS.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto pt-1">
            An Information Management and Digital Transformation Technology Company delivering modular SaaS platforms, enterprise applications, and customized digital architectures.
          </p>
        </div>

        {/* Brand Vision & Positioning Banner */}
        <div className="mt-14 bg-[#0b142b]/70 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl shadow-cyan-950/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 text-[#F27D26] text-xs font-black uppercase tracking-widest border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VISION: “THE DIRECT DIGITAL WORLD”</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight font-display">
                TRANSFORMING INFORMATION INTO <span className="text-[#F27D26]">INTELLIGENT</span> EXPERIENCES.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Integrated Digital Solutions for Institutions, Enterprises, Communities, and Governance. We eliminate bureaucratic paperwork and technological silos through intuitive cloud workflows and reliable long-term support.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#070e1e]/90 p-6 rounded-2xl border border-white/10 space-y-4 text-xs">
              <div className="flex items-center space-x-3 pb-3 border-b border-white/10">
                <img 
                  src="/samnvya-logo.png" 
                  alt="SAMNVYA IMS Logo" 
                  className="w-11 h-11 object-contain rounded-xl bg-black border border-white/10 p-1" 
                />
                <div>
                  <div className="text-[11px] font-black uppercase tracking-widest text-[#F27D26] font-mono">
                    CORPORATE PROFILE
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">CIN Registered in India</span>
                </div>
              </div>
              <div className="text-gray-200">
                <span className="text-gray-500 block uppercase font-mono text-[10px]">Legal Entity Name:</span>
                <span className="font-bold">SAMNVYA IMS PRIVATE LIMITED</span>
              </div>
              <div className="text-gray-200">
                <span className="text-gray-500 block uppercase font-mono text-[10px]">Brand & Expanded Name:</span>
                <span className="font-bold">Samnvya: The Information Management System</span>
              </div>
              <div className="text-gray-200">
                <span className="text-gray-500 block uppercase font-mono text-[10px]">Headquarters:</span>
                <span className="font-bold">Jaipur, Rajasthan, India</span>
              </div>
            </div>

          </div>
        </div>

        {/* Why Samnvya - 4 Pillars */}
        <div className="mt-16">
          <h3 className="text-center text-xl sm:text-3xl font-black uppercase tracking-tight text-white mb-10 font-display">
            WHY LEADING BODIES PARTNER WITH <span className="text-[#F27D26]">SAMNVYA</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-[#0b142b]/70 backdrop-blur-xl border border-white/10 hover:border-[#F27D26] transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-cyan-950/20">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#F27D26] flex items-center justify-center font-black text-xs mb-4 font-mono">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-black uppercase tracking-tight text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registered Office & Contact Card */}
        <div className="mt-16 bg-[#0b142b]/70 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-cyan-950/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#F27D26] font-mono">
                CORPORATE HQ & ENGINEERING DESK
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-display">
                CONNECT WITH OUR JAIPUR HEADQUARTERS
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Our technology team and customer support center operate directly out of Pratap Nagar, Jaipur, offering prompt in-person consultations for universities, colleges, and government directorates across Rajasthan and India.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start text-xs text-gray-300">
                  <MapPin className="w-4 h-4 text-[#F27D26] mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Registered Office:</strong> 171/251, Pratap Nagar, Sanganer, Jaipur, Rajasthan – 302033, India
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-300">
                  <Phone className="w-4 h-4 text-[#F27D26] mr-3 shrink-0" />
                  <span>
                    <strong className="text-white">Direct Line / Support:</strong>{' '}
                    <a href="tel:+919509386565" className="text-[#F27D26] hover:underline font-bold font-mono">
                      +91-9509386565
                    </a>
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-300">
                  <Mail className="w-4 h-4 text-[#F27D26] mr-3 shrink-0" />
                  <span>
                    <strong className="text-white">Official Desk:</strong>{' '}
                    <a href="mailto:samnvya.ims@gmail.com" className="text-[#F27D26] hover:underline font-bold font-mono">
                      samnvya.ims@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-300">
                  <Globe className="w-4 h-4 text-[#F27D26] mr-3 shrink-0" />
                  <span>
                    <strong className="text-white">Official Portals:</strong>{' '}
                    <a href="https://samnvya.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold font-mono mr-2">
                      samnvya.com
                    </a>
                    •
                    <a href="https://online.samnvya.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold font-mono ml-2">
                      online.samnvya.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 bg-[#121212] p-7 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-white font-mono">
                SCHEDULE IN-PERSON PRESENTATION
              </h4>
              <p className="text-xs text-gray-400 font-normal">
                Our senior solution architects provide comprehensive system demonstrations tailored to your academic or enterprise committees.
              </p>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onOpenLeadModal('consultation')}
                  className="w-full py-3.5 rounded-full bg-[#F27D26] hover:bg-[#ff9040] text-white font-black text-xs uppercase tracking-widest shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book Executive Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/919509386565?text=Hello%20Samnvya%20Team%2C%20I%20would%20like%20to%20schedule%20a%20meeting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>WhatsApp Inquiry (+91-9509386565)</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
