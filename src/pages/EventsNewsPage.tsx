import React, { useState } from 'react';
import { 
  Calendar, Newspaper, Search, ChevronRight, ArrowRight, 
  MapPin, Clock, Share2, Tag, CheckCircle2, ExternalLink
} from 'lucide-react';
import { PageId } from '../types';

interface EventsNewsPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

const ALL_EVENTS = [
  {
    id: 'ev-1',
    date: '10 April 2025',
    time: '10:00 AM – 04:00 PM',
    venue: 'Samnvya IMS Corporate Headquarters, Pratap Nagar, Jaipur',
    title: 'Women Lead The Way In AI: Samnvya IMS Pvt Ltd Hosts Workshop On Innovation And Leadership',
    category: 'AI & Leadership',
    summary: 'High-impact technical conclave focusing on artificial intelligence adoption, ethical data modeling, and executive leadership for female technologists and academic heads.'
  },
  {
    id: 'ev-2',
    date: '10 June 2021',
    time: '11:00 AM – 01:00 PM',
    venue: 'Virtual Digital Session (https://www.samnvya.com/)',
    title: 'Workshop on Verbal English Communication & Corporate Expression',
    category: 'Skill Development',
    summary: 'Practical interactive clinic on professional presentation, interview dynamics, and corporate writing for college students and entry-level IT consultants.'
  },
  {
    id: 'ev-3',
    date: '21 April 2021',
    time: '11:30 AM',
    venue: 'Shri Khole Ke Hanuman Ji Mandir, Jaipur',
    title: 'हनुमान जयंती महोत्सव: ऑनलाइन दर्शन एवं डिजिटल महाआरती व्यवस्था',
    category: 'Cultural & Shrines',
    summary: 'High-capacity live streaming infrastructure deployment ensuring thousands of global devotees participated safely in the sacred Hanuman Jayanti Mahotsav.'
  },
  {
    id: 'ev-4',
    date: '21 April 2021',
    time: 'Morning Batch',
    venue: 'Concepts Academy (Samnvya Educational Services)',
    title: 'RBSE & CBSE 12th Physics Concept Masterclass by Ms. Dhwani Gangal',
    category: 'Education',
    summary: 'Specialized deep-dive sessions simplifying electromagnetic induction, modern physics, and optics for board examination aspirants.'
  },
  {
    id: 'ev-5',
    date: '18 December 2020',
    time: 'Daily Sessions',
    venue: 'Concepts Academy, Jaipur',
    title: 'RBSE & CBSE 12th Mathematics Problem-Solving Intensive',
    category: 'Education',
    summary: 'Rigorous interactive classes on calculus, vectors, and three-dimensional geometry emphasizing fundamental conceptual clarity.'
  },
  {
    id: 'ev-6',
    date: '13 November 2020',
    time: '10:00 AM – 08:00 PM',
    venue: 'Shri Khole Ke Hanuman Ji Mandir, Jaipur',
    title: 'Diwali & Hanuman Jayanti Mahotsav: Virtual Darshan and Digital Prasadi Management',
    category: 'Live Streaming',
    summary: 'Multi-camera HD live broadcasting and automated digital Prasadi dispatch coordination handled by the Samnvya streaming team.'
  },
  {
    id: 'ev-7',
    date: '06 November 2020',
    time: '05:00 PM',
    venue: 'Samnvya: The Information Management System (SIMS)',
    title: 'Creative Workshop on Handicrafts & Interior Design Architecture',
    category: 'Creativity',
    summary: 'Bridging creative artisanal expressions and digital portfolio presentation for local Rajasthani handicraft artists.'
  },
  {
    id: 'ev-8',
    date: '18 September 2020',
    time: '08:30 AM',
    venue: 'Digital Cultural Desk',
    title: 'Hi-Tech Online Workshop on KATHAK: "The Kala Parichaya of Indian Classical Dance"',
    category: 'Culture & Tech',
    summary: 'Pioneering use of interactive digital platforms to deliver authentic classical Indian dance pedagogy during pandemic movement restrictions.'
  },
  {
    id: 'ev-9',
    date: '06 September 2020',
    time: '10:30 AM – 05:00 PM',
    venue: 'Matrimonial Services Platform',
    title: 'Regional Online Matrimonial परिचय सम्मेलन',
    category: 'Community Services',
    summary: 'A secure, virtual introduction convention connecting hundreds of families across Rajasthan with strict privacy controls and verified background profiles.'
  },
  {
    id: 'ev-10',
    date: '17 June 2020',
    time: '11:00 AM',
    venue: 'Samnvya Webinar Portal',
    title: 'PANDEMIC v/s ACADEMIC: National Webinar for Students and Teachers',
    category: 'Academic Webinar',
    summary: 'Addressing psychological, administrative, and technological roadblocks confronting universities during sudden closures, presenting cloud contingency workflows.'
  },
  {
    id: 'ev-11',
    date: '30 May 2020',
    time: '10:30 AM',
    venue: 'Intellectual Property Management Wing',
    title: 'Workshop on Patents, Intellectual Property Rights & Pateomatic',
    category: 'IP & Patents',
    summary: 'Educating software engineers, academic faculty, and student innovators on copyright filing, patent claims drafting, and intellectual property defense.'
  },
  {
    id: 'ev-12',
    date: '17 May 2020',
    time: '11:00 AM',
    venue: 'SIMS Virtual Classroom',
    title: 'Industrial Training on "Soft Skills for Life Success"',
    category: 'Corporate Training',
    summary: 'Comprehensive module covering emotional intelligence, collaborative teamwork, digital work ethics, and leadership adaptability.'
  },
  {
    id: 'ev-13',
    date: '21 May 2019',
    time: 'All-Day Desk',
    venue: 'Samnvya Tax Consultancy Desk',
    title: 'ITR (Income Tax Return) Preparation & Electronic Filing Assistance',
    category: 'Tax Advisory',
    summary: 'Annual tax filing awareness and computational assistance provided to non-profit trustees, institutional faculty, and independent professionals.'
  }
];

const ALL_NEWS = [
  {
    id: 'news-1',
    year: '2025',
    date: '10 April 2025',
    headline: 'Women Lead The Way In AI: Samnvya IMS Conclave Spotlights Enterprise AI & Leadership',
    location: 'Jaipur, Rajasthan',
    excerpt: 'Convening technologists, academics, and system leaders at the Jaipur headquarters to examine practical artificial intelligence applications in higher education governance.',
    tag: 'Enterprise AI'
  },
  {
    id: 'news-2',
    year: '2023',
    date: '26 January 2023',
    headline: 'सरस्वती पूजा, बसंतोत्सव एवं 74वां गणतंत्र दिवस समन्वय आईएमएस कॉरपोरेट कार्यालय में हर्षोल्लास से संपन्न',
    location: 'जयपुर, राजस्थान',
    excerpt: 'समन्वय आईएमएस प्राइवेट लिमिटेड द्वारा ज्ञान और राष्ट्रभक्ति के समन्वय के साथ नए शैक्षणिक ईआरपी मॉड्यूल एवं क्लाउड लाइब्रेरी पहलों का अनावरण किया गया।',
    tag: 'Corporate & Culture'
  },
  {
    id: 'news-3',
    year: '2022',
    date: '12 December 2022',
    headline: 'महारानी कॉलेज, जयपुर में डिजिटल लाइब्रेरी मैनेजमेंट सॉफ्टवेयर पर 7-दिवसीय गहन कार्यशाला का सफल आयोजन',
    location: 'University of Maharani College, Jaipur',
    excerpt: 'राजस्थान विश्वविद्यालय के प्रतिष्ठित महारानी कॉलेज में केंद्रीय ग्रंथालय के संपूर्ण स्वचालन, बारकोड प्रणाली एवं छात्र डिजिटल एक्सेस हेतु प्राध्यापकों व छात्राओं को प्रशिक्षण प्रदान किया गया।',
    tag: 'Higher Education'
  },
  {
    id: 'news-4',
    year: '2022',
    date: '01 September 2022',
    headline: 'पूज्य सिन्धी सेंट्रल पंचायत, जयपुर महानगर की बहुउद्देश्यीय वेबसाइट का भव्य शुभारंभ',
    location: 'जयपुर महानगर',
    excerpt: 'समन्वय आईएमएस द्वारा निर्मित संपूर्ण सामुदायिक पोर्टल का अनावरण हुआ, जिसमें छात्रवृत्ति, रोजगार पोर्टल, वैवाहिक परिचय एवं सदस्य पंजीयन सुविधाएं एक साथ उपलब्ध हैं।',
    tag: 'Community Empowerment'
  },
  {
    id: 'news-5',
    year: '2021',
    date: '21 September 2021',
    headline: 'श्री झूलेलाल मंदिर राजापार्क: लाइव दर्शन, ऑनलाइन आरती प्रसारण एवं ई-दान प्रणाली प्रारंभ',
    location: 'राजापार्क, जयपुर',
    excerpt: 'धार्मिक उत्सवों एवं दैनिक आरती के वैश्विक प्रसारण हेतु समन्वय आईएमएस द्वारा उच्च-गुणवत्ता लाइव स्ट्रीमिंग सर्वर और ई-डोनेशन गेटवे स्थापित किया गया।',
    tag: 'Shrine Digitisation'
  },
  {
    id: 'news-6',
    year: '2021',
    date: '15 June 2021',
    headline: 'Shri Sankat Mochan Hanuman Temple Digital Services & Online Darshan Portal Launched',
    location: 'Jaipur, Rajasthan',
    excerpt: 'Enabling remote spiritual connectivity for devotees through official mobile-responsive portal architecture and virtual prayer booking.',
    tag: 'Cultural Shrines'
  },
  {
    id: 'news-7',
    year: '2020',
    date: '13 November 2020',
    headline: 'श्री खोले के हनुमान जी मंदिर की आधिकारिक वेबसाइट एवं ऑनलाइन दर्शन पोर्टल का लोकार्पण',
    location: 'जयपुर, राजस्थान',
    excerpt: 'राजस्थान के ऐतिहासिक श्री खोले के हनुमान जी मंदिर की आधिकारिक वेबसाइट एवं दर्शन व्यवस्था को श्रद्धालुओं के लिए समर्पित किया गया।',
    tag: 'Spiritual Platforms'
  },
  {
    id: 'news-8',
    year: '2020',
    date: '21 May 2020',
    headline: 'महाराजा कॉलेज, जयपुर का पुस्तकालय हुआ डिजिटल: विद्यार्थियों को मोबाइल से मिली कई सुविधाएं',
    location: 'University Maharaja College, Jaipur',
    excerpt: 'राजस्थान विश्वविद्यालय के संघटक महाराजा कॉलेज में केंद्रीय पुस्तकालय स्वचालन प्रणाली का सफल कार्यान्वयन, जिससे विद्यार्थियों को सीधे मोबाइल से कैटलॉग सर्च की सुविधा मिली।',
    tag: 'Digital Library'
  }
];

export const EventsNewsPage: React.FC<EventsNewsPageProps> = ({
  onOpenLeadModal,
  onNavigatePage,
}) => {
  const [activeTab, setActiveTab] = useState<'events' | 'news'>('events');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = ALL_EVENTS.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNews = ALL_NEWS.filter(n => 
    n.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.location.toLowerCase().includes(searchQuery.toLowerCase())
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
        <span className="text-[#FFD000] font-bold">Events & News</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#071330]/90 via-[#0a1e4a]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-14 mb-12 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            CHRONOLOGICAL ARCHIVE & MEDIA RECORDS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            Events & <span className="text-[#FFD000]">News Releases</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            Explore our documented record of technical workshops, academic conferences, community portal inaugurations, 
            and official news statements chronicling SAMNVYA’s ongoing commitment to Rajasthan’s digital ecosystem.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onOpenLeadModal('consultation', 'Host a Collaborative Workshop / Event')}
              className="golden-shimmer-btn px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
            >
              <span>Collaborate on Next Event</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
            </button>
            <button
              onClick={() => onNavigatePage('photos')}
              className="px-5 py-3 rounded-xl text-xs font-bold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center transition-all"
            >
              <span>View Media Gallery</span>
              <ChevronRight className="w-4 h-4 ml-1 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-white/[0.03] border border-white/10 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('events')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center ${
              activeTab === 'events'
                ? 'bg-[#FFD000] text-[#061638] shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Events & Workshops ({ALL_EVENTS.length})
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center ${
              activeTab === 'news'
                ? 'bg-[#FFD000] text-[#061638] shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Newspaper className="w-4 h-4 mr-2" />
            News Releases ({ALL_NEWS.length})
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search events or news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
          />
        </div>
      </div>

      {/* TAB 1: Events Timeline Grid */}
      {activeTab === 'events' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 uppercase">
                      {ev.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {ev.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-sans">
                    {ev.title}
                  </h3>

                  <div className="text-xs font-mono text-gray-400 mb-3 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-gray-500 shrink-0" />
                    <span className="truncate">{ev.venue}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    {ev.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FFD000] font-bold">Documented Archive</span>
                  <button
                    onClick={() => onOpenLeadModal('consultation', ev.title)}
                    className="text-gray-400 hover:text-white flex items-center transition-colors"
                  >
                    <span>Event Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: News Releases Grid */}
      {activeTab === 'news' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredNews.map((nw) => (
              <div
                key={nw.id}
                className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 uppercase">
                      {nw.tag}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {nw.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-sans leading-snug">
                    {nw.headline}
                  </h3>

                  <div className="text-xs font-mono text-gray-400 mb-3 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-gray-500 shrink-0" />
                    <span>{nw.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    {nw.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FFD000] font-bold">Archived Statement</span>
                  <button
                    onClick={() => onOpenLeadModal('brochure', nw.headline)}
                    className="text-gray-400 hover:text-white flex items-center transition-colors"
                  >
                    <span>Read Release</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
