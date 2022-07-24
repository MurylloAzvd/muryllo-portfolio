import { useState } from "react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import { Cover } from "../styles/pages/home";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Cover>
        <HamburgerMenu
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        />
      </Cover>
    </>
  );
}
