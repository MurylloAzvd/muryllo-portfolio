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

import { SectionTitle } from "../SectionTitle";

import { PersonalInfo } from "./PersonalInfo";
import { SocialMediaLink } from "./SocialMediaLink";

import {
  AboutText,
  Container,
  PersonalInfoGrid,
  ProfileImage,
  ProfileName,
  SocialMediaContainer,
  VideoContainer,
  IframeWrapper,
} from "./styles";

export const AboutSection = () => {
  const { t } = useTranslation();

  const socialMedia = [
    {
      href: "https://www.linkedin.com/in/muryllodev",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/MurylloAzvd",
      icon: FaGithub,
    },
    {
      href: "https://api.whatsapp.com/send?phone=5584996903223",
      icon: FaWhatsapp,
    },
  ];

  const personalInfo = [
    {
      icon: FaHome,
      info: t("home:personal-info.address"),
    },
    {
      icon: FaLanguage,
      info: t("home:personal-info.language"),
    },
  ];

  return (
    <Container id="about">
      <SectionTitle>{t("common:section-title.about")}</SectionTitle>
      <ProfileImage data-aos="zoom-in" src="/profile.png" alt="avatar" />
      <ProfileName data-aos="fade-up">Muryllo</ProfileName>
      <SocialMediaContainer data-aos="fade-up">
        {socialMedia.map(({ href, icon }, index) => (
          <SocialMediaLink key={index} Icon={icon} href={href} />
        ))}
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
        {personalInfo.map(({ icon, info }, index) => (
          <PersonalInfo key={index} Icon={icon} info={info} index={index} />
        ))}
      </PersonalInfoGrid>
      <VideoContainer>
        <IframeWrapper>
          <iframe
            src="https://www.youtube.com/embed/mcvVvhNuxL8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </IframeWrapper>
      </VideoContainer>
    </Container>
  );
};
