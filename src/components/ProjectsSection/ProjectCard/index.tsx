import {
  Container,
  BackCard,
  FrontCard,
  TechnologiesContainer,
  Technology,
  InnerCard,
} from "./styles";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
}

export const ProjectCard = ({
  description,
  imageSrc,
  technologies,
  title,
}: ProjectCardProps) => {
  return (
    <Container>
      <InnerCard>
        <FrontCard>
          <img src={imageSrc} alt={title} />
          <h2>{title}</h2>
        </FrontCard>
        <BackCard>
          <h2>{title}</h2>
          <p>{description}</p>
          <TechnologiesContainer>
            {technologies.map((tech) => (
              <Technology key={tech}>{tech}</Technology>
            ))}
          </TechnologiesContainer>
          <button>See more</button>
        </BackCard>
      </InnerCard>
    </Container>
  );
};
