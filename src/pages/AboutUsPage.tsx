import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, Target, Eye, Award, CheckCircle2, 
  MapPin, Phone, Mail, ArrowRight, FileText, ChevronRight, Globe, Users,
  BookOpen, CreditCard, UserCheck, Share2, MessageSquare, Database,
  Heart, Briefcase, UserPlus, GraduationCap, Calculator, TrendingUp,
  Landmark, Video, Code, Layers, Sparkles, Check
} from 'lucide-react';
import { PageId } from '../types';

interface AboutUsPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

const SIXTEEN_DIGITAL_SERVICES = [
  { id: '1', title: 'Digital Library', icon: BookOpen, desc: 'Complete RFID-enabled Koha & MARC21 compliant digital repository and book catalog system.' },
  { id: '2', title: 'Students Fees', icon: CreditCard, desc: 'Automated multi-gateway fee collection with instant reconciliation and CAG-ready digital receipts.' },
  { id: '3', title: 'Visitors Tracking', icon: UserCheck, desc: 'Contactless campus visitor management with biometric logs, OTP verification, and pass printing.' },
  { id: '4', title: 'Alumni Network', icon: Share2, desc: 'The Khyati Network powered alumni portal for tracking careers, endowments, and mentorship.' },
  { id: '5', title: 'Digital Feedback', icon: MessageSquare, desc: 'NAAC & NIRF aligned 360-degree stakeholder survey, course rating, and faculty evaluation engine.' },
  { id: '6', title: 'ERP Solutions', icon: Database, desc: 'Full-spectrum institutional ERP uniting admissions, academics, examinations, HR, and payroll.' },
  { id: '7', title: 'Matrimonial Portal', icon: Heart, desc: 'Community-centric matrimonial matching platform with verified profiles and strict privacy safeguards.' },
  { id: '8', title: 'Employment Portal', icon: Briefcase, desc: 'Integrated job board connecting graduating students, alumni, and state-wide enterprise recruiters.' },
  { id: '9', title: 'Membership Portal', icon: UserPlus, desc: 'Automated directory and subscription management for academic societies, trusts, and associations.' },
  { id: '10', title: 'Concepts Academy', icon: GraduationCap, desc: 'Academic conceptual learning portal offering advanced courses in Sciences, Kinetics, and Organic Chemistry.' },
  { id: '11', title: 'Tax Consultancy', icon: Calculator, desc: 'ITR preparation, GST compliance, and financial information systems for institutions and staff.' },
  { id: '12', title: 'Stock-Trading', icon: TrendingUp, desc: 'Financial analytics, market education, and portfolio data processing solutions.' },
  { id: '13', title: 'Temple Services', icon: Landmark, desc: 'Devotional shrine information systems, live darshan streaming, online Prasad and trust donation desks.' },
  { id: '14', title: 'Live Streaming', icon: Video, desc: 'High-definition low-latency live streaming infrastructure for university convocations and cultural festivals.' },
  { id: '15', title: 'Web Services', icon: Code, desc: 'End-to-end portal development, responsive CMS design, cloud hosting, and Annual Maintenance Contracts.' },
  { id: '16', title: 'Digital Organization', icon: Layers, desc: 'Paperless workflow management, digital signature (DSC) approval trees, and CAG-ready record digitisation.' },
];

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenLeadModal, onNavigatePage }) => {
  const [lang, setLang] = useState<'en' | 'hi'>('en');

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
        <span className="text-[#FFD000] font-bold">About Us</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#061027]/90 via-[#0a183d]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-12 mb-12 overflow-hidden shadow-2xl">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Building2 className="w-3.5 h-3.5 mr-1.5" />
            SAMNVYA IMS PRIVATE LIMITED • CIN: U72900RJ2020PTC068801
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            About <span className="text-[#FFD000]">SAMNVYA IMS</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            SAMNVYA: THE INFORMATION MANAGEMENT SYSTEM (SIMS) — A System for Samnvya of Information.
            A Rajasthan-based technology and information-management organization founded with the vision of 
            creating a <strong>"Direct Digital World"</strong> through accessible, affordable, and user-centric digital solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenLeadModal('consultation', 'Institutional Technology Advisory')}
              className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Consult Our Jaipur Leadership</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </button>
            <button
              onClick={() => onNavigatePage('corporate')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <FileText className="w-4 h-4 mr-2 text-[#FFD000]" />
              <span>View Corporate MCA Filings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Official Corporate Statement (English & Hindi Bilingual Switcher) */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#061026] border border-amber-500/30 mb-14 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
              OFFICIAL FOUNDATIONAL STATEMENT
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase mt-1">
              Registered Under Ministry of Corporate Affairs, Govt of India
            </h2>
          </div>
          <div className="inline-flex rounded-xl p-1 bg-white/5 border border-white/10 shrink-0 font-mono text-xs">
            <button
              onClick={() => setLang('en')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                lang === 'en' ? 'bg-[#FFD000] text-[#061638] shadow-md' : 'text-gray-300 hover:text-white'
              }`}
            >
              English Statement
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                lang === 'hi' ? 'bg-[#FFD000] text-[#061638] shadow-md' : 'text-gray-300 hover:text-white'
              }`}
            >
              हिंदी वक्तव्य
            </button>
          </div>
        </div>

        {lang === 'en' ? (
          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            <p>
              <strong>Samnvya IMS Private Limited (SAMNVYA – The Information Management System)</strong> is a Rajasthan-based 
              technology and information-management organisation founded with the vision of creating a <strong>“Direct Digital World”</strong> through 
              accessible, affordable and user-centric digital solutions. Registered under the Ministry of Corporate Affairs, 
              Government of India, the company operates from Jaipur and has developed a strong ecosystem of Software-as-a-Service (SaaS), 
              software development, information management, system digitisation, web services, institutional ERP and digital platforms.
            </p>
            <p>
              Samnvya works at the intersection of technology, education, institutions and society. Its digital solutions include 
              Digital Library Management, ERP and Digital Organisation systems, Alumni Networks, Employment and Job Portals, 
              Matrimonial Services, Membership Management, Payment and Visitor Management, Web Development and Maintenance, 
              Live Streaming, educational initiatives and other customised information-management services. The company's public 
              platform reflects a broad portfolio designed to place the <strong>“right information at the right place and at the right time”</strong> and 
              to simplify digital access for institutions and communities.
            </p>
            <p>
              A distinctive aspect of Samnvya's journey is its contribution to the digital transformation of educational, 
              institutional and community organisations in Rajasthan. Its work has extended to universities, colleges, educational 
              institutions, community organisations and public-oriented establishments, enabling them to digitise records, improve 
              information access, strengthen communication and deliver services more efficiently. The organisation has also undertaken 
              socially oriented initiatives, including accessible matrimonial and employment services, educational programmes, 
              digital community platforms and online support services.
            </p>
            <p>
              With a strong Rajasthan identity and a commitment to technology-led social development, Samnvya seeks to demonstrate 
              how a home-grown technology organisation can create sustainable economic, educational and social value. Its continuing 
              objective is to use innovation and digital infrastructure not only to create commercial value, but also to expand opportunities, 
              strengthen institutions, connect communities and contribute meaningfully to the digital and inclusive development of Rajasthan.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            <p>
              <strong>समन्वय आईएमएस प्राइवेट लिमिटेड (SAMNVYA – The Information Management System)</strong> राजस्थान आधारित 
              प्रौद्योगिकी एवं सूचना प्रबंधन संस्था है, जिसकी स्थापना <strong>“The Direct Digital World”</strong> की संकल्पना के साथ सुलभ, किफायती, 
              उपयोगकर्ता-केंद्रित एवं प्रभावी डिजिटल समाधान उपलब्ध कराने के उद्देश्य से की गई है। कंपनी भारत सरकार के कॉर्पोरेट कार्य मंत्रालय 
              के अंतर्गत पंजीकृत है तथा जयपुर से अपने विभिन्न तकनीकी एवं डिजिटल कार्यों का संचालन करती है। कंपनी की गतिविधियों में 
              Software-as-a-Service (SaaS), सॉफ्टवेयर विकास, सूचना प्रबंधन, सिस्टम डिजिटाइजेशन, वेब सेवाएं, संस्थागत ERP तथा विभिन्न 
              डिजिटल प्लेटफॉर्म शामिल हैं।
            </p>
            <p>
              समन्वय आईएमएस तकनीक, शिक्षा, संस्थानों एवं समाज के बीच एक डिजिटल सेतु के रूप में कार्य कर रही है। इसके प्रमुख समाधानों में 
              Digital Library Management, ERP एवं Digital Organisation, Alumni Network, Employment एवं Job Portal, Matrimonial Services, 
              Membership Management, Payment एवं Visitor Management, Website Development एवं Maintenance, Live Streaming तथा 
              विभिन्न शैक्षणिक एवं सूचना प्रबंधन सेवाएं शामिल हैं। कंपनी का उद्देश्य <strong>“सही सूचना, सही स्थान और सही समय पर”</strong> उपलब्ध कराकर 
              संस्थानों एवं आमजन के लिए डिजिटल सेवाओं को सरल और प्रभावी बनाना है।
            </p>
            <p>
              राजस्थान में संस्थागत एवं सामुदायिक डिजिटल परिवर्तन में समन्वय आईएमएस का विशेष योगदान रहा है। कंपनी ने विश्वविद्यालयों, 
              महाविद्यालयों, शैक्षणिक संस्थानों, सामुदायिक संगठनों एवं जनोपयोगी संस्थाओं के लिए डिजिटल समाधान विकसित किए हैं, जिससे सूचना 
              प्रबंधन, रिकॉर्ड डिजिटाइजेशन, संचार, सेवा वितरण एवं प्रशासनिक कार्यों को अधिक व्यवस्थित और प्रभावी बनाया जा सके। कंपनी द्वारा 
              निःशुल्क/सुलभ वैवाहिक सेवाओं, रोजगार एवं जॉब सेवाओं, शैक्षणिक गतिविधियों, डिजिटल सामुदायिक प्लेटफॉर्म तथा अन्य सामाजिक एवं 
              जनोपयोगी डिजिटल पहलों के माध्यम से तकनीक को सामाजिक उपयोग से भी जोड़ा गया है।
            </p>
            <p>
              राजस्थान की धरती से विकसित एक स्वदेशी तकनीकी संस्था के रूप में समन्वय आईएमएस का उद्देश्य केवल व्यावसायिक सफलता प्राप्त करना 
              नहीं, बल्कि तकनीक के माध्यम से शिक्षा, रोजगार, संस्थागत सशक्तिकरण, सामाजिक जुड़ाव और डिजिटल समावेशन को बढ़ावा देकर 
              राजस्थान के समग्र विकास में स्थायी योगदान देना है।
            </p>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            <span className="text-[#FFD000] font-bold">CIN:</span> U72900RJ2020PTC068801 • <span className="text-[#FFD000] font-bold">RoC:</span> Jaipur, Rajasthan
          </div>
          <div className="flex items-center space-x-3 text-[#FFD000]">
            <a href="https://www.samnvya.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.samnvya.com</a>
            <span>•</span>
            <a href="https://online.samnvya.com" target="_blank" rel="noopener noreferrer" className="hover:underline">online.samnvya.com</a>
            <span>•</span>
            <a href="https://thekhyati.com" target="_blank" rel="noopener noreferrer" className="hover:underline">thekhyati.com</a>
          </div>
        </div>
      </div>

      {/* SaaS Model & Philosophy (From Page 12 & 19 of PDF) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
            <Eye className="w-6 h-6" />
          </div>
          <div className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-wider mb-1">Corporate Purpose</div>
          <h3 className="text-lg font-black text-white uppercase mb-2">The SaaS Model</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Providing an online platform based on a Software-as-a-Service Model. The company assists consumers with selecting 
            the software for their needs. This platform aims to be <strong>cost-saving</strong> as SAMNVYA charges a predictable subscription 
            fee that helps spread out the cost of the application over time.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
            <Award className="w-6 h-6" />
          </div>
          <div className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-wider mb-1">Total Client Satisfaction</div>
          <h3 className="text-lg font-black text-white uppercase mb-2">100% Results Commitment</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            To develop and promote advanced information technologies for multi-user operations to assure the highest quality service, 
            total client satisfaction, timely delivery of solutions, and the best quality/price ratio found in the industry. 
            Samnvya IMS is one of the most trusted IT companies in Jaipur only after completing every effort and giving 100% results.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
            <Target className="w-6 h-6" />
          </div>
          <div className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-wider mb-1">Rajasthan Heritage</div>
          <h3 className="text-lg font-black text-white uppercase mb-2">Active Since 2009</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Our creative team understands the value of your time, complexities, needs, and goals of our clients. With unique ideas, 
            excellent teamwork, and cost-effective price, clients enjoy the outcome. That is why people often know and appreciate us as a 
            <strong> "Professional Information Management Company in Jaipur - Rajasthan"</strong>, which is no less than an award for us.
          </p>
        </div>
      </div>

      {/* The 16 Digital Services & Modules Grid (From Page 4, 16, 17 of PDF) */}
      <div className="mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            COMPREHENSIVE DIGITAL PORTFOLIO
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
            16 Core Information Management Services
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 font-sans">
            As outlined in our official corporate constitution, delivering the right information at the right place and at the right time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SIXTEEN_DIGITAL_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-400/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] group-hover:bg-[#FFD000] group-hover:text-[#061638] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 font-bold">#{srv.id.padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#FFD000] transition-colors mb-1.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-[11px] font-mono text-[#FFD000] font-bold">
                  <Check className="w-3.5 h-3.5 mr-1 text-[#22c55e]" /> Active Enterprise Module
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Corporate Headquarters Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#070e24] border border-amber-500/20 mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
            REGISTERED OFFICE & HEADQUARTERS
          </span>
          <h3 className="text-2xl font-black text-white uppercase mt-1 mb-2">
            Jaipur Center of Technological Excellence
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mb-4">
            Our central development, server maintenance, and client advisory hub is situated in Pratap Nagar, Sanganer, Jaipur, Rajasthan 302033. 
            Equipped with state-of-the-art secure infrastructure and uninterrupted connectivity.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-300">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-[#FFD000]" />
              <span>171/251, Pratap Nagar, Sanganer, Jaipur, Rajasthan 302033</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1.5 text-[#FFD000]" />
              <span>+91-9782468523 / +91-9509386565</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1.5 text-[#FFD000]" />
              <span>samnvya.ims@gmail.com</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => onNavigatePage('contact-us')}
          className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider shrink-0"
        >
          Contact Jaipur HQ
        </button>
      </div>
    </div>
  );
};
