import {
  FaLinkedin,
  FaGithub,
  FaBirthdayCake,
  FaHome,
  FaUniversity,
  FaLanguage,
  FaWhatsapp,
} from "react-icons/fa";

import {
  Container,
  PersonalInfo,
  PersonalInfoGrid,
  ProfileImage,
  ProfileName,
  SocialMedia,
  SocialMediaContainer,
} from "./styles";

export const AboutSection = () => {
  return (
    <Container>
      <h1>About</h1>
      <ProfileImage src="/profile.png" />
      <ProfileName>Muryllo</ProfileName>
      <SocialMediaContainer>
        <SocialMedia
          href="https://www.linkedin.com/in/muryllodev"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </SocialMedia>
        <SocialMedia
          href="https://github.com/MurylloAzvd"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </SocialMedia>
        <SocialMedia
          href="https://api.whatsapp.com/send?phone=5584988784881"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </SocialMedia>
      </SocialMediaContainer>
      <p>
        Passionate about <span>technology</span>. What inspires me is knowing
        that I can help create systems that can be used by thousands of people
        around the world.
      </p>
      <p>
        Currently working as a <span>Front-end</span> developer, developing{" "}
        <span>web</span> and <span>mobile</span> applications. Using as a tool,
        technologies such as:{" "}
        <span>HTML, CSS, JavaScript, TypeScript, ReactJS</span> and its
        ecosystem. In addition to other technologies that help in the
        development and integration of applications:{" "}
        <span>
          Git, Gitlab, VSCode, Postman, Figma, Clickup, Styled-Components,
          Next.js, Formik
        </span>
        .
      </p>

      <PersonalInfoGrid>
        <PersonalInfo>
          <FaHome />
          <span>Natal - RN, Brazil</span>
        </PersonalInfo>
        <PersonalInfo>
          <FaBirthdayCake />
          <span>Since 1998</span>
        </PersonalInfo>
        <PersonalInfo>
          <FaUniversity />
          <span>Information Technology (Dropout)</span>
        </PersonalInfo>
        <PersonalInfo>
          <FaLanguage />
          <span>Portuguese (Native) | English (Intermediate)</span>
        </PersonalInfo>
      </PersonalInfoGrid>
    </Container>
  );
};
