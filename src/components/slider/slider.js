import React from "react";
import Slider from "react-slick";
import style from "./slider.module.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Link from "next/link";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={style.prevsArrow} onClick={onClick}>
      <IoIosArrowDropleftCircle className="text-red-600 text-3xl" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={style.nextsArrow} onClick={onClick}>
      <IoIosArrowDroprightCircle className="text-red-600 text-3xl" />
    </div>
  );
};

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className={style.container}>
      <Slider {...settings}>
        <div className={style.images}>
          <img src="/image1.jpg" />
        </div>
        <div className={style.images}>
          <img src="https://wallpaperaccess.com/full/1325090.jpg" />
        </div>
        <div className={style.images}>
          <img src="https://wallpaperaccess.com/full/4625699.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
