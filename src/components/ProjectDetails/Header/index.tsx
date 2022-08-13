import Link from "next/link";
import { Container, DividerTabs, TabBar, TabsBarContainer } from "./styles";

interface HeaderProps {
  projectTitle: string;
}

export const Header = ({ projectTitle }: HeaderProps) => {
  return (
    <Container>
      <h1>Project Details</h1>
      <TabsBarContainer>
        <Link href="/#projects" passHref>
          <TabBar>Projects</TabBar>
        </Link>
        <DividerTabs>/</DividerTabs>
        <TabBar selected>{projectTitle}</TabBar>
      </TabsBarContainer>
    </Container>
  );
};
