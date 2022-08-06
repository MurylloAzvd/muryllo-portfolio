import { Cover } from "../components/Cover";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/FooterSection";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { SpecialtiesSection } from "../components/SpecialtiesSection";

export default function Home() {
  return (
    <>
      <Cover />
      <AboutSection />
      <SkillsSection />
      {/* 
        Projects

        -Fretec
        -Desopila
        -Resolve tudo
        -Cardiometrics
        -Confia.shop

      */}
      <SpecialtiesSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
