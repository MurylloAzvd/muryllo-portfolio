import styled, { css } from "styled-components";

interface TabBarProps {
  selected?: boolean;
}

export const Container = styled.header`
  padding: 24px 16px;
  background-color: #262626;

  h1 {
    font-size: 32px;
    line-height: 32px;
    font-weight: bold;
  }
`;

export const TabsBarContainer = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const DividerTabs = styled.span`
  margin: 0px 12px;
`;

export const TabBar = styled.span<TabBarProps>`
  font-weight: bold;

  ${(props) =>
    !props.selected &&
    css`
      cursor: pointer;
      font-weight: 300;
    `}
`;
