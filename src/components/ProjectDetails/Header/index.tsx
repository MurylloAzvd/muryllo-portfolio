import { Container, DividerTabs, TabBar, TabsBarContainer } from "./styles";

export const Header = () => {
  return (
    <Container>
      <h1>Project Details</h1>
      <TabsBarContainer>
        <TabBar>Home</TabBar>
        <DividerTabs>/</DividerTabs>
        <TabBar selected>Fretec Entregas</TabBar>
      </TabsBarContainer>
    </Container>
  );
};
