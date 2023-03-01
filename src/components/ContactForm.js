import { useState } from "react"
import { Container,Row, Col } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"

function ContactForm () {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    });
    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    }

    const [buttonText, setButtonText] = useState("Send")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:4000/contact", {
          method:"POST",
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(formData)
        })
        setButtonText("Send");
      }



    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact-img" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formData.firstname} placeholder="First Name" onChange={handleChange} required></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formData.lastname} placeholder="Last Name" onChange={handleChange} required></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formData.email} placeholder="Email" onChange={handleChange} required></input>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formData.phone} placeholder="PhoneNumber" onChange={handleChange} required></input>
                                </Col>
                                <Col>
                                <textarea rows='6' value={formData.message} placeholder="Your message" onChange={handleChange} required></textarea>
                                <button onClick={handleSubmit} type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {/* {
                                    status.message && 
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                } */}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default ContactForm