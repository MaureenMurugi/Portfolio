import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/Murugi.jpg'



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)

        return () => {
            clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hey, I'm Murugi`} <span className="wrap">{text}</span></h1>
                        <p>I am a student of tech, over the years since high school, I loved solving project challenges using Microsoft Office when I joined campus I learned mobile development and participated in Technovation Challenge with women in Tech, and teamed with high schoolers in STEM to build sustainable applications. Hence, the student of tech, there is still so much to learn from interacting with great teams and amazing solutions built on technology.
                            I look forward to working with amazing teams across the world, blending in with ideas, learn from one another as I build mastery for web development in building sustainable solutions.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header Img'></img>
                         </Col>
                </Row>
            </Container>
             </section>
    )
}