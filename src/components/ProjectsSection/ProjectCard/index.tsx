import Link from "next/link";
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
  logo: string;
  technologies: string[];
  pageLink: string;
}

export const ProjectCard = ({
  description,
  logo,
  technologies,
  title,
  pageLink,
}: ProjectCardProps) => {
  return (
    <Container data-aos="zoom-in">
      <InnerCard>
        <FrontCard>
          <img src={logo} alt={title} />
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
          <Link href={pageLink} passHref>
            <button>See more</button>
          </Link>
        </BackCard>
      </InnerCard>
    </Container>
  );
};
