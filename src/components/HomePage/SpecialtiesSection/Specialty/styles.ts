import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  align-items: center;
  margin-top: 38px;
  width: 220px;

  > h2 {
    font-size: 18px;
    margin-top: 16px;
  }
`;

export const SpecialtyIConContainer = styled.div`
  border: 2px solid #fff;
  padding: 24px;
  border-radius: 50%;

  svg {
    font-size: 24px;
  }
`;
