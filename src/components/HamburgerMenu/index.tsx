import { Container } from "./styles";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  return (
    <Container isOpen={isOpen} onClick={onClick}>
      <span />
      <span />
      <span />
    </Container>
  );
};
