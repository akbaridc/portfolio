import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="overlay-arrows_right">
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="overlay-arrows_left">
      <FaArrowLeft />
    </div>
  );
}

export default class SimpleSlider extends Component {
  render() {
    const datas = this.props.data;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            dots: true,
            nextArrow: null,
            prevArrow: null,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {datas.map((item, i) => (
          <div key={i}>
            <img
              src={item.source}
              alt="img-caption"
              className="w-full object-fill max-h-44 h-44 lg:max-h-[30rem] lg:h-[30rem]"
            />
          </div>
        ))}
      </Slider>
    );
  }
}
