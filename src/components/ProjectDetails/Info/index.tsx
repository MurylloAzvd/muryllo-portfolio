import { Container, LinkContainer } from "./styles";

export const Info = () => {
  return (
    <Container>
      <h1>Fretec Entregas</h1>
      <p>
        The Fretec Entregas is an application for independent couriers who want
        to carry out freight in the city of Natal/RN. We work with the following
        categories of vehicles: motorcycle, utility car (light and medium
        pickups) and truck. The app gives the delivery person a previously
        calculated smart route.
      </p>
      <LinkContainer>
        <span>Link:</span>
        <a
          href="https://play.google.com/store/apps/details?id=com.fretecentregas"
          target="blank"
        >
          https://play.google.com/store/apps/details?id=com.fretecentregas
        </a>
      </LinkContainer>
    </Container>
  );
};
