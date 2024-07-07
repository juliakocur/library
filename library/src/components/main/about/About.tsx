import './About.css';
import image1 from '../../../shared/assets/slider/image1.png';
import image2 from '../../../shared/assets/slider/image2.png';
import image3 from '../../../shared/assets/slider/image3.png';

const About = () => {
    return (
        <section className="about">
            <h2 className="section-header">About</h2>
            <p className="about-text">The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside</p>
            <div className="about-slider">
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
                <img src={image3} alt="image3" />
            </div>
            <div className="pagination">
                <div className="pagination-wrapper">
                    <div className="pagination-button"></div>
                </div>
                <div className="pagination-wrapper">
                    <div className="pagination-button"></div>
                </div>
                <div className="pagination-wrapper">
                    <div className="pagination-button"></div>
                </div>
            </div>
        </section>
    )
}

export default About;
