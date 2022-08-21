import useTranslation from "next-translate/useTranslation";

import { SectionTitle } from "../../SectionTitle";

import { ProjectCard } from "./ProjectCard";

import { Container, ProjectsContainer } from "./styles";

export const ProjectsSection = () => {
  const { t } = useTranslation("common");

  return (
    <Container id="projects">
      <SectionTitle>{t("section-title.projects")}</SectionTitle>
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
          pageLink="/projects/fretec"
          index={0}
        />
        <ProjectCard
          title="Desopila App"
          description={t("project-description.desopila")}
          logo="/projects/desopila/logo.png"
          technologies={["React Native", "Context API"]}
          pageLink="/projects/desopila"
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
          pageLink="/projects/resolve-tudo"
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
          pageLink="/projects/cardiometrics"
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
          pageLink="/projects/confia-shop"
          index={4}
        />
      </ProjectsContainer>
    </Container>
  );
};
