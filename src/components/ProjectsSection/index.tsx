import {
  BackCard,
  Container,
  FrontCard,
  ProjectCard,
  Technology,
  TechnologiesContainer,
} from "./styles";

export const ProjectsSection = () => {
  return (
    <Container id="projects">
      <h1>Projects</h1>
      <ProjectCard>
        <FrontCard>
          <img src="/projects/fretec/logo.png" alt="fretec-logo" />
          <h2>Fretec</h2>
        </FrontCard>
        <BackCard>
          <h2>Fretec</h2>
          <p>
            The Fretec Entregas is an application for independent couriers who
            want to carry out freight in the city of Natal/RN. The app gives the
            delivery person a previously calculated smart route.
          </p>
          <TechnologiesContainer>
            <Technology>HTML 5</Technology>
            <Technology>SCSS/SASS</Technology>
            <Technology>Javascript</Technology>
            <Technology>React</Technology>
          </TechnologiesContainer>
          <button>Access</button>
        </BackCard>
      </ProjectCard>

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
