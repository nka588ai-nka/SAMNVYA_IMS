import React, { useState } from 'react';
import { 
  Building, ShieldCheck, Scale, FileCheck, Landmark, 
  Server, Lock, Globe, ArrowRight, Download, ChevronRight, CheckCircle2,
  Calendar, Newspaper, ExternalLink, CreditCard, Award, Search, Filter
} from 'lucide-react';
import { PageId } from '../types';

interface CorporatePageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

const MCA_REGISTRATION_DETAILS = [
  { label: 'Corporate Identification Number (CIN)', value: 'U72900RJ2020PTC068801', highlight: true },
  { label: 'Company Name', value: 'SAMNVYA IMS PRIVATE LIMITED', highlight: true },
  { label: 'System Designation', value: 'SAMNVYA: THE INFORMATION MANAGEMENT SYSTEM (SIMS)', highlight: false },
  { label: 'Sub-Designation', value: 'A System for Samnvya of Information', highlight: false },
  { label: 'Company Status', value: 'Active', status: 'active' },
  { label: 'Registrar of Companies (RoC)', value: 'RoC-Jaipur', highlight: false },
  { label: 'Registration Number', value: '68801', highlight: false },
  { label: 'Company Category', value: 'Company limited by Shares', highlight: false },
  { label: 'Company Sub-Category', value: 'Non-Government Company', highlight: false },
  { label: 'Class of Company', value: 'Private', highlight: false },
  { label: 'Date of Incorporation', value: '18 May 2020', highlight: true },
  { label: 'Previous Operational Name', value: 'Samnvya: The Information Management System (Active since 2009)', highlight: false },
  { label: 'Authorised Capital', value: 'Rs. 100,000/-', highlight: false },
  { label: 'Paid-up Capital', value: 'Rs. 100,000/-', highlight: false },
  { label: 'Registered Office Address', value: '171/251, Pratap Nagar, Sanganer, Jaipur, Rajasthan 302033', highlight: true },
  { label: 'Official Telephones', value: '+91-9782468523 / +91-9509386565', highlight: false },
  { label: 'Official Corporate E-Mail', value: 'samnvya.ims@gmail.com / admin@samnvya.com', highlight: false },
];

const CORPORATE_EVENTS = [
  { id: 1, date: '10-04-2025', time: '03:31 am', venue: 'Samnvya IMS Private Limited', title: 'Women Lead The Way In AI: Samnvya IMS Pvt Ltd Hosts Workshop On Innovation And Leadership', tag: 'AI & Leadership' },
  { id: 2, date: '10-06-2021', time: '10:49 am', venue: 'Samnvya IMS Private Limited', title: 'Workshop On Verbal English Communication', tag: 'Skill Development' },
  { id: 3, date: '21-04-2021', time: '11:34 am', venue: 'श्री खोले के हनुमान जी मंदिर, जयपुर', title: 'हनुमान जयंती महोत्सव, श्री खोले के हनुमान जी मंदिर, जयपुर', tag: 'Cultural & Shrines' },
  { id: 4, date: '21-04-2021', time: '04:11 am', venue: 'Concepts Academy', title: 'RBSE/CBSE 12th Physics Classes By Ms. Dhwani Gangal', tag: 'Education' },
  { id: 5, date: '18-12-2020', time: '04:21 am', venue: 'Concepts Academy', title: 'RBSE/CBSE 12th Maths Classes', tag: 'Education' },
  { id: 6, date: '13-11-2020', time: '10:00 am', venue: 'श्री खोले के हनुमान जी मंदिर, जयपुर', title: 'हनुमान जयंती महोत्सव, श्री खोले के हनुमान जी मंदिर, जयपुर महाआरती, ऑनलाइन दर्शन व्यवस्था', tag: 'Live Streaming' },
  { id: 7, date: '06-11-2020', time: '05:16 pm', venue: 'Samnvya: The Information Management System (SIMS)', title: 'Creative Workshop On Handicrafts & Interior Design', tag: 'Creativity' },
  { id: 8, date: '18-09-2020', time: '08:20 am', venue: 'Tax Consultancy', title: 'Hi-Tech Online Workshop On KATHAK "The Kala Parichaya Of Indian Classical Dance"', tag: 'Culture & Tech' },
  { id: 9, date: '06-09-2020', time: '10:41 am', venue: 'Matrimonial Services', title: 'Regional Online Matrimonial परिचय सम्मेलन', tag: 'Community Portal' },
  { id: 10, date: '22-08-2020', time: '10:39 am', venue: 'Concepts Academy', title: 'Chemical Kinetics - "Here Conceptual Learning Is Valued To Gain Core Concept"', tag: 'Education' },
  { id: 11, date: '25-07-2020', time: '10:44 am', venue: 'Samnvya IMS Private Limited', title: 'Short Term Course On Secrets Of Human Psychology & Mental Health', tag: 'Wellness & Health' },
  { id: 12, date: '15-07-2020', time: '10:46 pm', venue: 'Concepts Academy', title: '10 Days Online Course On General Organic Chemistry (GOC)', tag: 'Education' },
  { id: 13, date: '17-06-2020', time: '10:48 am', venue: 'Samnvya: The Information Management System (SIMS)', title: 'PANDEMIC V/s ACADEMIC "Webinar For Students And Teachers"', tag: 'Academic Webinar' },
  { id: 14, date: '10-06-2020', time: '11:15 am', venue: 'https://www.samnvya.com/', title: 'Workshop On Verbal English Communication', tag: 'Skill Development' },
  { id: 15, date: '30-05-2020', time: '10:51 am', venue: 'Intellectual Property Management', title: 'Workshop On Patents, Intellectual Property Rights, Pateomatic', tag: 'IP & Patents' },
  { id: 16, date: '22-05-2020', time: '10:55 pm', venue: 'Indian Festivals', title: 'Indian Festivals Digital Celebration & Archival', tag: 'Festivals' },
  { id: 17, date: '17-05-2020', time: '10:54 am', venue: 'Samnvya: The Information Management System (SIMS)', title: 'Industrial Training On "Soft Skills For Life Success"', tag: 'Corporate Training' },
  { id: 18, date: '21-05-2019', time: '11:15 am', venue: 'Samnvya: The Information Management System (SIMS)', title: 'SAMNVYA IMS PRIVATE LIMITED - Foundation Milestone', tag: 'Corporate' },
  { id: 19, date: '21-05-2019', time: '12:30 am', venue: 'Samnvya IMS Private Limited Tax Consultancy', title: 'ITR "Income Tax Return" Preparation & Assistance', tag: 'Tax Advisory' },
];

const PRESS_AND_NEWS = [
  {
    id: 1,
    date: '10-04-2025',
    venue: 'Samnvya IMS Private Limited',
    title: 'Women Lead The Way In AI: Samnvya IMS Pvt Ltd Hosts Workshop On Innovation And Leadership',
    desc: 'High-impact technical conclave on enterprise artificial intelligence, data workflows, and emerging tech leadership organized at Jaipur HQ.'
  },
  {
    id: 2,
    date: '26-01-2023',
    venue: 'समन्वय आईएमएस प्राइवेट लिमिटेड',
    title: 'सॉफ्टवेयर के क्षेत्र में देश की अग्रणी कंपनी समन्वय आईएमएस प्राइवेट लिमिटेड: सरस्वती पूजा एवं बसंतोत्सव के साथ-साथ मनाया गणतंत्र दिवस',
    desc: '74वें गणतंत्र दिवस के शुभ अवसर पर जयपुर स्थित कॉरपोरेट कार्यालय में ध्वजारोहण एवं मां सरस्वती की आराधना का आयोजन।'
  },
  {
    id: 3,
    date: '01-01-2023',
    venue: 'Samnvya',
    title: 'Happy New Year 2023 - Commitment to "The Direct Digital World"',
    desc: 'Annual corporate roadmap expanding cloud infrastructure to 50+ new higher education colleges across Rajasthan.'
  },
  {
    id: 4,
    date: '12-12-2022',
    venue: 'University Of Maharani College, Jaipur',
    title: 'महारानी कॉलेज में डिजिटल लाइब्रेरी मैनेजमेंट सॉफ्टवेयर पर एक सप्ताह की कार्यशाला का आयोजन',
    desc: 'समन्वय आईएमएस द्वारा महारानी कॉलेज के विशाल ग्रंथालय को बारकोड एवं आरएफआईडी आधारित स्वचालन प्रदान करने हेतु प्राध्यापकों व छात्राओं को गहन तकनीकी प्रशिक्षण।'
  },
  {
    id: 5,
    date: '01-09-2022',
    venue: 'समन्वय: द इंफॉर्मेशन मैनेजमेंट सिस्टम',
    title: 'पूज्य सिन्धी सेंट्रल पंचायत, जयपुर महानगर की बहुउद्देश्यीय वेबसाइट का भव्य शुभारंभ, पंजीकरण-मेट्रोमोनियल-जॉब-छात्रवृत्ति आदि की मिलेगी सुविधाएं',
    desc: 'सामुदायिक सशक्तिकरण के उद्देश्य से निर्मित संपूर्ण डिजिटल पोर्टल का उद्घाटन, जिसमें रोजगार, वैवाहिक सेवा एवं छात्रवृत्ति मॉड्यूल शामिल।'
  },
  {
    id: 6,
    date: '21-09-2021',
    venue: 'श्री झूलेलाल मंदिर राजापार्क',
    title: 'श्री झूलेलाल मंदिर राजापार्क में आरती एवं धार्मिक कार्यक्रमों होंगे ऑनलाइन',
    desc: 'श्रद्धालुओं की सुविधा हेतु लाइव दर्शन, ऑनलाइन आरती प्रसारण एवं ई-दान संग्रह प्रणाली का सफल शुभारंभ।'
  },
  {
    id: 7,
    date: '01-01-2021',
    venue: 'महारानी कॉलेज की लाइब्रेरी',
    title: 'महारानी महाविद्यालय का पुस्तकालय हुआ डिजिटल, रजिस्ट्रेशन के साथ ही छात्राओं को मोबाइल से ही मिलेगी कई सुविधाएं',
    desc: 'डिजिटल लाइब्रेरी मैनेजमेंट सिस्टम के माध्यम से 10,000+ छात्राओं हेतु ऑनलाइन कैटलॉग, बुक सर्च व ई-इश्यू सुविधा प्रारंभ।'
  },
  {
    id: 8,
    date: '01-01-2021',
    venue: 'श्री संकट मोचन हनुमान मंदिर, बंध की घाटी',
    title: 'जयपुर के प्रमुख आराध्य श्री संकट मोचन हनुमान मंदिर, बंध की घाटी वेबसाइट तथा ऑनलाइन दर्शन व्यवस्था का लोकार्पण',
    desc: 'पवित्र धाम हेतु डिजिटल पोर्टल व 24x7 दर्शन प्रसारण प्रणाली का विधिवत लोकार्पण।'
  },
  {
    id: 9,
    date: '13-11-2020',
    venue: 'श्री खोले के हनुमान जी मंदिर',
    title: 'जयपुर के प्रमुख आराध्य श्री खोले के हनुमान जी मंदिर की वेबसाइट का माननीय राज्यपाल महोदय द्वारा भव्य लोकार्पण',
    desc: 'राजस्थान के माननीय राज्यपाल महोदय द्वारा www.kholekehanumanji.org पोर्टल एवं महाआरती दर्शन व्यवस्था का भव्य उद्घाटन।'
  },
  {
    id: 10,
    date: '22-09-2020',
    venue: 'समन्वय आईएमएस कॉन्सेप्ट एकेडमी',
    title: 'ध्वनि गंगल का एमएनआईटी से शोध के लिए चयन, अंतरिक्ष विज्ञान के रहस्यों पर करेंगी शोध',
    desc: 'कॉन्सेप्ट एकेडमी की उत्कृष्ट छात्रा का प्रतिष्ठित राष्ट्रीय प्रौद्योगिकी संस्थान (MNIT Jaipur) में स्पेस साइंस शोध हेतु गौरवपूर्ण चयन।'
  },
  {
    id: 11,
    date: '21-05-2020',
    venue: 'महाराजा महाविद्यालय',
    title: 'महाराजा महाविद्यालय का पुस्तकालय हुआ डिजिटल, रजिस्ट्रेशन के साथ ही विद्यार्थियों को मोबाइल से ही मिलेगी कई सुविधाएं',
    desc: 'राजस्थान विश्वविद्यालय के संघटक महाराजा कॉलेज में केंद्रीय पुस्तकालय स्वचालन प्रणाली का सफल कार्यान्वयन।'
  },
  {
    id: 12,
    date: '31-01-2020',
    venue: 'जन चेतना अभियान',
    title: 'सामाजिक दूरी के साथ-साथ, समझदारी से सामाजिक जिम्मेदारी भी अपनाये कोरोना को दूर भगाये',
    desc: 'समन्वय आईएमएस द्वारा सार्वजनिक स्वास्थ्य एवं डिजिटल अवेयरनेस हेतु जनोपयोगी डिजिटल दिशा-निर्देशों का नि:शुल्क प्रसार।'
  }
];

export const CorporatePage: React.FC<CorporatePageProps> = ({ onOpenLeadModal, onNavigatePage }) => {
  const [activeTab, setActiveTab] = useState<'mca' | 'compliance' | 'events' | 'news'>('mca');
  const [eventSearch, setEventSearch] = useState('');

  const filteredEvents = CORPORATE_EVENTS.filter(e => 
    e.title.toLowerCase().includes(eventSearch.toLowerCase()) ||
    e.venue.toLowerCase().includes(eventSearch.toLowerCase()) ||
    e.tag.toLowerCase().includes(eventSearch.toLowerCase())
  );

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
        <span className="text-[#FFD000] font-bold">Corporate</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#070f28]/90 via-[#0b1b42]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-12 mb-10 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Building className="w-3.5 h-3.5 mr-1.5" />
            MINISTRY OF CORPORATE AFFAIRS • GOVT. OF INDIA
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            Corporate <span className="text-[#FFD000]">Information</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            SAMNVYA IMS PRIVATE LIMITED (CIN: <strong>U72900RJ2020PTC068801</strong>) is a Rajasthan-based technology 
            and information-management organisation registered under the Ministry of Corporate Affairs, Government of India, under the Companies Act, 2013. 
            Review our verified corporate registry, institutional compliance standards, historical event archives, and official press releases.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenLeadModal('quotation', 'Corporate Institutional RFP')}
              className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Submit RFP / Corporate Tender</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </button>
            <button
              onClick={() => onNavigatePage('contact-us')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <FileCheck className="w-4 h-4 mr-2 text-[#FFD000]" />
              <span>Contact Registered Office</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 mb-10">
        <button
          onClick={() => setActiveTab('mca')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center ${
            activeTab === 'mca'
              ? 'bg-[#FFD000] text-[#061638] shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Building className="w-4 h-4 mr-2" />
          MCA Registration Details
        </button>

        <button
          onClick={() => setActiveTab('compliance')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center ${
            activeTab === 'compliance'
              ? 'bg-[#FFD000] text-[#061638] shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <ShieldCheck className="w-4 h-4 mr-2" />
          Institutional Procurement & Compliance
        </button>

        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center ${
            activeTab === 'events'
              ? 'bg-[#FFD000] text-[#061638] shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Events Archive ({CORPORATE_EVENTS.length})
        </button>

        <button
          onClick={() => setActiveTab('news')}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center ${
            activeTab === 'news'
              ? 'bg-[#FFD000] text-[#061638] shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          <Newspaper className="w-4 h-4 mr-2" />
          Press & Media ({PRESS_AND_NEWS.length})
        </button>
      </div>

      {/* TAB 1: MCA Registration Details */}
      {activeTab === 'mca' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#061026] border border-amber-500/30 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
                  MINISTRY OF CORPORATE AFFAIRS • GOVT. OF INDIA
                </span>
                <h2 className="text-2xl font-black text-white uppercase mt-1">
                  Statutory Registration Master Data
                </h2>
              </div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold shrink-0">
                <CheckCircle2 className="w-4 h-4 mr-1.5" /> Company Status: ACTIVE
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MCA_REGISTRATION_DETAILS.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/20 transition-all flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </span>
                  <div className={`text-sm font-bold ${item.highlight ? 'text-[#FFD000]' : 'text-white'}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Activities Clause from Page 23 */}
            <div className="mt-6 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest block mb-2">
                Registered Activities Clause
              </span>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                The company is providing various IT services viz. design, development, hosting, and maintenance of websites, 
                web services, software development, creation of multimedia presentations, Information Management Services, 
                consultancy services as well as system digitalization since 2009. Computer programming, consultancy, and related activities, 
                Information service activities, Data processing, hosting, and related Activities, Other information technology and computer 
                service activities, Accounting, bookkeeping, and tax consultancy.
              </p>
            </div>
          </div>

          {/* Compliance & Annual Filings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Audited Balance Sheets</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                Full statutory compliance filings maintained for fiscal periods 2021-22, 2020-21, and 2019-20.
              </p>
              <div className="text-[11px] font-mono text-[#FFD000] font-bold">Status: Compliant & Filed</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Statutory Capitalization</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                Authorised Capital: Rs. 100,000/- & Paid up Capital: Rs. 100,000/- under Companies Act 2013.
              </p>
              <div className="text-[11px] font-mono text-[#FFD000] font-bold">Class: Private Limited</div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center text-[#FFD000] mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Jurisdiction & RoC</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                Registrar of Companies, Jaipur. Registered Office at 171/251, Pratap Nagar, Sanganer, Jaipur 302033.
              </p>
              <div className="text-[11px] font-mono text-[#FFD000] font-bold">RoC Jaipur (Registration # 68801)</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Institutional Procurement & Compliance */}
      {activeTab === 'compliance' && (
        <div className="max-w-3xl mx-auto animate-in fade-in duration-200">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a183d] via-[#07112c] to-[#040817] border border-amber-500/40 shadow-2xl relative overflow-hidden">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-[#FFD000]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
                  INSTITUTIONAL PROCUREMENT & BILLING DESK
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase">
                  Statutory Invoicing & Official Remittance
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 mb-6 font-sans leading-relaxed">
              SAMNVYA IMS PRIVATE LIMITED complies with institutional procurement frameworks, government university remittance protocols, 
              and GST billing requirements. Official tax invoices, proforma estimates, and statutory documentation are provided 
              directly to authorized university registrars, college principals, and enterprise procurement departments.
            </p>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center">
                <span className="text-gray-400">Statutory Entity:</span>
                <span className="font-bold text-white text-sm">SAMNVYA IMS PRIVATE LIMITED</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center">
                <span className="text-gray-400">MCA CIN:</span>
                <span className="font-bold text-[#FFD000] text-sm">U72900RJ2020PTC068801</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center">
                <span className="text-gray-400">Jurisdiction & RoC:</span>
                <span className="font-bold text-white">RoC-Jaipur (Rajasthan, India)</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center">
                <span className="text-gray-400">Official Invoicing Desk:</span>
                <span className="font-bold text-white">admin@samnvya.com / samnvya.ims@gmail.com</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex justify-between items-center">
                <span className="text-gray-400">Institutional Helpline:</span>
                <span className="font-bold text-white">+91-9509386565 / +91-9782468523</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] font-mono text-gray-400 text-center sm:text-left">
                Statutory invoices and vendor empanelment letters generated upon authorized request.
              </div>
              <button
                onClick={() => onOpenLeadModal('quotation', 'Official Invoicing & Procurement Desk')}
                className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider w-full sm:w-auto"
              >
                Request Official Proforma / Invoice
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Corporate Events Archive */}
      {activeTab === 'events' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
                HISTORICAL TIMELINE & WORKSHOPS
              </span>
              <h2 className="text-2xl font-black text-white uppercase mt-1">
                Corporate Events & Initiatives Archive
              </h2>
            </div>

            {/* Search filter */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search workshops, venues, topics..."
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/50"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#061026]">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-white/5 border-b border-white/10 text-[#FFD000] font-mono uppercase text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">#</th>
                  <th className="py-3.5 px-4">Date & Time</th>
                  <th className="py-3.5 px-4">Venue / Organizing Module</th>
                  <th className="py-3.5 px-4">Event Title & Workshop Topic</th>
                  <th className="py-3.5 px-4 text-right">Domain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredEvents.map((evt) => (
                  <tr key={evt.id} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-3.5 px-4 font-mono text-gray-400 font-bold">{evt.id}</td>
                    <td className="py-3.5 px-4 font-mono text-gray-300 whitespace-nowrap">
                      <div className="font-bold text-white">{evt.date}</div>
                      <div className="text-[10px] text-gray-500">{evt.time}</div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-300 font-medium">{evt.venue}</td>
                    <td className="py-3.5 px-4 text-white font-bold leading-relaxed">{evt.title}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-400/10 text-[#FFD000] border border-amber-400/20 whitespace-nowrap">
                        {evt.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: News & Press Releases */}
      {activeTab === 'news' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div>
            <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
              PRESS RELEASES & EDITORIAL COVERAGE
            </span>
            <h2 className="text-2xl font-black text-white uppercase mt-1">
              Public News & Institutional Announcements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRESS_AND_NEWS.map((item) => (
              <div 
                key={item.id}
                className="p-6 rounded-2xl bg-[#061026] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-gray-400">
                    <span className="text-[#FFD000] font-bold">{item.date}</span>
                    <span className="truncate max-w-[200px]">{item.venue}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FFD000] font-bold">Verified Archival Release</span>
                  <button 
                    onClick={() => onNavigatePage('photos')}
                    className="text-gray-400 hover:text-white flex items-center hover:underline"
                  >
                    <span>View Photos & Media</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Corporate Inquiries CTA */}
      <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#070e24] border border-amber-500/20 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest">
            CORPORATE INQUIRY DESK
          </span>
          <h3 className="text-2xl font-black text-white uppercase mt-1 mb-2">
            Procurement, Bidding & Institutional Tender Desk
          </h3>
          <p className="text-gray-300 text-sm max-w-xl font-sans">
            Need statutory compliance documentation, audited accounts, vendor authorization letters, or official tender participation forms? 
            Our Jaipur corporate compliance team responds within 2 business hours.
          </p>
        </div>
        <button
          onClick={() => onOpenLeadModal('consultation', 'Statutory Procurement Consultation')}
          className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider shrink-0"
        >
          Request Tender Docs
        </button>
      </div>
    </div>
  );
};
