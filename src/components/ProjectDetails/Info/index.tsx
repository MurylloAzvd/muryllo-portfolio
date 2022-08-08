import { Container, LinkContainer } from "./styles";

interface InfoProps {
  title: string;
  description: string;
  link: string;
}

export const Info = ({ description, link, title }: InfoProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <LinkContainer>
        <span>Link:</span>
        <a href={link} target="blank">
          {link}
        </a>
      </LinkContainer>
    </Container>
  );
};
