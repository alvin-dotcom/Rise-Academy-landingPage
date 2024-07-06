import { useRef } from "react"
import useOnScreen from "../../hooks/useOnScreen" 
import cn from "classnames" 

import "./_gallery.scss" 

const GalleryItem = ({ src, title, text}) => {

    const ref = useRef(null) 

    const onScreen = useOnScreen(ref, 0.5) 
    

    return (
        <div className={cn("services__info", { "is-reveal": onScreen })} ref={ref}>
            <div className="services-info__img" style={{backgroundImage: `url(${src})` }}>
                <h3 className="services-info__title">{title}</h3>
            </div>   
            <p className="services-info__text">{text}</p>
        </div>
    ) 
}
 
export default GalleryItem;