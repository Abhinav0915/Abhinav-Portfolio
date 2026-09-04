import React from "react";

export type IconProps = {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export type ContactInfo = {
  name: string;
  handle: string;
  roleTitle: string;
  location: string;
  timezone: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  status: string;
};

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type SkillCategory = {
  id: string;
  category: string;
  tagline: string;
  iconName: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
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
  subtitle?: string;
  period: string;
  category: "AI & ML" | "Full Stack" | "Systems & Security" | "Tools";
  tags: string[];
  summary: string;
  details: string[];
  featured?: boolean;
  architectureHighlights?: {
    label: string;
    description: string;
  }[];
  metrics?: string[];
  link: string | null;
  github?: string | null;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  honors?: string;
  badge?: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
};

export type AchievementItem = {
  title: string;
  organization: string;
  date?: string;
  description: string;
  badge: string;
};
