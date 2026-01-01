import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle'; // Import ThemeToggle

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 bg-notion-bg-primary/80 backdrop-blur-sm border-b border-notion-gray-100 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto flex justify-between items-center"> 
               <Link href="/" className="font-bold text-lg text-notion-text-primary">
          My Portfolio
        </Link>
        <ThemeToggle /> {/* Placed ThemeToggle here */}
      </nav>
    </header>
  );
};

export default Header;
