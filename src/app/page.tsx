import Image from "next/image";
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProjectsSection />
      <AboutSection />
    </Layout>
  );
}
