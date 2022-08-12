import Slider from "react-slick";
import { Card, Container, SkillContainer, SliderContainer } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SkillsSection = () => {
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
      <h1 data-aos="fade-right">Skills</h1>
      <SliderContainer>
        <Slider {...settings}>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/html.svg" alt="html" />
              </Card>
              <span>HTML</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/css.svg" alt="css" />
              </Card>
              <span>CSS</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/javascript.svg" alt="javascript" />
              </Card>
              <span>JavaScript</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/typescript.svg" alt="typescript" />
              </Card>

              <span>TypeScript</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/react.svg" alt="react" />
              </Card>
              <span>React</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/react-native.svg" alt="react-native" />
              </Card>
              <span>React Native</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/next-js.svg" alt="next-js" />
              </Card>
              <span>Next.js</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img
                  src="/skills-logos/styled-components.svg"
                  alt="styled-components"
                />
              </Card>
              <span>Styled Components</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/sass.svg" alt="sass" />
              </Card>
              <span>Sass</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/tailwind-css.svg" alt="tailwind-css" />
              </Card>
              <span>Tailwind CSS</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/linux.svg" alt="linux" />
              </Card>
              <span>Linux</span>
            </SkillContainer>
          </div>
          <div>
            <SkillContainer>
              <Card data-aos="zoom-in-up">
                <img src="/skills-logos/git.svg" alt="git" />
              </Card>
              <span>Git</span>
            </SkillContainer>
          </div>
        </Slider>
      </SliderContainer>
    </Container>
  );
};
