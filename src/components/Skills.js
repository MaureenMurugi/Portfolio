import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dashboard from '../assets/img/dashboard.png';
import coffeecafe from '../assets/img/coffeeface.png';
import metre from '../assets/img/meter1.svg';
import pitch from '../assets/img/pitch.png';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";


import colorSharp from '../assets/img/color-sharp.png';

export const Skills =() => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>From my Education background,internships, here are some of the skills that I have acqquired</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"/>
                                <h5>Web development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"/>
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"/>
                                <h5>Pitch/Presentation</h5>
                            </div>
                            <div className="item">
                                <img src={metre} alt="Image"/>
                                <h5>Web Design</h5>
                            </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
      )

}