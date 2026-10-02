import type {
  ContactInfo,
  NavItem,
  ToolGroup,
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
  location: "Sydney, Australia",
  timezone: "Australia/Sydney",
  phone: "+61 401 449 374",
  email: "abhinavv1509@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhinav1506/",
  github: "https://github.com/Abhinav0915",
};

export const RESUME_URL = "/Resume-Tech.pdf";
export const CV_URL = "/CV.pdf";

export const NAV: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "toolbox", label: "Toolbox" },
  { id: "contact", label: "Contact" },
];

/**
 * Technologies grouped by role. `aliases` are matched against project tags so
 * each tool can point at the projects that actually used it.
 */
export const TOOLBOX: ToolGroup[] = [
  {
    id: "languages",
    label: "Languages",
    tools: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "Dart" },
      { name: "HTML / CSS" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    tools: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Flutter" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tools: [
      { name: "Django REST Framework", aliases: ["Django REST", "Django"] },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "asyncio" },
    ],
  },
  {
    id: "ml",
    label: "Data / ML",
    tools: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "scikit-learn" },
      { name: "SHAP" },
      { name: "Isolation Forest" },
      { name: "Autoencoders" },
      { name: "VGG-16" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    tools: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
      { name: "Firestore" },
    ],
  },
  {
    id: "infra",
    label: "Cloud / Infrastructure",
    tools: [
      { name: "AWS EC2" },
      { name: "Docker" },
      { name: "Google Cloud", aliases: ["Cloud Translation"] },
      { name: "Azure", aliases: ["Azure AI Translator"] },
      { name: "Firebase Hosting", aliases: ["Firebase"] },
      { name: "Render" },
    ],
  },
  {
    id: "security",
    label: "Security",
    tools: [
      { name: "AES / RSA hybrid encryption", aliases: ["AES/RSA"] },
      { name: "JWT", aliases: ["JWT"] },
      { name: "Role-based access control" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    tools: [
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Babel" },
      { name: "ts-morph" },
      { name: "Scapy" },
      { name: "Apache POI" },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Esprit Analytique",
    role: "Lead Full Stack Developer",
    years: "24–25",
    period: "Jun 2024 – Dec 2025",
    location: "Remote",
    description: [
      "Founding engineer on ProdigiDesk (React + Django). Took it from an empty repo to a public production deployment.",
      "Set the architecture patterns, the code review process and the deployment pipeline the rest of the team worked in.",
      "Wrote 65+ REST endpoints in Django. Moved the slow ones onto worker threads, which cut response latency by about 30%.",
      "Integrated Razorpay payments and wrapped every sensitive request in a hybrid AES + RSA encryption envelope.",
      "Containerised the services with Docker and deployed them to AWS EC2 through automated CI/CD.",
      "Built AST-based tooling that pulls strings out of JSON, TSX and docs so the product could ship in multiple languages.",
    ],
    technologies: ["React", "Django REST", "PostgreSQL", "Docker", "AWS EC2", "Razorpay"],
  },
  {
    company: "NEC Corporation India",
    role: "Java Developer Intern",
    years: "23–24",
    period: "Oct 2023 – Apr 2024",
    location: "Noida, India",
    description: [
      "Rebuilt the client-facing enterprise website on my own as a component-based, responsive front end.",
      "Shipped modular Spring Boot REST APIs with 85% test coverage.",
      "Connected the backend services to the redesigned UI; user engagement rose about 25% after launch.",
    ],
    technologies: ["Java", "Spring Boot", "JavaScript", "Docker"],
  },
  {
    company: "Wormos",
    role: "Flutter Developer Intern",
    years: "2023",
    period: "Jun 2023 – Aug 2023",
    location: "Remote",
    description: [
      "Turned Figma designs into Flutter screens.",
      "Set up real-time Firestore sync and the security rules around it.",
      "Implemented OTP phone login and Google sign-in for onboarding.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "OAuth"],
  },
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    role: "Tech Head",
    organization: "Ciphers Club, Bennett University",
    period: "Dec 2021 – May 2024",
    description:
      "Ran competitive programming and security workshops and organised the club's hackathon teams.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "glassbox",
    name: "GlassBox",
    subtitle: "Network intrusion detection that explains its alerts",
    period: "2026",
    category: "AI & ML",
    tags: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "SHAP",
      "Scapy",
      "Django REST Framework",
      "React",
      "TypeScript",
    ],
    summary:
      "Most anomaly detectors hand you a score and nothing else. GlassBox runs an Isolation Forest and a PyTorch autoencoder over live network flows, and every time it flags one, SHAP tells you which features pushed it over the line.",
    details: [
      "Isolation Forest (200 trees, ~77 CICFlowMeter features) and a 64 → 32 → 16 autoencoder, both trained only on benign CIC-IDS2018 traffic.",
      "Thresholds tuned on a validation split; the test split is touched once. Autoencoder checkpoints chosen by validation PR-AUC, not loss.",
      "SHAP runs only on flagged flows (TreeExplainer for the forest, KernelExplainer for the autoencoder) and each explanation is stored with its alert.",
      "Preprocessing runs in 100k-row chunks with a RobustScaler fit on a 1M-row benign sample, which keeps memory flat across the full dataset.",
      "Live capture through Scapy's AsyncSniffer reuses the offline feature code. API-key auth and a heartbeat file for production.",
    ],
    pipeline: [
      { label: "Capture", note: "Scapy AsyncSniffer" },
      { label: "Features", note: "77 flow features, log1p + RobustScaler" },
      { label: "Detect", note: "Isolation Forest + autoencoder" },
      { label: "Explain", note: "SHAP on flagged flows" },
      { label: "Alert", note: "Django API + React dashboard" },
    ],
    featured: true,
    screenshots: [
      {
        src: "/projects/glassbox-shap-explanation.webp",
        alt: "GlassBox alert drawer titled 'Why did the model react?', listing the flow features behind the alert: forward data packets, mean forward packet length, average forward segment size, outbound packets and subflow backward bytes.",
        caption:
          "The explanation attached to alert #10359: the flow features that pushed it over the threshold",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/glassbox-alert-detail.webp",
        alt: "GlassBox alert queue with an alert opened in a side drawer showing a high risk level, export buttons and a plain-English summary.",
        caption: "An opened alert: risk level, export to JSON or PDF, and a plain-English summary",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/glassbox-alert-queue.webp",
        alt: "GlassBox alert queue showing cards for unusual activity, each with destination, protocol and a high or critical risk label.",
        caption: "The alert queue, with each flagged flow's destination, protocol and risk",
        width: 1600,
        height: 1000,
      },
    ],
    problem:
      "Anomaly detectors usually return a score with no reason attached, which leaves whoever reads the alert guessing why the traffic was flagged.",
    role: "Data pipeline, both models, evaluation, live capture, the API and the dashboard.",
    outcomes: [
      "Every alert ships with a feature-level explanation",
      "Same feature code runs offline and on live traffic",
      "Evaluation keeps the test split untouched until the end",
    ],
    link: null,
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "localeora",
    name: "Localeora",
    subtitle: "Localises a React codebase by editing the source itself",
    period: "2026",
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
      "Point it at a React or HTML project and it finds the user-facing strings, translates them, and rewrites the source. Nothing touches disk until you have reviewed the change as a diff.",
    details: [
      "Extraction walks the Babel AST (and Cheerio for HTML), so template literals and JSX expressions survive intact.",
      "Rewriting is a separate engine built on ts-morph. Each edit is checked against a hash of the file it was planned against.",
      "Google Cloud Translation and Azure Translator sit behind one provider interface; batches run through asyncio with a concurrency cap.",
      "JWT auth, PostgreSQL storage and a React/Vite front end. Supports 30+ languages.",
    ],
    pipeline: [
      { label: "Parse", note: "Babel AST / Cheerio" },
      { label: "Extract", note: "user-facing strings only" },
      { label: "Translate", note: "Google or Azure, batched" },
      { label: "Diff", note: "review every change" },
      { label: "Apply", note: "ts-morph, hash-checked" },
    ],
    featured: true,
    screenshots: [
      {
        src: "/projects/localeora-string-review.webp",
        alt: "Localeora string review screen: 233 extracted nodes, 33 marked translatable, each string listed with its file, line and column and its AST node type.",
        caption:
          "String review: 233 nodes extracted from one file, 33 kept, each traced to its line and column",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/localeora-translation.webp",
        alt: "Localeora translation screen with a provider choice of Google Translate or Azure AI Translator, a target-language list, and translation catalogs pairing English source strings with Spanish translations.",
        caption: "Translation: pick a provider and languages, then review each key's source and translation",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/localeora-landing.webp",
        alt: "Localeora landing page headed 'Automate Frontend Localization Safely'.",
        caption: "The landing page",
        width: 1600,
        height: 1000,
      },
    ],
    problem:
      "Localising an app means finding every user-facing string in the source and rewriting it without breaking the code. Doing that automatically is only safe if a person can check each change first.",
    role: "Both AST engines, the translation service, the API and the review interface.",
    outcomes: [
      "30+ target languages",
      "No source file changes without a reviewed diff",
      "Stale edits rejected by content hash",
    ],
    link: null,
    github: "https://github.com/Abhinav0915",
  },
  {
    id: "prodigidesk",
    name: "ProdigiDesk",
    subtitle: "Multilingual document platform, built from the first commit",
    period: "2024–25",
    category: "Systems & Security",
    tags: ["React", "Python", "Django", "PostgreSQL", "AWS EC2", "Docker", "AES/RSA", "Razorpay"],
    summary:
      "The product I built as founding engineer at Esprit Analytique. Paid document translation with every sensitive request sealed in an AES + RSA envelope, run on AWS in production.",
    details: [
      "Each sensitive request is encrypted with a fresh AES key, and that key is encrypted with the server's RSA public key. Only the server can open the envelope.",
      "65+ Django REST endpoints. The slow ones moved onto worker threads, cutting response latency by about 30%.",
      "Multiprocess translation pipelines halved localisation turnaround.",
      "Razorpay integration for payments, Dockerised services on EC2, deployed through CI/CD.",
    ],
    featured: true,
    preview: "prodigidesk",
    problem:
      "A paid translation product handling customer documents and payments, where every sensitive request had to be protected end to end.",
    role: "Founding engineer, later lead. Architecture, backend, encryption layer and deployment.",
    outcomes: [
      "Shipped to production on AWS EC2",
      "~30% lower API latency after threading",
      "Localisation turnaround halved",
    ],
    link: null,
    github: null,
  },
  {
    id: "aarya-spicy-food",
    name: "Aarya's Spicy Food",
    subtitle: "Ordering and kitchen management for a cloud kitchen",
    period: "2026",
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
      "Customers browse the menu, order and track status live. Kitchen staff get their own console to manage the queue and toggle item availability. Role-based access separates the two.",
    details: [],
    screenshots: [
      {
        src: "/projects/aarya-desktop.webp",
        alt: "Aarya's Spicy Kitchen home page on desktop, headed 'Taste the Comfort of Home, Delivered Fresh Everyday', with View Plans and Order Now buttons.",
        caption: "Home page, desktop",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/aarya-mobile.webp",
        alt: "Aarya's Spicy Kitchen home page on a phone.",
        caption: "Home page, mobile",
        width: 780,
        height: 1688,
      },
    ],
    link: "https://aarya-spicy-food-babe2.firebaseapp.com/",
    github: "https://github.com/Abhinav0915/aarya-spicy-food",
  },
  {
    id: "localise",
    name: "Localise",
    subtitle: "Batch translation for JSON and Word documents",
    period: "2025",
    category: "Tools",
    tags: ["React", "TypeScript", "Django", "Python", "Vite", "PostgreSQL", "asyncio", "Azure AI Translator"],
    summary:
      "Translates .docx files in place, keeping styles, tables and spacing, into 30+ languages including 22 Indian regional languages. Downloads come back as one ZIP.",
    details: [],
    screenshots: [
      {
        src: "/projects/localise-desktop.webp",
        alt: "Localis overview page on desktop, headed 'Translate products with a sharper, calmer workflow', with a three-step panel: upload structure, choose the target languages, download the translated bundle.",
        caption: "Overview, desktop",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/localise-mobile.webp",
        alt: "Localis overview page on a phone.",
        caption: "Overview, mobile",
        width: 780,
        height: 1688,
      },
    ],
    link: "https://localisfe.onrender.com/",
    github: "https://github.com/Abhinav0915/LocalisFE",
  },
  {
    id: "jamaican-patty-house",
    name: "Jamaican Patty House",
    subtitle: "Restaurant website",
    period: "2026",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    summary: "Mobile-first site with a typed menu model covering categories, dietary tags and opening hours.",
    details: [],
    screenshots: [
      {
        src: "/projects/jamaican-patty-desktop.webp",
        alt: "Jamaican Patty Bakehouse home page on desktop, headed 'Real Jamaican Patties. Baked with Heart.', with See Catalog and View Hours buttons.",
        caption: "Home page, desktop",
        width: 1600,
        height: 1000,
      },
      {
        src: "/projects/jamaican-patty-mobile.webp",
        alt: "Jamaican Patty Bakehouse home page on a phone.",
        caption: "Home page, mobile",
        width: 780,
        height: 1688,
      },
    ],
    link: "https://jamaicanpatty-e25a2.web.app/",
    github: "https://github.com/Abhinav0915/JamaicanPattyBakehouse",
  },
  {
    id: "pisca",
    name: "PISCA",
    subtitle: "Stakeholder reporting with Excel export",
    period: "2024",
    category: "Full Stack",
    tags: ["Java", "Spring Boot", "Apache POI", "React"],
    summary:
      "React reporting interface backed by Spring Boot, generating Excel exports server-side with Apache POI.",
    details: [],
    link: null,
    github: null,
  },
  {
    id: "inbound-scanning",
    name: "Inbound Scanning",
    subtitle: "Warehouse scanning with separate supervisor and operator flows",
    period: "2024",
    category: "Systems & Security",
    tags: ["React", "Spring Boot", "TypeScript"],
    summary:
      "Role-restricted workflows secured with JWT in Spring Boot. Operator input errors dropped by about 30%.",
    details: [],
    link: null,
    github: null,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: "The University of Sydney",
    degree: "Master of Computer Science (Advanced Entry)",
    period: "2026 – present",
    location: "Sydney",
    honors: "Distributed systems and machine learning",
  },
  {
    school: "Bennett University",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2020 – 2024",
    location: "Greater Noida",
    honors: "Graduated with honours, GPA 8.99 / 10",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University",
    date: "2026",
    url: "https://coursera.org/share/8eeb70e04596c4664aed85c51ee8e0b1",
  },
  {
    name: "NLP with Classification and Vector Spaces",
    issuer: "DeepLearning.AI",
    date: "2023",
    url: "https://coursera.org/share/dfcbcf47175aeedcdf7e3d6334e22ce1",
  },
  {
    name: "Machine Learning Engineering for Production (MLOps)",
    issuer: "DeepLearning.AI",
    date: "2023",
    url: "https://coursera.org/share/a7979ccef7ef7b5112bb1184cc4bb7aa",
  },
  {
    name: "Graph Analytics for Big Data",
    issuer: "UC San Diego",
    date: "2023",
    url: "https://coursera.org/share/586cf6b8ab21ce0cd1f1fae3d6c761e2",
  },
  {
    name: "Optimizing a Website for Google Search",
    issuer: "UC Davis",
    date: "2023",
    url: "https://coursera.org/share/896564c0fbfd9e4350992bb8eaa4cb11",
  },
  {
    name: "NLP with Sequence Models",
    issuer: "DeepLearning.AI",
    date: "2022",
    url: "https://coursera.org/share/862e5f1cc13fd2bf180ac3ec64c02bec",
  },
  {
    name: "NLP with Probabilistic Models",
    issuer: "DeepLearning.AI",
    date: "2022",
    url: "https://coursera.org/share/794136694031c2ea8c62ee81dd4960c3",
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    date: "2022",
    url: "https://coursera.org/share/801e9d10c51e42f8271292d3789cc3af",
  },
  {
    name: "Machine Learning",
    issuer: "Stanford University",
    date: "2021",
    url: "https://coursera.org/share/1486021a5e28898077e1c7d56f80bc6e",
  },
  {
    name: "Data Structures",
    issuer: "UC San Diego",
    date: "2021",
    url: "https://coursera.org/share/4a477c575211191adca2e6a8e8a44fe7",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "4th place, Smart India Hackathon",
    organization: "Ministry of Education, Government of India",
    description: "National finalist. Built a working solution in a 36-hour final round.",
  },
  {
    title: "Published paper: COVID-19 detection with VGG-16",
    organization: "Peer-reviewed publication",
    description: "Chest X-ray classification using a VGG-16 convolutional network.",
  },
  {
    title: "Intern to full-time in 17 days",
    organization: "Esprit Analytique",
    description: "Converted from a 3-month internship after 17 days, then promoted to lead within a year.",
  },
];
