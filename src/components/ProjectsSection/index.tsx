import { ProjectCard } from "./ProjectCard";
import { Container, ProjectsContainer } from "./styles";

export const ProjectsSection = () => {
  return (
    <Container id="projects">
      <h1>Projects</h1>
      <ProjectsContainer>
        <ProjectCard
          title="Fretec"
          description="The Fretec Entregas is an application for independent couriers who
          want to carry out freight in the city of Natal/RN. The app gives the
          delivery person a previously calculated smart route."
          imageSrc="/projects/fretec/logo.png"
          technologies={["HTML 5", "SCSS/SASS", "Javascript", "React"]}
        />
        <ProjectCard
          title="Fretec"
          description="The Fretec Entregas is an application for independent couriers who
          want to carry out freight in the city of Natal/RN. The app gives the
          delivery person a previously calculated smart route."
          imageSrc="/projects/fretec/logo.png"
          technologies={["HTML 5", "SCSS/SASS", "Javascript", "React"]}
        />
      </ProjectsContainer>

      {/* 
        Projects

        -Fretec
        -Desopila
        -Resolve tudo
        -Cardiometrics
        -Confia.shop

      */}
    </Container>
  );
};
