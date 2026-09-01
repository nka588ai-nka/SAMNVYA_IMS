import { SolutionCategory, SolutionModule } from '../types';

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: 'infomgmt',
    number: '01',
    title: 'Information Management & Digital Transformation',
    tagline: 'End-to-end digitization and streamlined workflow automation.',
    description: 'Transform paper-heavy, siloed organizational information into centralized, searchable, and secure digital repositories with role-based access control and audit trails.',
    icon: 'Database',
    color: 'from-blue-600 to-indigo-600',
    modules: ['System Digitization', 'Workflow Automation', 'Institutional Digitization', 'Digital Feedback', 'Document Vault', 'Audit Tracking']
  },
  {
    id: 'erp',
    number: '02',
    title: 'ERP & Institutional Solutions',
    tagline: 'Comprehensive academic, administrative, and financial management.',
    description: 'Purpose-built for universities, colleges, and autonomous institutes to automate student lifecycles, admissions, fee collections, faculty records, and examination management.',
    icon: 'Layers',
    color: 'from-indigo-600 to-violet-600',
    modules: ['Student Lifecycle', 'Fee & Payment Gateway', 'Faculty & Staff Portal', 'Attendance & Timetable', 'Examination & Grading', 'Institutional Reporting']
  },
  {
    id: 'library',
    number: '03',
    title: 'Digital Library & Knowledge Solutions',
    tagline: 'Next-generation cataloging, repository indexing, and multi-format discovery.',
    description: 'Cloud-ready e-library platforms supporting MARC21/Dublin Core, thesis archiving, digital document indexing, barcode/RFID integration, and federated search for researchers.',
    icon: 'BookOpen',
    color: 'from-violet-600 to-purple-600',
    modules: ['OPAC Search', 'E-Book & Thesis Repository', 'Circulation & Borrowing', 'Barcode/RFID Sync', 'Patron Portal', 'Accession Registry']
  },
  {
    id: 'community',
    number: '04',
    title: 'People, Community & Engagement Platforms',
    tagline: 'Connect alumni, students, members, and specialized professional networks.',
    description: 'Strengthen alumni relations, facilitate institutional donation drives, run placement and career boards, and manage structured membership networks seamlessly.',
    icon: 'Users',
    color: 'from-purple-600 to-pink-600',
    modules: ['Alumni Directory', 'Job & Internship Board', 'Mentorship Matching', 'Donation & Campaign Gateway', 'Community Forums', 'Event Ticketing']
  },
  {
    id: 'business',
    number: '05',
    title: 'Business & Workflow Applications',
    tagline: 'Smart visitor tracking, entry-exit security, and office operational control.',
    description: 'Replace manual paper registers with contactless QR passes, biometric integration, automated contractor/visitor notifications, and multi-branch approval workflows.',
    icon: 'ShieldCheck',
    color: 'from-amber-600 to-orange-600',
    modules: ['QR Visitor Pass', 'Entry-Exit Tracking', 'Overstay & Security Alerts', 'Contractor Management', 'Premises Analytics', 'Multi-Gate Sync']
  },
  {
    id: 'webcloud',
    number: '06',
    title: 'Web, Cloud & Digital Infrastructure',
    tagline: 'High-availability hosting, institutional CMS, live streaming, and dedicated AMC.',
    description: 'Fully managed institutional website design, high-traffic admission portals, dedicated cloud hosting, security hardening, daily backups, and SLA-backed maintenance.',
    icon: 'Cloud',
    color: 'from-cyan-600 to-blue-600',
    modules: ['Institutional CMS', 'Annual Maintenance (AMC)', 'High-Traffic Web Hosting', 'Live Event Streaming', 'SSL & Security Hardening', 'Email & Domain Suites']
  },
  {
    id: 'specialized',
    number: '07',
    title: 'Specialized Digital Services',
    tagline: 'Bespoke technology for shrines, concept academies, and professional bodies.',
    description: 'Custom technology solutions engineered for religious institutions (donation tracking, darshan pass, seva bookings) and specialized educational / tax consultancy setups.',
    icon: 'Sparkles',
    color: 'from-emerald-600 to-teal-600',
    modules: ['Temple / Shrine Management', 'Online Seva & Donation', 'Concept Academy Portals', 'Tax & Compliance Tools', 'Custom Database Portals', 'Bespoke Integrations']
  }
];

export const DETAILED_SOLUTIONS: SolutionModule[] = [
  {
    id: 'erp-solution',
    name: 'Samnvya Institutional ERP',
    shortDesc: 'Comprehensive cloud ERP automating academics, admissions, fees, examinations, and administration.',
    fullDesc: 'Samnvya ERP is an enterprise-grade institutional automation suite designed specifically for Indian universities, degree colleges, and autonomous educational bodies. It eliminates fragmented spreadsheets and paper ledgers by unifying the student lifecycle—from online admission and fee reconciliation to grade card generation and alumni transition.',
    category: 'erp',
    icon: 'GraduationCap',
    badge: 'Flagship Institutional Suite',
    targetAudience: ['Universities & Autonomous Colleges', 'Multi-College Educational Trusts', 'Law, Science & Engineering Institutes', 'Polytechnics & Degree Institutions'],
    benefits: [
      'Reduces administrative overhead by over 70% with unified student registers',
      'Zero fee leakages with automated multi-mode online payment gateway reconciliation',
      'Automated NAAC, NIRF & AISHE institutional reporting data preparation',
      'Role-based granular dashboards for Principals, HODs, Faculty, Cashiers, and Students',
      '100% compliant with UGC and State University academic credit regulations'
    ],
    features: [
      'Online Admissions & Merit List Generation Engine',
      'Dynamic Fee Structure Configuration (Category, Quota, Installment)',
      'Automated Bank Reconciliation & Instant Digital Receipts',
      'Biometric & Mobile Attendance with Low-Attendance Alerts',
      'Continuous Internal Assessment (CIA) & Semester Grade Card System',
      'Faculty Workload, Leave & Service Record Management',
      'Student Self-Service Portal & Android / iOS Webview Integration'
    ],
    workflow: [
      { step: 1, title: 'Requirement Mapping & Schema Setup', desc: 'Detailed assessment of departmental structure, fee slabs, and course credit matrices.' },
      { step: 2, title: 'Historical Data Migration', desc: 'Secure scrubbing and migration of legacy student files, fee records, and master rolls.' },
      { step: 3, title: 'Faculty & Staff Hands-on Training', desc: 'In-person workshops in Jaipur and hybrid webinars with user manuals.' },
      { step: 4, title: 'Live Deployment & Ongoing SLA', desc: 'Dedicated cloud deployment with real-time support and peak admission scaling.' }
    ],
    securityHighlights: [
      'Role-Based Access Control (RBAC) with hierarchical privilege limits',
      '256-bit SSL encryption on all database transactions and payment bridges',
      'Automated daily off-site cloud backups with point-in-time recovery',
      'Complete audit trail logging of all financial transactions and mark entries'
    ],
    faqs: [
      {
        question: 'Can Samnvya ERP integrate with our existing bank payment gateway?',
        answer: 'Yes. We provide native turnkey integrations with major payment aggregators including SBI e-Pay, Razorpay, HDFC, BillDesk, and ICICI, featuring automatic instant webhook reconciliation.'
      },
      {
        question: 'How long does a complete institutional deployment take?',
        answer: 'Standard colleges can be operational within 2 to 3 weeks. Large multi-faculty universities typically take 4 to 6 weeks depending on historical data volume.'
      },
      {
        question: 'Is on-premise deployment available for Government institutions?',
        answer: 'Yes. We support both high-availability secure Cloud deployment (AWS/MeitY-approved Indian Data Centers) and local On-Premises server setups as per institutional policy.'
      }
    ]
  },
  {
    id: 'digital-library',
    name: 'Samnvya Digital Library & Knowledge Vault',
    shortDesc: 'Modern cloud cataloging, e-resource repository, and OPAC discovery for modern libraries.',
    fullDesc: 'Transform traditional physical book rooms into vibrant hybrid knowledge centers. Samnvya Digital Library enables rapid accessioning, barcode scanning, thesis archiving, digital document indexing, and an intuitive Online Public Access Catalog (OPAC) accessible 24/7 across campus and remote networks.',
    category: 'library',
    icon: 'BookOpen',
    badge: 'Research & Catalog Ready',
    targetAudience: ['University Central Libraries', 'College & Departmental Libraries', 'Research Laboratories & Archives', 'Public & Community Resource Centers'],
    benefits: [
      'Instant catalog search across thousands of physical titles and digital PDFs in milliseconds',
      'Substantially reduces lost inventory with automated due-date reminders and fine calculation',
      'Provides researchers with indexed access to rare departmental publications and past dissertations',
      'Barcode and QR-code batch generation for physical assets at nominal setup cost'
    ],
    features: [
      'Comprehensive Accession Register (Books, Journals, Theses, Rare Manuscripts)',
      'Multi-Parameter OPAC Search (Title, Author, ISBN, Subject, Department, Year)',
      'Circulation Management (Issue, Return, Renewal, Lost Book Penalties)',
      'Digital E-Resource Repository with PDF Preview & Access Watermarking',
      'Patron Management with Student / Faculty Borrowing Limit Caps',
      'Barcode / QR Label Print Engine supporting standard thermal printers'
    ],
    workflow: [
      { step: 1, title: 'Library Classification Audit', desc: 'Audit Dewey Decimal / Colon Classification and current physical register condition.' },
      { step: 2, title: 'Barcode Labeling & Catalog Indexing', desc: 'Batch import of book titles and generation of waterproof barcode labels.' },
      { step: 3, title: 'OPAC Portal Activation', desc: 'Launch of internal campus search kiosk and mobile-accessible patron catalog.' },
      { step: 4, title: 'Circulation Staff Orientation', desc: 'Hands-on training for librarians in high-speed barcode checkout.' }
    ],
    securityHighlights: [
      'Granular digital resource download permissions to protect copyrighted institutional PDFs',
      'Automated daily backup of full catalog database',
      'Tamper-proof circulation records with timestamped logs'
    ],
    faqs: [
      {
        question: 'Can we import our existing Excel or Koha catalog records?',
        answer: 'Yes, Samnvya provides automated CSV/Excel and MARC21 import tools that validate, deduplicate, and catalog existing records seamlessly.'
      },
      {
        question: 'Can students access the library catalog from their phones?',
        answer: 'Absolutely. The OPAC portal is fully responsive and allows students to search titles, check real-time availability, and reserve books from any mobile browser.'
      }
    ]
  },
  {
    id: 'alumni-network',
    name: 'Samnvya Alumni & Community Engagement',
    shortDesc: 'Interactive alumni directory, reunion portals, mentorship hubs, and endowment campaigns.',
    fullDesc: 'Empower your institution to build lifelong, value-driven relationships with its alumni base. The Samnvya Alumni Platform provides verified alumni registration, batch-wise directories, career mentorship matchmaking, event RSVP portals, and secure fundraising gateways for institutional development.',
    category: 'community',
    icon: 'Users',
    badge: 'Institutional Networking',
    targetAudience: ['Colleges with Rich Alumni Heritage', 'University Alumni Associations', 'Professional & Medical Associations', 'Community Foundations'],
    benefits: [
      'Re-engage lost graduates through batch-specific search and social profile sync',
      'Boost campus placements through direct alumni-to-student referral channels',
      'Mobilize transparent alumni funding for departmental labs and scholarships',
      'Showcase distinguished alumni achievements to bolster institutional prestige'
    ],
    features: [
      'Self-Service Alumni Registration & Admin Verification Workflow',
      'Global Geo-Map Directory searching alumni by City, Industry, and Graduating Batch',
      'Exclusive Alumni Job Board & Internship Referral Feed',
      'Donation & Endowment Gateway with 80G Tax Receipt Generation',
      'Reunion & Webinar Event Management with Ticketing & RSVP',
      'Distinguished Alumni Spotlight & Digital Newsletter Publishing'
    ],
    workflow: [
      { step: 1, title: 'Graduation Records Seeding', desc: 'Pre-populate past graduating classes to enable one-click verification.' },
      { step: 2, title: 'Branded Alumni Portal Launch', desc: 'Customized domain and visual theme matching institutional colors.' },
      { step: 3, title: 'Outreach & Directory Activation', desc: 'Email/SMS broadcast campaign to welcome alumni to their new digital home.' }
    ],
    securityHighlights: [
      'Alumni privacy controls (choose what contact details are public vs hidden)',
      'Verified-only member approvals to prevent spam accounts',
      'PCI-DSS compliant donation checkout'
    ],
    faqs: [
      {
        question: 'Can our alumni association collect annual membership fees directly?',
        answer: 'Yes, the portal includes built-in membership tiering (Annual, Life, Patron) with instant digital membership ID generation.'
      }
    ]
  },
  {
    id: 'visitor-management',
    name: 'Samnvya Smart Visitor & Entry-Exit System',
    shortDesc: 'Digital QR gate passes, vehicle tracking, overstay alerts, and enterprise security control.',
    fullDesc: 'Modernize front-desk operations and campus security with a high-speed digital entry-exit system. Replace dirty manual logbooks with instant SMS/WhatsApp QR passes, host pre-approvals, photo capture, and real-time headcounts across multiple security gates.',
    category: 'business',
    icon: 'ShieldCheck',
    badge: 'Campus & Office Security',
    targetAudience: ['University Campuses & Hostels', 'Government & Autonomous Secretariats', 'Corporate Offices & IT Parks', 'Hospitals & High-Security Facilities'],
    benefits: [
      'Eliminates illegible handwritten logbooks and fake identity entries',
      'Notifies hosts instantly when visitors arrive at security gates',
      'Generates instantaneous emergency headcounts in seconds during drills',
      'Tracks vehicle registration numbers, delivery vans, and recurring contractors'
    ],
    features: [
      'Self-Check-in Tablet Kiosk or Guard Station QR Scanner',
      'Instant SMS/WhatsApp Notification to Host with Accept/Decline Option',
      'Thermal Printed / Digital Badge with Visitor Photo & Valid Till Time',
      'Blacklist Alert System for flagged persons or restricted entry lists',
      'Multi-Gate Live Synchronization (Enter Gate 1, Exit Gate 3)',
      'Overstay Detection & Automated Security Alerts'
    ],
    workflow: [
      { step: 1, title: 'Gate Layout Assessment', desc: 'Audit entry/exit points, pedestrian turnstiles, and vehicular checkpoints.' },
      { step: 2, title: 'Hardware & Guard App Setup', desc: 'Deploy tablet/desktop guard console and label printers.' },
      { step: 3, title: 'Live Staff Orientation', desc: 'Train security personnel in 30-second rapid check-in flows.' }
    ],
    securityHighlights: [
      'Encrypted visitor database conforming to personal data privacy norms',
      'Automated data retention policies (configurable purge after 90/180 days)',
      'Offline emergency caching if internet connectivity briefly drops'
    ],
    faqs: [
      {
        question: 'Does the guard need high computer literacy to operate this?',
        answer: 'Not at all. The guard UI is engineered with large, clear buttons in Hindi and English, taking under 15 seconds per visitor pass.'
      }
    ]
  },
  {
    id: 'employment-platform',
    name: 'Samnvya Employment & Placement Portal',
    shortDesc: 'Integrated campus placement, resume builder, recruiter portal, and job matchmaking.',
    fullDesc: 'Streamline institutional Training & Placement (T&P) cells. Enable corporate recruiters to post openings, shortlist candidates by GPA/skills, schedule interview rounds, and issue offer letters with total transparency.',
    category: 'community',
    icon: 'Briefcase',
    badge: 'Career & Placement Suite',
    targetAudience: ['College T&P Cells', 'University Placement Directorates', 'Vocational Training Centers', 'Industry Associations'],
    benefits: [
      'Eliminates spreadsheet chaos during frantic placement seasons',
      'Gives recruiters verified academic transcripts directly from the ERP database',
      'Tracks offer status, dream job policies, and placement percentage analytics'
    ],
    features: [
      'Recruiter Self-Registration & Job Description (JD) Posting',
      'Automated Eligibility Filtering (Minimum Percentage, No Backlogs)',
      'Integrated Resume Generator conforming to standard campus formats',
      'Interview Slot Booking & Real-Time Round Shortlist Broadcasts',
      'Comprehensive Placement Statistics Reports for NAAC Criteria 5'
    ],
    workflow: [
      { step: 1, title: 'T&P Policy Configuration', desc: 'Set eligibility rules, dream company criteria, and opt-out rules.' },
      { step: 2, title: 'Student Profile Sync', desc: 'Auto-sync academic marks from Samnvya ERP to prevent fake resumes.' },
      { step: 3, title: 'Drive Season Rollout', desc: 'Invite companies to post drives and conduct online preliminary screening.' }
    ],
    securityHighlights: [
      'Verified academic credentials locked from student tampering',
      'Confidential salary package visibility controls'
    ],
    faqs: [
      {
        question: 'Can recruiters conduct pre-placement aptitude tests inside the portal?',
        answer: 'Yes, an optional assessment module allows online MCQ screening with automated scoring and instant shortlist exports.'
      }
    ]
  },
  {
    id: 'web-cloud-amc',
    name: 'Institutional Web Portals & Managed AMC',
    shortDesc: 'High-security institutional websites, bilingual CMS, cloud hosting, and continuous AMC.',
    fullDesc: 'Institutional websites demand high reliability during admission rushes, rigorous compliance with government website guidelines (GIGW), accessible bilingual architecture (Hindi/English), and rapid notification publishing. Samnvya delivers end-to-end portal development, ultra-secure cloud hosting, and prompt Annual Maintenance (AMC) with dedicated local support in Jaipur.',
    category: 'webcloud',
    icon: 'Globe',
    badge: 'Reliability & Uptime Assurance',
    targetAudience: ['Government & Autonomous Colleges', 'University Departments & Centers', 'Public Sector Undertakings', 'Professional Colleges'],
    benefits: [
      'Guaranteed 99.9% uptime during peak admission results and tender deadlines',
      'Strict adherence to Indian Government Web Guidelines (GIGW) and WCAG 2.1 AA accessibility',
      'Same-day notification updates and banner uploads handled by our Jaipur web desk',
      'Comprehensive Annual Maintenance Contract (AMC) covering security patches and server tuning'
    ],
    features: [
      'Bilingual CMS (Hindi & English) with intuitive notification ticker controls',
      'Dynamic Tender, Circular & Recruitment Management System',
      'Faculty Profile Management with Publication and Research Trackers',
      'Anti-DDoS Protection & Web Application Firewall (WAF)',
      'Automated Daily Cloud Backups with 30-Day Retention',
      'Dedicated Helpdesk for Departmental Website Coordinators'
    ],
    workflow: [
      { step: 1, title: 'Information Architecture & Design', desc: 'Modernizing legacy sitemaps and designing clean, responsive templates.' },
      { step: 2, title: 'Content Migration & Verification', desc: 'Systematic migration of departmental circulars, faculty biodata, and photo archives.' },
      { step: 3, title: 'Security Audit & Go-Live', desc: 'Vulnerability assessment, SSL provisioning, and zero-downtime DNS cutover.' },
      { step: 4, title: 'SLA-Driven AMC Support', desc: 'Ongoing rapid updates, monthly backup reports, and server maintenance.' }
    ],
    securityHighlights: [
      'Enterprise WAF filtering malicious bots and SQL injection attempts',
      'Automatic SSL renewal and security patch deployment',
      'Isolated containerized hosting for absolute tenant privacy'
    ],
    faqs: [
      {
        question: 'What is included in the Samnvya Website AMC?',
        answer: 'Our AMC covers regular content updates (circulars, results, tenders), security patches, CMS core upgrades, performance monitoring, daily backups, and prompt phone/email support from our Jaipur office.'
      }
    ]
  },
  {
    id: 'specialized-temple-community',
    name: 'Specialized & Community Digital Systems',
    shortDesc: 'Tailored technology for religious shrines, trusts, concept academies, and member associations.',
    fullDesc: 'Bridging cultural tradition and modern operational efficiency. Samnvya crafts specialized systems for prominent religious shrines (like Khole Ke Hanuman Ji and other trusts) featuring online Prasad/Seva booking, automated donation tracking with digital 80G receipts, crowd flow management, and transparency portals.',
    category: 'specialized',
    icon: 'Sparkles',
    badge: 'Heritage & Trust Tech',
    targetAudience: ['Religious Trusts & Temple Committees', 'Community Foundations & Samaj Portals', 'Concept Academies & Research Societies', 'Charitable Organizations'],
    benefits: [
      'Complete transparency in donation collection with automated SMS receipts to devotees',
      'Seamless online booking for special Poojas, Prasad, and Dharamshala accommodations',
      'Structured recordkeeping for trust audits, income tax filings, and donor reports'
    ],
    features: [
      'Online Seva & Pooja Booking with Real-Time Priest Calendar Slots',
      'Multi-Currency Online Donation Gateway with Instant 80G Certificate',
      'Dharamshala & Hall Booking Management System',
      'Live Darshan Webcast Integration and Announcement Boards',
      'Trust Inventory & Bhandar Material Management'
    ],
    workflow: [
      { step: 1, title: 'Trust Workflow Study', desc: 'Understanding traditional customs, receipt formats, and accounting preferences.' },
      { step: 2, title: 'Custom Portal & POS Deployment', desc: 'Equipping on-site trust counters with rapid thermal receipt software.' },
      { step: 3, title: 'Devotee Online Gateway Launch', desc: 'Public portal launch for global devotees to participate in sevas.' }
    ],
    securityHighlights: [
      'Bank-grade reconciliation ensuring every rupee is mapped to authorized trust accounts',
      'Immutable donation logs with supervisor override verification'
    ],
    faqs: [
      {
        question: 'Can on-site cash counter receipts be synchronized with online donations?',
        answer: 'Yes. Our hybrid system allows counter operators to issue instant printed thermal receipts while unifying all cash and online donations in a single master balance sheet.'
      }
    ]
  }
];
