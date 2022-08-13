import styled from "styled-components";

export const Container = styled.section`
  padding: 32px 64px;
  background-color: #000;
  color: #fff;

  h1 {
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 520px;
  margin: 32px auto 0;

  span {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
  }

  input,
  textarea {
    padding: 16px;
    margin-top: 32px;
    border: 1px solid rgb(40, 39, 47);
    border-radius: 8px;
    width: 100%;
    background-color: transparent;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 14px;
    outline: none;
    transition: 0.5s;
  }

  input + input,
  input + textarea {
    margin-top: 16px;
  }

  input:focus,
  textarea:focus {
    border-color: rgb(81, 104, 244);
  }

  button {
    margin-top: 24px;
    padding: 16px;
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: rgb(81, 104, 244);
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const ThankYouText = styled.p`
  margin-top: 24px;
  font-size: 20px;
  font-weight: 300;
`;
