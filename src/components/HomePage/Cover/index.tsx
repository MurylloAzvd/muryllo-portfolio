import useTranslation from "next-translate/useTranslation";
import {
  Container,
  PresentationContainer,
  TypeWriterEffectContainer,
} from "./styles";

export const Cover = () => {
  const { t } = useTranslation("home");

  return (
    <Container>
      <PresentationContainer data-aos="fade-up">
        <TypeWriterEffectContainer>
          <h2>Front-End Developer</h2>
        </TypeWriterEffectContainer>
        <h1>{"< Muryllo />"}</h1>
        <a
          href="http://www.africau.edu/images/default/sample.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="shadow-link"
        >
          {t("download-resume")}
        </a>
      </PresentationContainer>
    </Container>
  );
};
