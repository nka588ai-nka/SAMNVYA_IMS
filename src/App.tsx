import React, { useState, useEffect } from 'react';
import { SchemaMarkup } from './components/SchemaMarkup';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { SolutionDetailModal } from './components/SolutionDetailModal';
import { TechBackground, TechTheme } from './components/TechBackground';
import { PageId, SolutionModule } from './types';

// Multi-Page Views
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CorporatePage } from './pages/CorporatePage';
import { BusinessWithUsPage } from './pages/BusinessWithUsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SocialImpactPage } from './pages/SocialImpactPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EventsNewsPage } from './pages/EventsNewsPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { VideosPage } from './pages/VideosPage';
import { PhotosPage } from './pages/PhotosPage';
import { ContactUsPage } from './pages/ContactUsPage';

export function App() {
  const [techTheme, setTechTheme] = useState<TechTheme>('cyber');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalType, setLeadModalType] = useState<'demo' | 'quotation' | 'consultation' | 'brochure'>('demo');
  const [leadModalSolution, setLeadModalSolution] = useState<string>('Samnvya Institutional ERP');

  const [selectedSolutionDetail, setSelectedSolutionDetail] = useState<SolutionModule | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleOpenLeadModal = (
    type: 'demo' | 'quotation' | 'consultation' | 'brochure' = 'demo',
    defaultSolution: string = 'Samnvya Institutional ERP'
  ) => {
    setLeadModalType(type);
    setLeadModalSolution(defaultSolution);
    setLeadModalOpen(true);
  };

  const handleNavigatePage = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSolution = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    if (currentPage === 'home') {
      const element = document.getElementById('solutions');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentPage('solutions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Observe active section on scroll when on home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'solutions', 'industries', 'case-studies', 'recommender', 'calculator', 'b2g', 'resources', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-white selection:bg-[#F27D26] selection:text-white relative overflow-x-hidden">
      {/* Dynamic Cybernetic Technology Background Canvas */}
      <TechBackground
        currentTheme={techTheme}
        onThemeChange={(t) => setTechTheme(t)}
      />

      {/* Structured SEO Schema Markup */}
      <SchemaMarkup />

      {/* Corporate Sticky Navbar (Preserved seamlessly across all pages with official portals strip) */}
      <Navbar
        onOpenLeadModal={handleOpenLeadModal}
        onSelectSolution={handleSelectSolution}
        activeSection={activeSection}
        activePage={currentPage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-grow relative z-10">
        {currentPage === 'home' && (
          <HomePage
            onOpenLeadModal={handleOpenLeadModal}
            onScrollToSection={handleScrollToSection}
            onSelectSolutionDetail={(sol) => setSelectedSolutionDetail(sol)}
            activeCategoryId={activeCategoryId}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'about-us' && (
          <AboutUsPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'corporate' && (
          <CorporatePage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'business-with-us' && (
          <BusinessWithUsPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'social-impact' && (
          <SocialImpactPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'events-news' && (
          <EventsNewsPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'opportunities' && (
          <OpportunitiesPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'videos' && (
          <VideosPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'photos' && (
          <PhotosPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {currentPage === 'contact-us' && (
          <ContactUsPage
            onOpenLeadModal={handleOpenLeadModal}
            onNavigatePage={handleNavigatePage}
          />
        )}
      </main>

      {/* Corporate Footer (Preserved across all pages) */}
      <Footer
        onOpenLeadModal={handleOpenLeadModal}
        onSelectSolution={handleSelectSolution}
        onNavigatePage={handleNavigatePage}
      />

      {/* Interactive Detail Modal */}
      <SolutionDetailModal
        solution={selectedSolutionDetail}
        onClose={() => setSelectedSolutionDetail(null)}
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* Quotation / Demo / Inquiry Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialType={leadModalType}
        initialSolution={leadModalSolution}
      />
    </div>
  );
}

export default App;
