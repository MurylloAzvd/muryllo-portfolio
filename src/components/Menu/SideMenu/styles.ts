import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.ul<ContainerProps>`
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  transform: translateX(100%);
  transition: transform 0.5s ease-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}
`;
