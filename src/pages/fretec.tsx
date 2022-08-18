import useTranslation from "next-translate/useTranslation";
import { ProjectDetails } from "../components/ProjectDetails";

export default function Fretec() {
  const { t } = useTranslation("common");

  return (
    <ProjectDetails
      title="Fretec Entregas"
      description={t("project-description.fretec")}
      link="https://play.google.com/store/apps/details?id=com.fretecentregas"
      images={[
        "/projects/fretec/fretec1.png",
        "/projects/fretec/fretec2.webp",
        "/projects/fretec/fretec4.webp",
        "/projects/fretec/fretec3.webp",
        "/projects/fretec/fretec7.webp",
        "/projects/fretec/fretec6.jpg",
        "/projects/fretec/fretec5.jpg",
      ]}
    />
  );
}
