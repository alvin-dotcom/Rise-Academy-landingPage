import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './_testi.scss'

const Services = () => {
    const settings = {
      dots: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    return (
      <div>
        <h2 className="contacts__title title" id="services">Testimonials</h2>
        <Slider {...settings}>
          <div>
            <h3>FIRST SLIDE</h3>
          </div>
          <div>
            <h3>SECOND SLIDE</h3>
          </div>
          <div>
            <h3>THIRD SLIDE</h3>
          </div>
          <div>
            <h3>FORTH SLIDE</h3>
          </div>
        </Slider>
      </div>
    );
  };

export default Services