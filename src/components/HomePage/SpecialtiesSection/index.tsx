import useTranslation from "next-translate/useTranslation";
import {
  BsHandIndex,
  BsLayoutTextWindow,
  BsSearch,
  BsArrowsAngleExpand,
  BsArrowRepeat,
  BsCodeSlash,
  BsLightning,
  BsLightbulb,
} from "react-icons/bs";

import { SectionTitle } from "../../SectionTitle";

import { Specialty } from "./Specialty";

import { Container, SpecialtiesWrapper } from "./styles";

export const SpecialtiesSection = () => {
  const { t } = useTranslation();

  const specialties = [
    {
      title: "UX Design",
      icon: BsHandIndex,
    },
    {
      title: "UI Design",
      icon: BsLayoutTextWindow,
    },
    {
      title: "SEO",
      icon: BsSearch,
    },
    {
      title: "Responsive Design",
      icon: BsArrowsAngleExpand,
    },
    {
      title: "SPA",
      icon: BsArrowRepeat,
    },
    {
      title: "Clean Code",
      icon: BsCodeSlash,
    },
    {
      title: "SCRUM",
      icon: BsLightning,
    },
    {
      title: "MVP",
      icon: BsLightbulb,
    },
  ];

  return (
    <Container id="specialties">
      <SectionTitle>{t("common:section-title.specialties")}</SectionTitle>

      <SpecialtiesWrapper>
        {specialties.map(({ title, icon }, index) => (
          <Specialty key={index} index={index} Icon={icon} title={title} />
        ))}
      </SpecialtiesWrapper>
    </Container>
  );
};
