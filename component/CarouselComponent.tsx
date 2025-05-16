import React from 'react';
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//slider
const settings = {
    dots: true,
    draggable: true,
    autoplay: true,
    infinite: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    appendDots: (dots:any) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
}; 
 //
 const slides = [
  {
    id: "https://www.w3schools.com/howto/img_woods_wide.jpg",
    value: "img_woods_wide.jpg"
  },
  {
    id: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
    value: "img_5terre_wide.jpg"
  },
  {
    id: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    value: "img_mountains_wide.jpg"
  },
  {
    id: "https://www.w3schools.com/howto/img_lights_wide.jpg",
    value: "img_lights_wide.jpg"
  },
  {
    id: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    value: "img_nature_wide.jpg"
  },
  {
    id: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    value: "img_snow_wide.jpg"
  },
];

const CarouselComponent = () => {
  return (
    <section id="slider-wrapper" className='h-[450px]'>
        <Slider {...settings}>
           {slides.map((slide, index) => (
            <img src={slide.id} className="h-[450px] w-full" alt={slide.value} />
        ))}
        </Slider>
    </section>
 
  )
}

export default CarouselComponent