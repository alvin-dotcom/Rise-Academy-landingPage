// Marquee.js
import React from 'react';
import Marquee from 'react-fast-marquee';
import "./_achivements.scss";


const MarqueeComponent = () => {
  return (
    <div className="marquee-container">
      <Marquee gradient={false}>
        <span className="marquee-text">Our students in top 10 for 4 consecutive years (CBSE).</span>
        <span className="marquee-text">Selections in top Engineering colleges accross India.
        </span>
        <span className="marquee-text">38 students got 90+ marks in physics (BSEB).</span>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
