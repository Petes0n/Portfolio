import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from './ProjectCard'
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Admin Dashboard"
              description="An admin dashboard built to monitor a jewelry sales and income with each user assigned with a specific role with different levels of access.It was developed  with React and Material UI"
              ghLink="https://github.com/Petes0n/React-Admin-dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ecommerce Website"
              description="An ecommerce website developed with Laravel. It was built with the user in mind and can handle vast amount of data on the web"
              ghLink="https://bitbucket.org/ecom-23/workspace/overview/"
             
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
