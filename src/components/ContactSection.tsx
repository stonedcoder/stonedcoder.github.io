// src/components/ContactSection.tsx

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-notion-text-primary mb-8">Get In Touch</h2>
      <p className="text-xl text-notion-gray-500 max-w-2xl mx-auto mb-12">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex justify-center space-x-8">
        <Link
          href="mailto:your.email@example.com"
          className="text-notion-text-primary hover:text-notion-accent-blue transition-colors duration-200"
          aria-label="Email"
        >
          <Mail size={36} strokeWidth={1.5} />
        </Link>
        <Link
          href="http://github.com/stonedcoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-notion-text-primary hover:text-notion-accent-blue transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={36} strokeWidth={1.5} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/raunaq-verma/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-notion-text-primary hover:text-notion-accent-blue transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={36} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
