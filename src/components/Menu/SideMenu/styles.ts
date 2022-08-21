import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.ul<ContainerProps>`
  background-color: #000;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transform: translateX(100%);
  transition: transform 0.5s ease-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    font-size: 28px;
    transition: font-weight 0.2s;

    &:hover {
      font-weight: 700;
    }
  }

  li + li {
    margin-top: 24px;
  }

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}
`;
