import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Container } from "./styles";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export const SideMenu = ({ isOpen, closeMenu }: SideMenuProps) => {
  const { t } = useTranslation("common");

  const links = [
    {
      href: "/#",
      label: t("section-title.home"),
    },
    {
      href: "/#about",
      label: t("section-title.about"),
    },
    {
      href: "/#skills",
      label: t("section-title.skills"),
    },
    {
      href: "/#interests",
      label: t("section-title.interests"),
    },
    {
      href: "/#projects",
      label: t("section-title.projects"),
    },
    {
      href: "/#contact",
      label: t("section-title.contact"),
    },
  ];

  return (
    <Container isOpen={isOpen}>
      <ul>
        {links.map(({ href, label }, index) => (
          <li key={index} className="underline-effect">
            <Link href={href} passHref>
              <a onClick={closeMenu}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};
