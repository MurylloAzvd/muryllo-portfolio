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
      description: t("home:specialty-description.ux-design"),
      icon: BsHandIndex,
    },
    {
      title: "UI Design",
      description: t("home:specialty-description.ui-design"),
      icon: BsLayoutTextWindow,
    },
    {
      title: "SEO",
      description: t("home:specialty-description.seo"),
      icon: BsSearch,
    },
    {
      title: "Responsive Web Design",
      description: t("home:specialty-description.responsive-web-design"),
      icon: BsArrowsAngleExpand,
    },
    {
      title: "SPA",
      description: t("home:specialty-description.spa"),
      icon: BsArrowRepeat,
    },
    {
      title: "Clean Code",
      description: t("home:specialty-description.clean-code"),
      icon: BsCodeSlash,
    },
    {
      title: "SCRUM",
      description: t("home:specialty-description.scrum"),
      icon: BsLightning,
    },
    {
      title: "MVP",
      description: t("home:specialty-description.mvp"),
      icon: BsLightbulb,
    },
  ];

  return (
    <Container id="specialties">
      <SectionTitle>{t("common:section-title.specialties")}</SectionTitle>

      <SpecialtiesWrapper>
        {specialties.map(({ title, description, icon }, index) => (
          <Specialty
            key={index}
            index={index}
            Icon={icon}
            description={description}
            title={title}
          />
        ))}
      </SpecialtiesWrapper>
    </Container>
  );
};
