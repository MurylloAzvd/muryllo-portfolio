import { useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { SideMenu } from "./SideMenu";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HamburgerMenu
        isOpen={isOpen}
        onClick={() => setIsOpen((prevState) => !prevState)}
      />
      <SideMenu isOpen={isOpen} />
    </>
  );
};
