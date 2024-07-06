import { useState, useRef } from "react";
import cn from "classnames"
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import './_nav.scss'



const Navbar = () => {

    const { scroll } = useLocomotiveScroll()

    const [menuOpen, setMenuOpen] = useState(false)

    const navbarRef = useRef(null)

    const listItem = [
        {
            text: 'About us',
            section: '#about'
        }, 
        {
            text: 'Achivements',
            section: '#achivements'
        }, 
        {
            text: 'Testimonials',
            section: '#services'
        },
        {
            text: 'Our Offerings',
            section: '#price'
        },
        {
            text: 'Contacts',
            section: '#contacts'
        },
    ]

    const handleClickList = (section) => {
        if (scroll) {
            scroll.scrollTo(section, { offset: -navbarRef.current.clientHeight })
            setMenuOpen(false)
        }
    }

    const listItemMarkup = listItem.map((item) => {
            return (
                <li className="list-item" key={item.text} onClick={() => {handleClickList(item.section)}}>{item.text}</li>
            )
    })



    return (  
        <div className="header__nav" id="navbar" ref={navbarRef} data-scroll data-scroll-sticky data-scroll-target="#main-container">
            <div className="container">
                <div className="nav__row">  
                    <ul className={cn("menu__list", { "menu__list--active": menuOpen })}>
                        {listItemMarkup}
                    </ul>            
                    <button className={cn("burger", { "burger--active": menuOpen })} onClick={() => {setMenuOpen(!menuOpen)}}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <div className="header__phone"><a href="tel:8468065608">Enquire Now</a></div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;