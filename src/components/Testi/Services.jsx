import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./_testi.scss";

export default class Testimonials extends Component {
  render() {
    return (
      <div className='testimonial'>
        <h2 className="testimonial__title title" id="testimonial">Testimonials</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3100}
      >
        <div>
          {/* <img src="/images/adarsh.png" /> */}
          <div className="myCarousel">
            <h3>Adarsh Kumar (Batch 22)</h3>
            <h4>student</h4>
            <p>
            From an below average boy to getting 91 in physics, sir guided me wherever needed. Either it be extra classes or virtual doubt solving. Sir made my career.
            </p>
          </div>
        </div>

        <div>
          {/* <img src="/images/alvin.png" /> */}
          <div className="myCarousel">
            <h3>Alvin Albert Michael (Batch 22)</h3>
            <h4>Student</h4>
            <p>
            Fascinated by his teaching, he made physics soo easy for me. always helping in my journey
            </p>
          </div>
        </div>

        <div>
          {/* <img src="/images/jatin.png" /> */}
          <div className="myCarousel">
            <h3>Divyanshu Kumar (Batch 22)</h3>
            <h4>student</h4>
            <p>
            As a slow learner I always needed extra from my teachers, and sir was always there for me. he gives individual attention to each student
            </p>
          </div>
        </div>
        <div>
          {/* <img src="/images/jatin.png" /> */}
          <div className="myCarousel">
            <h3>Aayush Kumar (Batch 22)</h3>
            <h4>student</h4>
            <p>
            Joined in class 12.I was so frustrated after taking science stream. But his way of teaching changed the situation and my grades too
            </p>
          </div>
        </div>
      </Carousel>
      </div>
    );
  }
}
