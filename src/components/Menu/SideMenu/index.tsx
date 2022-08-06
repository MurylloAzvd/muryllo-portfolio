import { Container } from "./styles";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const SideMenu = ({ isOpen, closeMenu }: SideMenuProps) => {
  return (
    <Container isOpen={isOpen}>
      <li>
        <a href="#" onClick={closeMenu}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
      </li>
      <li>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
      </li>
      <li>
        <a href="#specialties" onClick={closeMenu}>
          Specialties
        </a>
      </li>
      <li>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </li>
    </Container>
  );
};
