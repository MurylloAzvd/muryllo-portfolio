import useTranslation from "next-translate/useTranslation";
import { ProjectDetails } from "../../components/ProjectDetails";

export default function LCC() {
  const { t } = useTranslation("common");

  return (
    <ProjectDetails
      title="LCC.hub"
      description={t("project-description.lcc")}
      link="https://lcchub.com.br/"
      images={[
        "/projects/lcc/lcc1.png",
        "/projects/lcc/lcc2.png",
        "/projects/lcc/lcc3.png",
        "/projects/lcc/lcc4.png",
        "/projects/lcc/lcc5.png",
        "/projects/lcc/lcc6.png",
        "/projects/lcc/lcc7.png",
        "/projects/lcc/lcc8.png",
      ]}
    />
  );
}
