import {
  Container,
  ProfileImage,
  ProfileName,
  SocialMedia,
  SocialMediaContainer,
} from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
    </Container>
  );
};
