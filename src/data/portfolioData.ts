import type {
  ContactInfo,
  StatItem,
  SkillCategory,
  ExperienceItem,
  LeadershipItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
} from "../types/portfolio";

export const CONTACT: ContactInfo = {
  name: "Abhinav Saxena",
  handle: "Abhinav0915",
  roleTitle: "Full-Stack Software Engineer • Systems & AI",
  location: "Sydney, Australia",
  timezone: "UTC+10 (AEST)",
  phone: "+61 401 449 374",
  email: "abhinavv1509@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhinav1506/",
  github: "https://github.com/Abhinav0915",
  status: "OPEN_FOR_OPPORTUNITIES",
};

export const ROLES: string[] = [
  "Full-Stack Software Engineer",
  "Founding Systems Engineer",
  "Cloud & Distributed Systems",
  "Explainable AI / ML Researcher",
];

export const STATS: StatItem[] = [
  {
    label: "Production Engineering",
    value: 2,
    suffix: "+ Yrs",
    description:
      "Architecting end-to-end web platforms and secure infrastructure",
  },
  {
    label: "RESTful APIs Engineered",
    value: 65,
    suffix: "+",
    description:
      "High-throughput Django and Spring Boot services in production",
  },
  {
    label: "Production Systems Shipped",
    value: 10,
    suffix: "+",
    description: "Scalable customer-facing and mission-critical applications",
  },
  {
    label: "Encrypted Transactions",
    value: 100,
    suffix: "+",
    description: "Zero security breaches with hybrid AES+RSA encryption layers",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    category: "Backend & Systems",
    tagline: "High-concurrency APIs, microservices & robust security",
    iconName: "Server",
    items: [
      "Python",
      "Django REST Framework",
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "Multithreading",
      "REST APIs",
    ],
  },
  {
    id: "frontend",
    category: "Frontend & Interfaces",
    tagline: "Type-safe, responsive, high-performance web applications",
    iconName: "Layout",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Flutter",
      "HTML5 / CSS3",
    ],
  },
  {
    id: "aiml",
    category: "AI, ML & Explainability",
    tagline: "Deep learning pipelines, model serialization & interpretability",
    iconName: "BrainCircuit",
    items: [
      "PyTorch",
      "TensorFlow",
      "SHAP Explainability",
      "Scikit-Learn",
      "Isolation Forest",
      "Autoencoders",
      "VGG-16",
      "Deep Learning",
    ],
  },
  {
    id: "security",
    category: "Security & Cryptography",
    tagline: "End-to-end data encryption and strict access boundaries",
    iconName: "ShieldCheck",
    items: [
      "AES Encryption",
      "RSA Asymmetric Keys",
      "Hybrid Key Exchange",
      "JWT Authentication",
      "Proxy-based APIs",
      "RBAC",
    ],
  },
  {
    id: "cloud",
    category: "Cloud, DevOps & Containers",
    tagline: "Scalable hosting, automated pipelines & container orchestration",
    iconName: "Cloud",
    items: [
      "AWS (EC2)",
      "Docker",
      "Azure CI/CD",
      "Google Cloud Platform",
      "Firebase Hosting",
      "Render",
      "Git & GitHub Actions",
    ],
  },
  {
    id: "databases",
    category: "Data Storage & Querying",
    tagline: "Relational integrity, NoSQL real-time sync & migrations",
    iconName: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase Firestore"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Esprit Analytique",
    role: "Lead Full Stack Developer",
    period: "June 2024 – December 2025",
    location: "Remote",
    badge: "Founding Engineer",
    description: [
      "Founding engineer on a full-stack platform (React + Python), driving product architecture from zero to a production-ready public deployment.",
      "Led engineering operations: established architecture patterns, rigorous code review workflows, and continuous deployment pipelines.",
      "Engineered 65+ RESTful APIs in Django using multithreading for a 30% latency reduction; integrated Razorpay payment gateway with zero transaction errors.",
      "Designed and implemented a hybrid AES + RSA cryptographic envelope layer securing every sensitive frontend-backend transaction.",
      "Containerized services via Docker and deployed on AWS EC2 with automated CI/CD, maintaining 99.9% uptime through peak customer traffic.",
      "Built automated AST localization tooling across JSON, TSX, and documentation for seamless multilingual internationalization.",
    ],
    technologies: [
      "React",
      "Python",
      "Django REST",
      "AWS EC2",
      "Docker",
      "AES/RSA",
      "PostgreSQL",
      "Razorpay",
    ],
  },
  {
    company: "NEC Corporation India Pvt Ltd",
    role: "Java Developer Intern",
    period: "October 2023 – April 2024",
    location: "Noida, India",
    badge: "Enterprise Systems",
    description: [
      "Independently rebuilt the client-facing enterprise website with a modern, responsive, component-based front end.",
      "Shipped modular RESTful APIs in Java Spring Boot achieving 85% automated test code coverage.",
      "Engineered seamless data integration between backend microservices and the redesigned UI, yielding a 25% lift in user engagement.",
      "Investigated Docker containerization and inter-service communication patterns for next-generation service deployment.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Docker",
      "Microservices",
      "JavaScript",
    ],
  },
  {
    company: "Wormos",
    role: "Flutter Developer Intern",
    period: "June 2023 – August 2023",
    location: "Remote",
    badge: "Mobile Engineering",
    description: [
      "Engineered pixel-perfect Flutter mobile interfaces translated from complex Figma design specifications at 90%+ visual fidelity.",
      "Architected real-time Firebase Firestore data synchronization and multi-tenant security rules.",
      "Implemented secure OTP-based phone authentication and Google OAuth sign-in pipelines for customer onboarding.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "OAuth",
      "Mobile UI",
    ],
  },
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    role: "Lead Full Stack Developer",
    organization: "Esprit Analytique",
    period: "June 2024 – Dec 2025",
    description:
      "Directed end-to-end technical strategy across frontend, backend API, and encryption layers; managed cloud deployment reliability and mentored junior engineers.",
  },
  {
    role: "Tech Head",
    organization: "Ciphers Club, Bennett University",
    period: "December 2021 – May 2024",
    description:
      "Led university-wide technical initiatives, conducted competitive coding and cybersecurity workshops, and spearheaded hackathon project teams as a core organizer.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "glassbox",
    name: "GlassBox",
    subtitle: "Explainable Network Anomaly Detection System",
    period: "August 2026",
    category: "AI & ML",
    tags: [
      "Python",
      "Django REST Framework",
      "PyTorch",
      "scikit-learn",
      "SHAP",
      "scapy",
      "React",
      "TypeScript",
    ],
    summary:
      "A production-grade intrusion detection system pairing an Isolation Forest and a PyTorch deep autoencoder with SHAP explainability, providing human-interpretable rationale for every flagged network anomaly instead of opaque black-box scores.",
    details: [
      "Decoupled ML inference from serving: trained an Isolation Forest (200 trees, ~77 CICFlowMeter features) alongside a PyTorch deep autoencoder (64 → 32 → 16-dim latent bottleneck) on benign CIC-IDS2018 traffic. Serialized as joblib/.pt artifacts loaded once at startup via a thread-safe singleton ModelRegistry.",
      "Implemented rigorous empirical evaluation: decision thresholds tuned on a dedicated validation split with the held-out test split touched exactly once. Autoencoder checkpoints selected via validation PR-AUC rather than loss to prevent attack-reconstruction bias.",
      "Wired SHAP explainability directly into the live alert path — TreeExplainer for Isolation Forest, KernelExplainer for the autoencoder — gated to execute conditionally on flagged flows with per-alert explanation persistence.",
      "Engineered memory-safe preprocessing of CIC-IDS2018: log1p transforms, RobustScaler fit on a 1M benign subsample, and chunked execution in 100k-row blocks with explicit garbage collection for lightweight resource footprints.",
      "Integrated live network packet sniffing via Scapy AsyncSniffer reusing the offline feature analysis path, hardened with X-API-Key production auth and a heartbeat watchdog file.",
    ],
    featured: true,
    architectureHighlights: [
      {
        label: "Dual-Engine Detector",
        description:
          "Ensemble of statistical Isolation Forest (200 estimators) + PyTorch latent autoencoder.",
      },
      {
        label: "Transparent Explainability",
        description:
          "On-demand SHAP attribution maps explaining exact packet features responsible for alert triggering.",
      },
      {
        label: "Memory-Safe Streaming",
        description:
          "100k-row chunked scaling with RobustScaler and garbage collection for zero-leak continuous packet evaluation.",
      },
    ],
    metrics: [
      "77 Features Extracted",
      "99.2% Benign Accuracy",
      "Sub-100ms Inference",
    ],
    link: null,
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "localeora",
    name: "Localeora",
    subtitle: "AST-Driven Codebase Localization Engine",
    period: "August 2026 – Present",
    category: "Tools",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Django REST Framework",
      "PostgreSQL",
      "Node.js",
      "Babel",
      "ts-morph",
      "Cloud Translation",
    ],
    summary:
      "An AST-based localization platform that extracts, translates, and rewrites user-facing strings directly in React/TSX and HTML source code — with every proposed code transformation reviewable as a git-style diff before disk write.",
    details: [
      "Architected a Node.js AST extraction engine using Babel parser and Cheerio to parse user-facing strings out of React, TSX, and HTML source files without breaking template literals.",
      "Designed a dual-engine architecture separating read-only extraction from source rewriting via ts-morph, with each transform verified against source content hashes to guarantee codebase integrity.",
      "Engineered a dry-run-to-apply workflow: proposed edits render as interactive diffs and require human-in-the-loop authorization before persisting to disk.",
      "Integrated Google Cloud Translation and Azure AI Translator behind a unified provider-agnostic interface, using Python asyncio with bounded concurrency semaphores for rapid batch jobs.",
      "Developed an end-to-end full stack system with JWT authentication, PostgreSQL persistence, and a modern React/Vite interface supporting 30+ international languages.",
    ],
    featured: false,
    architectureHighlights: [
      {
        label: "AST Transformation",
        description:
          "Babel + ts-morph parsing ensuring code AST validity prior to disk writing.",
      },
      {
        label: "Dry-Run Diff Verification",
        description:
          "Cryptographic content hashing prevents race conditions and accidental code regression.",
      },
    ],
    metrics: [
      "30+ Languages Supported",
      "Zero AST Syntax Errors",
      "Automated Diff Review",
    ],
    link: null,
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "aarya-spicy-food",
    name: "Aarya's Spicy Food",
    subtitle: "Cloud Kitchen & Order Management Platform",
    period: "May 2026",
    category: "Full Stack",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django REST Framework",
      "JWT",
      "PostgreSQL",
      "Firebase",
      "Supabase",
    ],
    summary:
      "A full-stack cloud kitchen platform enabling seamless online ordering, live kitchen order management, and real-time status tracking powered by a scalable cloud-native architecture.",
    details: [
      "Engineered customer ordering workflows: dynamic menu navigation, live basket state management, real-time order tracking, and profile history.",
      "Designed secure RESTful APIs with JWT authentication, role-based access control (RBAC) for kitchen staff vs customers, and automated order state transitions.",
      "Built an administrative kitchen console for live order queues, item availability toggling, and delivery status updates.",
      "Deployed frontend on Firebase Hosting, backend on Render, and persistent PostgreSQL database on Supabase with connection pooling.",
    ],
    featured: false,
    metrics: ["Cloud-Native Setup", "Sub-second Order Sync", "Role-Based Auth"],
    link: "https://aarya-spicy-food-babe2.firebaseapp.com/",
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "jamaican-patty-house",
    name: "Jamaican Patty House",
    subtitle: "High-Performance Restaurant Web Experience",
    period: "May 2026",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    summary:
      "A fast, responsive restaurant web application featuring dynamic hero interactions, interactive menu cataloging, and optimized mobile-first navigation.",
    details: [
      "Implemented smooth scroll-based navigation, layout transitions, and responsive multi-device viewport support.",
      "Structured typed data models for dynamic menu categorization, dietary tagging, and business hours management.",
      "Crafted an accessible, brand-tailored design system with microinteractions and call-to-action touch targets.",
    ],
    featured: false,
    link: "https://jamaicanpatty-e25a2.web.app/",
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "prodigidesk",
    name: "ProdigiDesk",
    subtitle: "Enterprise Multilingual Delivery Platform",
    period: "June 2024 – December 2025",
    category: "Systems & Security",
    tags: [
      "React",
      "Python",
      "Django",
      "PostgreSQL",
      "AWS EC2",
      "Docker",
      "AES/RSA",
    ],
    summary:
      "An enterprise full-stack platform featuring dual AES+RSA cryptographic security layers, multi-processed translation orchestration, and 99.9% uptime on AWS EC2.",
    details: [
      "Engineered hybrid AES/RSA payload encryption protecting all client-server exchanges across 100+ production payment transactions.",
      "Built multi-processed Python translation pipelines accelerating localization workflows by 50% without continuous manual CI intervention.",
      "Deployed on AWS EC2 with Docker containerization, maintaining high reliability and SEO optimization.",
    ],
    featured: false,
    metrics: ["100+ Secure Payments", "50% Faster Translation", "99.9% Uptime"],
    link: "https://prodigidesk.ai",
    github: null,
  },
  {
    id: "localise",
    name: "Localise",
    subtitle: "Batch Document & JSON Localization Suite",
    period: "April 2025",
    category: "Tools",
    tags: [
      "React",
      "TypeScript",
      "Django",
      "Python",
      "Vite",
      "PostgreSQL",
      "Asyncio",
      "Azure AI Translator",
    ],
    summary:
      "A batch localization engine translating JSON resource files and Word (.docx) documents into 30+ languages while preserving complex document formatting and layout fidelity.",
    details: [
      "Developed in-place DOCX translation engine via python-docx preserving typography, styles, tables, and spacing intact across 30+ languages including 22 Indian regional languages.",
      "Integrated swappable Google Translate and Azure AI Translator providers for optimal cost and rate-limit handling.",
      "Scaled translation throughput via Python asyncio with semaphore-bounded concurrency (10 parallel streams) and real-time polling updates.",
      "Built a modern React SPA with batch multi-language selection, real-time status polling, and one-click ZIP archives.",
    ],
    featured: false,
    link: "https://localisfe.onrender.com/",
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "pisca",
    name: "PISCA",
    subtitle: "Stakeholder Analytics & Export Platform",
    period: "November 2024",
    category: "Full Stack",
    tags: ["Java", "Spring Boot", "Apache POI", "React"],
    summary:
      "A stakeholder reporting interface with high-performance server-side Excel generation via Apache POI and a responsive React frontend.",
    details: [
      "Engineered responsive React interface resulting in a 20% lift in stakeholder engagement and 15% faster page transitions.",
      "Implemented server-side automated Excel report generation using Apache POI in Spring Boot for complex dataset exports.",
    ],
    featured: false,
    link: null,
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "qr-code-gen",
    name: "QR Code Generator",
    subtitle: "Document-to-QR Processing Pipeline",
    period: "October 2024",
    category: "Tools",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    summary:
      "A client-side PDF-to-QR conversion utility with real-time vector preview, format configuration, and high-resolution export.",
    details: [
      "Engineered lightweight file parsing pipeline for in-browser PDF-to-QR payload generation.",
      "Integrated instant live rendering and single-click bundle export.",
    ],
    featured: false,
    link: null,
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "inbound-scanning",
    name: "Inbound Scanning",
    subtitle: "Role-Based Warehouse Logistics Gateway",
    period: "March 2024",
    category: "Systems & Security",
    tags: ["React", "Spring Boot", "TypeScript"],
    summary:
      "Role-based warehouse scanning system for administrators and floor operators, cutting operator data input error rates by 30%.",
    details: [
      "Built separate, role-restricted UI workflows for inventory supervisors and warehouse floor staff.",
      "Enforced Spring Boot JWT role-based security, decreasing scanning discrepancy rates by 30%.",
    ],
    featured: false,
    link: null,
    github: "https://github.com/Abhinav0915",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: "The University of Sydney",
    degree: "Master of Computer Science (Advanced Entry)",
    period: "Feb 2026 – Present",
    location: "Sydney, Australia",
    honors:
      "Specialization in Intelligent Distributed Systems & Machine Learning",
    badge: "Current Master's Degree",
  },
  {
    school: "Bennett University",
    degree: "B.Tech, Computer Science & Engineering",
    period: "Oct 2020 – Jun 2024",
    location: "Greater Noida, India",
    honors: "Graduated with Honors — GPA 8.99 / 10.0",
    badge: "Undergraduate Degree",
  },
  {
    school: "Delhi Public School, Kalyanpur",
    degree: "Senior Secondary Education (Class XII, PCM)",
    period: "2020",
    location: "Kanpur, India",
    honors: "Academic Score: 82%",
  },
  {
    school: "Delhi Public School, Kalyanpur",
    degree: "Secondary School Examination (Class X)",
    period: "2018",
    location: "Kanpur, India",
    honors: "Academic CGPA: 9.2 / 10.0",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University / Coursera",
    date: "July 2026",
  },
  {
    name: "Natural Language Processing with Classification and Vector Spaces",
    issuer: "DeepLearning.AI",
    date: "September 2023",
  },
  {
    name: "Machine Learning Engineering for Production (MLOps)",
    issuer: "DeepLearning.AI",
    date: "April 2023",
  },
  {
    name: "Graph Analytics for Big Data",
    issuer: "UC San Diego",
    date: "April 2023",
  },
  {
    name: "Optimizing a Website for Google Search",
    issuer: "University of California, Davis",
    date: "March 2023",
  },
  {
    name: "Natural Language Processing with Sequence Models",
    issuer: "DeepLearning.AI",
    date: "September 2022",
  },
  {
    name: "Natural Language Processing with Probabilistic Models",
    issuer: "DeepLearning.AI",
    date: "September 2022",
  },
  {
    name: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    date: "January 2022",
  },
  {
    name: "Machine Learning",
    issuer: "Stanford University / Coursera",
    date: "November 2021",
  },
  {
    name: "Data Structures",
    issuer: "UC San Diego",
    date: "November 2021",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "4th Place — Smart India Hackathon (National Finalist)",
    organization: "Ministry of Education, Government of India",
    description:
      "Awarded 4th place nationally among thousands of engineering teams, developing a production-viable software solution within an intense 36-hour hackathon.",
    badge: "National Finalist",
  },
  {
    title: "Published Researcher — Covid-19 Detection via VGG-16",
    organization: "Peer-Reviewed Academic Publication",
    description:
      "Selected among the top 3 research papers for publication, applying deep convolutional neural networks (VGG-16) to chest X-ray image diagnostic analysis.",
    badge: "Published Research",
  },
  {
    title: "Accelerated 17-Day Full-Time Promotion",
    organization: "Esprit Analytique",
    description:
      "Transitioned from a 3-month internship to a permanent full-time engineer in only 17 days based on code quality, subsequently promoted to Lead Full Stack Developer within 12 months.",
    badge: "Leadership Recognition",
  },
];
