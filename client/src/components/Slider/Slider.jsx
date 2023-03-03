import React from "react";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import './slider.css'

const Slider = () => {
  return (
    <>
    <div class="slider-container slider-1">
    <div class="slider">
      <img src={slide1} alt="" />
      <img src={slide2} alt="" />
      <img src={slide3} alt="" />
    </div>
  </div>
    </>
  );
};

export default Slider;
