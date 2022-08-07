import { ProjectCard } from "./ProjectCard";
import { Container, ProjectsContainer } from "./styles";

export const ProjectsSection = () => {
  return (
    <Container id="projects">
      <h1>Projects</h1>
      <ProjectsContainer>
        <ProjectCard
          title="Fretec Entregas"
          description="The Fretec Entregas is an application for independent couriers who
          want to carry out freight in the city of Natal/RN. The app gives the
          delivery person a previously calculated smart route."
          imageSrc="/projects/fretec/logo.png"
          technologies={[
            "React",
            "Bootstrap",
            "Redux Toolkit",
            "React Native",
            "Firabase",
          ]}
        />
        <ProjectCard
          title="Desopila App"
          description="App focused on location advertising for lease, such as: farms, inns, speedboats. Connecting Environment Owners with potential users."
          imageSrc="/projects/desopila/logo.png"
          technologies={["React Native", "Context API"]}
        />
        <ProjectCard
          title="Resolve Tudo"
          description="App to find any type of service provider quickly and easily."
          imageSrc="/projects/resolve-tudo/logo.webp"
          technologies={[
            "React",
            "Typescript",
            "Styled Components",
            "React Native",
            "Context API",
          ]}
        />
        <ProjectCard
          title="Cardiometrics"
          description="Cardiologists with different specialties who aim to form a medical opinion team, with multidisciplinary integration as a way of promoting knowledge and assistance in cardiology."
          imageSrc="/projects/cardiometrics/logo.jpg"
          technologies={[
            "React",
            "Typescript",
            "Next.Js",
            "Styled Components",
            "React Native",
            "Expo",
            "Context API",
          ]}
        />
        <ProjectCard
          title="Confia.shop"
          description="Confia.shop is a platform for selling products through a digital menu. The idea is that customers can choose and pay for your products without the need for a salesperson nearby."
          imageSrc="/projects/confia-shop/logo.png"
          technologies={[
            "React",
            "Typescript",
            "Styled Components",
            "Context API",
          ]}
        />
      </ProjectsContainer>
    </Container>
  );
};
