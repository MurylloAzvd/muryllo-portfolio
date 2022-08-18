import useTranslation from "next-translate/useTranslation";
import { ProjectDetails } from "../components/ProjectDetails";

export default function Cardiometrics() {
  const { t } = useTranslation("common");

  return (
    <ProjectDetails
      title="Cardiometrics"
      description={t("project-description.cardiometrics")}
      images={[
        "/projects/cardiometrics/cardiometrics6.png",
        "/projects/cardiometrics/cardiometrics3.png",
        "/projects/cardiometrics/cardiometrics4.png",
        "/projects/cardiometrics/cardiometrics5.png",
        "/projects/cardiometrics/cardiometrics9.jpg",
        "/projects/cardiometrics/cardiometrics7.jpg",
        "/projects/cardiometrics/cardiometrics8.jpg",
        "/projects/cardiometrics/cardiometrics1.png",
        "/projects/cardiometrics/cardiometrics2.png",
      ]}
      link="https://www.instagram.com/cardiometrics/"
    />
  );
}
