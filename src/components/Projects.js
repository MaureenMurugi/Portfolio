import { Container,Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import dashboard from '../assets/img/dashboard.png';
import coffeecafe from '../assets/img/coffeeface.png';
import myhealth from '../assets/img/myhealth.png';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

    const projects = [
        {
            title: "Bus Transit Services",
            description: "Design & Development",
            imgUrl: dashboard,
          },
          {
            title: "CoffeeCafe",
            description: "Design & Development",
            imgUrl: coffeecafe,
          },
          {
            title: "Health",
            description: "Design & Development",
            imgUrl: myhealth,
          },
        
]

    return (
        <section className="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are a few of the projects I have worked on.</p>
                    <Tab.Container id="projects-tab" defaultActiveKey='first'>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='first'>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard 
                                        key={index}
                                        {...project}/>
                                    )
                            })}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>Coffee Cafe</Tab.Pane>
                    <Tab.Pane eventKey='third'>Dashboard</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                   
                    </Col>
                </Row>

            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>

    )
}