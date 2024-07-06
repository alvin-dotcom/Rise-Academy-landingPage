import { useEffect, useState } from 'react' 
import SplitText from '../../utils/Split3.min'
import { gsap } from 'gsap' 
import cn from "classnames"

import './_main.scss'

const Main = () => {

    const [reveal, setReveal] = useState(false) 

    useEffect(() => {
        setReveal(true) 
    }, []) 


    useEffect(() => {
        const split = new SplitText("#header-title", {
          type: "lines",
          linesClass: "lineChildren",
        }) 
        
        // const splitParent = new SplitText("#header-title", {
        //   type: "lines",
        //   linesClass: "lineParent",
        // }) 

        let lines = gsap.utils.toArray(".anim") 

        gsap.to(split.lines, {
          duration: 1.2,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }) 

        gsap.to(lines, {
            duration: 1.2,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.5
            }) 


    }, []) 

    return (  
        <div className="container">
            <div className="header__wrapper">
                <div className="header__content">
                    <h1 className="header__title title" id="header-title">RISE ACADEMY</h1>
                    <p className="header__subtitle anim">An Excellency in <span className="mixed-second">Physics</span> serving you from last decade</p>
                    <div className="header__btns btns anim" >
                        <a href="tel:8468065608" className="btn-call">Call us</a>
                        <a href="mailto:" target="_blank" rel="noopener noreferrer" className="btn-email">E-mail us</a>
                    </div>
                    <p className="header__text anim">Adarsh nagar new colony near MJK north gate</p>
                </div>
                <img className={cn("header__img", { "is-reveal": reveal })} src={require("../../img/header-img.jpg")} alt="street of Texas"/>
            </div>
        </div>
    ) 
}
 
export default Main 