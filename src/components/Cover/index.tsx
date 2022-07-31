import { useState } from "react";
import { HamburgerMenu } from "../HamburgerMenu";
import {
  Container,
  DownloadResume,
  PresentationContainer,
  TypeWriterEffectContainer,
} from "./styles";

export const Cover = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      />
      <PresentationContainer>
        <TypeWriterEffectContainer>
          <h2>Front-End Developer</h2>
        </TypeWriterEffectContainer>
        <h1>{"< Muryllo />"}</h1>
        <DownloadResume
          href="http://www.africau.edu/images/default/sample.pdf"
          download
          target="_blank"
        >
          Download Resume
        </DownloadResume>
      </PresentationContainer>
    </Container>
  );
};