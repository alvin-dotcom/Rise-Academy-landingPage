import { useEffect, useRef, useState } from 'react' 
import { gsap } from 'gsap' 
import useOnScreen from '../../hooks/useOnScreen' 
import cn from "classnames"

import './_contacts.scss'

const Contacts = () => {

    const ref = useRef(null) 

    const [reveal, setReveal] = useState(false) 
    const onScreen = useOnScreen(ref) 

    useEffect(() => {
        if (onScreen) setReveal(onScreen) 
    }, [onScreen]) 


    useEffect(() => {
        if (reveal) {
            let lines = gsap.utils.toArray(".contacts__text") 
        
            gsap.from(lines, {
            duration: 1,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.out",
            }) 
        }
    }, [reveal]) 

    return (  
        <div className="contacts" id='contacts'>
            <div className="container">
                <h2 className="contacts__title title">CONTACTS</h2>
                <div className="contacts__wrapper">
                    <div className={cn("contacts__info", { "is-reveal": reveal })} ref={ref}>
                        <p className="contacts__text">8468065608</p>
                        <p className="contacts__text">riseacademy@gmail.com </p>
                        <p className="contacts__text">Adarsh nagar new colony near MJK north gate Bettiah</p>
                        <p className="contacts__text">Office Hours</p>
                        <p className="contacts__text"><span className="mixed-main">Mon-Sat:</span> 9:00am - 5:00pm</p>
                    </div>
                    <div className="contacts__map">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7293478.094589794!2d79.24238620000001!3d26.799574800000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936fd1f0140773%3A0x8663fc7ad0e4b9ae!2sRise%20Academy%20Coaching!5e0!3m2!1sen!2sin!4v1712748276698!5m2!1sen!2sin" className="responsive-iframe" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
 
export default Contacts 