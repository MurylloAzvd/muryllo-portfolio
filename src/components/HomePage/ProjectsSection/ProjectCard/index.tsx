import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
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
  index: number;
}

export const ProjectCard = ({
  description,
  logo,
  technologies,
  title,
  pageLink,
  index,
}: ProjectCardProps) => {
  const { t } = useTranslation("home");

  return (
    <Container data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
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
            <button className="shadow-link">{t("see-more")}</button>
          </Link>
        </BackCard>
      </InnerCard>
    </Container>
  );
};
