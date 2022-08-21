import useTranslation from "next-translate/useTranslation";
import { ProjectDetails } from "../../components/ProjectDetails";

export default function ResolveTudo() {
  const { t } = useTranslation("common");

  return (
    <ProjectDetails
      title="Resolve Tudo"
      description={t("project-description.resolve-tudo")}
      images={[
        "/projects/resolve-tudo/resolve1.webp",
        "/projects/resolve-tudo/resolve2.webp",
        "/projects/resolve-tudo/resolve4.png",
        "/projects/resolve-tudo/resolve3.png",
        "/projects/resolve-tudo/resolve7.png",
        "/projects/resolve-tudo/resolve8.png",
        "/projects/resolve-tudo/resolve6.png",
        "/projects/resolve-tudo/resolve5.png",
      ]}
      link="https://play.google.com/store/apps/details?id=com.resolve_tudo_cliente"
    />
  );
}
