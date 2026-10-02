export type ContactInfo = {
  name: string;
  handle: string;
  location: string;
  timezone: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
};

export type NavItem = { id: string; label: string };

export type Tool = {
  name: string;
  /** Other spellings used in project tags, for linking tools to projects. */
  aliases?: string[];
};

export type ToolGroup = {
  id: string;
  label: string;
  tools: Tool[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  years: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
};

export type LeadershipItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  subtitle: string;
  period: string;
  category: "AI & ML" | "Full Stack" | "Systems & Security" | "Tools";
  tags: string[];
  summary: string;
  details: string[];
  featured?: boolean;
  /** Ordered stages of the system, shown as a flow strip on case studies. */
  pipeline?: { label: string; note: string }[];
  /** The problem the project addresses, worded from the project's own description. */
  problem?: string;
  /** What I personally did on the project. */
  role?: string;
  /** Concrete results, only things that are true and checkable. */
  outcomes?: string[];
  /** Real screenshots, first one is the lead image. Files live in public/projects/. */
  screenshots?: Screenshot[];
  /** Which coded illustration to show on the case study when there are no screenshots. */
  preview?: "prodigidesk";
  link: string | null;
  github?: string | null;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  honors?: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

export type AchievementItem = {
  title: string;
  organization: string;
  description: string;
};
