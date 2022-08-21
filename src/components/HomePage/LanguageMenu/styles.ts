import styled from "styled-components";

interface LanguagesProps {
  isOpen: boolean;
}

export const Container = styled.div`
  position: absolute;
  left: 32px;
  top: 32px;
  z-index: 3;
  font-weight: bold;
  padding-bottom: 8px;

  display: flex;
  align-items: center;

  & > img {
    width: 32px;
  }

  & > span {
    font-size: 18px;
    margin-left: 8px;
  }

  & > svg {
    font-size: 32px;
  }
`;

export const LanguagesContainer = styled.div<LanguagesProps>`
  background-color: #fff;
  color: #000;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.5s;

  & + & {
    margin-top: 4px;
  }

  & > img {
    width: 32px;
  }

  & > span {
    font-size: 18px;
    margin-left: 8px;
  }

  &:hover {
    background-color: #eeeeee;
  }
`;
