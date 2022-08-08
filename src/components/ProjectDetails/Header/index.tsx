import { Container, DividerTabs, TabBar, TabsBarContainer } from "./styles";

interface HeaderProps {
  projectTitle: string;
}

export const Header = ({ projectTitle }: HeaderProps) => {
  return (
    <Container>
      <h1>Project Details</h1>
      <TabsBarContainer>
        <TabBar>Home</TabBar>
        <DividerTabs>/</DividerTabs>
        <TabBar selected>{projectTitle}</TabBar>
      </TabsBarContainer>
    </Container>
  );
};
