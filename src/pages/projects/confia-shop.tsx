import useTranslation from "next-translate/useTranslation";
import { ProjectDetails } from "../../components/ProjectDetails";

export default function ConfiaShop() {
  const { t } = useTranslation("common");

  return (
    <ProjectDetails
      title="Confia.shop"
      description={t("project-description.confia-shop")}
      images={[
        "/projects/confia-shop/confia1.jpeg",
        "/projects/confia-shop/confia2.jpeg",
        "/projects/confia-shop/confia11.jpg",
        "/projects/confia-shop/confia10.jpg",
        "/projects/confia-shop/confia7.jpg",
        "/projects/confia-shop/confia8.jpg",
        "/projects/confia-shop/confia9.jpg",
        "/projects/confia-shop/confia3.jpeg",
        "/projects/confia-shop/confia5.jpg",
        "/projects/confia-shop/confia4.jpg",
        "/projects/confia-shop/confia13.png",
        "/projects/confia-shop/confia14.png",
      ]}
      link="https://www.instagram.com/confiashopinsta/"
    />
  );
}
