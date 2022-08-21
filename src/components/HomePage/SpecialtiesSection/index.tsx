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

  return (
    <Container id="specialties">
      <SectionTitle>{t("common:section-title.specialties")}</SectionTitle>

      <SpecialtiesWrapper>
        <Specialty
          title="UX Design"
          description={t("home:specialty-description.ux-design")}
          Icon={BsHandIndex}
          index={0}
        />

        <Specialty
          title="UI Design"
          description={t("home:specialty-description.ui-design")}
          Icon={BsLayoutTextWindow}
          index={1}
        />

        <Specialty
          title="SEO"
          description={t("home:specialty-description.seo")}
          Icon={BsSearch}
          index={2}
        />

        <Specialty
          title="Responsive Web Design"
          description={t("home:specialty-description.responsive-web-design")}
          Icon={BsArrowsAngleExpand}
          index={3}
        />

        <Specialty
          title="SPA"
          description={t("home:specialty-description.spa")}
          Icon={BsArrowRepeat}
          index={4}
        />

        <Specialty
          title="Clean Code"
          description={t("home:specialty-description.clean-code")}
          Icon={BsCodeSlash}
          index={5}
        />

        <Specialty
          title="SCRUM"
          description={t("home:specialty-description.scrum")}
          Icon={BsLightning}
          index={6}
        />

        <Specialty
          title="MVP"
          description={t("home:specialty-description.mvp")}
          Icon={BsLightbulb}
          index={7}
        />
      </SpecialtiesWrapper>
    </Container>
  );
};
