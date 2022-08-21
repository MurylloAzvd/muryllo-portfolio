import { IconType } from "react-icons";
import { Container } from "./styles";

interface SocialMediaLinkProps {
  href: string;
  Icon: IconType;
}

export const SocialMediaLink = ({ href, Icon }: SocialMediaLinkProps) => {
  return (
    <Container
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline-effect"
    >
      <Icon />
    </Container>
  );
};
