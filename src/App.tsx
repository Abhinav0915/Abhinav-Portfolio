import React, { useState, useEffect, useRef, useMemo } from "react";

type IconProps = {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};
type MotionProps = React.HTMLAttributes<HTMLElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    style?: React.CSSProperties;
    children?: React.ReactNode;
    initial?: Record<string, unknown>;
    animate?: Record<string, unknown> | string;
    exit?: Record<string, unknown>;
    transition?: Record<string, unknown>;
    whileHover?: Record<string, unknown>;
    whileTap?: Record<string, unknown>;
    layout?: boolean;
  };
type IconComponent = React.ComponentType<IconProps>;
type Theme = {
  bg: string;
  bgElev: string;
  bgCard: string;
  border: string;
  text: string;
  textDim: string;
};

const motion = {
  div: ({
    style,
    children,
    initial: _initial,
    animate: _animate,
    exit: _exit,
    transition: _transition,
    whileHover: _whileHover,
    whileTap: _whileTap,
    layout: _layout,
    ...rest
  }: MotionProps) => (
    <div style={style} {...rest}>
      {children}
    </div>
  ),
  button: ({
    style,
    children,
    initial: _initial,
    animate: _animate,
    exit: _exit,
    transition: _transition,
    whileHover: _whileHover,
    whileTap: _whileTap,
    layout: _layout,
    ...rest
  }: MotionProps) => (
    <button style={style} {...rest}>
      {children}
    </button>
  ),
  span: ({
    style,
    children,
    initial: _initial,
    animate: _animate,
    exit: _exit,
    transition: _transition,
    whileHover: _whileHover,
    whileTap: _whileTap,
    layout: _layout,
    ...rest
  }: MotionProps) => (
    <span style={style} {...rest}>
      {children}
    </span>
  ),
  a: ({
    style,
    children,
    initial: _initial,
    animate: _animate,
    exit: _exit,
    transition: _transition,
    whileHover: _whileHover,
    whileTap: _whileTap,
    layout: _layout,
    ...rest
  }: MotionProps) => (
    <a style={style} {...rest}>
      {children}
    </a>
  ),
};

function useScroll() {
  return { scrollYProgress: 0 };
}

function useSpring(
  value: number,
  _options?: { stiffness: number; damping: number },
) {
  return value;
}

function AnimatePresence({
  children,
}: {
  children?: React.ReactNode;
  mode?: string;
}) {
  return <>{children}</>;
}

const IconBase = ({
  size = 16,
  color = "currentColor",
  style,
  children,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    {children}
  </svg>
);

const Mail = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </IconBase>
);

const Phone = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M8 3h3l1 4-1.5 1.5a14 14 0 006.5 6.5L16 13l4 1v3a2 2 0 01-2 2A16 16 0 014 4a2 2 0 012-2h3z" />
  </IconBase>
);

const Github = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M9 18c-4.5 1.2-4.5-2.2-6-2.6M15 21v-3.2a2.8 2.8 0 00-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.8 4.8 0 00-1.3-3.3 4.5 4.5 0 00-.1-3.3s-1.1-.3-3.5 1.3a12.1 12.1 0 00-6 0C5.6 2.7 4.5 3 4.5 3a4.5 4.5 0 00-.1 3.3 4.8 4.8 0 00-1.3 3.3c0 4.7 2.8 5.7 5.5 6a2.8 2.8 0 00-.8 2.2V21" />
  </IconBase>
);

const Linkedin = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M7 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    <path d="M6 10h2v8H6z" />
    <path d="M11 10h2v1.1h.1c.3-.6 1.1-1.2 2.3-1.2 2.4 0 2.8 1.6 2.8 3.6V18h-2v-7.2c0-1.7-.1-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V18h-2z" />
  </IconBase>
);

const ExternalLink = ({
  size = 16,
  color = "currentColor",
  style,
}: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <path d="M21 14v7H3V3h7" />
  </IconBase>
);

const MapPin = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M12 21s6-5.3 6-11a6 6 0 10-12 0c0 5.7 6 11 6 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </IconBase>
);

const ArrowUp = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
  </IconBase>
);

const Sun = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.9 4.9l1.4 1.4" />
    <path d="M17.7 17.7l1.4 1.4" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.9 19.1l1.4-1.4" />
    <path d="M17.7 6.3l1.4-1.4" />
  </IconBase>
);

const Moon = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M20 14.5A8.5 8.5 0 019.5 4 8.5 8.5 0 1019.5 20a8.5 8.5 0 00.5-5.5z" />
  </IconBase>
);

const ChevronDown = ({
  size = 16,
  color = "currentColor",
  style,
}: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M6 9l6 6 6-6" />
  </IconBase>
);

const Server = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <rect x="3" y="4" width="18" height="6" rx="1" />
    <rect x="3" y="14" width="18" height="6" rx="1" />
    <path d="M7 7h.01" />
    <path d="M7 17h.01" />
  </IconBase>
);

const Cloud = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M7 18a4 4 0 01-1-7.8 5.5 5.5 0 0110.7-1.2A4.5 4.5 0 0117 18H7z" />
  </IconBase>
);

const ShieldCheck = ({
  size = 16,
  color = "currentColor",
  style,
}: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </IconBase>
);

const Code2 = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M8 8l-4 4 4 4" />
    <path d="M16 8l4 4-4 4" />
    <path d="M13 5l-2 14" />
  </IconBase>
);

const Database = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <ellipse cx="12" cy="5" rx="7" ry="3" />
    <path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
    <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    <path d="M5 15c0 1.7 3.1 3 7 3s7-1.3 7-3" />
  </IconBase>
);

const BrainCircuit = ({
  size = 16,
  color = "currentColor",
  style,
}: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M8 5a3 3 0 016 0 2.6 2.6 0 013 2.5A3.2 3.2 0 0114 11" />
    <path d="M10 11a3.2 3.2 0 00-3.1 3.1A3 3 0 0010 17" />
    <path d="M14 11a3.2 3.2 0 013.1 3.1A3 3 0 0114 17" />
    <path d="M8 17c-1 0-2-.8-2-2" />
    <path d="M16 17c1 0 2-.8 2-2" />
    <path d="M12 7v2" />
  </IconBase>
);

const GraduationCap = ({
  size = 16,
  color = "currentColor",
  style,
}: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M5 8v5c0 2.2 3.1 4 7 4s7-1.8 7-4V8" />
    <path d="M5 13l7 4 7-4" />
  </IconBase>
);

const Award = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M12 3l2.6 5.2L20 9l-4 3.9 1 5.7-5-2.9-5 2.9 1-5.7L4 9l5.4-.8L12 3z" />
  </IconBase>
);

const Users = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M16 19a4 4 0 00-4-4H8a4 4 0 00-4 4" />
    <circle cx="10" cy="8" r="3" />
    <path d="M18 10a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M20 19a3 3 0 00-2-3" />
  </IconBase>
);

const Lock = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 118 0v3" />
  </IconBase>
);

const Send = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M21 3L11 13" />
    <path d="M21 3l-6 18-4-8-8-4 18-6z" />
  </IconBase>
);

const CheckCircle2 = ({
  size = 16,
  color = "currentColor",
  style,
}: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path d="M8 12l2.5 2.5L16 9" />
  </IconBase>
);

const X = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </IconBase>
);

const Menu = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <IconBase size={size} color={color} style={style}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </IconBase>
);

/* ------------------------------------------------------------------ */
/*  DATA — sourced only from the provided resume / CV                  */
/* ------------------------------------------------------------------ */

const CONTACT = {
  name: "Abhinav Saxena",
  location: "Sydney, Australia",
  phone: "+61 401 449 374",
  email: "abhinavv1509@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhinav1506/",
  github: "https://github.com/Abhinav0915",
  portfolio: "https://portfolio.com",
};

const ROLES = [
  "Full Stack Developer",
  "Founding Engineer",
  "Cloud & DevOps Engineer",
  "AI / ML Researcher",
];

const STATS = [
  { label: "Years Building Production Software", value: 2, suffix: "+" },
  { label: "RESTful APIs Engineered", value: 65, suffix: "+" },
  { label: "Projects Shipped", value: 10, suffix: "+" },
  { label: "Secure Transactions Processed", value: 100, suffix: "+" },
];

const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Java", "Python", "C++", "Dart", "JavaScript", "TypeScript"],
  },
  {
    category: "Web & Frameworks",
    icon: Server,
    items: [
      "React",
      "Next.js",
      "Django",
      "Spring Boot",
      "Express",
      "Flutter",
      "Tailwind",
      "Node",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS (EC2)",
      "Azure",
      "GCP",
      "Firebase",
      "Docker",
      "Azure CI/CD",
      "Git",
    ],
  },
  {
    category: "Security",
    icon: ShieldCheck,
    items: [
      "AES Encryption",
      "RSA",
      "JWT",
      "Hybrid Key Exchange",
      "Proxy-based APIs",
    ],
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    items: ["TensorFlow", "VGG-16", "Deep Learning", "Image Analysis"],
  },
];

const EXPERIENCE = [
  {
    company: "Esprit Analytique",
    role: "Lead Full Stack Developer",
    time: "June 2024 – December 2025",
    place: "Remote",
    points: [
      "Founding engineer on a full-stack platform (React + Python), taken from zero to a production-ready public website.",
      "Led a team of developers, owning project architecture, code review, and deployment workflow.",
      "Engineered 65+ RESTful APIs in Django with multithreading — a 30% performance gain — and integrated Razorpay for payments.",
      "Built a hybrid AES + RSA encryption layer securing every frontend–backend exchange.",
      "Deployed on Docker + AWS EC2 with CI/CD, holding 99.9% uptime under peak load.",
      "Automated localisation tooling — JSON, documents, and TSX string extraction — for multilingual rollout.",
    ],
  },
  {
    company: "NEC Corporation India Pvt Ltd",
    role: "Java Developer Intern",
    time: "Oct 2023 – Apr 2024",
    place: "Noida, India",
    points: [
      "Solely rebuilt the client-facing website with a modern, responsive front end.",
      "Shipped RESTful APIs in Java Spring Boot with 85% code coverage.",
      "Integrated new APIs with the redesigned front end — a 25% lift in user engagement.",
      "Explored Docker and microservice communication patterns through independent projects.",
    ],
  },
  {
    company: "Wormos",
    role: "Flutter Developer Intern",
    time: "June 2023 – Aug 2023",
    place: "Remote",
    points: [
      "Built pixel-perfect Flutter UI from Figma at 90% design accuracy.",
      "Wired up Firebase for real-time data and secure authentication.",
      "Implemented OTP-based phone auth and Google Sign-In for onboarding.",
    ],
  },
];

const PROJECTS = [
  {
    name: "GlassBox — Explainable Network Anomaly Detection System",
    period: "Aug 2026",
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
      "A network intrusion detection system pairing an Isolation Forest and a PyTorch autoencoder with SHAP-based explainability, so every flagged flow comes with a human-readable reason instead of a black-box score.",
    details: [
      "Decoupled the ML pipeline from serving: trained an Isolation Forest (200 trees, ~77 CICFlowMeter features) and a PyTorch autoencoder (64 → 32 → 16-dim latent) on benign-only CIC-IDS2018 traffic, serialized as joblib/.pt artifacts loaded once at Django startup via a singleton ModelRegistry.",
      "Built in honest evaluation practices: thresholds tuned on a dedicated validation set with the held-out test set touched exactly once; autoencoder checkpointing selected on validation PR-AUC rather than reconstruction loss to avoid the model getting better at reconstructing attacks too.",
      "Wired SHAP explainability into the live alert path — TreeExplainer for the Isolation Forest, KernelExplainer for the autoencoder — gated to fire only on flagged flows, with explanations persisted per-Alert for re-analysis if thresholds are later retuned.",
      "Implemented memory-safe preprocessing of CIC-IDS2018 at scale: log1p transforms, RobustScaler fit on a 1M benign subsample, and chunked scaling in 100k-row blocks with explicit garbage collection so the full pipeline runs on a laptop.",
      "Added live capture via scapy's AsyncSniffer reusing the same analysis path as dataset replay, hardened with X-API-Key auth in production and a heartbeat file to distinguish a stopped capture from a crashed one.",
    ],
    link: null,
  },
  {
    name: "Localeora",
    period: "Aug 2026 – Present",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Django REST Framework",
      "PostgreSQL",
      "Node.js",
      "Babel",
      "ts-morph",
      "Google Cloud Translation API",
      "Azure AI Translator",
    ],
    summary:
      "An AST-based localization platform that extracts, translates, and rewrites user-facing strings directly in React/TSX and HTML source code — with every change reviewable as a diff before it's ever written to disk.",
    details: [
      "Architected a Node.js extraction engine (Babel parser and traverse, parse5/cheerio) that reads user-facing strings directly out of React, TypeScript, TSX, and HTML source, decoupled from a Django REST Framework API that owns orchestration and persistence.",
      "Designed a two-engine pipeline separating read-only extraction from source-rewriting transformation via ts-morph, with each edit re-validated against a content hash of the source file before being applied — preventing silent corruption of the codebase.",
      "Implemented a dry-run-to-apply workflow: proposed edits render as a reviewable diff and are only written to disk after explicit approval, backed by structured, schema-validated artifacts shared across the Python and Node services.",
      "Built a provider-agnostic translation layer integrating Google Cloud Translation and Azure AI Translator behind one interface, using Python asyncio with semaphore-bounded concurrency for batch jobs, polled asynchronously by the frontend for live progress.",
      "Developed the full-stack system end-to-end — JWT and OTP-based authentication, PostgreSQL persistence, and a React/TypeScript/Vite frontend with Tailwind CSS and React Three Fiber for interactive 3D visualizations — supporting 30+ target languages.",
    ],
    link: null,
  },
  {
    name: "Aarya's Spicy Food — Cloud Kitchen",
    period: "May 2026",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django REST Framework",
      "JWT",
      "PostgreSQL",
      "Firebase",
      "Render",
      "Supabase",
    ],
    summary:
      "A full-stack cloud kitchen platform enabling secure online food ordering, order management, and real-time tracking with a scalable cloud-native architecture.",

    details: [
      "Developed a full-stack food ordering platform using Next.js, React, TypeScript, Django REST Framework, JWT authentication, and PostgreSQL for seamless customer and admin experiences.",
      "Built customer features including secure authentication, menu browsing, shopping basket management, order placement, real-time order tracking, order cancellation, and profile management.",
      "Designed secure REST APIs with JWT-based authentication, role-based access control (RBAC), customer-specific order history, order validation, and automated order status management.",
      "Created an admin dashboard for efficient order monitoring, filtering, status updates, and real-time customer order management.",
      "Deployed the frontend on Firebase Hosting, backend on Render, and production database on Supabase PostgreSQL, delivering a scalable cloud-native deployment.",
    ],
    link: "https://aarya-spicy-food-babe2.firebaseapp.com/",
  },
  {
    name: "Jamaican Patty House",
    period: "May 2026",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    summary:
      "Developed a responsive single-page restaurant website featuring a dynamic hero section, interactive menu catalog, business hours, and contact information using React, TypeScript, and Vite.",
    details: [
      "Implemented scroll-based navigation, animated reveal effects, and fully responsive layouts for seamless experiences across mobile, tablet, and desktop devices.",
      "Designed structured data models for menu items and opening hours, enabling dynamic content rendering, simplified maintenance, and improved scalability.",
      "Crafted a custom Jamaican-inspired UI/UX with branded color palettes, typography, and interactive call-to-action components for a visually consistent user experience.",
    ],

    link: "https://jamaicanpatty-e25a2.web.app/",
  },
  {
    name: "ProdigiDesk",
    period: "Jun 2024 – Dec 2025",
    tags: ["React", "Python", "PostgreSQL", "AWS", "Docker", "AES/RSA"],
    summary:
      "A scalable full-stack platform with hybrid AES+RSA security and multilingual delivery.",
    details: [
      "JWT + hybrid AES/RSA authentication — zero unauthorized access incidents across 100+ secure Razorpay transactions.",
      "Custom multi-processed Python translation engine — 50% faster localisation, no manual CI/CD overhead.",
      "GCP-powered server-side rendering and metadata — 20% increase in SEO-driven organic traffic.",
    ],
    link: "https://prodigidesk.ai",
  },
  {
    name: "Localise",
    period: "Apr 2025",
    tags: [
      "React",
      "TypeScript",
      "Django",
      "Python",
      "Vite",
      "Tailwind CSS",
      "PostgreSQL",
      "Axios",
      "Google Translate API",
      "Azure AI Translator",
      "python-docx",
      "asyncio",
    ],
    summary:
      "A full-stack localization platform for translating JSON language files and Word documents into 30+ languages while preserving formatting and providing real-time progress tracking.",
    details: [
      "Built a full-stack localization platform using React (TypeScript) and Django REST Framework to translate JSON files and DOCX documents into 30+ languages, including 22 Indian languages, in a single batch operation.",
      "Integrated interchangeable Google Translate (deep-translator) and Azure AI Translator APIs, enabling flexible translation workflows based on cost, quality, and rate-limit requirements.",
      "Developed an in-place DOCX translation pipeline using python-docx that preserves formatting, styles, tables, and document layout while translating content.",
      "Optimized large translation workloads using Python asyncio with semaphore-controlled concurrency (10 parallel requests) and implemented real-time job progress tracking via polling APIs.",
      "Created a responsive React SPA with React Router and Tailwind CSS featuring multi-language selection, one-click ZIP downloads, and independent frontend/backend deployment on Render with secure CORS communication.",
    ],

    link: "https://localisfe.onrender.com/",
  },

  {
    name: "PISCA",
    period: "Nov 2024",
    tags: ["Java", "Spring Boot", "Apache POI", "React"],
    summary: "A stakeholder reporting front end with Excel export baked in.",
    details: [
      "React front end — 20% more engagement, 15% faster page loads.",
      "Apache POI + Spring Boot Excel reporting for streamlined data export.",
    ],
    link: null,
  },
  {
    name: "QR Code Generator",
    period: "Oct 2024",
    tags: ["React", "Tailwind", "TypeScript"],
    summary: "PDF-to-QR tool with instant preview and one-click download.",
    details: [
      "Seamless PDF upload and processing pipeline.",
      "Quick preview generation for faster user feedback.",
    ],
    link: null,
  },
  {
    name: "Inbound Scanning",
    period: "Mar 2024",
    tags: ["React", "Spring Boot", "TypeScript"],
    summary: "Role-based admin / employee scanning workflows.",
    details: [
      "Distinct admin and employee interfaces with tailored access.",
      "Spring Boot + TypeScript role-based auth — a 30% drop in user error rate.",
    ],
    link: null,
  },
];

const EDUCATION = [
  {
    school: "The University of Sydney",
    degree: "Master of Computer Science (Advanced Entry)",
    time: "Feb 2026 – Present",
    place: "Sydney, Australia",
  },
  {
    school: "Bennett University",
    degree: "B.Tech, Computer Science & Engineering — GPA 8.99/10",
    time: "Oct 2020 – Jun 2024",
    place: "Greater Noida, India",
  },
  {
    school: "Delhi Public School, Kalyanpur",
    degree: "Senior Secondary (Class XII, PCM) — 82%",
    time: "2020",
    place: "Kanpur, India",
  },
  {
    school: "Delhi Public School, Kalyanpur",
    degree: "Secondary Education (Class X) — CGPA 9.2/10",
    time: "2018",
    place: "Kanpur, India",
  },
];

const CERTIFICATIONS = [
  { name: "HTML, CSS, and JavaScript for Web Developers", date: "July 2026" },
  {
    name: "Natural Language Processing with Classification and Vector Spaces",
    date: "Sep 2023",
  },
  {
    name: "Machine Learning Engineering for Production (MLOps)",
    date: "Apr 2023",
  },
  { name: "Graph Analytics for Big Data", date: "Apr 2023" },
  { name: "Optimizing a Website for Google Search", date: "Mar 2023" },
  {
    name: "Natural Language Processing with Sequence Models",
    date: "Sep 2022",
  },
  {
    name: "Natural Language Processing with Probabilistic Models",
    date: "Sep 2022",
  },
  { name: "Introduction to Artificial Intelligence (AI)", date: "Jan 2022" },
  { name: "Machine Learning", date: "Nov 2021" },
  { name: "Data Structures", date: "Nov 2021" },
];

const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "4th Place — Smart India Hackathon",
    body: "Placed 4th nationally, building a working solution under real time pressure with a cross-functional team.",
  },
  {
    icon: BrainCircuit,
    title: "Published Researcher — Covid-19 Detection Using VGG-16",
    body: "Selected among the top 3 papers for publication, applying deep learning to medical image analysis.",
  },
  {
    icon: Users,
    title: "17-Day Promotion at Esprit Analytique",
    body: "Converted from a 3-month internship to a full-time role in 17 days, later promoted to Lead Full Stack Developer within a year.",
  },
];

const LEADERSHIP = [
  {
    role: "Lead Full Stack Developer",
    org: "Esprit Analytique",
    time: "Jun 2024 – Dec 2025",
    body: "Directed end-to-end architecture across frontend, backend, and security layers; owned cloud deployment and CI/CD strategy for the team.",
  },
  {
    role: "Tech Head, Ciphers Club",
    org: "Bennett University",
    time: "Dec 2021 – 2024",
    body: "Led the club's technical initiatives, guiding members through projects and workshops as a core organiser.",
  },
];

/* ------------------------------------------------------------------ */
/*  UTILITIES                                                          */
/* ------------------------------------------------------------------ */

const CIPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$#%&01!?@*";

function useCipherText(text: string, trigger: number | boolean, speed = 28) {
  const [display, setDisplay] = useState<string>(text);
  useEffect(() => {
    let frame = 0;
    const totalFrames = text.length * 3;
    const interval = setInterval(() => {
      frame++;
      const revealCount = Math.floor((frame / totalFrames) * text.length);
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealCount) return text[i];
            return CIPHER_CHARS[
              Math.floor(Math.random() * CIPHER_CHARS.length)
            ];
          })
          .join(""),
      );
      if (frame >= totalFrames) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, trigger, speed]);
  return display;
}

function useInView(
  ref: React.RefObject<HTMLElement | null>,
  options = { threshold: 0.2 },
) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return inView;
}

function Counter({
  value,
  suffix = "",
  trigger,
}: {
  value: number;
  suffix?: string;
  trigger?: boolean;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const duration = 1200;
    const startTime = performance.now();
    function tick(now: number) {
      const p = Math.min(1, (now - startTime) / duration);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(tick);
      else setN(value);
    }
    requestAnimationFrame(tick);
  }, [trigger, value]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ROOT COMPONENT                                                     */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      let current = "hero";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = s.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const theme = dark
    ? {
        bg: "#0A0D14",
        bgElev: "#111623",
        bgCard: "#141a29",
        border: "#232b3d",
        text: "#E7EAF2",
        textDim: "#8A93AB",
      }
    : {
        bg: "#F3F5FA",
        bgElev: "#FFFFFF",
        bgCard: "#FFFFFF",
        border: "#E1E5EE",
        text: "#131826",
        textDim: "#5B6478",
      };

  const accentBlue = "#3E7BFA";
  const accentPurple = "#9B6BFF";
  const accentCyan = "#2FD9DB";

  return (
    <div
      style={{
        background: theme.bg,
        color: theme.text,
        fontFamily: "'Inter', system-ui, sans-serif",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${accentPurple}55; }
        .display-font { font-family: 'Space Grotesk', sans-serif; }
        .mono-font { font-family: 'JetBrains Mono', monospace; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        @keyframes floatSlow { 0%,100% { transform: translate(0,0); } 50% { transform: translate(20px,-30px); } }
        @keyframes floatSlow2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-25px,25px); } }
        @keyframes pulseGlow { 0%,100% { opacity: 0.55; } 50% { opacity: 0.9; } }
        @keyframes blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
      `}</style>

      {/* progress bar */}
      <motion.div
        style={{
          transform: `scaleX(${progress})`,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          transformOrigin: "0%",
          background: `linear-gradient(90deg, ${accentBlue}, ${accentPurple}, ${accentCyan})`,
          zIndex: 100,
        }}
      />

      {/* NAV */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          background: dark ? "rgba(10,13,20,0.72)" : "rgba(243,245,250,0.75)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <nav
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => scrollTo("hero")}
            className="display-font"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 18,
              fontWeight: 700,
              color: theme.text,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Lock size={17} color={accentCyan} />
            AS<span style={{ color: accentBlue }}>.</span>dev
          </button>

          <div
            className="scrollbar-hide"
            style={{ display: "flex", gap: 4, overflowX: "auto" }}
          >
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  display: "none",
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="nav-desktop" style={{ display: "flex", gap: 2 }}>
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderRadius: 8,
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: active === s.id ? accentBlue : theme.textDim,
                    transition: "color 0.2s ease",
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              style={{
                background: theme.bgElev,
                border: `1px solid ${theme.border}`,
                borderRadius: 10,
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: theme.text,
              }}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-mobile-btn"
              style={{
                background: theme.bgElev,
                border: `1px solid ${theme.border}`,
                borderRadius: 10,
                width: 36,
                height: 36,
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: theme.text,
              }}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
        <style>{`
          @media (max-width: 820px) {
            .nav-desktop { display: none !important; }
            .nav-mobile-btn { display: flex !important; }
          }
        `}</style>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{
                overflow: "hidden",
                borderTop: `1px solid ${theme.border}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 12,
                }}
              >
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    style={{
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      padding: "10px 8px",
                      color: active === s.id ? accentBlue : theme.text,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <Hero
        theme={theme}
        accentBlue={accentBlue}
        accentPurple={accentPurple}
        accentCyan={accentCyan}
        scrollTo={scrollTo}
      />
      <About
        theme={theme}
        accentBlue={accentBlue}
        accentPurple={accentPurple}
        accentCyan={accentCyan}
      />
      <Skills
        theme={theme}
        accentBlue={accentBlue}
        accentPurple={accentPurple}
        accentCyan={accentCyan}
      />
      <Experience
        theme={theme}
        accentBlue={accentBlue}
        accentPurple={accentPurple}
        accentCyan={accentCyan}
      />
      <Projects
        theme={theme}
        accentBlue={accentBlue}
        accentPurple={accentPurple}
        accentCyan={accentCyan}
      />
      <Education
        theme={theme}
        accentBlue={accentBlue}
        accentPurple={accentPurple}
        accentCyan={accentCyan}
      />
      <Achievements
        theme={theme}
        accentBlue={accentBlue}
        accentPurple={accentPurple}
        accentCyan={accentCyan}
      />
      <Contact
        theme={theme}
        accentBlue={accentBlue}
        accentPurple={accentPurple}
        accentCyan={accentCyan}
      />
      <Footer theme={theme} accentBlue={accentBlue} scrollTo={scrollTo} />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              position: "fixed",
              bottom: 24,
              right: 24,
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${accentBlue}, ${accentPurple})`,
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(62,123,250,0.4)",
              zIndex: 80,
            }}
          >
            <ArrowUp size={18} color="#fff" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function Hero({
  theme,
  accentBlue,
  accentPurple,
  accentCyan,
  scrollTo,
}: {
  theme: Theme;
  accentBlue: string;
  accentPurple: string;
  accentCyan: string;
  scrollTo: (id: string) => void;
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [cipherTrigger, setCipherTrigger] = useState(0);
  const name = useCipherText(CONTACT.name, cipherTrigger, 22);

  useEffect(() => {
    setCipherTrigger(1);
  }, []);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    setTypedRole("");

    let charIndex = 0;
    let timeoutId: number | undefined;
    const typingTimer = window.setInterval(() => {
      charIndex += 1;
      setTypedRole(currentRole.slice(0, charIndex));

      if (charIndex >= currentRole.length) {
        window.clearInterval(typingTimer);
        timeoutId = window.setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 1800);
      }
    }, 80);

    return () => {
      window.clearInterval(typingTimer);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 90,
      }}
    >
      {/* ambient blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: accentBlue,
          filter: "blur(140px)",
          opacity: 0.28,
          animation: "floatSlow 14s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-8%",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: accentPurple,
          filter: "blur(150px)",
          opacity: 0.26,
          animation: "floatSlow2 16s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "45%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: accentCyan,
          filter: "blur(130px)",
          opacity: 0.18,
          animation: "pulseGlow 8s ease-in-out infinite",
        }}
      />

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.7fr",
            gap: 48,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mono-font"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12.5,
                color: accentCyan,
                border: `1px solid ${theme.border}`,
                padding: "6px 12px",
                borderRadius: 100,
                marginBottom: 24,
                background: theme.bgElev,
              }}
            >
              <MapPin size={13} /> {CONTACT.location}
              <span style={{ opacity: 0.5 }}>
                · open to research & engineering roles
              </span>
            </motion.div>

            <h1
              className="display-font"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.6rem)",
                fontWeight: 700,
                lineHeight: 1.03,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              <span
                className="mono-font"
                style={{
                  display: "block",
                  fontSize: "0.42em",
                  color: accentBlue,
                  fontWeight: 500,
                  marginBottom: 10,
                }}
              >
                console.log(
              </span>
              {name}
              <span
                className="mono-font"
                style={{
                  display: "block",
                  fontSize: "0.42em",
                  color: accentBlue,
                  fontWeight: 500,
                  marginTop: 6,
                }}
              >
                );
              </span>
            </h1>

            <div
              style={{
                marginTop: 20,
                fontSize: "clamp(1.1rem, 2.4vw, 1.55rem)",
                fontWeight: 600,
                color: theme.textDim,
                height: 34,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: accentPurple }}>&gt;</span>
              <span>{typedRole}</span>
              <span
                style={{
                  animation: "blink 1s step-start infinite",
                  color: accentCyan,
                }}
              >
                |
              </span>
            </div>

            <p
              style={{
                marginTop: 26,
                maxWidth: 560,
                fontSize: 16.5,
                lineHeight: 1.7,
                color: theme.textDim,
              }}
            >
              Computer Science graduate student and founding engineer building
              secure, scalable full-stack systems — from encrypted payment flows
              to localisation engines — across React, Django, Spring Boot, and
              AWS. Currently pursuing a Master's at the University of Sydney,
              with research roots in deep learning.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 34,
              }}
            >
              <PrimaryButton
                onClick={() => scrollTo("projects")}
                accentBlue={accentBlue}
                accentPurple={accentPurple}
              >
                View Projects
              </PrimaryButton>
              <GhostButton theme={theme} onClick={() => scrollTo("contact")}>
                Contact Me
              </GhostButton>
              <GhostButton
                theme={theme}
                as="a"
                href="/CV-Resume.zip"
                download="Abhinav_Saxena_CV_Resume.zip"
              >
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  Download CV/Resume
                </span>
              </GhostButton>
            </div>

            <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
              <SocialIcon href={CONTACT.github} theme={theme} icon={Github} />
              <SocialIcon
                href={CONTACT.linkedin}
                theme={theme}
                icon={Linkedin}
              />
              <SocialIcon
                href={`mailto:${CONTACT.email}`}
                theme={theme}
                icon={Mail}
              />
            </div>
          </div>

          {/* decorative code / cipher panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mono-font hero-code-panel"
            style={{
              background: theme.bgElev,
              border: `1px solid ${theme.border}`,
              borderRadius: 16,
              padding: 22,
              fontSize: 12.5,
              lineHeight: 1.9,
              color: theme.textDim,
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ff5f57",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#febc2e",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#28c840",
                  display: "inline-block",
                }}
              />
            </div>
            <div>
              <span style={{ color: accentPurple }}>class</span>{" "}
              <span style={{ color: accentCyan }}>Engineer</span> {"{"}
            </div>
            <div>
              &nbsp;&nbsp;stack = [
              <span style={{ color: accentBlue }}>"React"</span>,{" "}
              <span style={{ color: accentBlue }}>"Django"</span>,{" "}
              <span style={{ color: accentBlue }}>"AWS"</span>];
            </div>
            <div>
              &nbsp;&nbsp;security ={" "}
              <span style={{ color: accentBlue }}>"AES+RSA"</span>;
            </div>
            <div>
              &nbsp;&nbsp;uptime ={" "}
              <span style={{ color: accentCyan }}>99.9</span>;
            </div>
            <div>
              &nbsp;&nbsp;<span style={{ color: accentPurple }}>function</span>{" "}
              ship() {"{"}
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: accentPurple }}>return</span>{" "}
              <span style={{ color: accentBlue }}>"production-ready"</span>;
            </div>
            <div>&nbsp;&nbsp;{"}"}</div>
            <div>{"}"}</div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => scrollTo("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: -40,
            left: "50%",
            transform: "translateX(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: theme.textDim,
          }}
          aria-label="Scroll down"
        >
          <ChevronDown size={26} />
        </motion.button>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-code-panel { display: none; }
        }
      `}</style>
    </section>
  );
}

function PrimaryButton({
  children,
  onClick,
  accentBlue,
  accentPurple,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  accentBlue: string;
  accentPurple: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, ${accentBlue}, ${accentPurple})`,
        border: "none",
        color: "#fff",
        padding: "13px 24px",
        borderRadius: 12,
        fontSize: 14.5,
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: `0 10px 30px ${accentBlue}44`,
      }}
    >
      {children}
    </motion.button>
  );
}

function GhostButton({
  children,
  onClick,
  theme,
  as = "button",
  href,
  download,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  theme: Theme;
  as?: string;
  href?: string;
  download?: string;
}) {
  const Comp = as === "a" ? "a" : "button";
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      style={{ display: "inline-block" }}
    >
      <Comp
        href={href}
        download={download}
        onClick={onClick}
        style={{
          background: "transparent",
          border: `1px solid ${theme.border}`,
          color: theme.text,
          padding: "13px 24px",
          borderRadius: 12,
          fontSize: 14.5,
          fontWeight: 600,
          cursor: "pointer",
          display: "inline-block",
          textDecoration: "none",
        }}
      >
        {children}
      </Comp>
    </motion.div>
  );
}

function SocialIcon({
  href,
  theme,
  icon: Icon,
}: {
  href: string;
  theme: Theme;
  icon: IconComponent;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.12, y: -2 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        border: `1px solid ${theme.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.text,
        background: theme.bgElev,
      }}
    >
      <Icon size={17} />
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

function About({
  theme,
  accentBlue,
  accentPurple,
  accentCyan,
}: {
  theme: Theme;
  accentBlue: string;
  accentPurple: string;
  accentCyan: string;
}) {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(statsRef, { threshold: 0.4 });

  return (
    <section id="about" style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionEyebrow accent={accentBlue} theme={theme} text="About" />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}
          className="about-grid"
        >
          <Reveal>
            <h2
              className="display-font"
              style={{
                fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
                fontWeight: 700,
                margin: "0 0 20px",
              }}
            >
              Building systems that stay{" "}
              <span style={{ color: accentPurple }}>secure</span>,{" "}
              <span style={{ color: accentCyan }}>scalable</span>, and quietly
              reliable.
            </h2>
            <p
              style={{ color: theme.textDim, lineHeight: 1.8, fontSize: 15.5 }}
            >
              I'm a Computer Science graduate student with a strong foundation
              in full-stack development, software engineering, and cloud-based
              systems. I've designed efficient APIs, built responsive UIs, and
              shipped applications across web and mobile with React, Django,
              Java, Flutter, and AWS.
            </p>
            <p
              style={{
                color: theme.textDim,
                lineHeight: 1.8,
                fontSize: 15.5,
                marginTop: 16,
              }}
            >
              As a founding engineer at Esprit Analytique, I took a product from
              a blank repository to a production system securing 100+ real
              transactions — and along the way picked up a habit of encrypting
              first and asking questions later. I've also contributed to deep
              learning research and led technical initiatives as Tech Head of
              the Ciphers Club.
            </p>
            <p
              style={{
                color: theme.textDim,
                lineHeight: 1.8,
                fontSize: 15.5,
                marginTop: 16,
              }}
            >
              My goal now is graduate research in intelligent, scalable systems
              — pairing academic rigor with the instincts that only come from
              shipping real software.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              ref={statsRef}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
              }}
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: theme.bgElev,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 16,
                    padding: "26px 20px",
                  }}
                >
                  <div
                    className="display-font"
                    style={{
                      fontSize: 34,
                      fontWeight: 700,
                      color: [accentBlue, accentPurple, accentCyan, accentBlue][
                        i % 4
                      ],
                    }}
                  >
                    <Counter
                      value={s.value}
                      suffix={s.suffix}
                      trigger={inView}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: theme.textDim,
                      marginTop: 8,
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width: 860px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function SectionEyebrow({
  text,
  accent,
  theme,
}: {
  text: string;
  accent: string;
  theme: Theme;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14,
      }}
    >
      <div style={{ width: 28, height: 2, background: accent }} />
      <span
        className="mono-font"
        style={{
          fontSize: 12.5,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: theme.textDim,
        }}
      >
        {text}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SKILLS                                                             */
/* ------------------------------------------------------------------ */

function Skills({
  theme,
  accentBlue,
  accentPurple,
  accentCyan,
}: {
  theme: Theme;
  accentBlue: string;
  accentPurple: string;
  accentCyan: string;
}) {
  const accents = [accentBlue, accentPurple, accentCyan];
  return (
    <section
      id="skills"
      style={{ padding: "100px 24px", background: theme.bgElev }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionEyebrow accent={accentPurple} theme={theme} text="Toolkit" />
        <h2
          className="display-font"
          style={{
            fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
            fontWeight: 700,
            margin: "0 0 40px",
          }}
        >
          Skills, categorised.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {SKILLS.map((cat, i) => {
            const Icon = cat.icon;
            const accent = accents[i % 3];
            return (
              <Reveal key={cat.category} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6, borderColor: accent }}
                  style={{
                    background: theme.bgCard,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 16,
                    padding: 24,
                    height: "100%",
                    transition: "border-color 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: `${accent}1f`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={17} color={accent} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>
                      {cat.category}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{
                          scale: 1.06,
                          background: `${accent}22`,
                          color: accent,
                        }}
                        style={{
                          fontSize: 12.5,
                          padding: "6px 11px",
                          borderRadius: 8,
                          border: `1px solid ${theme.border}`,
                          color: theme.textDim,
                          cursor: "default",
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */

function Experience({
  theme,
  accentBlue,
  accentPurple,
  accentCyan,
}: {
  theme: Theme;
  accentBlue: string;
  accentPurple: string;
  accentCyan: string;
}) {
  const accents = [accentBlue, accentPurple, accentCyan];
  return (
    <section id="experience" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionEyebrow accent={accentCyan} theme={theme} text="Experience" />
        <h2
          className="display-font"
          style={{
            fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
            fontWeight: 700,
            margin: "0 0 48px",
          }}
        >
          Where I've built things.
        </h2>
        <div style={{ position: "relative", paddingLeft: 28 }}>
          <div
            style={{
              position: "absolute",
              left: 6,
              top: 6,
              bottom: 6,
              width: 2,
              background: theme.border,
            }}
          />
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1} className="">
              <div style={{ position: "relative", marginBottom: 40 }}>
                <div
                  style={{
                    position: "absolute",
                    left: -28 + 2,
                    top: 6,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: accents[i % 3],
                    boxShadow: `0 0 0 4px ${theme.bg}`,
                  }}
                />
                <div
                  style={{
                    background: theme.bgElev,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 4,
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: 16.5 }}>
                      {exp.role}
                    </span>
                    <span
                      className="mono-font"
                      style={{ fontSize: 12.5, color: theme.textDim }}
                    >
                      {exp.time}
                    </span>
                  </div>
                  <div
                    style={{
                      color: accents[i % 3],
                      fontWeight: 600,
                      fontSize: 13.5,
                      marginBottom: 14,
                    }}
                  >
                    {exp.company}{" "}
                    <span style={{ color: theme.textDim, fontWeight: 400 }}>
                      · {exp.place}
                    </span>
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: 18,
                      color: theme.textDim,
                      fontSize: 14,
                      lineHeight: 1.85,
                    }}
                  >
                    {exp.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ marginTop: 20 }}>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Users size={16} color={accentPurple} /> Leadership
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 16,
              }}
            >
              {LEADERSHIP.map((l) => (
                <div
                  key={l.role}
                  style={{
                    background: theme.bgElev,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 14,
                    padding: 20,
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: 14.5 }}>
                    {l.role}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: accentPurple,
                      margin: "4px 0 10px",
                    }}
                  >
                    {l.org} · {l.time}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: theme.textDim,
                      lineHeight: 1.7,
                    }}
                  >
                    {l.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */

function Projects({
  theme,
  accentBlue,
  accentPurple,
  accentCyan,
}: {
  theme: Theme;
  accentBlue: string;
  accentPurple: string;
  accentCyan: string;
}) {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s)].slice(0, 9);
  }, []);

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <section
      id="projects"
      style={{ padding: "100px 24px", background: theme.bgElev }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionEyebrow
          accent={accentBlue}
          theme={theme}
          text="Selected Work"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "flex-end",
            marginBottom: 30,
          }}
        >
          <h2
            className="display-font"
            style={{
              fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Projects that shipped.
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 30,
          }}
        >
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              style={{
                padding: "8px 14px",
                borderRadius: 100,
                fontSize: 12.5,
                fontWeight: 500,
                border: `1px solid ${filter === t ? accentBlue : theme.border}`,
                background: filter === t ? `${accentBlue}1f` : "transparent",
                color: filter === t ? accentBlue : theme.textDim,
                cursor: "pointer",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 22,
          }}
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                style={{
                  background: theme.bgCard,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 18,
                  padding: 24,
                  cursor: "pointer",
                }}
                onClick={() => setExpanded(expanded === p.name ? null : p.name)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 17 }}>
                      {p.name}
                    </div>
                    <div
                      className="mono-font"
                      style={{
                        fontSize: 11.5,
                        color: theme.textDim,
                        marginTop: 2,
                      }}
                    >
                      {p.period}
                    </div>
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: accentCyan }}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
                <p
                  style={{
                    color: theme.textDim,
                    fontSize: 13.8,
                    lineHeight: 1.7,
                    margin: "14px 0",
                  }}
                >
                  {p.summary}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 4,
                  }}
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        padding: "4px 9px",
                        borderRadius: 6,
                        background: `${accentPurple}18`,
                        color: accentPurple,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <AnimatePresence>
                  {expanded === p.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <ul
                        style={{
                          margin: "14px 0 0",
                          paddingLeft: 18,
                          fontSize: 13,
                          color: theme.textDim,
                          lineHeight: 1.8,
                        }}
                      >
                        {p.details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 12,
                    color: accentBlue,
                    fontWeight: 600,
                  }}
                >
                  {expanded === p.name ? "Show less ↑" : "Show details ↓"}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EDUCATION + CERTIFICATIONS                                         */
/* ------------------------------------------------------------------ */

function Education({
  theme,
  accentBlue,
  accentPurple,
  accentCyan,
}: {
  theme: Theme;
  accentBlue: string;
  accentPurple: string;
  accentCyan: string;
}) {
  return (
    <section id="education" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionEyebrow accent={accentCyan} theme={theme} text="Education" />
        <h2
          className="display-font"
          style={{
            fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
            fontWeight: 700,
            margin: "0 0 40px",
          }}
        >
          Academic foundation.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 18,
            marginBottom: 60,
            alignItems: "stretch",
          }}
        >
          {EDUCATION.map((e, i) => (
            <Reveal key={e.school + e.time} delay={i * 0.08}>
              <div
                style={{
                  background: theme.bgElev,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 16,
                  padding: 22,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <GraduationCap
                  size={20}
                  color={
                    [accentBlue, accentPurple, accentCyan, accentBlue][i % 4]
                  }
                />
                <div style={{ fontWeight: 700, fontSize: 15, marginTop: 12 }}>
                  {e.school}
                </div>
                <div
                  style={{
                    fontSize: 13.5,
                    color: theme.textDim,
                    marginTop: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {e.degree}
                </div>
                <div
                  className="mono-font"
                  style={{
                    fontSize: 11.5,
                    color: theme.textDim,
                    marginTop: 10,
                  }}
                >
                  {e.time} · {e.place}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionEyebrow
          accent={accentPurple}
          theme={theme}
          text="Certifications"
        />
        <h3
          className="display-font"
          style={{
            fontSize: "clamp(1.4rem,2.6vw,1.9rem)",
            fontWeight: 700,
            margin: "0 0 28px",
          }}
        >
          Continuous learning.
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 14,
          }}
        >
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.03}>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  background: theme.bgElev,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <Award
                  size={16}
                  color={accentBlue}
                  style={{ marginTop: 2, flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>
                    {c.name}
                  </div>
                  <div
                    className="mono-font"
                    style={{
                      fontSize: 11.5,
                      color: theme.textDim,
                      marginTop: 4,
                    }}
                  >
                    {c.date}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ACHIEVEMENTS                                                       */
/* ------------------------------------------------------------------ */

function Achievements({
  theme,
  accentBlue,
  accentPurple,
  accentCyan,
}: {
  theme: Theme;
  accentBlue: string;
  accentPurple: string;
  accentCyan: string;
}) {
  const accents = [accentBlue, accentPurple, accentCyan];
  return (
    <section
      id="achievements"
      style={{ padding: "100px 24px", background: theme.bgElev }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionEyebrow accent={accentBlue} theme={theme} text="Achievements" />
        <h2
          className="display-font"
          style={{
            fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
            fontWeight: 700,
            margin: "0 0 40px",
          }}
        >
          Moments worth noting.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 20,
          }}
        >
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  style={{
                    background: theme.bgCard,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 18,
                    padding: 26,
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `${accents[i % 3]}1f`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={20} color={accents[i % 3]} />
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15.5,
                      marginBottom: 10,
                    }}
                  >
                    {a.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: theme.textDim,
                      lineHeight: 1.7,
                    }}
                  >
                    {a.body}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */

function Contact({
  theme,
  accentBlue,
  accentPurple,
  accentCyan,
}: {
  theme: Theme;
  accentBlue: string;
  accentPurple: string;
  accentCyan: string;
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      setSent(false);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
            _subject: `New portfolio message from ${form.name.trim()}`,
            _replyto: form.email.trim(),
            _template: "table",
          }).toString(),
        },
      );

      if (!response.ok) {
        throw new Error("Unable to send your message right now.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      window.setTimeout(() => setSent(false), 5000);
    } catch {
      setError(
        "Your message could not be sent. Please try again or email me directly.",
      );
      setSent(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionEyebrow accent={accentPurple} theme={theme} text="Contact" />
        <h2
          className="display-font"
          style={{
            fontSize: "clamp(1.8rem,3.4vw,2.6rem)",
            fontWeight: 700,
            margin: "0 0 40px",
          }}
        >
          Let's build something.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: 40,
          }}
          className="contact-grid"
        >
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <ContactRow
                theme={theme}
                icon={Mail}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
                accent={accentBlue}
              />
              <ContactRow
                theme={theme}
                icon={Phone}
                label="Phone"
                value={CONTACT.phone}
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                accent={accentPurple}
              />
              <ContactRow
                theme={theme}
                icon={Linkedin}
                label="LinkedIn"
                value="Connect with me"
                href={CONTACT.linkedin}
                accent={accentCyan}
              />
              <ContactRow
                theme={theme}
                icon={Github}
                label="GitHub"
                value="See my code"
                href={CONTACT.github}
                accent={accentBlue}
              />
              <ContactRow
                theme={theme}
                icon={MapPin}
                label="Location"
                value={CONTACT.location}
                accent={accentPurple}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              style={{
                background: theme.bgElev,
                border: `1px solid ${theme.border}`,
                borderRadius: 20,
                padding: 30,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
                className="form-grid"
              >
                <FormField
                  theme={theme}
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <FormField
                  theme={theme}
                  label="Email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  type="email"
                />
              </div>
              <div style={{ marginTop: 16 }}>
                <label
                  style={{
                    fontSize: 12.5,
                    color: theme.textDim,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  style={{
                    width: "100%",
                    background: theme.bg,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 10,
                    padding: 12,
                    color: theme.text,
                    fontFamily: "inherit",
                    fontSize: 14,
                    resize: "vertical",
                  }}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: 20,
                  background: `linear-gradient(135deg, ${accentBlue}, ${accentPurple})`,
                  border: "none",
                  color: "#fff",
                  padding: "13px 26px",
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: 14.5,
                  cursor: isSubmitting ? "wait" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  opacity: isSubmitting ? 0.8 : 1,
                }}
              >
                <Send size={15} />{" "}
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      marginTop: 14,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#2ECC71",
                      fontSize: 13.5,
                    }}
                  >
                    <CheckCircle2 size={16} /> Message sent — I'll get back to
                    you soon.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      marginTop: 14,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#FF6B6B",
                      fontSize: 13.5,
                    }}
                  >
                    <X size={16} /> {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ContactRow({
  theme,
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  theme: Theme;
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
  accent: string;
}) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: theme.bgElev,
        border: `1px solid ${theme.border}`,
        borderRadius: 14,
        padding: 16,
        textDecoration: "none",
        color: theme.text,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: `${accent}1f`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={17} color={accent} />
      </div>
      <div>
        <div style={{ fontSize: 11.5, color: theme.textDim }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{value}</div>
      </div>
    </Wrapper>
  );
}

function FormField({
  theme,
  label,
  value,
  onChange,
  type = "text",
}: {
  theme: Theme;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label
        style={{
          fontSize: 12.5,
          color: theme.textDim,
          display: "block",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          background: theme.bg,
          border: `1px solid ${theme.border}`,
          borderRadius: 10,
          padding: "10px 12px",
          color: theme.text,
          fontSize: 14,
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer({
  theme,
  accentBlue,
  scrollTo,
}: {
  theme: Theme;
  accentBlue: string;
  scrollTo: (id: string) => void;
}) {
  return (
    <footer
      style={{ borderTop: `1px solid ${theme.border}`, padding: "34px 24px" }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span
          className="mono-font"
          style={{ fontSize: 12.5, color: theme.textDim }}
        >
          © 2026 {CONTACT.name}.
        </span>
        <div style={{ display: "flex", gap: 18 }}>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.textDim }}
          >
            <Github size={17} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: theme.textDim }}
          >
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${CONTACT.email}`} style={{ color: theme.textDim }}>
            <Mail size={17} />
          </a>
        </div>
        <button
          onClick={() => scrollTo("hero")}
          style={{
            background: "none",
            border: "none",
            color: accentBlue,
            fontSize: 12.5,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
