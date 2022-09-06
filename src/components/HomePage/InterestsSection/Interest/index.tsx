import { IconType } from "react-icons";
import { Container, IconWrapper } from "./styles";

interface InterestProps {
  title: string;
  Icon: IconType;
  index: number;
}

export const Interest = ({ Icon, title, index }: InterestProps) => {
  return (
    <Container data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <h2>{title}</h2>
    </Container>
  );
};
