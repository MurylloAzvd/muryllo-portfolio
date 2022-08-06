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
}

export const Specialty = ({ Icon, description, title }: SpecialtyProps) => {
  return (
    <Container>
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
