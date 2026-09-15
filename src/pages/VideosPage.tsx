import React, { useState } from 'react';
import { 
  Play, Video, Clock, Eye, Sparkles, ArrowRight, 
  X, CheckCircle2, ChevronRight, Share2, Download
} from 'lucide-react';
import { PageId } from '../types';

interface VideosPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

interface VideoItem {
  id: string;
  title: string;
  category: 'ERP' | 'Khyati' | 'B2G' | 'Library' | 'Examinations';
  duration: string;
  views: string;
  summary: string;
  keyPoints: string[];
  thumbnailGradient: string;
}

const VIDEO_LIST: VideoItem[] = [
  {
    id: 'v1',
    title: 'SAMNVYA Institutional ERP: Complete University Campus Automation Walkthrough',
    category: 'ERP',
    duration: '08:45',
    views: '12.4K',
    summary: 'A deep-dive presentation illustrating how our ERP synchronizes admissions, fee collection, faculty workload, and compliance in one unified system.',
    keyPoints: [
      'Multi-campus unified administration',
      'Automated fee reconciliation with banking APIs',
      'Faculty attendance and biometric integration'
    ],
    thumbnailGradient: 'from-amber-950/80 via-[#071333] to-[#040817]'
  },
  {
    id: 'v2',
    title: 'The Khyati Network: Connecting Students, Alumni & Institutional Community',
    category: 'Khyati',
    duration: '05:18',
    views: '8.9K',
    summary: 'Discover the power of thekhyati.com — enabling universities to track alumni career trajectories, collect endowments, and host mentorship portals.',
    keyPoints: [
      'Interactive alumni directory & map',
      'Institutional donation and crowdfunding gateway',
      'Verified mentorship and job placement board'
    ],
    thumbnailGradient: 'from-blue-950/80 via-[#0a1738] to-[#040817]'
  },
  {
    id: 'v3',
    title: 'Zero-Error Digital Examination & Confidential Result Processing',
    category: 'Examinations',
    duration: '07:30',
    views: '6.2K',
    summary: 'How SAMNVYA protects university examination integrity through encrypted hall tickets, barcode paper decoding, and automated transcript generation.',
    keyPoints: [
      'Tamper-evident encrypted mark sheets',
      'CBCS / NEP 2020 grading algorithms',
      'Direct DigiLocker certificate depository integration'
    ],
    thumbnailGradient: 'from-purple-950/80 via-[#08112e] to-[#040817]'
  },
  {
    id: 'v4',
    title: 'B2G e-Governance Architecture: Paperless File Movement & Audits',
    category: 'B2G',
    duration: '10:12',
    views: '4.7K',
    summary: 'Showcasing government-grade information sovereignty, digital signature integration (DSC), and CAG-ready financial compliance workflows.',
    keyPoints: [
      'Strict hierarchical access permissions',
      'Immutable timestamped digital signatures',
      'Complete audit trail of ministerial approvals'
    ],
    thumbnailGradient: 'from-emerald-950/80 via-[#07142d] to-[#040817]'
  },
  {
    id: 'v5',
    title: 'Smart RFID Library Automation & Circulation Desk in Action',
    category: 'Library',
    duration: '04:55',
    views: '5.1K',
    summary: 'Demonstration of automated book self-checkout kiosks, RFID security gates, and catalog searches through the SAMNVYA Online cloud portal.',
    keyPoints: [
      'MARC21 & Koha migration capability',
      'Automated SMS overdue alerts',
      'Integrated digital repository and e-journal portal'
    ],
    thumbnailGradient: 'from-cyan-950/80 via-[#061128] to-[#040817]'
  },
  {
    id: 'v6',
    title: 'Direct Digital World: A Corporate Philosophy Keynote by Samnvya IMS',
    category: 'ERP',
    duration: '06:20',
    views: '9.8K',
    summary: 'Our founding vision: eliminating software friction so educational leaders and administrators can focus purely on academic excellence.',
    keyPoints: [
      'The direct digital world paradigm',
      'Built in Jaipur for Indian universities',
      'Our customer-first commitment'
    ],
    thumbnailGradient: 'from-rose-950/80 via-[#0a1538] to-[#040817]'
  }
];

export const VideosPage: React.FC<VideosPageProps> = ({ onOpenLeadModal, onNavigatePage }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos = activeTab === 'All' 
    ? VIDEO_LIST 
    : VIDEO_LIST.filter(v => v.category === activeTab);

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
        <span className="text-[#FFD000] font-bold">Videos</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#07112c]/90 via-[#0b1b42]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-12 mb-10 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Video className="w-3.5 h-3.5 mr-1.5" />
            MULTIMEDIA DEMOS & WALKTHROUGHS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            SAMNVYA <span className="text-[#FFD000]">Videos</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            Experience our information systems in real-world motion. Watch platform demonstrations, 
            product walkthroughs, and institutional transformation stories.
          </p>
          <button
            onClick={() => onOpenLeadModal('demo', 'Live Custom Video Demonstration')}
            className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
          >
            <span>Request Live 1-on-1 Interactive Demo</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-white/10 font-mono text-xs">
        {['All', 'ERP', 'Khyati', 'Examinations', 'B2G', 'Library'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all ${
              activeTab === tab
                ? 'golden-shimmer-btn golden-shimmer-btn-active shadow-md'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredVideos.map((video) => (
          <div 
            key={video.id}
            onClick={() => setActiveVideo(video)}
            className="group rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all overflow-hidden cursor-pointer shadow-xl flex flex-col"
          >
            {/* Video Thumbnail Screen */}
            <div className={`relative h-48 bg-gradient-to-br ${video.thumbnailGradient} border-b border-white/10 flex items-center justify-center p-6 overflow-hidden`}>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD000_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Center Play Button with Golden Pulse */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF9500] to-[#FFD000] text-[#061638] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,208,0,0.5)]">
                <Play className="w-6 h-6 ml-0.5 fill-[#061638]" />
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-[#FFD000] border border-amber-400/30 uppercase">
                {video.category}
              </div>

              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white flex items-center">
                <Clock className="w-3 h-3 mr-1 text-[#FFD000]" />
                <span>{video.duration}</span>
              </div>
            </div>

            {/* Video Info Content */}
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFD000] transition-colors line-clamp-2 mb-2">
                  {video.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                  {video.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-mono text-gray-400">
                <span className="flex items-center">
                  <Eye className="w-3.5 h-3.5 mr-1 text-gray-500" />
                  {video.views} views
                </span>
                <span className="text-[#FFD000] font-bold flex items-center group-hover:translate-x-1 transition-transform">
                  Watch Video <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player Simulator */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#070e22] border border-amber-400/40 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-amber-400/10 text-[#FFD000] font-mono text-xs font-bold uppercase border border-amber-400/30">
                  {activeVideo.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-8 text-center border-b border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FF9500] to-[#FFD000] text-[#061638] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,208,0,0.6)] animate-pulse">
                <Play className="w-8 h-8 ml-1 fill-[#061638]" />
              </div>
              <h4 className="text-lg font-bold text-white max-w-lg mb-2">
                Interactive Video Walkthrough
              </h4>
              <p className="text-xs text-gray-400 max-w-md mb-4 font-mono">
                Duration: {activeVideo.duration} • High Definition 1080p Stream
              </p>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    setActiveVideo(null);
                    onOpenLeadModal('demo', activeVideo.title);
                  }}
                  className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center"
                >
                  <span>Book Guided Demonstration</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#061638]" />
                </button>
              </div>
            </div>

            {/* Video Summary & Key Takeaways */}
            <div className="p-6 bg-white/[0.02]">
              <h5 className="text-xs font-mono font-bold text-[#FFD000] uppercase tracking-widest mb-2">
                KEY SESSION HIGHLIGHTS
              </h5>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {activeVideo.summary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-300">
                {activeVideo.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-center p-2 rounded-lg bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#22c55e] shrink-0" />
                    <span className="line-clamp-2 text-[11px]">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
