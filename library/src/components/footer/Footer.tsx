import './Footer.css';
import fb from '../../shared/assets/fb.svg';
import ig from '../../shared/assets/ig.svg';
import tw from '../../shared/assets/tw.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-data">
                        <div className="footer-contacts">
                            <p className="footer-address">286 Cadman Plaza, New York, NY 11238, United States</p>
                            <div className="footer-icons">
                                <img className="footer-social" alt="instagram" src={ig}/>
                                <img className="footer-social" alt="twitter" src={tw}/>
                                <img className="footer-social" alt="facebook" src={fb}/>
                            </div>
                        </div>
                        <div className="footer-hours">
                            <p className="footer-weekdays">Mon - Fri
                            <br/>
                            08:00 am - 07:00 pm</p>
                            <p className="footer-weekends">Sat - Sun
                            <br/>
                            10:00 am - 06:00 pm</p>
                        </div>
                    </div>
                    <hr className="footer-line"></hr>
                    <div className="footer-rss">
                        <p className="footer-year">2024</p>
                        <a href="https://rs.school">The Rolling Scopes School</a>
                        <p className="footer-username">Julia Kocur</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
