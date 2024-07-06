import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './_achivements.scss'

const Achivements = () => {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    return (
      <div className='achivement'>
        <h2 className="achivement__title title" id="achivements">Achivements</h2>
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

export default Achivements