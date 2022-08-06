import { IconType } from "react-icons";
import { Container } from "./styles";

interface PersonalInfoProps {
  Icon: IconType;
  info: string;
}

export const PersonalInfo = ({ Icon, info }: PersonalInfoProps) => {
  return (
    <Container>
      <Icon />
      <span>{info}</span>
    </Container>
  );
};
