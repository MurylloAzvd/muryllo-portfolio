import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 16px;
  max-width: 420px;
  margin-top: 32px;
`;

export const SpecialtyIConContainer = styled.div`
  border: 2px solid #fff;
  padding: 16px;
  border-radius: 50%;

  svg {
    font-size: 24px;
  }
`;

export const SpecialtyInfoContainer = styled.div`
  margin-left: 32px;

  h2 {
    font-size: 18px;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 24px;
  }
`;
