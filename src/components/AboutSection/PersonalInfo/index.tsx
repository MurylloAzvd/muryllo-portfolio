import { IconType } from "react-icons";
import { Container } from "./styles";

interface PersonalInfoProps {
  Icon: IconType;
  info: string;
  index: number;
}

export const PersonalInfo = ({ Icon, info, index }: PersonalInfoProps) => {
  return (
    <Container data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
      <Icon />
      <span>{info}</span>
    </Container>
  );
};
