import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 40px;
  position: absolute;
  right: 12px;
  top: 12px;

  & > span {
    background: #fff;
    content: "";
    display: block;
    height: 6px;
    border-radius: 3px;
    margin: 7px 0;
    transition: 0.5s;
  }

  ${(props) =>
    props.isOpen &&
    css`
      & > span {
        transform: scale(0);
      }

      & > span:first-child {
        transform: translateY(12px) rotate(135deg);
      }

      & > span:last-child {
        transform: translateY(-12px) rotate(-135deg);
      }
    `}
`;
