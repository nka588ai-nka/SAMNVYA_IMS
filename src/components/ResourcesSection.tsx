import React, { useState } from 'react';
import { 
  FileText, Download, Calendar, ArrowRight, 
  BookOpen, Clock, Tag, CheckCircle2, Sparkles, Building2
} from 'lucide-react';
import { BROCHURES, NEWS_AND_EVENTS, INSIGHT_ARTICLES } from '../data/insightsData';
import { InsightArticle } from '../types';

interface ResourcesSectionProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<'brochures' | 'news' | 'insights'>('brochures');
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const handleDownloadBrochure = (brochureTitle: string) => {
    onOpenLeadModal('brochure', brochureTitle);
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#F27D26]">
            <span>// 08. KNOWLEDGE, ECOSYSTEM & DOWNLOADS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-display">
            RESOURCES & <span className="text-stroke-white text-transparent">THOUGHT</span> <span className="text-[#F27D26]">LEADERSHIP.</span>
          </h2>
          <div className="w-12 h-1 bg-[#F27D26] mx-auto rounded-full mt-2"></div>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto pt-1">
            Official solution brochures, institutional deployment news, and insights on higher education digitization and governance.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="bg-[#0b142b]/80 backdrop-blur-xl p-1.5 rounded-full border border-white/15 flex space-x-1 shadow-lg">
            <button
              onClick={() => setActiveTab('brochures')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'brochures' ? 'bg-[#F27D26] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Brochures ({BROCHURES.length})
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'news' ? 'bg-[#F27D26] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              News & Events ({NEWS_AND_EVENTS.length})
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'insights' ? 'bg-[#F27D26] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Articles ({INSIGHT_ARTICLES.length})
            </button>
          </div>
        </div>

        {/* 1. Brochures Tab Content */}
        {activeTab === 'brochures' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {BROCHURES.map((b) => (
              <div
                key={b.id}
                className="bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/10 p-7 flex flex-col justify-between hover:border-[#F27D26] transition-all group hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#F27D26] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {b.category}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {b.pages} • {b.size}
                    </span>
                  </div>

                  <h3 className="text-base font-black uppercase tracking-tight text-white leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {b.summary}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-2 font-mono">
                      SPECIFICATIONS INCLUDED:
                    </span>
                    <ul className="space-y-1.5">
                      {b.highlights.map((h, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] mr-2 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-mono">PDF DOCUMENT</span>
                  <button
                    onClick={() => handleDownloadBrochure(b.title)}
                    className="px-4 py-2.5 rounded-full bg-white text-black hover:bg-[#F27D26] hover:text-white text-xs font-black uppercase tracking-wider transition-all flex items-center space-x-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. News & Events Tab Content */}
        {activeTab === 'news' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {NEWS_AND_EVENTS.map((item) => (
              <div
                key={item.id}
                className="bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/10 p-7 flex flex-col justify-between space-y-4 hover:border-cyan-400/40 transition-all hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 text-cyan-300 px-3 py-1 rounded-full font-mono">
                      {item.type}
                    </span>
                    <span className="text-xs font-medium text-gray-300 flex items-center font-mono">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#F27D26]" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase tracking-tight text-white">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold text-[#F27D26] flex items-center">
                    <Building2 className="w-3.5 h-3.5 mr-1.5" />
                    <span>{item.organization}</span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal pt-1">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-right">
                  <button
                    onClick={() => onOpenLeadModal('demo', `Regarding: ${item.title}`)}
                    className="text-xs font-black uppercase tracking-wider text-[#F27D26] hover:text-white transition-colors"
                  >
                    Request Information &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Insights & Thought Leadership Tab Content */}
        {activeTab === 'insights' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {INSIGHT_ARTICLES.map((art) => (
              <div
                key={art.id}
                className="bg-[#0b142b]/70 backdrop-blur-xl rounded-3xl border border-white/10 p-7 flex flex-col justify-between space-y-4 hover:border-[#F27D26] transition-all group hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#F27D26] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {art.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center font-mono">
                      <Clock className="w-3 h-3 mr-1 text-[#F27D26]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-black uppercase tracking-tight text-white leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed font-normal line-clamp-3">
                    {art.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {art.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="text-xs font-black uppercase tracking-wider text-[#F27D26] hover:text-white flex items-center transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#0c0c0c] text-white w-full max-w-3xl rounded-3xl shadow-2xl border border-white/15 p-6 sm:p-10 max-h-[85vh] overflow-y-auto">
              <div className="flex justify-between items-start pb-5 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-black uppercase tracking-wider text-[#F27D26]">
                    {selectedArticle.category} • {selectedArticle.date}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-1.5 font-display">
                    {selectedArticle.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-400 hover:text-white p-2 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 text-gray-300 text-sm leading-relaxed whitespace-pre-line space-y-4 font-normal">
                {selectedArticle.content}
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white"
                >
                  Close Article
                </button>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenLeadModal('demo', `Article Inquiry: ${selectedArticle.title}`);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#F27D26] hover:bg-[#ff9040] text-white text-xs font-black uppercase tracking-wider shadow"
                >
                  Consult on this Subject
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
