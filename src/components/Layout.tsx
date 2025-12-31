import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header will go here */}
      <header className="py-4 px-6 bg-notion-bg-primary border-b border-notion-gray-100 sticky top-0 z-50">
        {/* Placeholder for Header component */}
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="font-bold text-lg text-notion-text-primary">My Portfolio</div>
          <div className="space-x-4">
            <a href="#" className="text-notion-text-primary hover:text-notion-accent-blue">Projects</a>
            <a href="#" className="text-notion-text-primary hover:text-notion-accent-blue">About</a>
            <a href="#" className="text-notion-text-primary hover:text-notion-accent-blue">Contact</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow max-w-4xl mx-auto py-8 px-6 w-full">
        {children}
      </main>

      {/* Footer will go here */}
      <footer className="py-4 px-6 bg-notion-bg-primary border-t border-notion-gray-100 mt-8">
        {/* Placeholder for Footer component */}
        <div className="max-w-4xl mx-auto text-center text-sm text-notion-gray-500">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
