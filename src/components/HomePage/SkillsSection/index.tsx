import Slider from "react-slick";
import useTranslation from "next-translate/useTranslation";

import { SectionTitle } from "../../SectionTitle";

import { Card, Container, SkillContainer, SliderContainer } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <Container id="skills">
      <SectionTitle>{t("section-title.skills")}</SectionTitle>
      <SliderContainer>
        <Slider {...settings}>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/html.svg" alt="html" />
              </Card>
              <span>HTML</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/css.svg" alt="css" />
              </Card>
              <span>CSS</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/javascript.svg" alt="javascript" />
              </Card>
              <span>JavaScript</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/typescript.svg" alt="typescript" />
              </Card>

              <span>TypeScript</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/react.svg" alt="react" />
              </Card>
              <span>React</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/react-native.svg" alt="react-native" />
              </Card>
              <span>React Native</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/next-js.svg" alt="next-js" />
              </Card>
              <span>Next.js</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img
                  src="/skills/styled-components.svg"
                  alt="styled-components"
                />
              </Card>
              <span>Styled Components</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/sass.svg" alt="sass" />
              </Card>
              <span>Sass</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/tailwind-css.svg" alt="tailwind-css" />
              </Card>
              <span>Tailwind CSS</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/linux.svg" alt="linux" />
              </Card>
              <span>Linux</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills/git.svg" alt="git" />
              </Card>
              <span>Git</span>
            </SkillContainer>
          </div>
        </Slider>
      </SliderContainer>
    </Container>
  );
};
