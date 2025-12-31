"use client";

// src/components/ProjectsSection.tsx

import React, { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/ProjectData';
import { motion, useInView, useAnimation } from 'framer-motion';

const ProjectsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger once when 50% in view
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      className="py-16"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-4xl font-bold text-notion-text-primary text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;