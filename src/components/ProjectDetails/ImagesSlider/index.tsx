import Slider from "react-slick";
import { Container } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImagesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
          alt="html"
        />
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png"
          alt="javascript"
        />
        <img
          src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino-1280x720.jpg"
          alt="typescript"
        />
        <img
          src="https://aliancatraducoes.com/wp-content/uploads/2019/10/o-que-sao-cat-tools.jpg"
          alt="react"
        />
        <img
          src="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"
          alt="react-native"
        />
      </Slider>
    </Container>
  );
};
