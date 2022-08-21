import { ChangeEvent, useState } from "react";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";

import { SectionTitle } from "../../SectionTitle";
import { Loading } from "../../Loading";

import { Container, FormContainer, ThankYouText } from "./styles";

export const ContactSection = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { t } = useTranslation();

  const emailValidator = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const isFormEnabled =
    contact.name &&
    contact.email &&
    emailValidator(contact.email) &&
    contact.message;

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await axios.post("/api/contact", contact);
      setIsSent(true);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setContact({ email: "", message: "", name: "" });
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setContact((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  return (
    <Container id="contact">
      <SectionTitle>{t("common:section-title.contact")}</SectionTitle>
      <FormContainer
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <span data-aos="fade-right" data-aos-delay={100}>
          {t("home:contact-form.title")}
        </span>
        <input
          type="text"
          name="name"
          placeholder={t("home:contact-form.name")}
          value={contact.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={contact.email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder={t("home:contact-form.message")}
          rows={3}
          value={contact.message}
          onChange={handleInputChange}
        />
        {!isLoading && !isSent && (
          <button type="submit" disabled={!isFormEnabled}>
            {t("home:contact-form.send")}
          </button>
        )}
        {isLoading && <Loading />}
        {isSent && (
          <ThankYouText>{t("home:contact-form.thank-you")}</ThankYouText>
        )}
      </FormContainer>
    </Container>
  );
};
