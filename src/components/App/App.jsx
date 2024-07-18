import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Note from '../Note/Note' 
import About from '../About/About' 
import Guru from '../Guru/Guru' 
import Rise from '../Rise/Rise' 
import Sucess from '../Sucess/Sucess' 
import Offering from '../Offering/Offering' 
import Info from '../Info/Info'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'
import Achivements from '../Achivements/Achivements'
import Testi from '../Testi/Services'

import { useRef } from 'react'

import ScrollTriggerProxy from '../../utils/ScrollTriggerProxy'

import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

import './_reset.scss'
import './_base.scss'




const App = () => {

    const containerRef = useRef(null);


    return (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
            <div
            className="main-container"
            id="main-container"
            data-scroll-container
            ref={containerRef}
            >
              <ScrollTriggerProxy />
                <Navbar />
                <Main/>
                <Note/>
                <Achivements/>
                <About/>
                
                <Guru/>
                <Rise/>
                <Testi/>
                <Sucess/>
                <Offering/>
                <Info/>
                <Contacts/>
                <Footer/>
                
            </div>
        </LocomotiveScrollProvider>
    )
}
 
export default App


