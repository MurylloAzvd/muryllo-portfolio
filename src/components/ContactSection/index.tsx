import { useState } from "react";
import { Loading } from "../Loading";
import { Container, FormContainer, ThankYouText } from "./styles";

export const ContactSection = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailValidator = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const isFormEnabled =
    contact.name &&
    contact.email &&
    emailValidator(contact.email) &&
    contact.message;

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    await sleep(3000);
    console.log(contact);
    setContact({ email: "", message: "", name: "" });
    setIsLoading(false);
    setIsSent(true);
  };

  return (
    <Container>
      <h1>Contact</h1>
      <FormContainer
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <span>Feel free to send me an email</span>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={(event) =>
            setContact((prevState) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={contact.email}
          onChange={(event) =>
            setContact((prevState) => ({
              ...prevState,
              email: event.target.value,
            }))
          }
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={contact.message}
          onChange={(event) =>
            setContact((prevState) => ({
              ...prevState,
              message: event.target.value,
            }))
          }
        />
        {!isLoading && !isSent && (
          <button type="submit" disabled={!isFormEnabled}>
            Send
          </button>
        )}
        {isLoading && <Loading />}
        {isSent && <ThankYouText>{"Thanks for sending 😉✅"}</ThankYouText>}
      </FormContainer>
    </Container>
  );
};
