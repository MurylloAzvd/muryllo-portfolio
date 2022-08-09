import { ProjectDetails } from "../components/ProjectDetails";

export default function Fretec() {
  return (
    <ProjectDetails
      title="Fretec Entregas"
      description="The Fretec Entregas is an application for independent couriers who
      want to carry out freight in the city of Natal/RN. The app gives the
      delivery person a previously calculated smart route."
      link="https://play.google.com/store/apps/details?id=com.fretecentregas"
      images={[
        "/projects/fretec/fretec1.png",
        "/projects/fretec/fretec6.jpg",
        "/projects/fretec/fretec2.webp",
        "/projects/fretec/fretec3.webp",
        "/projects/fretec/fretec4.webp",
        "/projects/fretec/fretec5.jpg",
      ]}
    />
  );
}
