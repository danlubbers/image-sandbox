import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ sliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;
  console.log(sliderData);

  if (!Array.isArray(sliderData) || sliderData.length <= 0) return null;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const imageSliderData = sliderData.map((detail, idx) => {
    return (
      <div className={idx === current ? "slide-active" : "slide"} key={idx}>
        {idx === current && (
          <img className="image" src={detail.imgSrc} alt={detail.name} />
        )}
      </div>
    );
  });
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {imageSliderData}
    </section>
  );
};

export default ImageSlider;
