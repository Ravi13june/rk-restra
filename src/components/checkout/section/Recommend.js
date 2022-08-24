import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recommend = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const SliderCard = () => {
    return (
      <div className="item">
        <div className="position-relative mall-category-item">
          <button
            type="button"
            className="btn btn-primary btn-sm position-absolute btn btn-primary"
          >
            ADD
          </button>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245__340.jpg"
            alt="carousel"
            className="img-fluid"
          />
          <h6>Chinese</h6>
          <small>$760</small>
        </div>
      </div>
    );
  };
  const RecommendSlider = () => {
    return (
      <Slider {...settings}>
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
        {SliderCard()}
      </Slider>
    );
  };

  return (
    <div className="offer-dedicated-body-left">
      <div className="bg-white rounded shadow-sm p-4 mb-4">
        <h6 className="mb-3">You may also like</h6>
        <div>{RecommendSlider()}</div>
      </div>
    </div>
  );
};
export default Recommend;
