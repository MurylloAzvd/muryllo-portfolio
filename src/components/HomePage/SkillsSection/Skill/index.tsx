import { Card, Container } from "./styles";

interface SkillProps {
  label: string;
  imgSrc: string;
}

export const Skill = ({ imgSrc, label }: SkillProps) => {
  return (
    <Container>
      <Card data-aos="zoom-in-up">
        <img src={imgSrc} alt={label} />
      </Card>
      <span>{label}</span>
    </Container>
  );
};
