import Slider from "react-slick";
import useTranslation from "next-translate/useTranslation";

import { SectionTitle } from "../../SectionTitle";

import { Container, SliderContainer } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skill } from "./Skill";

export const SkillsSection = () => {
  const { t } = useTranslation("common");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const skills = [
    {
      label: "HTML",
      imgSrc: "/skills/html.svg",
    },
    {
      label: "CSS",
      imgSrc: "/skills/css.svg",
    },
    {
      label: "JavaScript",
      imgSrc: "/skills/javascript.svg",
    },
    {
      label: "TypeScript",
      imgSrc: "/skills/typescript.svg",
    },
    {
      label: "React",
      imgSrc: "/skills/react.svg",
    },
    {
      label: "React Native",
      imgSrc: "/skills/react-native.svg",
    },
    {
      label: "Next.js",
      imgSrc: "/skills/next-js.svg",
    },
    {
      label: "Styled Components",
      imgSrc: "/skills/styled-components.svg",
    },
    {
      label: "Sass",
      imgSrc: "/skills/sass.svg",
    },
    {
      label: "Tailwind CSS",
      imgSrc: "/skills/tailwind-css.svg",
    },
    {
      label: "Linux",
      imgSrc: "/skills/linux.svg",
    },
    {
      label: "Git",
      imgSrc: "/skills/git.svg",
    },
  ];

  return (
    <Container id="skills">
      <SectionTitle>{t("section-title.skills")}</SectionTitle>
      <SliderContainer>
        <Slider {...settings}>
          {skills.map(({ imgSrc, label }, index) => (
            <Skill key={index} imgSrc={imgSrc} label={label} />
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  );
};
