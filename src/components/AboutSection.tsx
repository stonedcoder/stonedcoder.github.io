"use client";

// src/components/AboutSection.tsx

import React, { useRef, useEffect } from 'react';
import { LucideIcon, Rocket, Code, Lightbulb, Users } from 'lucide-react'; // Added Users icon
import * as LucideIcons from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion'; // Added imports

interface CalloutProps {
  icon: string;
  title: string;
  description: string;
}

const Callout: React.FC<CalloutProps> = ({ icon, title, description }) => {
  const IconComponent = (LucideIcons as { [key: string]: LucideIcon })[icon];
  return (
    <div className="flex items-start p-4 border border-notion-gray-100 rounded-md bg-notion-gray-100/50">
      {IconComponent && <IconComponent className="w-6 h-6 text-notion-accent-blue mr-4 mt-1" />}
      <div>
        <h3 className="font-semibold text-notion-text-primary mb-1">{title}</h3>
        <p className="text-notion-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};


const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
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
      <h2 className="text-4xl font-bold text-notion-text-primary text-center mb-12">About Me</h2>
      <div className="max-w-3xl mx-auto text-notion-text-primary space-y-6">
        <p className="text-lg leading-relaxed">
          I’m a systems-focused technical professional with over four years of experience working across cloud telephony, APIs, data platforms, and production-grade systems. My work spans operating and optimizing global VoIP infrastructure, supporting contact center platforms, and ensuring reliability at scale. At Exotel, I work closely with call routing, DID mapping across 191 countries, node flows, API debugging, and custom operational reporting—helping improve uptime, performance, and customer experience through data-driven decisions and structured root cause analysis.
        </p>
        <p className="text-lg leading-relaxed">
          Before this, I’ve supported API-driven products, manufacturing systems, and machine-learning–based platforms, collaborating with engineering, data, and business teams to resolve complex issues and improve workflows. This combination of SaaS operations and manufacturing discipline has shaped how I approach problems: understand the system end-to-end, identify failure points, and build durable fixes instead of temporary patches. I enjoy working close to infrastructure and data, and I’m continuously expanding my skill set toward full-stack and platform engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Callout
            icon="Rocket"
            title="Fast Learner"
            description="Quickly grasp new technologies and adapt to evolving project requirements."
          />
          <Callout
            icon="Code"
            title="Clean Code Enthusiast"
            description="Committed to writing maintainable, readable, and efficient code."
          />
          <Callout
            icon="Lightbulb"
            title="Problem Solver"
            description="Enjoy tackling complex challenges and devising innovative solutions."
          />
          <Callout
            icon="Users"
            title="Collaborative Spirit"
            description="Thrive in team environments, fostering open communication and shared goals."
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;