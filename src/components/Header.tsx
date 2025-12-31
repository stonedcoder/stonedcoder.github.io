import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-notion-bg-primary/80 backdrop-blur-sm border-b border-notion-gray-100 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-lg text-notion-text-primary">
          My Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="/projects" className="text-notion-text-primary hover:text-notion-accent-blue">Projects</Link>
          <Link href="/about" className="text-notion-text-primary hover:text-notion-accent-blue">About</Link>
          <Link href="/contact" className="text-notion-text-primary hover:text-notion-accent-blue">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
