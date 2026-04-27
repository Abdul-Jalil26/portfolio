import MobileBar from './layout/MobileBar';
import DrawerMenu from './layout/DrawerMenu';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ResearchSection from './sections/ResearchSection';
import ProjectsSection from './sections/ProjectsSection';
import BlogSection from './sections/BlogSection';
import ContactSection from './sections/ContactSection';
import PortfolioClientEffects from './PortfolioClientEffects';
import ChatWidget from './ChatWidget';

export default function PortfolioPage() {
  return (
    <>
      <MobileBar />
      <DrawerMenu />

      <div className="app">
        <Sidebar />

        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ResearchSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </main>
      </div>

      <ChatWidget />
      <PortfolioClientEffects />
    </>
  );
}
