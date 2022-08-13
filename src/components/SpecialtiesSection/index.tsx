import {
  BsHandIndex,
  BsLayoutTextWindow,
  BsSearch,
  BsArrowsAngleExpand,
  BsArrowRepeat,
} from "react-icons/bs";

import { Specialty } from "./Specialty";

import { Container, SpecialtiesWrapper } from "./styles";

export const SpecialtiesSection = () => {
  return (
    <Container id="specialties">
      <h1 data-aos="fade-right">Specialties</h1>

      <SpecialtiesWrapper>
        <Specialty
          title="UX Design"
          description="UX design refers to the term “user experience design”, the main role
        of UX Design is to be concerned with each step with which the user
        interacts with the product or service; and make this interaction
        happen as smoothly as possible."
          Icon={BsHandIndex}
        />

        <Specialty
          title="UI Design"
          description=" UI stands for “user interface design”. UI Design is primarily
        responsible for creating functional interfaces, which allow the user
        to intuitively navigate their entire journey."
          Icon={BsLayoutTextWindow}
        />

        <Specialty
          title="SEO"
          description="SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines."
          Icon={BsSearch}
        />

        <Specialty
          title="Responsive Web Design"
          description="Responsive web design is about creating web pages that look good on all devices. A responsive web design will automatically adjust for different screen sizes and viewports."
          Icon={BsArrowsAngleExpand}
        />

        <Specialty
          title="SPA"
          description="A SPA (single-page application) is an app that doesn’t need to reload the page during its use and works within a browser. The main advantage of single-page applications is its speed."
          Icon={BsArrowRepeat}
        />
      </SpecialtiesWrapper>
    </Container>
  );
};
