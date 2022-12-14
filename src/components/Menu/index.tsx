import { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { SideMenu } from "./SideMenu";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <SideMenu isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
};
