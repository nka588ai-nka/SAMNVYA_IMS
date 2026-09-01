import { CaseStudy, IndustrySector } from '../types';

export const INSTITUTIONAL_METRICS = [
  { value: '15+', label: 'Government & Autonomous Institutions', description: 'Long-running deployments across universities, faculties & statutory bodies' },
  { value: '25+', label: 'Organizations Digitally Empowered', description: 'Higher education colleges, community trusts & specialized enterprises' },
  { value: '100%', label: 'Jaipur-Based Local Engineering & Support', description: 'Direct on-site and remote technical assistance from Pratap Nagar HQ' },
  { value: '99.9%', label: 'Uptime on Critical Institutional Portals', description: 'High-availability infrastructure serving admissions & academic cycles' }
];

export const INSTITUTIONAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'uor-main',
    client: 'University of Rajasthan, Jaipur',
    institutionType: 'University',
    location: 'Jaipur, Rajasthan',
    challenge: 'Managing fragmented departmental communications, dynamic circulars, departmental web updates, and academic notifications across a massive campus.',
    samnvyaSolution: 'Implemented scalable departmental digital management systems, secure web solutions, information dissemination architectures, and dedicated maintenance frameworks.',
    deliveredModules: ['Institutional Web Infrastructure', 'Departmental Information Systems', 'Academic Notice Engine', 'Managed AMC & Cloud Hosting'],
    substantiatedOutcome: 'Streamlined real-time circular releases, secured departmental information assets, and achieved high availability during peak academic results and admissions.',
    period: 'Multi-Year Ongoing Partnership',
    badge: 'Premier State University'
  },
  {
    id: 'maharani-college',
    client: 'University Maharani College',
    institutionType: 'College',
    location: 'Jaipur, Rajasthan',
    challenge: 'Heavy paper workflows for college admissions, student notices, departmental activities, and need for a modern, accessible digital web presence.',
    samnvyaSolution: 'Deployed a responsive, high-traffic institutional portal with dedicated notification tickers, departmental repositories, and round-the-clock technical support.',
    deliveredModules: ['Responsive Institutional Portal', 'Student Notice Board System', 'Departmental Activity Showcases', 'Annual Maintenance Contract'],
    substantiatedOutcome: 'Eliminated notice board overcrowding, automated rapid circular uploads, and established a modern online brand for one of India’s largest women’s colleges.',
    period: 'Active Engagement',
    badge: 'Premier Constituent College'
  },
  {
    id: 'maharaja-college',
    client: 'University Maharaja College',
    institutionType: 'College',
    location: 'Jaipur, Rajasthan',
    challenge: 'Science faculty coordination, laboratory notifications, admission announcements, and digital record keeping required a modernized web architecture.',
    samnvyaSolution: 'Delivered an optimized college portal architecture with high-security hosting, faculty directories, and quick-turnaround AMC support from Jaipur.',
    deliveredModules: ['College Digital Portal', 'Faculty Directory Management', 'Admission Announcements Center', 'Managed Web Hosting & Support'],
    substantiatedOutcome: 'Seamless peak-traffic handling during cut-off lists and admission seasons with zero server downtime.',
    period: 'Active Engagement',
    badge: 'Premier Science Institution'
  },
  {
    id: 'dr-ambedkar-law-univ',
    client: 'Dr. Bhimrao Ambedkar Law University, Jaipur',
    institutionType: 'Autonomous Body',
    location: 'Jaipur, Rajasthan',
    challenge: 'Statutory university requiring robust digital communication, legal curriculum dissemination, notification systems, and compliant web presence.',
    samnvyaSolution: 'Engineered a GIGW-compliant, high-security digital portal infrastructure with structured circulars, academic regulations archive, and reliable hosting.',
    deliveredModules: ['Bilingual Institutional Portal', 'Statutory Notice & Circular Repository', 'Academic Regulations Directory', 'Managed Cloud Security'],
    substantiatedOutcome: 'Established a professional, transparent digital foundation for the state law university with swift administrative updates.',
    period: 'Institutional Deployment',
    badge: 'State Law University'
  },
  {
    id: 'cct-uor',
    client: 'Centre for Converging Technologies (CCT)',
    institutionType: 'Department',
    location: 'University of Rajasthan Campus',
    challenge: 'Interdisciplinary research center requiring showcase for Nano, Bio, Info & Cognitive technology programs, research papers, and admissions.',
    samnvyaSolution: 'Designed a high-tech modern digital platform highlighting cutting-edge laboratories, academic brochures, and specialized admissions.',
    deliveredModules: ['Interdisciplinary Program Portal', 'Research Publication Directory', 'Digital Brochure & Notice Center', 'Technical AMC'],
    substantiatedOutcome: 'Elevated the research center’s digital visibility for prospective national scholars and collaborative research programs.',
    period: 'Ongoing Support',
    badge: 'Advanced Research Centre'
  },
  {
    id: 'law-colleges',
    client: 'University Law College & Five Year Law College',
    institutionType: 'College',
    location: 'Jaipur, Rajasthan',
    challenge: 'Moot court announcements, admission merit lists, legal seminar schedules, and student management needed agile digital updates.',
    samnvyaSolution: 'Implemented dedicated legal education portals with rapid notification publishing tools and continuous maintenance.',
    deliveredModules: ['Legal Education Portals', 'Moot Court & Seminar Feeds', 'Merit List Publication Engine', 'Fast-Track Support'],
    substantiatedOutcome: 'High satisfaction among legal faculty and students with instant access to academic calendars and timetable updates.',
    period: 'Active Engagement',
    badge: 'Leading Legal Institutes'
  },
  {
    id: 'physics-dept',
    client: 'Department of Physics, University of Rajasthan',
    institutionType: 'Department',
    location: 'Jaipur, Rajasthan',
    challenge: 'Departmental conference management, research colloquium archives, and faculty research profile cataloging.',
    samnvyaSolution: 'Created a focused departmental knowledge and conference portal with digital abstract submissions and faculty research indexing.',
    deliveredModules: ['Departmental Research Portal', 'Conference & Workshop Platform', 'Publication Archiving', 'Maintenance Support'],
    substantiatedOutcome: 'Successfully hosted digital proceedings for national physics conferences and streamlined departmental notices.',
    period: 'Active Engagement',
    badge: 'Academic Department'
  },
  {
    id: 'khole-ke-hanuman-ji',
    client: 'Shri Khole Ke Hanuman Ji Trust',
    institutionType: 'Community / Temple',
    location: 'Jaipur, Rajasthan',
    challenge: 'Large footfall shrine needing structured devotee communication, transparent digital presence, festival broadcast, and trust information dissemination.',
    samnvyaSolution: 'Engineered a specialized spiritual portal with seva information, festival schedules, live darshan linkups, and digital trust communications.',
    deliveredModules: ['Temple Information Portal', 'Seva & Utsav Broadcast Module', 'Trust Activity Archive', 'Devotee Helpdesk Integration'],
    substantiatedOutcome: 'Enabled thousands of devotees across Rajasthan and India to stay connected with temple activities and authentic trust updates.',
    period: 'Community Tech Deployment',
    badge: 'Prominent Heritage Trust'
  }
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 'education',
    name: 'Higher Education & Universities',
    headline: 'End-to-End Academic Automation & Digital Campuses',
    description: 'Empower central, state, and private universities, affiliated degree colleges, and autonomous institutes with unified ERP, OPAC Digital Libraries, Alumni networks, and automated NAAC/NIRF reporting.',
    icon: 'GraduationCap',
    recommendedSolutions: ['Samnvya Institutional ERP', 'Digital Library & Knowledge Vault', 'Alumni & Community Portal', 'Institutional Web Portals & AMC'],
    keyPainPoints: ['Scattered student records', 'Manual fee reconciliation chaos', 'Complex NAAC accreditation data collection', 'Inefficient library catalog searches'],
    deliverables: ['Centralized Student Master Database', 'SBI / Razorpay / HDFC Payment Bridges', 'OPAC Hybrid Catalog with Barcode Generation', 'Graduation & Placement Analytics']
  },
  {
    id: 'government',
    name: 'Government & Autonomous Bodies',
    headline: 'Secure, GIGW-Compliant & Scalable Public Solutions',
    description: 'Deliver high-assurance e-governance applications, statutory portals, visitor screening systems, and document vaults tailored for government departments and directorates.',
    icon: 'Building2',
    recommendedSolutions: ['Smart Visitor & Entry-Exit System', 'System Digitization & Workflow Automation', 'Institutional Web Portals & AMC', 'Document Vault & Audit Tracking'],
    keyPainPoints: ['Physical paper movement bottlenecks', 'Security gate registration queues', 'Rigid compliance and accessibility standards', 'Need for localized SLA support'],
    deliverables: ['GIGW / WCAG 2.1 AA Compliant Bilingual Portals', 'QR Code Gate Passes & Overstay Monitoring', 'MeitY Empaneled Cloud / On-Premise Deployments', 'Jaipur-Based On-Demand AMC Support']
  },
  {
    id: 'enterprises',
    name: 'Enterprises & Commercial Facilities',
    headline: 'Operational Streamlining & Digital Workforce Solutions',
    description: 'Transform enterprise workplaces with contactless visitor management, structured employee/contractor tracking, digital feedback engines, and customized workflow automation.',
    icon: 'Briefcase',
    recommendedSolutions: ['Smart Visitor & Entry-Exit System', 'Employment & Placement Portal', 'Workflow Automation & Feedback', 'Web & Cloud Hosting'],
    keyPainPoints: ['Unmonitored office visitors and contractors', 'Disjointed hiring and candidate pipelines', 'Manual multi-department approval steps', 'Unreliable web hosting during campaigns'],
    deliverables: ['Real-Time Premises Security Dashboards', 'Self-Service Applicant & Recruiter Portals', 'Granular Role-Based Approval Workflows', 'High-Availability Cloud Server Management']
  },
  {
    id: 'communities',
    name: 'Communities, Trusts & Shrines',
    headline: 'Devotee Engagement, Transparent Donations & Member Directories',
    description: 'Bridge deep-rooted community traditions with modern digital transparency. Specialized platforms for religious trusts, social samaj organizations, and professional member associations.',
    icon: 'Sparkles',
    recommendedSolutions: ['Specialized & Community Digital Systems', 'Alumni & Community Engagement', 'Payment Gateway & 80G Receipts', 'Institutional Web Portals'],
    keyPainPoints: ['Cash donation reconciliation errors', 'Lack of digital engagement for young members', 'Manual membership card issuance', 'Difficulty reaching global devotees'],
    deliverables: ['Instant 80G Digital Donation Receipts via SMS/WhatsApp', 'Online Seva & Dharamshala Booking Engines', 'Searchable Member / Alumni Directories', 'Live Darshan & Event Broadcast Modules']
  }
];

export const GOVERNMENT_CAPABILITY = {
  overview: 'Samnvya IMS Pvt. Ltd. is structured to meet rigorous institutional, state, and autonomous government procurement standards, offering full compliance, security hardening, and dedicated regional support.',
  certifications: [
    'Incorporated Private Limited Company (CIN Registered)',
    '100% Indian IP & Data Residency within Indian Data Centers',
    'GIGW (Guidelines for Indian Government Websites) Compliant Architecture',
    'WCAG 2.1 AA Accessibility Standards Implementation',
    'MeitY-Empaneled Cloud / On-Premise Deployment Compatibility',
    'Local Engineering & Maintenance Hub in Jaipur, Rajasthan'
  ],
  deploymentModels: [
    { title: 'SaaS Cloud Deployment', desc: 'Instant provisioning on high-availability cloud with automated backups, SSL, and managed security patches.' },
    { title: 'Dedicated Institutional Cloud', desc: 'Isolated virtual private cloud environment configured specifically for your organization’s domain and governance.' },
    { title: 'On-Premise Server Setup', desc: 'Full on-campus deployment on institutional servers with internal network access and secure external gateways.' }
  ],
  supportCommitment: [
    'Direct telephonic support from Pratap Nagar, Jaipur engineering center (+91-9509386565)',
    'Guaranteed SLA response times for critical admissions and statutory exam cycles',
    'On-site technical workshops and training sessions for administrative and faculty staff',
    'Periodic security audits and automated disaster recovery data verification'
  ]
};
