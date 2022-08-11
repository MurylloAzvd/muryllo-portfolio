import styled from "styled-components";

export const Container = styled.section`
  background-color: #000;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  h1 {
    font-size: 28px;
    text-transform: uppercase;
  }
`;

export const AboutText = styled.p`
  font-size: 18px;
  text-align: justify;
  line-height: 24px;
  font-weight: 200;
  margin-top: 12px;

  span {
    font-weight: bold;
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
