import styled, { css } from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.button<ContainerProps>`
  position: fixed;
  bottom: 16px;
  right: 16px;
  border-radius: 50%;
  padding: 6px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s;

  transform: translateY(150%);
  opacity: 0;

  ${(props) =>
    props.isVisible &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}

  svg {
    font-size: 24px;
    color: #fff;
  }
`;
