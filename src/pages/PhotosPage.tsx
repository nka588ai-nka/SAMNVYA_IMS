import React, { useState } from 'react';
import { 
  Camera, Image as ImageIcon, Maximize2, X, ChevronRight, 
  ChevronLeft, MapPin, Calendar, ArrowRight, Download, Share2
} from 'lucide-react';
import { PageId } from '../types';

interface PhotosPageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onNavigatePage: (page: PageId) => void;
}

interface PhotoItem {
  id: string;
  title: string;
  category: 'Corporate HQ' | 'Innovation Labs' | 'Deployments' | 'Summits' | 'Team';
  location: string;
  date: string;
  caption: string;
  gradient: string;
  aspect: string;
}

const PHOTO_GALLERY: PhotoItem[] = [
  {
    id: 'p1',
    title: 'Jaipur Corporate Headquarters & Software R&D Center',
    category: 'Corporate HQ',
    location: 'Pratap Nagar, Jaipur, Rajasthan',
    date: 'August 2024',
    caption: 'The central nerve center of Samnvya IMS Private Limited, housing system architects, client success managers, and 24/7 server monitoring.',
    gradient: 'from-blue-900/60 via-indigo-950/70 to-[#040817]',
    aspect: 'aspect-video'
  },
  {
    id: 'p2',
    title: 'Tier-3 Datacenter & Cloud Architecture Operations',
    category: 'Innovation Labs',
    location: 'Secure Indian Sovereign Datacenter',
    date: 'June 2024',
    caption: 'High-availability clustered server racks powering online.samnvya.com and thekhyati.com with automated failover and encryption.',
    gradient: 'from-amber-900/60 via-[#0a183d] to-[#040817]',
    aspect: 'aspect-video'
  },
  {
    id: 'p3',
    title: 'Higher Education Digital Transformation Summit & Conclave',
    category: 'Summits',
    location: 'Jaipur Exhibition Center',
    date: 'October 2024',
    caption: 'Keynote presentation on NEP 2020 compliance and autonomous college accreditation automation delivered by our leadership team.',
    gradient: 'from-emerald-900/60 via-[#091730] to-[#040817]',
    aspect: 'aspect-video'
  },
  {
    id: 'p4',
    title: 'Smart RFID Library & Turnstile Gates Deployment',
    category: 'Deployments',
    location: 'Partner University Campus',
    date: 'September 2024',
    caption: 'Live integration of biometric smart cards and automated book checkout kiosks with the SAMNVYA Online ERP database.',
    gradient: 'from-purple-900/60 via-[#08122d] to-[#040817]',
    aspect: 'aspect-video'
  },
  {
    id: 'p5',
    title: 'Core Systems Architecture & Development Sprint',
    category: 'Team',
    location: 'Jaipur Tech Lab',
    date: 'November 2024',
    caption: 'Senior engineers reviewing database query optimizations and microservices load tests for the upcoming examination cycle.',
    gradient: 'from-cyan-900/60 via-[#051126] to-[#040817]',
    aspect: 'aspect-video'
  },
  {
    id: 'p6',
    title: 'Faculty Onboarding & ERP Administration Workshop',
    category: 'Deployments',
    location: 'Academic Council Auditorium',
    date: 'July 2024',
    caption: 'Hands-on interactive training conducted by SAMNVYA specialists guiding 120+ department heads on zero-error grading workflows.',
    gradient: 'from-rose-900/60 via-[#081533] to-[#040817]',
    aspect: 'aspect-video'
  },
  {
    id: 'p7',
    title: 'State Level Institutional Excellence & Technology Recognition',
    category: 'Summits',
    location: 'State Convention Hall',
    date: 'May 2024',
    caption: 'Recognizing SAMNVYA IMS for pioneering cloud information systems that reduced administrative paper consumption by 84%.',
    gradient: 'from-amber-800/60 via-[#0b1a3d] to-[#040817]',
    aspect: 'aspect-video'
  },
  {
    id: 'p8',
    title: 'Autonomous Examination Result Processing Command Room',
    category: 'Innovation Labs',
    location: 'Secure Controller of Examinations Desk',
    date: 'January 2025',
    caption: 'Real-time encrypted marksheet rendering and automated tamper-proof QR code generation in production.',
    gradient: 'from-blue-950/70 via-[#061430] to-[#040817]',
    aspect: 'aspect-video'
  }
];

export const PhotosPage: React.FC<PhotosPageProps> = ({ onOpenLeadModal, onNavigatePage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = activeCategory === 'All'
    ? PHOTO_GALLERY
    : PHOTO_GALLERY.filter(p => p.category === activeCategory);

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
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
        <span className="text-[#FFD000] font-bold">Photos</span>
      </nav>

      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#06112d]/90 via-[#0a1a44]/80 to-[#040817]/90 border border-amber-500/20 p-8 sm:p-12 mb-10 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-[#FFD000] border border-amber-400/30 mb-4">
            <Camera className="w-3.5 h-3.5 mr-1.5" />
            CORPORATE MEDIA & GALLERY
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-sans tracking-tight mb-4">
            SAMNVYA <span className="text-[#FFD000]">Photos</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-sans">
            A visual overview of our Jaipur corporate headquarters, research labs, institutional deployments, 
            and nationwide higher education summits.
          </p>
          <button
            onClick={() => onNavigatePage('contact-us')}
            className="golden-shimmer-btn px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center shadow-lg"
          >
            <span>Visit Jaipur Headquarters</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#061638]" />
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-white/10 font-mono text-xs">
        {['All', 'Corporate HQ', 'Innovation Labs', 'Deployments', 'Summits', 'Team'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? 'golden-shimmer-btn golden-shimmer-btn-active shadow-md'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setLightboxIndex(index)}
            className="group rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all overflow-hidden cursor-pointer shadow-xl flex flex-col"
          >
            {/* Image Placeholder Frame */}
            <div className={`relative ${photo.aspect} bg-gradient-to-br ${photo.gradient} border-b border-white/10 flex items-center justify-center p-6 overflow-hidden`}>
              {/* Subtle Tech Grid Pattern */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFD000_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Emblem / Camera Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:text-[#FFD000] group-hover:border-amber-400/50 transition-all shadow-lg">
                <ImageIcon className="w-8 h-8" />
              </div>

              {/* View Overlay Button */}
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#FFD000]" />
              </div>

              {/* Category Pill */}
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-[#FFD000] border border-amber-400/30 uppercase">
                {photo.category}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-gray-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg">
                <span className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-[#FFD000]" />
                  <span className="truncate max-w-[160px]">{photo.location}</span>
                </span>
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-gray-400" />
                  {photo.date}
                </span>
              </div>
            </div>

            {/* Photo Details */}
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#FFD000] transition-colors line-clamp-1 mb-1.5">
                  {photo.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#FFD000] font-bold">
                <span>View High-Res Photo</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#070e22] border border-amber-400/40 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
            {/* Top Bar */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-400/10 text-[#FFD000] font-mono text-xs font-bold uppercase border border-amber-400/30">
                  {currentPhoto.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {currentPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Stage */}
            <div className={`relative aspect-video bg-gradient-to-br ${currentPhoto.gradient} flex items-center justify-center p-8 text-center`}>
              <div className="text-center space-y-3">
                <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-amber-400/40 flex items-center justify-center text-[#FFD000] mx-auto shadow-2xl">
                  <Camera className="w-12 h-12" />
                </div>
                <div className="text-lg font-bold text-white font-sans">
                  {currentPhoto.title}
                </div>
                <div className="flex items-center justify-center space-x-4 text-xs font-mono text-gray-300">
                  <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-[#FFD000]" /> {currentPhoto.location}</span>
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1 text-[#FFD000]" /> {currentPhoto.date}</span>
                </div>
              </div>

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-amber-400 hover:text-[#061638] text-white transition-all border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-amber-400 hover:text-[#061638] text-white transition-all border border-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-6 bg-black/50 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                {currentPhoto.caption}
              </p>
              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    onOpenLeadModal('brochure', `Media & Photos: ${currentPhoto.title}`);
                  }}
                  className="golden-shimmer-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider"
                >
                  Inquire About Facility
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
