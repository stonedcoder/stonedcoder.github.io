import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-notion-bg-primary border-t border-notion-gray-100 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <Link
            href="https://github.com/yourusername" // Replace with actual GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-notion-gray-500 hover:text-notion-accent-blue transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} strokeWidth={1.5} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourprofile" // Replace with actual LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-notion-gray-500 hover:text-notion-accent-blue transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} strokeWidth={1.5} />
          </Link>
          <Link
            href="https://twitter.com/yourusername" // Replace with actual Twitter profile
            target="_blank"
            rel="noopener noreferrer"
            className="text-notion-gray-500 hover:text-notion-accent-blue transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={24} strokeWidth={1.5} />
          </Link>
          <Link
            href="mailto:your.email@example.com"
            className="text-notion-gray-500 hover:text-notion-accent-blue transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} strokeWidth={1.5} />
          </Link>
        </div>
        <p className="text-sm text-notion-gray-500">
          © {currentYear} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
