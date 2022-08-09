import Link from "next/link";
import { Container } from "./styles";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const SideMenu = ({ isOpen, closeMenu }: SideMenuProps) => {
  return (
    <Container isOpen={isOpen}>
      <li>
        <Link href="/#" passHref>
          <a onClick={closeMenu}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/#about" passHref>
          <a onClick={closeMenu}>About</a>
        </Link>
      </li>
      <li>
        <Link href="/#skills" passHref>
          <a onClick={closeMenu}>Skills</a>
        </Link>
      </li>
      <li>
        <Link href="/#specialties" passHref>
          <a onClick={closeMenu}>Specialties</a>
        </Link>
      </li>
      <li>
        <Link href="/#projects" passHref>
          <a onClick={closeMenu}>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/#contact" passHref>
          <a onClick={closeMenu}>Contact</a>
        </Link>
      </li>
    </Container>
  );
};
