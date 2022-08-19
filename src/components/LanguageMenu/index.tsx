import { useState } from "react";
import { useRouter } from "next/router";
import { MdExpandMore } from "react-icons/md";
import useTranslation from "next-translate/useTranslation";
import { Container, LanguagesContainer, LanguageContainer } from "./styles";

interface LanguageProps {
  label: string;
  flag: string;
}

interface LanguagesProps {
  [key: string]: LanguageProps;
}

enum Language {
  EN = "en",
  PT = "pt-BR",
}

const languages = {
  [Language.EN]: {
    label: "EN",
    flag: "/flags/usa.png",
  },
  [Language.PT]: {
    label: "PT",
    flag: "/flags/bra.png",
  },
} as LanguagesProps;

export const LanguageMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { lang } = useTranslation();

  const currentLanguage = languages[lang];

  const selectLanguage = (language: Language) => {
    setIsOpen(false);
    router.push("/", "/", { locale: language });
  };

  return (
    <Container
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img src={currentLanguage.flag} alt="flag" />
      <span>{currentLanguage.label}</span>
      <MdExpandMore />
      <LanguagesContainer isOpen={isOpen}>
        <LanguageContainer onClick={() => selectLanguage(Language.EN)}>
          <img src={languages[Language.EN].flag} alt="flag" />
          <span>{languages[Language.EN].label}</span>
        </LanguageContainer>
        <LanguageContainer onClick={() => selectLanguage(Language.PT)}>
          <img src={languages[Language.PT].flag} alt="flag" />
          <span>{languages[Language.PT].label}</span>
        </LanguageContainer>
      </LanguagesContainer>
    </Container>
  );
};
