import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "50px",
    nextArrow: <CarouselArrowRight />,
    prevArrow: <CarouselArrowLeft />,
  };

  return (
    <div className="w-full px-2 overflow-hidden">
      <Slider {...settings}>
        <div className="h-[100px] !flex justify-center items-center border text-center text-[24px]">
          1
        </div>
        <div className="h-[100px] !flex justify-center items-center border text-center text-[24px]">
          2
        </div>
        <div className="h-[100px] !flex justify-center items-center border text-center text-[24px]">
          3
        </div>
        <div className="h-[100px] !flex justify-center items-center border text-center text-[24px]">
          4
        </div>
        <div className="h-[100px] !flex justify-center items-center border text-center text-[24px]">
          5
        </div>
        <div className="h-[100px] !flex justify-center items-center border text-center text-[24px]">
          6
        </div>
      </Slider>
    </div>
  );
};

const CarouselArrowLeft = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className + " absolute left-[-10px] z-10"}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
};

const CarouselArrowRight = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className + " absolute right-[-10px] z-10"}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
};
