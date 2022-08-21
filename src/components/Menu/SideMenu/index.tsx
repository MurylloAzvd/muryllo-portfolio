import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Container } from "./styles";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const SideMenu = ({ isOpen, closeMenu }: SideMenuProps) => {
  const { t } = useTranslation("common");
  return (
    <Container isOpen={isOpen}>
      <li className="underline-effect">
        <Link href="/#" passHref>
          <a onClick={closeMenu}>{t("section-title.home")}</a>
        </Link>
      </li>
      <li className="underline-effect">
        <Link href="/#about" passHref>
          <a onClick={closeMenu}>{t("section-title.about")}</a>
        </Link>
      </li>
      <li className="underline-effect">
        <Link href="/#skills" passHref>
          <a onClick={closeMenu}>{t("section-title.skills")}</a>
        </Link>
      </li>
      <li className="underline-effect">
        <Link href="/#specialties" passHref>
          <a onClick={closeMenu}>{t("section-title.specialties")}</a>
        </Link>
      </li>
      <li className="underline-effect">
        <Link href="/#projects" passHref>
          <a onClick={closeMenu}>{t("section-title.projects")}</a>
        </Link>
      </li>
      <li className="underline-effect">
        <Link href="/#contact" passHref>
          <a onClick={closeMenu}>{t("section-title.contact")}</a>
        </Link>
      </li>
    </Container>
  );
};
