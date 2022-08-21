import Slider from "react-slick";
import { Container } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImagesSliderProps {
  images: string[];
}

export const ImagesSlider = ({ images }: ImagesSliderProps) => {
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
        {images.map((image, index) => (
          <img key={index} src={image} alt="project" />
        ))}
      </Slider>
    </Container>
  );
};
