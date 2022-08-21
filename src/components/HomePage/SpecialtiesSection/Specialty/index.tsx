import { IconType } from "react-icons";
import {
  Container,
  SpecialtyIConContainer,
  SpecialtyInfoContainer,
} from "./styles";

interface SpecialtyProps {
  title: string;
  description: string;
  Icon: IconType;
  index: number;
}

export const Specialty = ({
  Icon,
  description,
  title,
  index,
}: SpecialtyProps) => {
  return (
    <Container data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
      <SpecialtyIConContainer>
        <Icon />
      </SpecialtyIConContainer>
      <SpecialtyInfoContainer>
        <h2>{title}</h2>
        <p>{description}</p>
      </SpecialtyInfoContainer>
    </Container>
  );
};
