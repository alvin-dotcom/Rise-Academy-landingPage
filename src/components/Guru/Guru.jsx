import { useEffect, useRef, useState } from "react";
import SplitText from "../../utils/Split3.min";
import { gsap } from "gsap";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

import "./_guru.scss";

const Team = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(text1);
  const [reveal2, setReveal2] = useState(false);
  const onScreen2 = useOnScreen(text2);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (onScreen2) setReveal2(onScreen2);
  }, [onScreen2]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#team-info__text", {
        type: "lines",
      });

      gsap.from(split.lines, {
        duration: 1,
        y: -20,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out",
      });
    }
  }, [reveal]);

  useEffect(() => {
    if (reveal2) {
      const split2 = new SplitText("#team-info__text2", {
        type: "lines",
      });

      gsap.from(split2.lines, {
        duration: 1,
        y: -20,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out",
      });
    }
  }, [reveal2]);

  return (
    <div className="team">
      <div className="container">
        <div className="team__wrapper">
          <div className="title__position">
            <h2 className="team__title title">GURUJI</h2>
          </div>
        </div>
        <div className={cn("team__info", { "is-reveal": reveal })}>
          <img
            className="team-info__img"
            src={require("../../img/sir.jpg")}
            alt="doctors"
          />
          <p ref={text1} className="team-info__text" id="team-info__text">{" "}
            <span className="mixed-second">"Man of honour"</span> Spreading his
            wisdom from 8+ years. A man who knows what he is doing, great
            experience in teaching. His Knowledge + his methodology = best
            fusion ever. He takes interactive classes that makes a thrilling
            teaching-learning process. With regular dosage of motivations and
            his inspiring experiences. You'll enjoy his guidance.{" "}
          </p>
        </div>
        <p className="team__text">
          For any query call us today at{" "}
          <span className="mixed-second">8468065608</span>
        </p>
        <div className="team__btns btns">
          <a href="tel:8468065608" className="btn-call">
            Call us
          </a>
          <a
            href="mailto:"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-email"
          >
            E-mail us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
