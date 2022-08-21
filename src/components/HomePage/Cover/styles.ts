import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/cover.jpeg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;

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
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
  }

  @media (min-width: 500px) {
    background-attachment: fixed;
  }
`;

export const PresentationContainer = styled.div`
  z-index: 1;
  font-size: 28px;
  text-shadow: 0 1px 3px rgb(0 0 0 / 80%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-weight: 700;
    margin-top: 16px;
  }

  a {
    margin-top: 16px;
    padding: 12px 16px;
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
