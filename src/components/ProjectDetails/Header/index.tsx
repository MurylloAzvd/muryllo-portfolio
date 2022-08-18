import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Container, DividerTabs, TabBar, TabsBarContainer } from "./styles";

interface HeaderProps {
  projectTitle: string;
}

export const Header = ({ projectTitle }: HeaderProps) => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <h1>{t("project-details")}</h1>
      <TabsBarContainer>
        <Link href="/#projects" passHref>
          <TabBar>{t("section-title.projects")}</TabBar>
        </Link>
        <DividerTabs>/</DividerTabs>
        <TabBar selected>{projectTitle}</TabBar>
      </TabsBarContainer>
    </Container>
  );
};
