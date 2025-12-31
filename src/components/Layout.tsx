import Footer from './Footer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto py-8 px-6 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};


export default Layout;
