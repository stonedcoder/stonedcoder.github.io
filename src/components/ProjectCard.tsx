// src/components/ProjectCard.tsx

import React from 'react';
import { LucideIcon, Github, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react'; // Import all icons

import { Project } from '@/lib/ProjectData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const IconComponent = (LucideIcons as { [key: string]: LucideIcon })[project.icon];

  return (
    <div className="bg-notion-bg-primary border border-notion-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-4">
        {IconComponent && <IconComponent className="w-6 h-6 text-notion-text-primary mr-3" />}
        <h3 className="text-xl font-semibold text-notion-text-primary">{project.title}</h3>
      </div>
      <p className="text-notion-gray-500 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-notion-gray-100 text-notion-gray-500 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-notion-accent-blue hover:underline flex items-center"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            View Project
          </a>
        )}
        {project.sourceLink && (
          <a
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-notion-accent-blue hover:underline flex items-center"
          >
            <Github className="w-4 h-4 mr-1" />
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
