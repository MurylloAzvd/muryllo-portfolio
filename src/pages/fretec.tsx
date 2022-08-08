import { ProjectDetails } from "../components/ProjectDetails";

export default function Fretec() {
  return (
    <ProjectDetails
      title="Fretec Entregas"
      description="The Fretec Entregas is an application for independent couriers who want to carry out freight in the city of Natal/RN. We work with the following categories of vehicles: motorcycle, utility car (light and medium pickups) and truck. The app gives the delivery person a previously calculated smart route."
      link="https://play.google.com/store/apps/details?id=com.fretecentregas"
      images={[
        "https://muryllodeveloper.web.app/assets/img/portfolio/fretec1.png",
        "https://muryllodeveloper.web.app/assets/img/portfolio/fretec2.webp",
        "https://muryllodeveloper.web.app/assets/img/portfolio/fretec3.webp",
        "https://muryllodeveloper.web.app/assets/img/portfolio/fretec5.png",
      ]}
    />
  );
}
