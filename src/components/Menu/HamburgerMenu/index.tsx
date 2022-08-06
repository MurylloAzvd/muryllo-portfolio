import { Container } from "./styles";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <Container isOpen={isOpen} onClick={toggleMenu}>
      <span />
      <span />
      <span />
    </Container>
  );
};
