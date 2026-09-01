import { BrochureItem, InsightArticle, NewsEventItem, WizardQuestion } from '../types';

export const BROCHURES: BrochureItem[] = [
  {
    id: 'brochure-corporate',
    title: 'Samnvya Corporate Capabilities & Solutions Deck',
    category: 'Corporate Overview',
    pages: '16 Pages',
    size: '3.4 MB',
    summary: 'Comprehensive overview of Samnvya IMS positioning, architecture, institutional case studies, and full SaaS product ecosystem.',
    highlights: ['Company Profile & Vision', 'Core 7 Solution Verticals', 'Institutional Case Studies', 'Deployment & SLA Models'],
    downloadName: 'Samnvya_IMS_Corporate_Profile_2026.pdf'
  },
  {
    id: 'brochure-erp',
    title: 'Institutional ERP & Academic Automation Suite',
    category: 'Higher Education',
    pages: '12 Pages',
    size: '2.8 MB',
    summary: 'In-depth specification of student lifecycle, online admissions, fee reconciliation, NAAC reporting, and faculty portals.',
    highlights: ['Admissions & Merit Engine', 'Fee Management with Bank Bridges', 'Examination & CIA Grading', 'NAAC / AISHE Data Prep'],
    downloadName: 'Samnvya_Institutional_ERP_Brochure.pdf'
  },
  {
    id: 'brochure-digital-library',
    title: 'Digital Library, OPAC & E-Resource Vault',
    category: 'Knowledge Solutions',
    pages: '8 Pages',
    size: '1.9 MB',
    summary: 'Architecture guide for hybrid physical and digital library transformation with barcode integration and multi-parameter OPAC.',
    highlights: ['Accession & Catalog Engine', 'Barcode / QR Printing Setup', 'Thesis & PDF Digital Vault', 'Patron Circulation Rules'],
    downloadName: 'Samnvya_Digital_Library_Solutions.pdf'
  },
  {
    id: 'brochure-visitor-mgmt',
    title: 'Smart QR Visitor & Campus Entry-Exit Security',
    category: 'Enterprise & Security',
    pages: '6 Pages',
    size: '1.4 MB',
    summary: 'Detailed overview of digital gate pass workflows, SMS/WhatsApp host approvals, multi-gate sync, and premises analytics.',
    highlights: ['Contactless QR Passes', 'Host Approval Triggers', 'Multi-Gate Synchronization', 'Overstay Alerts'],
    downloadName: 'Samnvya_Smart_Visitor_Management.pdf'
  },
  {
    id: 'brochure-temple-community',
    title: 'Religious Trust, Shrines & Community Management',
    category: 'Specialized Tech',
    pages: '8 Pages',
    size: '2.1 MB',
    summary: 'Specialized technology for temple trusts: donation transparency, instant 80G receipts, pooja bookings, and devotee portals.',
    highlights: ['Online Seva Bookings', 'Automated 80G SMS Receipts', 'Dharamshala Booking System', 'Trust Accounting Sync'],
    downloadName: 'Samnvya_Shrine_and_Trust_Solutions.pdf'
  }
];

export const NEWS_AND_EVENTS: NewsEventItem[] = [
  {
    id: 'news-1',
    type: 'Deployment',
    title: 'High-Availability Admission & Portal Upgrades Completed for Rajasthan Colleges',
    date: 'August 2026',
    organization: 'Jaipur Constituent & Degree Colleges',
    summary: 'Successfully enabled high-concurrency admission notification infrastructure and merit list publishing engines for upcoming academic sessions.'
  },
  {
    id: 'news-2',
    type: 'Workshop',
    title: 'Digital Library & OPAC Cataloging Training for Institutional Librarians',
    date: 'July 2026',
    organization: 'Samnvya Tech Center, Jaipur',
    summary: 'Conducted hands-on training sessions for academic librarians on automated accessioning, barcode thermal printing, and digital PDF archiving.'
  },
  {
    id: 'news-3',
    type: 'Milestone',
    title: 'Crossed 15+ Government & Autonomous Institutional Deployments Milestone',
    date: 'May 2026',
    organization: 'SAMNVYA IMS Pvt. Ltd.',
    summary: 'Solidifying our footprint as a trusted technology transformation partner across prestigious academic departments, law universities, and autonomous bodies in Rajasthan.'
  },
  {
    id: 'news-4',
    type: 'Deployment',
    title: 'Specialized Devotee Portal & Transparent Seva System Enhancement',
    date: 'April 2026',
    organization: 'Prominent Shrines & Trusts',
    summary: 'Rolled out instantaneous digital donation receipt delivery via SMS/WhatsApp with automated daily ledger reconciliation for shrine committees.'
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'article-naac-erp',
    title: 'Modernizing College ERP: How Unified Systems Accelerate NAAC & NIRF Accreditation',
    category: 'Education Technology',
    readTime: '5 min read',
    date: 'August 2026',
    excerpt: 'Manual data compilation during NAAC cycles consumes hundreds of faculty hours. Learn how centralized ERP data structures make criteria reporting effortless.',
    tags: ['Higher Education', 'ERP', 'NAAC', 'NIRF', 'Digital Campus'],
    content: `Higher education institutions in India face an ever-increasing administrative burden during accreditation cycles such as NAAC and NIRF. When student records, examination histories, faculty research publications, and placement statistics reside in disparate spreadsheets, compiling self-study reports becomes a multi-month ordeal prone to discrepancies.

By adopting a unified institutional ERP like Samnvya, institutions capture data at the point of origin:
1. **Admissions & Enrollment**: Exact demographic, quota, and gender diversity matrices are generated in one click.
2. **Academic Progression**: Pass percentages, continuous assessment scores, and attendance correlations are automatically tabulated.
3. **Faculty & Research Output**: Direct indexing of conference papers, workshops, and Ph.D. guidance records.

The result is not only superior compliance scores but substantial time savings for academic deans and department heads.`
  },
  {
    id: 'article-digital-libraries',
    title: 'Transforming Academic Libraries into 24/7 Knowledge Hubs with Cloud OPAC',
    category: 'Digital Libraries',
    readTime: '4 min read',
    date: 'July 2026',
    excerpt: 'Why physical libraries must evolve into hybrid digital knowledge vaults, and how barcode indexing and remote OPAC catalogs boost book utilization.',
    tags: ['Library Tech', 'OPAC', 'E-Resources', 'Knowledge Management'],
    content: `The modern university library is no longer merely a warehouse for printed volumes; it is a dynamic nexus of institutional knowledge. However, traditional card catalogs or antiquated offline desktop systems create severe friction for today's digital-native students.

Implementing a cloud-native Digital Library suite enables:
- **Instant Keyword & Subject Discovery**: Students can query the library catalog from their smartphones anywhere on campus.
- **Digital Thesis & Rare Document Archiving**: Preserving precious departmental monographs and dissertations with watermark security.
- **High-Speed Barcode Checkout**: Reducing circulation desk queues from minutes to seconds per transaction.`
  },
  {
    id: 'article-visitor-security',
    title: 'Beyond Paper Registers: Why Campuses & Government Secretariats Need Smart QR Passes',
    category: 'Security & Workflows',
    readTime: '4 min read',
    date: 'June 2026',
    excerpt: 'Paper visitor books pose security vulnerabilities and privacy concerns. Explore how instant QR passes ensure safety and emergency accountability.',
    tags: ['Campus Security', 'Visitor Management', 'Smart Workflows', 'Access Control'],
    content: `For decades, physical logbooks have sat at security gates. Anyone walking in can write a fictitious name and phone number, while simultaneously reading the phone numbers and personal details of all previous visitors.

Samnvya's Smart Visitor Management replaces this broken paradigm:
1. **Authenticated Mobile OTP & ID Capture**: Verifies visitor identity before entry.
2. **Instant Host Pre-Approvals**: Officers and faculty receive a WhatsApp/SMS alert to approve or decline the visit.
3. **Emergency Evacuation Headcounts**: In the event of a drill or emergency, security commanders know the exact count of non-staff individuals on premises.`
  }
];

export const RECOMMENDER_QUESTIONS: WizardQuestion[] = [
  {
    id: 1,
    question: 'What best describes your organization?',
    subtitle: 'Select your primary operational domain to help us tailor our platform architecture.',
    options: [
      { label: 'University / Degree College', description: 'Central, state, or private academic institution', icon: 'GraduationCap', value: 'education' },
      { label: 'Government / Autonomous Body', description: 'Directorate, statutory council, or public department', icon: 'Building2', value: 'government' },
      { label: 'Corporate Enterprise / SME', description: 'Business facility, office, or commercial organization', icon: 'Briefcase', value: 'enterprise' },
      { label: 'Religious Trust / Community Foundation', description: 'Shrine committee, social trust, or alumni society', icon: 'Sparkles', value: 'community' }
    ]
  },
  {
    id: 2,
    question: 'What is your primary operational challenge today?',
    subtitle: 'Where is your team experiencing the highest friction or manual effort?',
    options: [
      { label: 'Fragmented Student & Fee Records', description: 'Manual admissions, fee collection queues, and exam records', icon: 'Layers', value: 'erp_pain' },
      { label: 'Outdated Library & Knowledge Access', description: 'Manual book accessioning, lost titles, no digital search', icon: 'BookOpen', value: 'library_pain' },
      { label: 'Uncontrolled Campus / Office Visitor Flow', description: 'Paper logbooks at gates, security blindspots', icon: 'ShieldCheck', value: 'visitor_pain' },
      { label: 'Unreliable Website, AMC & Circular Updates', description: 'Server downtime during admissions, delayed notices', icon: 'Globe', value: 'web_pain' },
      { label: 'Disconnected Alumni & Community Base', description: 'No verified alumni directory, difficult donation drives', icon: 'Users', value: 'alumni_pain' },
      { label: 'Manual Seva & Donation Accounting', description: 'Shrine receipts, devotee management, lack of digital 80G', icon: 'Sparkles', value: 'temple_pain' }
    ]
  },
  {
    id: 3,
    question: 'What is the scale of your organization (approx. users / students / visitors)?',
    subtitle: 'This allows us to calibrate database concurrency and server provisioning.',
    options: [
      { label: 'Under 1,000 users', description: 'Department, specialized academy, or single facility', icon: 'Users', value: 'small' },
      { label: '1,000 to 5,000 users', description: 'Medium college, autonomous institute, or busy shrine', icon: 'Users', value: 'medium' },
      { label: '5,000 to 20,000 users', description: 'Large constituent college or corporate campus', icon: 'Building2', value: 'large' },
      { label: '20,000+ users', description: 'Full state university, multi-campus trust, or government body', icon: 'Layers', value: 'enterprise' }
    ]
  },
  {
    id: 4,
    question: 'What is your preferred deployment model?',
    subtitle: 'Choose between managed cloud or on-premise infrastructure.',
    options: [
      { label: 'Managed SaaS Cloud', description: 'Fastest rollout, zero server management, automatic daily backups', icon: 'Cloud', value: 'cloud' },
      { label: 'Dedicated Institutional Cloud', description: 'Isolated private cloud environment for your organization', icon: 'ShieldCheck', value: 'dedicated' },
      { label: 'On-Premise Server Setup', description: 'Installed directly on your campus / departmental hardware', icon: 'Database', value: 'onprem' }
    ]
  }
];
