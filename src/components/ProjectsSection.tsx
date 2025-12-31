// src/components/ProjectsSection.tsx

import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/ProjectData';

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-notion-text-primary text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
