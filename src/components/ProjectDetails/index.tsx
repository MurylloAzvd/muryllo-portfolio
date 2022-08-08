import { Header } from "./Header";
import { ImagesSlider } from "./ImagesSlider";
import { Info } from "./Info";
import { Container } from "./styles";

export const ProjectDetails = () => {
  return (
    <Container>
      <Header />
      <ImagesSlider />
      <Info />
    </Container>
  );
};
