import {
  BsHandIndex,
  BsLayoutTextWindow,
  BsSearch,
  BsArrowsAngleExpand,
  BsArrowRepeat,
  BsCodeSlash,
  BsLightning,
  BsLightbulb,
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
          index={0}
        />

        <Specialty
          title="UI Design"
          description=" UI stands for “user interface design”. UI Design is primarily
        responsible for creating functional interfaces, which allow the user
        to intuitively navigate their entire journey."
          Icon={BsLayoutTextWindow}
          index={1}
        />

        <Specialty
          title="SEO"
          description="SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines."
          Icon={BsSearch}
          index={2}
        />

        <Specialty
          title="Responsive Web Design"
          description="Responsive web design is about creating web pages that look good on all devices. A responsive web design will automatically adjust for different screen sizes and viewports."
          Icon={BsArrowsAngleExpand}
          index={3}
        />

        <Specialty
          title="SPA"
          description="A SPA (single-page application) is an app that doesn’t need to reload the page during its use and works within a browser. The main advantage of single-page applications is its speed."
          Icon={BsArrowRepeat}
          index={4}
        />

        <Specialty
          title="Clean Code"
          description="Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way."
          Icon={BsCodeSlash}
          index={5}
        />

        <Specialty
          title="SCRUM"
          description="Scrum helps people and teams deliver value incrementally in a collaborative manner. If you are just getting started, think of it as a way to get work done as a team in small pieces at a time, with experimentation and feedback loops along the way."
          Icon={BsLightning}
          index={6}
        />

        <Specialty
          title="MVP"
          description="A minimum viable product is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development."
          Icon={BsLightbulb}
          index={7}
        />
      </SpecialtiesWrapper>
    </Container>
  );
};
