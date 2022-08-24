import Slider from "react-slick";
import { homePageSliderData } from "../helper";
import SliderCard from "./SliderCard";

export const CategorySlider = () => {
  var rightSliderSettings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Slider {...rightSliderSettings}>
      {homePageSliderData.map((slideData, index) => (
        <SliderCard
          img={slideData.img}
          href={slideData.href}
          key={`card-${index}`}
        />
      ))}
    </Slider>
  );
};
