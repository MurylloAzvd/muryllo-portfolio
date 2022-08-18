import {
  FaLinkedin,
  FaGithub,
  FaBirthdayCake,
  FaHome,
  FaUniversity,
  FaLanguage,
  FaWhatsapp,
} from "react-icons/fa";

import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

import { PersonalInfo } from "./PersonalInfo";
import { SocialMediaLink } from "./SocialMediaLink";

import {
  AboutText,
  Container,
  PersonalInfoGrid,
  ProfileImage,
  ProfileName,
  SocialMediaContainer,
} from "./styles";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <h1 data-aos="fade-right">{t("common:section-title.about")}</h1>
      <ProfileImage data-aos="zoom-in" src="/profile.png" alt="avatar" />
      <ProfileName data-aos="fade-up">Muryllo</ProfileName>
      <SocialMediaContainer data-aos="fade-up">
        <SocialMediaLink
          href="https://www.linkedin.com/in/muryllodev"
          Icon={FaLinkedin}
        />
        <SocialMediaLink
          href="https://github.com/MurylloAzvd"
          Icon={FaGithub}
        />
        <SocialMediaLink
          href="https://api.whatsapp.com/send?phone=5584988784881"
          Icon={FaWhatsapp}
        />
      </SocialMediaContainer>
      <AboutText data-aos="fade-up">
        <Trans
          i18nKey="home:about-text.first"
          components={[<span key={0} />]}
        />
      </AboutText>
      <AboutText data-aos="fade-up">
        <Trans
          i18nKey="home:about-text.second"
          components={[<span key={0} />]}
        />
      </AboutText>

      <PersonalInfoGrid>
        <PersonalInfo
          Icon={FaHome}
          info={t("home:personal-info.address")}
          index={0}
        />
        <PersonalInfo
          Icon={FaBirthdayCake}
          info={t("home:personal-info.birthday")}
          index={1}
        />
        <PersonalInfo
          Icon={FaUniversity}
          info={t("home:personal-info.education")}
          index={2}
        />
        <PersonalInfo
          Icon={FaLanguage}
          info={t("home:personal-info.language")}
          index={3}
        />
      </PersonalInfoGrid>
    </Container>
  );
};
