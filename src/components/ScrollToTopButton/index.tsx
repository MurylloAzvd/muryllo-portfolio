import { Container } from "./styles";
import { MdOutlineArrowUpward } from "react-icons/md";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleScroll = () => setIsButtonVisible(scrollY > 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Container onClick={scrollToTop} isVisible={isButtonVisible}>
      <MdOutlineArrowUpward />
    </Container>
  );
};
