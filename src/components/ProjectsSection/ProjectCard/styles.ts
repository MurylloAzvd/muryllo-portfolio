import styled from "styled-components";

export const Container = styled.div`
  background-color: #262626;
  padding: 12px 24px;
  border-radius: 16px;
  height: 400px;

  /* rotate */
  perspective: 1000px;
  &:hover {
    & > div {
      transform: rotateY(180deg);
    }
  }

  & + & {
    margin-top: 32px;
  }
`;

// rotate
export const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  /* rotate */
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  img {
    width: 100%;
    max-height: 280px;
    border-radius: 16px;
  }

  h2 {
    text-align: center;
    font-size: 28px;
    margin: auto;
  }
`;

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  /* rotate */
  position: absolute;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  h2 {
    font-size: 24px;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 300;
    text-align: justify;
    line-height: 20px;
  }

  button {
    padding: 12px 56px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #000;
    color: rgba(0, 255, 255, 0.7);
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid rgb(0, 255, 255, 0.7);
    margin: auto auto 8px;

    &:hover {
      box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
        1px 2px 4px 0px rgba(0, 255, 255, 0.7),
        2px 4px 8px 0px rgba(0, 255, 255, 0.7),
        2px 4px 16px 0px rgba(0, 255, 255, 0.7);
      transform: translateX(-2.5px);
      transition-duration: 0.3s;
    }
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 16px;
`;

export const Technology = styled.span`
  border: 2px solid rgba(0, 255, 255, 0.7);
  font-size: 14px;
  border-radius: 16px;
  padding: 4px 8px;
  margin: 0 4px 12px;
  color: rgba(0, 255, 255, 0.7);
`;
