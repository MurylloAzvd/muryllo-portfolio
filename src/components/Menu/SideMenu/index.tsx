import { Container } from "./styles";

interface SideMenuProps {
  isOpen: boolean;
}

export const SideMenu = ({ isOpen }: SideMenuProps) => {
  return (
    <Container isOpen={isOpen}>
      <li>Sobre</li>
      <li>Skills</li>
      <li>Portfolio</li>
      <li>Contato</li>
    </Container>
  );
};
