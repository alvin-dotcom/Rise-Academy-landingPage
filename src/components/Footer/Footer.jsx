import './_footer.scss'


const Footer = () => {
    return (  
        <footer className="footer">
        <div className="container">
            <p className="footer__title">RISE ACADEMY - A NEW ERA BEGINS </p>
            <div className="footer__content">
                <div className="content__column">
                    <div className="footer__text"><a href="tel:8306277777">8468065608</a></div>
                    <div className="footer__text"><a href="mailto:.com" target="_blank" rel="noopener noreferrer">riseacademy@gmail.com </a></div>
                    <div className="footer__text"><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7293478.094589794!2d79.24238620000001!3d26.799574800000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936fd1f0140773%3A0x8663fc7ad0e4b9ae!2sRise%20Academy%20Coaching!5e0!3m2!1sen!2sin!4v1712748276698!5m2!1sen!2sin" target="_blank" rel="noopener noreferrer">Adarsh nagar new colony near MJK north gate</a></div>
                </div>
                <div className="content__column">
                    <p className="footer__text">Office Hours</p>
                    <p className="footer__text"><span className="mixed-main">Mon-Sat:</span> 9:00am - 5:00pm</p>
                </div>
            </div>
        </div>
    </footer>
    ) 
}
 
export default Footer 