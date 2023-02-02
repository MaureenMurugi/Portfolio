import { Container,Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
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
                                        <p>{project.title}</p>
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
        </section>

    )
}