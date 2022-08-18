import useTranslation from "next-translate/useTranslation";
import {
  Container,
  DownloadResume,
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
        <DownloadResume
          href="http://www.africau.edu/images/default/sample.pdf"
          download
          target="_blank"
        >
          {t("download-resume")}
        </DownloadResume>
      </PresentationContainer>
    </Container>
  );
};
