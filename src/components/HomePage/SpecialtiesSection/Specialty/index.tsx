import { IconType } from "react-icons";
import { Container, SpecialtyIConContainer } from "./styles";

interface SpecialtyProps {
  title: string;
  Icon: IconType;
  index: number;
}

export const Specialty = ({ Icon, title, index }: SpecialtyProps) => {
  return (
    <Container data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
      <SpecialtyIConContainer>
        <Icon />
      </SpecialtyIConContainer>
      <h2>{title}</h2>
    </Container>
  );
};
