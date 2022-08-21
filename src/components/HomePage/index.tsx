import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { Cover } from "./Cover";
import { LanguageMenu } from "./LanguageMenu";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { SpecialtiesSection } from "./SpecialtiesSection";

export const HomePage = () => {
  return (
    <>
      <LanguageMenu />
      <Cover />
      <AboutSection />
      <SkillsSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};
