import {
  FaLinkedin,
  FaGithub,
  FaBirthdayCake,
  FaHome,
  FaUniversity,
  FaLanguage,
  FaWhatsapp,
} from "react-icons/fa";

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
  return (
    <Container id="about">
      <h1 data-aos="fade-right">About</h1>
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
        Passionate about <span>technology</span>. What inspires me is knowing
        that I can help create systems that can be used by thousands of people
        around the world.
      </AboutText>
      <AboutText data-aos="fade-up">
        Currently working as a <span>Front-end</span> developer, developing{" "}
        <span>web</span> and <span>mobile</span> applications. Using as a tool,
        technologies such as:{" "}
        <span>HTML, CSS, JavaScript, TypeScript, ReactJS</span> and its
        ecosystem. In addition to other technologies that help in the
        development and integration of applications:{" "}
        <span>
          Git, Gitlab, VSCode, Postman, Figma, Styled-Components, Next.js
        </span>
        .
      </AboutText>

      <PersonalInfoGrid>
        <PersonalInfo Icon={FaHome} info="Natal - RN, Brazil" />
        <PersonalInfo Icon={FaBirthdayCake} info="Since 1998" />
        <PersonalInfo
          Icon={FaUniversity}
          info="Information Technology - IMD/UFRN"
        />
        <PersonalInfo
          Icon={FaLanguage}
          info="Portuguese (Native) | English (Intermediate)"
        />
      </PersonalInfoGrid>
    </Container>
  );
};
