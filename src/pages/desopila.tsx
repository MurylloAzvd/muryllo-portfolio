import useTranslation from "next-translate/useTranslation";
import { ProjectDetails } from "../components/ProjectDetails";

export default function Desopila() {
  const { t } = useTranslation("common");

  return (
    <ProjectDetails
      title="Desopila App"
      description={t("project-description.desopila")}
      images={[
        "/projects/desopila/desopila1.jpeg",
        "/projects/desopila/desopila2.jpeg",
        "/projects/desopila/desopila3.jpeg",
        "/projects/desopila/desopila4.jpeg",
        "/projects/desopila/desopila5.jpeg",
      ]}
    />
  );
}
