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

import { Interest } from "./Interest";

import { Container, InterestsWrapper } from "./styles";

export const InterestsSection = () => {
  const { t } = useTranslation();

  const interests = [
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
    <Container id="interests">
      <SectionTitle>{t("common:section-title.interests")}</SectionTitle>

      <InterestsWrapper>
        {interests.map(({ title, icon }, index) => (
          <Interest key={index} index={index} Icon={icon} title={title} />
        ))}
      </InterestsWrapper>
    </Container>
  );
};
