import useTranslation from "next-translate/useTranslation";
import { ProjectCard } from "./ProjectCard";
import { Container, ProjectsContainer } from "./styles";

export const ProjectsSection = () => {
  const { t } = useTranslation("common");

  return (
    <Container id="projects">
      <h1 data-aos="fade-right">{t("section-title.projects")}</h1>
      <ProjectsContainer>
        <ProjectCard
          title="Fretec Entregas"
          description={t("project-description.fretec")}
          logo="/projects/fretec/logo.png"
          technologies={[
            "React",
            "Bootstrap",
            "Redux Toolkit",
            "React Native",
            "Firabase",
          ]}
          pageLink="/fretec"
          index={0}
        />
        <ProjectCard
          title="Desopila App"
          description={t("project-description.desopila")}
          logo="/projects/desopila/logo.png"
          technologies={["React Native", "Context API"]}
          pageLink="/desopila"
          index={1}
        />
        <ProjectCard
          title="Resolve Tudo"
          description={t("project-description.resolve-tudo")}
          logo="/projects/resolve-tudo/logo.webp"
          technologies={[
            "React",
            "Typescript",
            "Styled Components",
            "React Native",
            "Context API",
          ]}
          pageLink="/resolve-tudo"
          index={2}
        />
        <ProjectCard
          title="Cardiometrics"
          description={t("project-description.cardiometrics")}
          logo="/projects/cardiometrics/logo.jpg"
          technologies={[
            "React",
            "Typescript",
            "Next.Js",
            "Styled Components",
            "React Native",
            "Expo",
            "Context API",
          ]}
          pageLink="/cardiometrics"
          index={3}
        />
        <ProjectCard
          title="Confia.shop"
          description={t("project-description.confia-shop")}
          logo="/projects/confia-shop/logo.png"
          technologies={[
            "React",
            "Typescript",
            "Styled Components",
            "Context API",
          ]}
          pageLink="/confia-shop"
          index={4}
        />
      </ProjectsContainer>
    </Container>
  );
};
