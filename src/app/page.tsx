import Image from "next/image";
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
