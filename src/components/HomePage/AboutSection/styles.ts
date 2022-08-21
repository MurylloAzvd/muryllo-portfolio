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
