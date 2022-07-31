import styled from "styled-components";

export const Container = styled.section`
  padding: 32px 64px;
  background-color: #000;
  color: #fff;

  h1 {
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const SliderContainer = styled.div`
  margin-top: 64px;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;

  span {
    margin-top: 32px;
    font-size: 20px;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 16px;
  width: 150px;
  height: 150px;
  box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
    1px 2px 4px 0px rgba(0, 255, 255, 0.7),
    2px 4px 8px 0px rgba(0, 255, 255, 0.7),
    2px 4px 16px 0px rgba(0, 255, 255, 0.7);

  img {
    width: 100%;
    height: 100%;
  }
`;
