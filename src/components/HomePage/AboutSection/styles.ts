import styled from "styled-components";

export const Container = styled.section`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutText = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 24px;
  font-weight: 200;
  margin-top: 12px;
  max-width: 740px;

  span {
    font-weight: bold;
  }

  @media (min-width: 740px) {
    text-align: center;
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  border-radius: 50%;
  border: 8px solid #2c2f3f;
  margin-top: 32px;
`;

export const ProfileName = styled.span`
  font-size: 28px;
  margin-top: 12px;
`;

export const SocialMediaContainer = styled.div`
  margin-top: 12px;
  display: flex;

  a + a {
    margin-left: 16px;
  }
`;

export const PersonalInfoGrid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 12px;
`;

export const VideoContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  max-width: 800px;
`;

export const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 66.66%;

  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
