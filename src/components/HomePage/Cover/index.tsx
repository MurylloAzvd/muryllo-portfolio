import useTranslation from "next-translate/useTranslation";
import { Language } from "../../../enums";
import {
  Container,
  PresentationContainer,
  TypeWriterEffectContainer,
} from "./styles";

export const Cover = () => {
  const { t, lang } = useTranslation("home");

  return (
    <Container>
      <PresentationContainer data-aos="fade-up">
        <TypeWriterEffectContainer>
          <h2>Software Developer</h2>
        </TypeWriterEffectContainer>
        <h1>{"< Muryllo />"}</h1>
        <a
          href={`/resumes/resume-${
            lang === Language.EN ? "en" : "pt"
          }-muryllo.pdf`}
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
