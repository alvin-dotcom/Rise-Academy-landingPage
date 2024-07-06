import { useEffect, useRef, useState } from 'react' 
import SplitText from '../../utils/Split3.min'
import { gsap } from 'gsap' 
import useOnScreen from '../../hooks/useOnScreen' 
import cn from "classnames"

import './_about.scss'

const About = () => {

    const ref = useRef(null) 

    const [reveal, setReveal] = useState(false) 
    const onScreen = useOnScreen(ref) 

    useEffect(() => {
        if (onScreen) setReveal(onScreen) 
    }, [onScreen]) 


    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#aboutText", {
            type: "lines",
            }) 
        
            gsap.from(split.lines, {
            duration: 1,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.out",
            }) 
        }
    }, [reveal]) 

    return (  
        <div className="about" id="about">
            <div className="container">
                <h2 className="about__title title">ABOUT US</h2>
                <p ref={ref} className={cn("about__text", { "is-reveal": reveal })} id="aboutText">
                A renowned institute, exploring vast world of physics. A place where you get an understanding of science behind every day to day chores. Here you'll get answers to all the questions arises in your mind related to subject , the answer which you won't get from your schools. Get indulged in this glorious journey of physics with us. Not only learn the subject but know the subject, because. <span className="bold-text">FEEL H TABHI PHYSICS H</span>
                </p>
                
            </div>
        </div>
    ) 
}
 
export default About 