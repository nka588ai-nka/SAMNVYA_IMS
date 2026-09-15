import React from 'react';
import { Hero } from '../components/Hero';
import { SolutionsSection } from '../components/SolutionsSection';
import { SolutionRecommender } from '../components/SolutionRecommender';
import { IndustriesSection } from '../components/IndustriesSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { B2GSection } from '../components/B2GSection';
import { RoiCalculator } from '../components/RoiCalculator';
import { InnovationSection } from '../components/InnovationSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { SolutionModule, PageId } from '../types';

interface HomePageProps {
  onOpenLeadModal: (type?: 'demo' | 'quotation' | 'consultation' | 'brochure', defaultSolution?: string) => void;
  onScrollToSection: (sectionId: string) => void;
  onSelectSolutionDetail: (solution: SolutionModule) => void;
  activeCategoryId: string;
  onNavigatePage: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenLeadModal,
  onScrollToSection,
  onSelectSolutionDetail,
  activeCategoryId,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        onOpenLeadModal={onOpenLeadModal}
        onScrollToSection={onScrollToSection}
      />

      {/* 2. Solutions Section (7 Core Verticals & Detailed Modules) */}
      <SolutionsSection
        onSelectSolutionDetail={onSelectSolutionDetail}
        onOpenLeadModal={onOpenLeadModal}
        activeCategoryId={activeCategoryId}
      />

      {/* 3. Interactive Solution Finder / Recommender Wizard */}
      <SolutionRecommender
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 4. Domain-Specialized Industries */}
      <IndustriesSection
        onOpenLeadModal={onOpenLeadModal}
        onScrollToSection={onScrollToSection}
      />

      {/* 5. Institutional Case Studies & Experience */}
      <CaseStudiesSection
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 6. Government & Institutional Readiness (B2G) */}
      <B2GSection
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 7. Interactive ROI & Digitization Impact Calculator */}
      <RoiCalculator
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 8. Applied Intelligence & Technology Roadmap */}
      <InnovationSection />

      {/* 9. Resources, Brochures, News & Thought Leadership */}
      <ResourcesSection
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 10. About SAMNVYA Preview */}
      <AboutSection
        onOpenLeadModal={onOpenLeadModal}
      />

      {/* 11. Final Contact & Inquiry Desk */}
      <ContactSection
        onOpenLeadModal={onOpenLeadModal}
      />
    </div>
  );
};
