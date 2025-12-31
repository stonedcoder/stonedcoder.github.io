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
          Hello! I'm [Your Name], a passionate frontend developer with a knack for building beautiful
          and functional web applications. My journey in tech started with a fascination for how
          interactive experiences come to life on the web, and it has since grown into a dedication
          to crafting high-quality, user-centric digital products.
        </p>
        <p className="text-lg leading-relaxed">
          I specialize in modern JavaScript frameworks like React and Next.js, and I'm constantly
          exploring new technologies to stay at the forefront of web development. My goal is to
          create elegant solutions that not only meet user needs but also provide a delightful
          experience.
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