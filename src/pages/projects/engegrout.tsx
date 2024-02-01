import useTranslation from "next-translate/useTranslation";
import { ProjectDetails } from "../../components/ProjectDetails";

export default function Engegrout() {
  const { t } = useTranslation("common");

  return (
    <ProjectDetails
      title="Engegrout"
      description={t("project-description.engegrout")}
      link="https://www.app.engegrout.cloud/"
      images={[
        "/projects/engegrout/engegrout1.png",
        "/projects/engegrout/engegrout2.png",
        "/projects/engegrout/engegrout3.jpeg",
        "/projects/engegrout/engegrout4.png",
        "/projects/engegrout/engegrout5.png",
        "/projects/engegrout/engegrout6.png",
        "/projects/engegrout/engegrout7.png",
      ]}
    />
  );
}
