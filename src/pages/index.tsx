import { Cover } from "../components/Cover";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { SpecialtiesSection } from "../components/SpecialtiesSection";
import { ProjectsSection } from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Cover />
      <AboutSection />
      <SkillsSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
