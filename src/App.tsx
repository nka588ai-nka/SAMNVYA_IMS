import React, { useState, useEffect } from 'react';
import { SchemaMarkup } from './components/SchemaMarkup';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { SolutionDetailModal } from './components/SolutionDetailModal';
import { SolutionRecommender } from './components/SolutionRecommender';
import { IndustriesSection } from './components/IndustriesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { B2GSection } from './components/B2GSection';
import { RoiCalculator } from './components/RoiCalculator';
import { InnovationSection } from './components/InnovationSection';
import { ResourcesSection } from './components/ResourcesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { TechBackground, TechTheme } from './components/TechBackground';
import { SolutionModule } from './types';
import { DETAILED_SOLUTIONS } from './data/solutionsData';

export function App() {
  const [techTheme, setTechTheme] = useState<TechTheme>('cyber');
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

  const handleSelectSolution = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-white selection:bg-[#F27D26] selection:text-white relative overflow-x-hidden">
      {/* Dynamic Cybernetic Technology Background Canvas */}
      <TechBackground
        currentTheme={techTheme}
        onThemeChange={(t) => setTechTheme(t)}
      />

      {/* Structured SEO Schema Markup */}
      <SchemaMarkup />

      {/* Corporate Sticky Navbar */}
      <Navbar
        onOpenLeadModal={handleOpenLeadModal}
        onSelectSolution={handleSelectSolution}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onOpenLeadModal={handleOpenLeadModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Solutions Section (7 Core Verticals & Detailed Modules) */}
        <SolutionsSection
          onSelectSolutionDetail={(sol) => setSelectedSolutionDetail(sol)}
          onOpenLeadModal={handleOpenLeadModal}
          activeCategoryId={activeCategoryId}
        />

        {/* 3. Interactive Solution Finder / Recommender Wizard */}
        <SolutionRecommender
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 4. Domain-Specialized Industries */}
        <IndustriesSection
          onOpenLeadModal={handleOpenLeadModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* 5. Institutional Case Studies & Experience */}
        <CaseStudiesSection
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 6. Government & Institutional Readiness (B2G) */}
        <B2GSection
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 7. Interactive ROI & Digitization Impact Calculator */}
        <RoiCalculator
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 8. Applied Intelligence & Technology Roadmap */}
        <InnovationSection />

        {/* 9. Resources, Brochures, News & Thought Leadership */}
        <ResourcesSection
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 10. About SAMNVYA, Philosophy & Jaipur Headquarters */}
        <AboutSection
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* 11. Final Contact & Inquiry Desk */}
        <ContactSection
          onOpenLeadModal={handleOpenLeadModal}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenLeadModal={handleOpenLeadModal}
        onSelectSolution={handleSelectSolution}
      />

      {/* Modals */}
      <SolutionDetailModal
        solution={selectedSolutionDetail}
        onClose={() => setSelectedSolutionDetail(null)}
        onOpenLeadModal={handleOpenLeadModal}
      />

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
