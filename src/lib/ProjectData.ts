// src/lib/ProjectData.ts

export interface Project {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  techStack: string[];
  projectLink?: string;
  sourceLink?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    icon: 'Terminal',
    title: 'CLI Agent',
    description: 'An AI-powered command-line interface agent for automating software engineering tasks.',
    techStack: ['Python', 'Generative AI', 'Bash'],
    projectLink: '#',
    sourceLink: '#',
  },
  {
    id: '2',
    icon: 'LayoutGrid',
    title: 'Portfolio Website',
    description: 'A personal portfolio website inspired by Notion.so, built with Next.js and Tailwind CSS.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    projectLink: '#',
    sourceLink: '#',
  },
  {
    id: '3',
    icon: 'Cloud',
    title: 'Cloud Management Tool',
    description: 'A tool for managing cloud resources across multiple providers with a unified interface.',
    techStack: ['Go', 'Kubernetes', 'AWS', 'Azure'],
    projectLink: '#',
    sourceLink: '#',
  },
  {
    id: '4',
    icon: 'Database',
    title: 'E-commerce Backend',
    description: 'Robust backend for an e-commerce platform, handling products, orders, and payments.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Stripe API'],
    projectLink: '#',
    sourceLink: '#',
  },
];
