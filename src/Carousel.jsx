import './animations.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "./assets/carousel-1.png";
import carousel2 from "./assets/carousel-2.png";
import Slider from "react-slick";
import "animate.css";
import React, { useRef, useState } from "react";

const Carousel = () => {


  const [slideIndex, setSlideIndex] = useState(0);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (index) => setSlideIndex(index), // Set the active slide index
  };

  return (
    <div className="slider-container">
      <Slider {...settings}  ref={(slider) => {
              sliderRef = slider;
            }}>
        <div className="carousel-bg1">
          <div className="carousel-container">
            <div className="carousel-info">
              <p className='font-semibold'>// Ремонт автомобилей //</p>
              <h1 className='font-bold'>Avtomobilni bo'lib-bo'lib ta'mirlash</h1>
              <button>BATAFSIL MA'LUMOT OLING ➡️</button>
            </div>
            <img
              className={`carousel-img ${slideIndex === 0 ? "animate__animated animate__zoomIn" : ""} relative right-10 `}
              src={carousel1}
              alt="carousel"
            />
          </div>
        </div>

        <div className="carousel-bg2">
          <div className="carousel-container">
            <div className="carousel-info">
              <p>// Ремонт автомобилей //</p>
              <h1 className='font-bold'>Eng sifatli avtomobil ehtiyot qismlari</h1>
              <button>BATAFSIL MA'LUMOT OLING ➡️</button>
            </div>
            <img
              className={`carousel-img ${slideIndex === 1 ? "animate__animated animate__zoomIn" : ""} relative right-10`}
              src={carousel2}
              alt="carouse2"
            />
          </div>
        </div>

        <div className="carousel-bg3">
          <div className="carousel-container">
            <div className="carousel-info">
              <p>// Ремонт автомобилей //</p>
              <h1 className='text-4xl font-bold '>Yo'l bo'ylab yordam</h1>
              <button >BATAFSIL MA'LUMOT OLING ➡️</button>
            </div>
            <img
              className={`carousel-img ${slideIndex === 2 ? "animate__animated animate__zoomIn" : ""} translate-x-40`}
              src={carousel1}
              alt="carouse3"
            />
          </div>
        </div>
      </Slider>
      <div className="previos text-white" onClick={previous}>{"<"}</div>
      <div className="next text-white" onClick={next}>{">"}</div>
    </div>
  );
}

export default Carousel;
