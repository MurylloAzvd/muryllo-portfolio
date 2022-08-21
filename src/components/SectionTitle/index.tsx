import { ReactNode } from "react";
import { Container } from "./styles";

interface SectionTitle {
  children: ReactNode;
}

export const SectionTitle = ({ children }: SectionTitle) => {
  return <Container data-aos="fade-right">{children}</Container>;
};
