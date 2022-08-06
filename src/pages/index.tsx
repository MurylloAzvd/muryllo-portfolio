import { Cover } from "../components/Cover";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/FooterSection";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { SpecialtiesSection } from "../components/SpecialtiesSection";
import { Menu } from "../components/Menu";
import { ProjectsSection } from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Menu />
      <Cover />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <SpecialtiesSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
