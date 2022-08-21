import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  max-width: 520px;
  margin: 40px auto 0;

  h1 {
    font-size: 32px;
  }

  p {
    margin-top: 16px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
    font-size: 20px;
  }

  a {
    color: #0056b0;
    margin-top: 4px;
  }
`;
