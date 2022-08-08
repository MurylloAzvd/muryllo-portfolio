import { Header } from "./Header";
import { ImagesSlider } from "./ImagesSlider";
import { Info } from "./Info";
import { Container } from "./styles";

interface ProjectDetailsProps {
  title: string;
  description: string;
  link: string;
  images: string[];
}

export const ProjectDetails = ({
  description,
  images,
  link,
  title,
}: ProjectDetailsProps) => {
  return (
    <Container>
      <Header projectTitle={title} />
      <ImagesSlider images={images} />
      <Info description={description} link={link} title={title} />
    </Container>
  );
};
