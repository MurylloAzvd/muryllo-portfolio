import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/cover.jpeg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  position: relative;

  &::before {
    content: "";
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2) 40%,
      rgba(0, 0, 0, 0.2) 80%,
      rgba(0, 0, 0, 0.4)
    );
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const PresentationContainer = styled.div`
  z-index: 1;
  color: #fff;
  font-size: 28px;
  text-shadow: 0 1px 3px rgb(0 0 0 / 80%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-weight: 700;
    margin-top: 16px;
  }
`;

export const TypeWriterEffectContainer = styled.div`
  h2 {
    font-weight: 400;
    overflow: hidden;
    border-right: 4.2px solid white;
    white-space: nowrap;
    animation: typing 3.5s steps(45, end), blink-caret 0.75s step-end infinite;
    width: 100%;
    padding-right: 8px;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
`;

export const DownloadResume = styled.a`
  border: 1.2px solid rgb(0, 255, 255, 0.7);
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 16px;
  cursor: pointer;
  background-color: #000;

  &:hover {
    box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
      1px 2px 4px 0px rgba(0, 255, 255, 0.7),
      2px 4px 8px 0px rgba(0, 255, 255, 0.7),
      2px 4px 16px 0px rgba(0, 255, 255, 0.7);
    transform: translateX(-2.5px);
    transition-duration: 0.3s;
  }
`;
