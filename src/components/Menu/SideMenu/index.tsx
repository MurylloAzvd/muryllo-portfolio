import { Container } from "./styles";

interface SideMenuProps {
  isOpen: boolean;
}

export const SideMenu = ({ isOpen }: SideMenuProps) => {
  return (
    <Container isOpen={isOpen}>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Specialties</li>
      <li>Contact</li>
    </Container>
  );
};
