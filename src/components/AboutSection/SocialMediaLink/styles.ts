import styled from "styled-components";

export const Container = styled.a`
  &::after {
    content: "";
    display: block;
    border-bottom: 2px solid white;
    height: 2px;
    margin-top: 4px;
    width: 100%;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    border-radius: 4px;
  }

  &:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }

  svg {
    font-size: 32px;
  }
`;
